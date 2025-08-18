/* global Chart */
// ===================== helpers =====================
async function jget(url){
  const r = await fetch(url, {credentials:"same-origin"});
  const text = await r.text();
  let data = {};
  try{ data = text ? JSON.parse(text) : {}; }catch{ data = {raw:text}; }
  if(!r.ok){ throw new Error(data.error || data.message || text || "Request failed"); }
  return data;
}
async function jpost(url){
  const r = await fetch(url, {method:"POST", credentials:"same-origin"});
  const text = await r.text();
  let data = {};
  try{ data = text ? JSON.parse(text) : {}; }catch{ data = {raw:text}; }
  return data;
}
function fmtNum(n){
  if(n == null) return "—";
  try{ return Number(n).toLocaleString(undefined,{maximumFractionDigits:2}); }
  catch(_){ return n; }
}
function showError(msg){
  const bar = document.getElementById("errorBar");
  if(!bar) return;
  bar.style.display = "block";
  bar.textContent = msg;
  setTimeout(()=>{ bar.style.display="none"; }, 6000);
}
function setText(id, val){ const el = document.getElementById(id); if(el) el.textContent = val; }
function toISODate(d){
  const dt = (d instanceof Date) ? d : new Date(d);
  const y = dt.getFullYear(), m = String(dt.getMonth()+1).padStart(2,'0'), day = String(dt.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function downloadCSV(filename, rows, headers){
  const head = headers.join(",");
  const body = rows.map(r => headers.map(h => {
    const v = r[h];
    if(v == null) return "";
    const s = String(v).replace(/"/g,'""');
    return /[",\n]/.test(s) ? `"${s}"` : s;
  }).join(",")).join("\n");
  const blob = new Blob([head+"\n"+body], {type:"text/csv;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

// ---- time helpers (Tehran) ----
function fmtTehranFromUTC(utcIso){
  if(!utcIso) return "—";
  try{
    const d = new Date(utcIso);
    if(isNaN(d)) return "—";
    const dtf = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Tehran',
      year: 'numeric', month:'2-digit', day:'2-digit',
      hour:'2-digit', minute:'2-digit', hour12:false
    });
    const parts = dtf.formatToParts(d).reduce((o,p)=> (o[p.type]=p.value, o), {});
    return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}`;
  }catch(_){
    return "—";
  }
}

// ===================== Theme =====================
const Theme = (() => {
  const root = document.documentElement;
  const mql = window.matchMedia?.("(prefers-color-scheme: dark)");
  function apply(mode){
    if(mode === "auto"){
      root.dataset.theme = (mql && mql.matches) ? "dark" : "light";
    }else{
      root.dataset.theme = mode;
    }
    localStorage.setItem("theme_mode", mode);
    updateButtonLabel();
  }
  function updateButtonLabel(){
    const btn = document.getElementById("themeToggle");
    if(!btn) return;
    const mode = localStorage.getItem("theme_mode") || "auto";
    const current = root.dataset.theme;
    btn.textContent = mode === "auto" ? "🌓" : (current === "dark" ? "🌙" : "☀️");
    btn.title = `Theme: ${mode} (${current})`;
  }
  function cycle(){
    const mode = localStorage.getItem("theme_mode") || "auto";
    const next = mode === "auto" ? "dark" : (mode === "dark" ? "light" : "auto");
    apply(next);
  }
  function init(){
    const saved = localStorage.getItem("theme_mode") || "auto";
    apply(saved);
    mql?.addEventListener("change", ()=>{ if((localStorage.getItem("theme_mode")||"auto")==="auto"){ apply("auto"); }});
    document.getElementById("themeToggle")?.addEventListener("click", cycle);
  }
  return { init, apply, cycle };
})();

// ===================== Snapshot =====================
async function loadSnapshot(){
  try{
    const d = await jget("/api/latest");
    setText("cuVal", fmtNum(d.cu_spot_ask));
    setText("alVal", fmtNum(d.al_spot_ask));
    setText("znVal", fmtNum(d.zn_spot_ask));
    setText("lastUTC", d.utc_iso || "—");
    setText("lastServer", d.server_local_iso || "—");
    setText("lastTehran", d.tehran_iso || "—");
    setText("lastJalali", d.jalali || "—");
  }catch(e){ /* ignore */ }
}

// ===================== Spot history (latest 20) =====================
const HIST_PAGE_SIZE = 20;
let histAll = []; let histPage = 1;

function normalizeTick(r){
  return {
    utc_iso: r.utc_iso || r.utc || r.ts || r.timestamp || r.timestamp_utc || null,
    server_local_iso: r.server_local_iso || r.server || null,
    tehran_iso: r.tehran_iso || r.tehran || null,
    jalali: r.jalali || r.jalali_date || "",
    cu_spot_ask: r.cu_spot_ask ?? r.cu ?? null,
    al_spot_ask: r.al_spot_ask ?? r.al ?? null,
    zn_spot_ask: r.zn_spot_ask ?? r.zn ?? null,
  };
}
async function loadHistory(){
  try{
    const raw = await jget("/api/history?limit=500");
    const rows = Array.isArray(raw) ? raw : (raw?.rows || raw?.data || []);
    histAll = rows.map(normalizeTick).filter(r => r.utc_iso);
    histPage = 1;
    renderHistTable();
  }catch(e){ /* ignore */ }
}
function renderHistTable(){
  const tb = document.getElementById("histBody");
  const pages = Math.max(1, Math.ceil(histAll.length / HIST_PAGE_SIZE));
  if(histPage > pages) histPage = pages;
  const startIdx = (histPage-1)*HIST_PAGE_SIZE;
  const slice = histAll.slice(startIdx, startIdx+HIST_PAGE_SIZE);

  if(tb){
    tb.innerHTML = slice.map(r=>`
      <tr>
        <td>${r.utc_iso ?? "—"}</td>
        <td>${r.server_local_iso ?? "—"}</td>
        <td>${r.tehran_iso ?? "—"}</td>
        <td>${r.jalali ?? "—"}</td>
        <td>${fmtNum(r.cu_spot_ask)}</td>
        <td>${fmtNum(r.al_spot_ask)}</td>
        <td>${fmtNum(r.zn_spot_ask)}</td>
      </tr>`).join("") || `<tr><td colspan="7" class="muted">No rows</td></tr>`;
  }
  const info = document.getElementById("histPageInfo");
  const prev = document.getElementById("histPrev");
  const next = document.getElementById("histNext");
  if(info) info.textContent = `${histPage}/${pages}`;
  if(prev) prev.disabled = histPage<=1;
  if(next) next.disabled = histPage>=pages;
}
function bindHistUI(){
  document.getElementById("histPrev")?.addEventListener("click", ()=>{ histPage=Math.max(1, histPage-1); renderHistTable(); });
  document.getElementById("histNext")?.addEventListener("click", ()=>{ histPage=histPage+1; renderHistTable(); });
  document.getElementById("histCsv")?.addEventListener("click", ()=>{
    const headers = ["utc_iso","server_local_iso","tehran_iso","jalali","cu_spot_ask","al_spot_ask","zn_spot_ask"];
    downloadCSV(`spot_history_${toISODate(new Date())}.csv`, histAll, headers);
  });
}

// ===================== charts (daily from log) =====================
let chartCu, chartAl, chartZn, currentTF = "1h";
const CLOSES_LOG_ENDPOINT = "/api/close-history-log?limit=400";
let closeAll = []; // newest first (by fetched time)
let sparkCu, sparkAl, sparkZn;
const CLOSE_PAGE_SIZE = 10;
let closePage = 1;

function mapLogRow(r){
  return {
    id: r.id,
    fetched_at_utc: r.fetched_at_utc || "",
    fetched_tehran: fmtTehranFromUTC(r.fetched_at_utc || ""),
    date_iso: r.date_iso || "",
    date_dmy: r.date_dmy || "",
    cu: r.copper_close ?? null,
    al: r.alum_close ?? null,
    zn: r.zinc_close ?? null
  };
}

async function ensureCloseLogLoaded(){
  if(closeAll.length) return;
  const raw = await jget(CLOSES_LOG_ENDPOINT);
  const rows = (raw && Array.isArray(raw.history)) ? raw.history : [];
  // newest first by fetched time (fallback id)
  closeAll = rows.map(mapLogRow).sort((a,b)=>{
    const ta = Date.parse(a.fetched_at_utc||""); const tb = Date.parse(b.fetched_at_utc||"");
    if(!isNaN(tb-ta)) return tb-ta;
    return (b.id||0)-(a.id||0);
  });
}

function getDailySeriesFromLog(){
  // Use latest-per-date from closeAll (dedupe by date_iso), then sort by date ascending
  const perDate = new Map();
  for(const r of closeAll){
    const k = r.date_iso || r.date_dmy;
    if(k && !perDate.has(k)) perDate.set(k, r);
  }
  const datesAsc = Array.from(perDate.keys()).sort((a,b)=> new Date(a) - new Date(b));
  const labels = datesAsc;
  const cu = datesAsc.map(k => perDate.get(k).cu);
  const al = datesAsc.map(k => perDate.get(k).al);
  const zn = datesAsc.map(k => perDate.get(k).zn);
  return { labels, cu, al, zn };
}

async function loadCharts(tf="1h"){
  if(tf === "1d"){
    await ensureCloseLogLoaded();
    const series = getDailySeriesFromLog();
    currentTF = "1d";
    renderLine("chartCu", chartCu, "CU", series.labels, series.cu, (c)=> chartCu=c);
    renderLine("chartAl", chartAl, "AL", series.labels, series.al, (c)=> chartAl=c);
    renderLine("chartZn", chartZn, "ZN", series.labels, series.zn, (c)=> chartZn=c);
  }else{
    const data = await jget(`/api/chart?tf=${tf}`);
    currentTF = data.tf || tf;
    const labels = data.points.map(p => p.jalali || p.tehran_iso || p.utc_iso || p.ts_utc);
    const cu = data.points.map(p => p.cu);
    const al = data.points.map(p => p.al);
    const zn = data.points.map(p => p.zn);
    renderLine("chartCu", chartCu, "CU", labels, cu, (c)=> chartCu=c);
    renderLine("chartAl", chartAl, "AL", labels, al, (c)=> chartAl=c);
    renderLine("chartZn", chartZn, "ZN", labels, zn, (c)=> chartZn=c);
  }
  document.querySelectorAll(".tab").forEach(t=>{
    t.classList.toggle("active", t.dataset.tf === currentTF);
  });
}
function renderLine(canvasId, existing, label, labels, series, saveRef){
  const cv = document.getElementById(canvasId);
  if(!cv) return;
  const ctx = cv.getContext("2d");
  if(existing){ existing.destroy(); }
  const c = new Chart(ctx, {
    type: 'line',
    data: { labels, datasets: [{ label, data: series, tension: .25, borderWidth: 2, pointRadius: 0 }]},
    options: {
      responsive: true, maintainAspectRatio: false,
      scales: { x: { ticks: { autoSkip:true, maxTicksLimit: 8 } }, y: { beginAtZero: false } },
      plugins: { legend: { display: false }, tooltip: { mode:'index', intersect:false }, decimation:{enabled:true} }
    }
  });
  saveRef(c);
}
function bindChartUI(){
  document.querySelectorAll(".tab").forEach(t=>{
    t.addEventListener("click", ()=> loadCharts(t.dataset.tf));
  });
  // Swipe gestures
  const grid = document.getElementById("chartsGrid");
  if(!grid) return;
  let startX=0, startY=0, swiping=false;
  grid.addEventListener("touchstart", (e)=>{ const t=e.touches[0]; startX=t.clientX; startY=t.clientY; swiping=true; }, {passive:true});
  grid.addEventListener("touchmove", (e)=>{ if(!swiping) return; const t=e.touches[0]; if(Math.abs(t.clientY-startY) > 60) swiping=false; }, {passive:true});
  grid.addEventListener("touchend", (e)=>{
    if(!swiping) return;
    const t=(e.changedTouches||[])[0]; const dx = t.clientX - startX;
    const order = ["1h","4h","1d"];
    let idx = order.indexOf(currentTF); if(idx<0) idx=0;
    if(dx < -40 && idx < order.length-1){ loadCharts(order[idx+1]); }
    else if(dx > 40 && idx > 0){ loadCharts(order[idx-1]); }
    swiping=false;
  });
}

// ===================== scheduler =====================
async function loadNextRun(){
  try{
    const r = await jget("/api/next-run");
    setText("nextRun", r.next_run || "—");
    if(r.next_run){
      const intervalMin = Number(document.querySelector(".scheduler")?.dataset?.intervalMin || 60);
      startCountdown(new Date(r.next_run), intervalMin);
    }
  }catch(e){}
}
function startCountdown(when, intervalMin){
  const label = document.getElementById("countdown");
  const bar = document.getElementById("progBar");
  const pctLabel = document.getElementById("progPct");

  const totalMs = Math.max(1, (intervalMin||60) * 60 * 1000);
  const periodStart = new Date(when.getTime() - totalMs);

  function tick(){
    const now = new Date();
    const remaining = when - now;
    if(label){
      if(remaining <= 0){ label.textContent = "due"; }
      else{
        const s = Math.floor(remaining/1000)%60;
        const m = Math.floor(remaining/60000)%60;
        const h = Math.floor(remaining/3600000);
        label.textContent = `${h}h ${m}m ${s}s`;
      }
    }
    const elapsed = Math.max(0, now - periodStart);
    const pct = Math.max(0, Math.min(100, (elapsed/totalMs)*100));
    if(bar){ bar.style.width = pct.toFixed(1) + "%"; }
    if(pctLabel){ pctLabel.textContent = pct.toFixed(0) + "%"; }
  }
  tick(); setInterval(tick, 1000);
}

// ===================== Close prices (LOG endpoint) =====================
async function loadCloseHistory(){
  try{
    await ensureCloseLogLoaded();
    closePage = 1;

    // Top cards use most recent log record
    const latest = closeAll[0];
    const isFA = (window.APP_LANG === 'fa');
    const sub = document.getElementById("closeSubtitle");
    if(latest){
      setText("alClose", fmtNum(latest.al)); setText("alCloseDate", latest.date_iso || latest.date_dmy || "—");
      setText("cuClose", fmtNum(latest.cu)); setText("cuCloseDate", latest.date_iso || latest.date_dmy || "—");
      setText("znClose", fmtNum(latest.zn)); setText("znCloseDate", latest.date_iso || latest.date_dmy || "—");
      if(sub){
        sub.textContent = isFA
          ? `بر اساس آخرین ثبت لاگ — ${latest.fetched_at_utc}`
          : `From latest log — ${latest.fetched_at_utc}`;
      }
    }else{
      setText("alClose","—"); setText("alCloseDate","—");
      setText("cuClose","—"); setText("cuCloseDate","—");
      setText("znClose","—"); setText("znCloseDate","—");
      if(sub){ sub.textContent = isFA ? "بدون داده" : "No data"; }
    }

    // Sparklines from per-day latest
    const perDate = new Map();
    for(const r of closeAll){ const k=r.date_iso||r.date_dmy; if(k && !perDate.has(k)) perDate.set(k, r); }
    const datesSorted = Array.from(perDate.keys()).sort((a,b)=> new Date(a)-new Date(b));
    const sparkCuData = datesSorted.map(k => perDate.get(k).cu).filter(v=>v!=null);
    const sparkAlData = datesSorted.map(k => perDate.get(k).al).filter(v=>v!=null);
    const sparkZnData = datesSorted.map(k => perDate.get(k).zn).filter(v=>v!=null);
    renderSpark("sparkCu", sparkCu, sparkCuData, (c)=>sparkCu=c);
    renderSpark("sparkAl", sparkAl, sparkAlData, (c)=>sparkAl=c);
    renderSpark("sparkZn", sparkZn, sparkZnData, (c)=>sparkZn=c);

    renderCloseTable();
  }catch(e){
    showError("Failed to load close history");
    const tb = document.getElementById("closeHistBody");
    if(tb) tb.innerHTML = `<tr><td colspan="6" class="muted">No data</td></tr>`;
  }
}
function renderSpark(canvasId, existing, values, saveRef){
  const cv = document.getElementById(canvasId); if(!cv) return;
  const ctx = cv.getContext("2d");
  if(existing) existing.destroy();
  const data = values.slice(-30);
  const c = new Chart(ctx, {
    type:"line",
    data:{ labels: data.map((_,i)=>i+1), datasets:[{ data, tension:.25, borderWidth:1.5, pointRadius:0 }]},
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{enabled:false} },
      scales:{ x:{ display:false }, y:{ display:false } }
    }
  });
  saveRef(c);
}
function renderCloseTable(){
  const tb = document.getElementById("closeHistBody");
  const pages = Math.max(1, Math.ceil(closeAll.length / CLOSE_PAGE_SIZE));
  if(closePage > pages) closePage = pages;
  const startIdx = (closePage-1)*CLOSE_PAGE_SIZE;
  const slice = closeAll.slice(startIdx, startIdx+CLOSE_PAGE_SIZE);

  if(tb){
    const newestId = closeAll.length ? closeAll[0].id : null;
    tb.innerHTML = slice.map(r=>`
      <tr class="${(r.id===newestId && closePage===1) ? 'row-latest' : ''}">
        <td>${r.fetched_at_utc || "—"}</td>
        <td>${r.fetched_tehran || "—"}</td>
        <td>${r.date_iso || r.date_dmy || "—"}</td>
        <td>${fmtNum(r.cu)}</td>
        <td>${fmtNum(r.al)}</td>
        <td>${fmtNum(r.zn)}</td>
      </tr>
    `).join("") || `<tr><td colspan="6" class="muted">No rows</td></tr>`;
  }
  const info = document.getElementById("closePageInfo");
  const prev = document.getElementById("closePrev");
  const next = document.getElementById("closeNext");
  if(info) info.textContent = `${closePage}/${pages}`;
  if(prev) prev.disabled = closePage<=1;
  if(next) next.disabled = closePage>=pages;
}
function bindCloseUI(){
  const btn = document.getElementById("refreshClose");
  if(btn){
    btn.addEventListener("click", async ()=>{
      const orig = btn.textContent;
      btn.disabled = true; btn.textContent = "…";
      try{
        // Run full fetch-now (saves spot & close & appends to log)
        const r = await jpost("/api/fetch-now");
        if(!r.ok){ showError(r.error || "Refresh failed"); }
        // Update BOTH close widgets and snapshot per your request
        await Promise.all([
          loadSnapshot(),
          (async ()=>{ closeAll = []; await loadCloseHistory(); })()
        ]);
        if(currentTF === "1d"){ await loadCharts("1d"); }
      }catch(e){
        showError(e.message || "Refresh failed");
      }finally{
        btn.disabled = false; btn.textContent = orig;
      }
    });
  }
  document.getElementById("closePrev")?.addEventListener("click", ()=>{ closePage=Math.max(1, closePage-1); renderCloseTable(); });
  document.getElementById("closeNext")?.addEventListener("click", ()=>{ closePage=closePage+1; renderCloseTable(); });
  const exportFn = () => {
    const headers = ["id","fetched_at_utc","date_iso","copper_close","alum_close","zinc_close"];
    const rows = closeAll.map(r=>({
      id:r.id, fetched_at_utc:r.fetched_at_utc, date_iso:r.date_iso,
      copper_close:r.cu, alum_close:r.al, zinc_close:r.zn
    }));
    downloadCSV(`close_log_${toISODate(new Date())}.csv`, rows, headers);
  };
  document.getElementById("closeCsv")?.addEventListener("click", exportFn);
  document.getElementById("closeCsvTop")?.addEventListener("click", exportFn);
}

// ===================== UI bindings =====================
function bindUI(){
  const btn = document.getElementById("fetchNow");
  if(btn){
    btn.addEventListener("click", async ()=>{
      const original = btn.textContent;
      btn.disabled = true; btn.textContent = "…";
      try{
        const r = await jpost("/api/fetch-now");
        if(r.ok){
          await Promise.all([
            loadSnapshot(),
            loadHistory(),
            (async ()=>{ closeAll=[]; await loadCloseHistory(); })()
          ]);
          await loadCharts(currentTF);
          await loadNextRun();
        }else{
          showError(r.error || "Fetch failed");
        }
      }catch(e){
        showError(e.message || "Fetch failed");
      }finally{
        btn.disabled = false; btn.textContent = original;
      }
    });
  }
}

// ===================== boot =====================
document.addEventListener("DOMContentLoaded", async ()=>{
  // iOS: avoid autofocus on load
  if (document.activeElement) { document.activeElement.blur(); }
  Theme.init();

  if(document.getElementById("cuVal")){
    await Promise.all([
      loadSnapshot(),
      loadHistory(),
      loadNextRun(),
      loadCloseHistory()
    ]);
    await loadCharts("1h");
    bindUI();
    bindHistUI();
    bindChartUI();
    bindCloseUI();
  }
});

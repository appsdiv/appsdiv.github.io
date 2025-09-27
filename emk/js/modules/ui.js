export function initThemeSwitcher(){const t=document.getElementById("themeBtn"),e=window.matchMedia("(prefers-color-scheme: dark)").matches,n=localStorage.getItem("emk-theme"),a=e=>{document.documentElement.classList.toggle("dark",e),t&&(t.innerHTML=`<i class="fa-solid ${e?"fa-sun":"fa-moon"}"></i>`);const n=document.querySelector("#themeBtnM");n&&(n.innerHTML=`<i class="fa-solid ${e?"fa-sun":"fa-moon"}"></i> ${e?"روشن":"تیره"}`)},o=()=>{const t=document.documentElement.classList.toggle("dark");localStorage.setItem("emk-theme",t?"dark":"light"),a(t)};n?a("dark"===n):a(e),t?.addEventListener("click",o)}export function initLanguageMenu(){const t=document.getElementById("langMenu");if(!t)return;const e=t.querySelector("[data-menu]"),n=t.querySelector("button"),a=document.getElementById("langIcon"),o=document.getElementById("langLabel"),l={fa:{dir:"rtl",label:"FA",flag:"fi-ir"},en:{dir:"ltr",label:"EN",flag:"fi-us"},tr:{dir:"ltr",label:"TR",flag:"fi-tr"},ar:{dir:"rtl",label:"AR",flag:"fi-ae"}},r=t=>{const e=l[t]||l.fa;document.documentElement.lang=t,document.documentElement.dir=e.dir,a&&(a.className=`fi fis ${e.flag} text-[18px]`),o&&(o.textContent=e.label),localStorage.setItem("emk-lang",t)};n?.addEventListener("click",()=>{const t=e.classList.toggle("hidden");n.setAttribute("aria-expanded",String(!t))}),document.addEventListener("click",t=>{t.target instanceof Node&&!document.getElementById("langMenu")?.contains(t.target)&&(e.classList.add("hidden"),n.setAttribute("aria-expanded","false"))}),document.querySelectorAll("[data-lang]").forEach(t=>{t.addEventListener("click",()=>{r(t.dataset.lang),e?.classList.add("hidden")})}),r(localStorage.getItem("emk-lang")||"fa")}export function initMobileDrawer(){const t=document.createElement("div");t.className="drawer",t.innerHTML=`
      <div class="absolute inset-0 bg-black/45" data-close></div>
      <aside class="panel glass">
        <div class="flex items-center justify-between mb-2">
          <strong>منو</strong>
          <button class="px-3 py-2 rounded-full glass" data-close><i class="fa-solid fa-xmark"></i></button>
        </div>
        <nav class="flex flex-col gap-1">
          <a class="nav-row" href="#products"><i class="fa-solid fa-box-open ms-1"></i> محصولات</a>
          <a class="nav-row" href="#contact"><i class="fa-solid fa-phone-volume ms-1"></i> تماس باما</a>
          <a class="nav-row" href="#about"><i class="fa-solid fa-circle-info ms-1"></i> درباره ما</a>
          <a class="nav-row" href="#certs"><i class="fa-solid fa-award ms-1"></i> گواهینامه‌ها</a>
        </nav>
        <div class="hairline my-2"></div>
        <div class="eyebrow">زبان</div>
        <div class="flex flex-col gap-2" role="group" aria-label="Language">
            <button data-lang="fa" class="flex items-center justify-between px-3 py-2 rounded-xl glass"><span class="flex items-center gap-2"><span class="fi fis fi-ir text-[18px]"></span> فارسی</span><span class="text-xs">FA</span></button>
            <button data-lang="en" class="flex items-center justify-between px-3 py-2 rounded-xl glass"><span class="flex items-center gap-2"><span class="fi fis fi-us text-[18px]"></span> English</span><span class="text-xs">EN</span></button>
            <button data-lang="tr" class="flex items-center justify-between px-3 py-2 rounded-xl glass"><span class="flex items-center gap-2"><span class="fi fis fi-tr text-[18px]"></span> Türkçe</span><span class="text-xs">TR</span></button>
            <button data-lang="ar" class="flex items-center justify-between px-3 py-2 rounded-xl glass"><span class="flex items-center gap-2"><span class="fi fis fi-ae text-[18px]"></span> العربية</span><span class="text-xs">AR</span></button>
        </div>
        <div class="eyebrow mt-3">نمایش</div>
        <div class="flex gap-2">
          <button id="themeBtnM" class="flex-1 px-3 py-2 rounded-full glass"><i class="fa-solid fa-moon"></i> تیره/روشن</button>
        </div>
      </aside>`,document.body.appendChild(t);const e=document.getElementById("menuBtn"),n=()=>t.classList.add("open"),a=()=>t.classList.remove("open");e?.addEventListener("click",n),t.querySelectorAll("[data-close], a.nav-row, [data-lang]").forEach(t=>t.addEventListener("click",a)),t.addEventListener("click",e=>{e.target===t&&a()});const o=t.querySelector("#themeBtnM");o?.addEventListener("click",()=>{const t=document.documentElement.classList.toggle("dark");localStorage.setItem("emk-theme",t?"dark":"light");const e=document.getElementById("themeBtn");e&&(e.innerHTML=`<i class="fa-solid ${t?"fa-sun":"fa-moon"}"></i>`),o.innerHTML=`<i class="fa-solid ${t?"fa-sun":"fa-moon"}"></i> ${t?"روشن":"تیره"}`})}
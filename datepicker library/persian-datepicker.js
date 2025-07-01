// persian-datepicker.js

class PersianDatePicker {
    // A static property to ensure the modal is created only once on the page
    static modalCreated = false;

    // The constructor is called when you create a new instance (e.g., new PersianDatePicker('#my-input'))
    constructor(selector) {
        this.inputElement = document.querySelector(selector);
        if (!this.inputElement) {
            console.error(`PersianDatePicker Error: Element with selector "${selector}" not found.`);
            return;
        }

        this.inputElement.setAttribute('readonly', true);
        this.today = this.#toJalali(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());

        // Create the modal only if it doesn't already exist
        if (!PersianDatePicker.modalCreated) {
            this.#createDatePickerModal();
            PersianDatePicker.modalCreated = true;
        }

        this.modal = document.getElementById("datePickerModal");
        
        this.#initializePickers();
        this.#setupEventListeners();
    }

    // --- Private Helper Methods ---

    #toJalali(gy, gm, gd) {
        const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        const gy2 = (gm > 2) ? (gy + 1) : gy;
        let days = 355666 + (365 * gy) + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
        let jy = -1595 + (33 * Math.floor(days / 12053));
        days %= 12053;
        jy += 4 * Math.floor(days / 1461);
        days %= 1461;
        if (days > 365) {
            jy += Math.floor((days - 1) / 365);
            days = (days - 1) % 365;
        }
        const jm = (days < 186) ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
        const jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));
        return { jy, jm, jd };
    }

    #getJalaliMonthLength(year, month) {
        if (month <= 6) return 31;
        if (month <= 11) return 30;
        const isLeap = ((((year - 474) % 2820) + 512) * 682) % 2816 < 682;
        return isLeap ? 30 : 29;
    }

    #createDatePickerModal() {
        const modalHTML = `
        <div id="datePickerModal" class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <button id="pd-close-btn" class="btn btn-close">انصراف</button>
                    <button id="pd-confirm-btn" class="btn btn-confirm">تایید</button>
                </div>
                <div class="selectors-container">
                    <div id="pdp-year" class="selector-column"></div>
                    <div id="pdp-month" class="selector-column"></div>
                    <div id="pdp-day" class="selector-column"></div>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML("beforeend", modalHTML);
    }
    
    #initializePickers() {
        const getRange = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => ({ value: start + i, text: start + i }));
        const getDays = (year, month) => getRange(1, this.#getJalaliMonthLength(year, month));
        const getMonths = () => getRange(1, 12);

        const updateDaySelector = () => {
            const yearValue = parseInt(this.yearSelector.getValue());
            const monthValue = parseInt(this.monthSelector.getValue());
            const daysInMonth = getDays(yearValue, monthValue);
            this.daySelector.updateSource(daysInMonth);
        };

        this.yearSelector = new IosSelector({
            el: "#pdp-year",
            source: getRange(1350, 1450),
            selectedIndex: this.today.jy - 1350,
            onChange: updateDaySelector
        });
        this.monthSelector = new IosSelector({
            el: "#pdp-month",
            source: getMonths(),
            selectedIndex: this.today.jm - 1,
            onChange: updateDaySelector
        });
        this.daySelector = new IosSelector({
            el: "#pdp-day",
            source: getDays(this.today.jy, this.today.jm),
            selectedIndex: this.today.jd - 1,
        });
    }

    #setupEventListeners() {
        const openModal = () => this.modal.classList.add("visible");
        const closeModal = () => this.modal.classList.remove("visible");

        this.inputElement.addEventListener("click", openModal);
        document.getElementById("pd-close-btn").addEventListener("click", closeModal);
        this.modal.addEventListener("click", (event) => {
            if (event.target === this.modal) closeModal();
        });

        document.getElementById("pd-confirm-btn").addEventListener("click", () => {
            const selectedYear = parseInt(this.yearSelector.getValue());
            const selectedMonth = parseInt(this.monthSelector.getValue());
            const selectedDay = parseInt(this.daySelector.getValue());
            const format = (d) => (d < 10 ? `0${d}` : d);
            this.inputElement.value = `${selectedYear}/${format(selectedMonth)}/${format(selectedDay)}`;
            closeModal();
        });
    }
}

// --- The nested helper class for the wheel selector ---
class IosSelector {
    constructor(options) {
        this.el = document.querySelector(options.el);
        this.source = options.source;
        this.itemHeight = 44;
        this.middleIndex = 2;
        this.onChange = options.onChange || function() {};
        this._init(options.selectedIndex || 0);
    }

    _init(selectedIndex) {
        this.el.innerHTML = `<ul class="selector-list">${this.source
            .map(item => `<li class="selector-item">${item.text}</li>`)
            .join("")}</ul><div class="selector-highlight"></div>`;
        this.list = this.el.querySelector("ul");
        this.items = this.el.querySelectorAll("li");
        this.select(selectedIndex, false);
        this._attachEvents();
    }

    _attachEvents() {
        let startY = 0, scrollStart = 0, isDragging = false;
        const onStart = (e) => {
            e.stopPropagation();
            startY = e.touches ? e.touches[0].clientY : e.clientY;
            scrollStart = parseFloat(this.list.style.transform.replace("translateY(", "")) || 0;
            this.list.style.transition = "none";
            isDragging = true;
        };
        const onMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            let moveY = (e.touches ? e.touches[0].clientY : e.clientY) - startY;
            this.list.style.transform = `translateY(${scrollStart + moveY}px)`;
        };
        const onEnd = () => { if (isDragging) { isDragging = false; this._snap(); } };
        const onWheel = (e) => {
            e.preventDefault();
            let currentScroll = parseFloat(this.list.style.transform.replace("translateY(", "")) || 0;
            this.list.style.transition = "none";
            this.list.style.transform = `translateY(${currentScroll - e.deltaY}px)`;
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = setTimeout(() => this._snap(), 150);
        };

        this.el.addEventListener("mousedown", onStart);
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onEnd);
        this.el.addEventListener("wheel", onWheel);
        this.el.addEventListener("touchstart", onStart, { passive: false });
        this.el.addEventListener("touchmove", onMove, { passive: false });
        this.el.addEventListener("touchend", onEnd);
    }

    _snap() {
        let finalScroll = parseFloat(this.list.style.transform.replace("translateY(", "")) || 0;
        let targetIndex = Math.round((finalScroll - this.middleIndex * this.itemHeight) / -this.itemHeight);
        this.select(targetIndex);
    }

    select(index, triggerChange = true) {
        index = Math.max(0, Math.min(index, this.source.length - 1));
        const hasChanged = this.selectedIndex !== index;
        this.selectedIndex = index;
        this.list.style.transition = "transform 0.2s ease-out";
        this.list.style.transform = `translateY(${(this.middleIndex - this.selectedIndex) * this.itemHeight}px)`;
        this.items.forEach((item, i) => item.classList.toggle("selected", i === this.selectedIndex));
        if (hasChanged && triggerChange) {
            this.onChange();
        }
    }

    updateSource(newSource) {
        this.source = newSource;
        this.list.innerHTML = this.source
            .map(item => `<li class="selector-item">${item.text}</li>`)
            .join("");
        this.items = this.el.querySelectorAll("li");
        const newSelectedIndex = Math.min(this.selectedIndex, this.source.length - 1);
        this.select(newSelectedIndex, false);
    }

    getValue() { return this.source[this.selectedIndex].value; }
}
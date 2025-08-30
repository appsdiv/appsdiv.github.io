const addMemberForm = document.getElementById('add-member-form');
const memberNameInput = document.getElementById('member-name');
const initialAmountInput = document.getElementById('initial-amount');
const membersList = document.getElementById('members-list');
const payerSelect = document.getElementById('payer');
const beneficiariesList = document.getElementById('beneficiaries-list');
const addExpenseForm = document.getElementById('add-expense-form');
const expenseDescriptionInput = document.getElementById('expense-description');
const expenseAmountInput = document.getElementById('expense-amount');
const summaryList = document.getElementById('summary-list');
const logList = document.getElementById('log-list');

let members = [];
let expenses = [];

// تابع برای به‌روزرسانی لیست اعضا در رابط کاربری
function updateMembersUI() {
    membersList.innerHTML = '';
    payerSelect.innerHTML = '';
    beneficiariesList.innerHTML = '';

    members.forEach(member => {
        // اضافه کردن به لیست اعضا
        const li = document.createElement('li');
        li.textContent = `${member.name} (موجودی اولیه: ${member.initialAmount.toLocaleString()} تومان)`;
        membersList.appendChild(li);

        // اضافه کردن به لیست مادرخرج
        const option = document.createElement('option');
        option.value = member.name;
        option.textContent = member.name;
        payerSelect.appendChild(option);

        // اضافه کردن به لیست ذینفعان
        const checkboxDiv = document.createElement('div');
        checkboxDiv.className = 'member-item';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `beneficiary-${member.name}`;
        checkbox.value = member.name;
        checkbox.checked = true; // پیش‌فرض همه ذینفع هستند
        const label = document.createElement('label');
        label.htmlFor = `beneficiary-${member.name}`;
        label.textContent = member.name;
        checkboxDiv.appendChild(checkbox);
        checkboxDiv.appendChild(label);
        beneficiariesList.appendChild(checkboxDiv);
    });
}

// تابع برای محاسبه و نمایش گزارش بدهی و طلب
function calculateSummary() {
    const balances = {};
    members.forEach(member => {
        balances[member.name] = member.initialAmount;
    });

    expenses.forEach(expense => {
        const costPerPerson = expense.amount / expense.beneficiaries.length;
        
        // از مادرخرج کم می‌شود
        balances[expense.payer] -= expense.amount;

        // به ذینفعان اضافه می‌شود
        expense.beneficiaries.forEach(beneficiary => {
            balances[beneficiary] += costPerPerson;
        });
    });

    summaryList.innerHTML = '';
    for (const name in balances) {
        const balance = balances[name];
        const li = document.createElement('li');
        if (balance < 0) {
            li.innerHTML = `<strong>${name}</strong>: ${Math.abs(balance).toLocaleString()} تومان بدهکار است.`;
            li.style.color = 'red';
        } else if (balance > 0) {
            li.innerHTML = `<strong>${name}</strong>: ${balance.toLocaleString()} تومان طلبکار است.`;
            li.style.color = 'green';
        } else {
            li.innerHTML = `<strong>${name}</strong>: حسابش صاف است.`;
        }
        summaryList.appendChild(li);
    }
}

// تابع برای نمایش لاگ هزینه‌ها
function updateLogUI() {
    logList.innerHTML = '';
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.className = 'log-item';
        li.innerHTML = `
            <strong>${expense.description}</strong><br>
            مبلغ: ${expense.amount.toLocaleString()} تومان<br>
            مادرخرج: ${expense.payer}<br>
            ذینفعان: ${expense.beneficiaries.join(', ')}<br>
            مبلغ سهم هر نفر: ${(expense.amount / expense.beneficiaries.length).toLocaleString()} تومان
        `;
        logList.appendChild(li);
    });
}

// رویداد اضافه کردن عضو
addMemberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = memberNameInput.value.trim();
    const initialAmount = parseFloat(initialAmountInput.value) || 0;
    if (name && !members.find(m => m.name === name)) {
        members.push({ name, initialAmount });
        updateMembersUI();
        calculateSummary();
        memberNameInput.value = '';
        initialAmountInput.value = '0';
    } else {
        alert('لطفا نام معتبر وارد کنید یا نام تکراری نباشد.');
    }
});

// رویداد اضافه کردن هزینه
addExpenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = expenseDescriptionInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    const payer = payerSelect.value;
    const beneficiaries = Array.from(beneficiariesList.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);

    if (description && amount > 0 && payer && beneficiaries.length > 0) {
        expenses.push({ description, amount, payer, beneficiaries });
        updateLogUI();
        calculateSummary();
        expenseDescriptionInput.value = '';
        expenseAmountInput.value = '';
        updateMembersUI(); // برای ریست کردن چک‌باکس‌ها
    } else {
        alert('لطفا تمام فیلدهای هزینه را به درستی پر کنید و حداقل یک ذینفع انتخاب کنید.');
    }
});

// اجرای اولیه
updateMembersUI();
calculateSummary();
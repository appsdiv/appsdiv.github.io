const appData = [


  {
    "topic": "Food",
    "role": "Customer",
    "q": "Do you have vegetarian options?",
    "q_persien": "غذای گیاهی دارید؟",
    "a": ["Yes, we do.", "Yes, we have several vegetarian dishes on our menu."],
    "a_persien": ["بله داریم.", "بله، چند مدل غذای گیاهی تو منو داریم."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Can I get this to go?",
    "q_persien": "می‌تونم این غذا رو بیرون‌بر بگیرم؟",
    "a": ["Sure, I'll pack it for you.", "Absolutely! I'll pack your order to go."],
    "a_persien": ["حتماً، براتون بسته‌بندی می‌کنم.", "حتماً! سفارشتون رو براتون بسته‌بندی می‌کنم."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Do you have gluten-free meals?",
    "q_persien": "غذای بدون گلوتن دارید؟",
    "a": ["Yes, we do.", "Yes, we offer a variety of gluten-free meals."],
    "a_persien": ["بله، داریم.", "بله، چند نوع غذای بدون گلوتن داریم."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Could I see the menu, please?",
    "q_persien": "ممکنه منو رو ببینم؟",
    "a": ["Here you go.", "Of course! Here’s the menu."],
    "a_persien": ["بفرمایید.", "حتماً! این هم منو."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Is tip included?",
    "q_persien": "انعام توی صورتحساب هست؟",
    "a": ["No, it's not.", "No, tip is not included. You can add it if you wish."],
    "a_persien": ["نه، نیست.", "نه، انعام جداست. اگه خواستید می‌تونید اضافه کنید."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Can I get a glass of water?",
    "q_persien": "می‌تونم یک لیوان آب بگیرم؟",
    "a": ["Of course.", "Certainly! I'll bring you a glass of water right away."],
    "a_persien": ["حتماً.", "حتماً! همین الان یک لیوان آب براتون میارم."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Can I have the bill, please?",
    "q_persien": "ممکنه صورت‌حساب رو بیارید؟",
    "a": ["Sure, one moment.", "Absolutely! I'll get your bill right now."],
    "a_persien": ["حتماً، یک لحظه.", "حتماً! همین الان صورت‌حساب رو میارم."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Is this dish spicy?",
    "q_persien": "این غذا تنده؟",
    "a": ["A little.", "It's a little spicy, but not too much."],
    "a_persien": ["یکم.", "یکم تنده، ولی خیلی نیست."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Can I get extra napkins?",
    "q_persien": "می‌تونم دستمال کاغذی بیشتری بگیرم؟",
    "a": ["Sure.", "Of course! I'll bring some more napkins for you."],
    "a_persien": ["حتماً.", "حتماً! چند تا دستمال دیگه میارم."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Is there a kids’ menu?",
    "q_persien": "منوی کودکان دارید؟",
    "a": ["Yes, here it is.", "Yes, we have a kids’ menu. Here you go."],
    "a_persien": ["بله، اینجاست.", "بله، منوی مخصوص کودکان داریم. بفرمایید."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "How long will the food take?",
    "q_persien": "غذا چقدر طول می‌کشه آماده شه؟",
    "a": ["About 15 minutes.", "It should be ready in about 15 minutes."],
    "a_persien": ["حدود ۱۵ دقیقه.", "تقریباً ۱۵ دقیقه دیگه حاضر می‌شه."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Can I get a refill?",
    "q_persien": "می‌تونم دوباره نوشیدنی بگیرم؟",
    "a": ["Sure.", "Of course, I'll get you a refill right away."],
    "a_persien": ["حتماً.", "حتماً، همین الان دوباره نوشیدنی میارم."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Can I have this without onions?",
    "q_persien": "می‌تونم این غذا رو بدون پیاز بگیرم؟",
    "a": ["Yes, we can do that.", "Yes, we can prepare it without onions for you."],
    "a_persien": ["بله، می‌تونیم.", "بله، می‌تونیم غذا رو بدون پیاز آماده کنیم."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Do you deliver?",
    "q_persien": "ارسال دارید؟",
    "a": ["Yes, we deliver.", "Yes, we offer delivery. You can order online or call us."],
    "a_persien": ["بله، ارسال داریم.", "بله، ارسال انجام می‌دیم. می‌تونید آنلاین یا تلفنی سفارش بدید."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Can I get a table for two?",
    "q_persien": "می‌تونم یه میز دو نفره بگیرم؟",
    "a": ["Sure, follow me.", "Of course! Please follow me to your table."],
    "a_persien": ["حتماً، بفرمایید.", "حتماً! بفرمایید با من بیاید."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Is there a wait to be seated?",
    "q_persien": "باید منتظر بمونیم تا میز خالی بشه؟",
    "a": ["Just 5 minutes.", "It’s just a 5-minute wait for a table."],
    "a_persien": ["فقط ۵ دقیقه.", "فقط ۵ دقیقه باید صبر کنید تا میز خالی شه."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Do you have high chairs?",
    "q_persien": "صندلی کودک دارید؟",
    "a": ["Yes, we do.", "Yes, we have high chairs for children."],
    "a_persien": ["بله، داریم.", "بله، صندلی کودک موجوده."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Is outside seating available?",
    "q_persien": "میز بیرونی دارید؟",
    "a": ["Yes, outside is open.", "Yes, you can sit outside if you prefer."],
    "a_persien": ["بله، فضای بیرونی بازه.", "بله، اگه دوست داشته باشید می‌تونید بیرون بشینید."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Can I split the bill?",
    "q_persien": "می‌تونم صورتحساب رو تقسیم کنم؟",
    "a": ["Yes, that's fine.", "Yes, we can split the bill for you."],
    "a_persien": ["بله، مشکلی نیست.", "بله، می‌تونیم صورتحساب رو براتون تقسیم کنیم."]
  },
  {
    "topic": "Food",
    "role": "Customer",
    "q": "Do you accept Apple Pay?",
    "q_persien": "اپل پی قبول می‌کنید؟",
    "a": ["Yes, we do.", "Yes, you can pay with Apple Pay or Google Pay."],
    "a_persien": ["بله، قبول می‌کنیم.", "بله، با اپل پی یا گوگل پی هم می‌تونید پرداخت کنید."]
  },
  {
    "topic": "Shopping",
    "role": "Customer",
    "q": "Is there a restroom here?",
    "q_persien": "اینجا دستشویی دارید؟",
    "a": ["Yes, in the back.", "Yes, the restroom is in the back, near the exit."],
    "a_persien": ["بله، عقب فروشگاه.", "بله، دستشویی انتهای فروشگاه نزدیک خروجیه."]
  },
  {
    "topic": "Shopping",
    "role": "Customer",
    "q": "Can I return this if it doesn’t fit?",
    "q_persien": "اگه اندازم نشد می‌تونم پسش بدم؟",
    "a": ["Yes, with receipt.", "Yes, you can return it within 30 days with your receipt."],
    "a_persien": ["بله، با فاکتور.", "بله، تا ۳۰ روز با فاکتور می‌تونید برگردونید."]
  },
  {
    "topic": "Shopping",
    "role": "Customer",
    "q": "Do you have a loyalty card?",
    "q_persien": "کارت باشگاه مشتریان دارید؟",
    "a": ["Yes, ask at the register.", "Yes, you can sign up at the register and start earning points."],
    "a_persien": ["بله، صندوق بپرسید.", "بله، می‌تونید موقع پرداخت ثبت نام کنید و امتیاز بگیرید."]
  },
  {
    "topic": "Shopping",
    "role": "Customer",
    "q": "Is there parking available?",
    "q_persien": "پارکینگ دارید؟",
    "a": ["Yes, in the back.", "Yes, there’s a parking lot behind the store."],
    "a_persien": ["بله، پشت فروشگاه.", "بله، پشت فروشگاه پارکینگ هست."]
  },
  {
    "topic": "Shopping",
    "role": "Customer",
    "q": "What are your store hours?",
    "q_persien": "ساعت کاری فروشگاه چنده؟",
    "a": ["9 to 9.", "We’re open from 9 AM to 9 PM every day."],
    "a_persien": ["۹ تا ۹.", "هر روز از ۹ صبح تا ۹ شب باز هستیم."]
  },
  {
    "topic": "Shopping",
    "role": "Customer",
    "q": "Can I get a receipt, please?",
    "q_persien": "ممکنه فاکتور بگیرم؟",
    "a": ["Sure, here it is.", "Of course, here’s your receipt."],
    "a_persien": ["حتماً، بفرمایید.", "حتماً، اینم فاکتورتون."]
  },
  {
    "topic": "Shopping",
    "role": "Customer",
    "q": "Do you offer gift wrapping?",
    "q_persien": "کادوپیچ می‌کنید؟",
    "a": ["Yes, we do.", "Yes, we can gift wrap your purchase."],
    "a_persien": ["بله، انجام می‌دیم.", "بله، می‌تونیم خریدتون رو کادوپیچ کنیم."]
  },
  {
    "topic": "Shopping",
    "role": "Customer",
    "q": "Is this on sale?",
    "q_persien": "این تخفیف داره؟",
    "a": ["Yes, 20% off.", "Yes, this item is 20% off today."],
    "a_persien": ["بله، ۲۰٪ تخفیف.", "بله، امروز این کالا ۲۰٪ تخفیف داره."]
  },
  {
    "topic": "Services",
    "role": "Customer",
    "q": "Do you have Wi-Fi here?",
    "q_persien": "اینجا وای‌فای دارید؟",
    "a": ["Yes, password is on the wall.", "Yes, the Wi-Fi password is written on the wall."],
    "a_persien": ["بله، رمز رو دیوار هست.", "بله، رمز وای‌فای روی دیوار نوشته شده."]
  },
  {
    "topic": "Services",
    "role": "Customer",
    "q": "Can I charge my phone here?",
    "q_persien": "می‌تونم اینجا گوشی‌مو شارژ کنم؟",
    "a": ["Yes, there's an outlet.", "Yes, there’s an outlet near your table."],
    "a_persien": ["بله، پریز هست.", "بله، کنار میزتون پریز برق هست."]
  },
  {
    "topic": "Services",
    "role": "Customer",
    "q": "Can I get directions?",
    "q_persien": "می‌تونم راهنمایی بگیرم؟",
    "a": ["Sure, where to?", "Of course! Where do you want to go?"],
    "a_persien": ["حتماً، کجا می‌خواید برید؟", "حتماً! مقصدتون رو بگید."]
  },
  {
    "topic": "Phone",
    "role": "Customer",
    "q": "Can I use your phone?",
    "q_persien": "می‌تونم از تلفن شما استفاده کنم؟",
    "a": ["Yes, here you go.", "Yes, you can use my phone for a quick call."],
    "a_persien": ["بله، بفرمایید.", "بله، می‌تونید یک تماس کوتاه بگیرید."]
  },
  {
    "topic": "Phone",
    "role": "Customer",
    "q": "Where can I buy a SIM card?",
    "q_persien": "از کجا می‌تونم سیم‌کارت بخرم؟",
    "a": ["At the phone store.", "You can buy a SIM card at any phone store or convenience store."],
    "a_persien": ["از فروشگاه موبایل.", "از هر فروشگاه موبایل یا سوپرمارکت می‌تونید سیم‌کارت بخرید."]
  },
  {
    "topic": "Phone",
    "role": "Customer",
    "q": "Is there public Wi-Fi nearby?",
    "q_persien": "اینجا وای‌فای عمومی هست؟",
    "a": ["Yes, at the library.", "Yes, the public library nearby has free Wi-Fi."],
    "a_persien": ["بله، توی کتابخونه.", "بله، کتابخانه نزدیک اینجا وای‌فای رایگان داره."]
  },
  {
    "topic": "Phone",
    "role": "Customer",
    "q": "How do I make an international call?",
    "q_persien": "چطور تماس بین‌المللی بگیرم؟",
    "a": ["Dial 011, then the country code.", "First dial 011, then your country code and number."],
    "a_persien": ["اول ۰۱۱، بعد کد کشور.", "اول ۰۱۱ رو بگیرید، بعد کد کشور و شماره رو وارد کنید."]
  }
,

  {
    "topic": "Banking",
    "role": "Customer",
    "q": "How do I open a bank account?",
    "q_persien": "چطور می‌تونم حساب بانکی باز کنم؟",
    "a": ["Bring your ID.", "Just bring your ID and proof of address to the branch."],
    "a_persien": ["کارت شناسایی‌تون رو بیارید.", "فقط کارت شناسایی و مدرک محل سکونت به شعبه بیارید."]
  },
  {
    "topic": "Banking",
    "role": "Customer",
    "q": "Where is the nearest ATM?",
    "q_persien": "نزدیک‌ترین دستگاه خودپرداز کجاست؟",
    "a": ["Around the corner.", "It’s just around the corner, next to the grocery store."],
    "a_persien": ["همین نزدیکی.", "همین نزدیکی، کنار فروشگاه مواد غذاییه."]
  },
  {
    "topic": "Banking",
    "role": "Customer",
    "q": "Can I withdraw cash here?",
    "q_persien": "اینجا می‌تونم پول نقد بگیرم؟",
    "a": ["Yes, you can.", "Yes, you can withdraw cash at the counter or ATM."],
    "a_persien": ["بله، می‌تونید.", "بله، می‌تونید از باجه یا دستگاه خودپرداز پول نقد بگیرید."]
  },
  {
    "topic": "Banking",
    "role": "Customer",
    "q": "What’s the minimum deposit?",
    "q_persien": "حداقل موجودی برای افتتاح حساب چقدره؟",
    "a": ["$25.", "The minimum deposit is $25 for a new account."],
    "a_persien": ["۲۵ دلار.", "حداقل موجودی برای حساب جدید ۲۵ دلاره."]
  },
  {
    "topic": "Banking",
    "role": "Customer",
    "q": "Can I transfer money online?",
    "q_persien": "می‌تونم آنلاین پول منتقل کنم؟",
    "a": ["Yes, you can.", "Yes, you can transfer money through our mobile app or website."],
    "a_persien": ["بله، می‌تونید.", "بله، از طریق اپ یا سایت ما می‌تونید پول جابجا کنید."]
  },
  {
    "topic": "Banking",
    "role": "Customer",
    "q": "Can I change a $100 bill?",
    "q_persien": "می‌تونم اسکناس ۱۰۰ دلاری رو خرد کنم؟",
    "a": ["Yes, at the counter.", "Yes, just go to the counter and we’ll change it for you."],
    "a_persien": ["بله، باجه انجام می‌ده.", "بله، برید باجه براتون خرد می‌کنیم."]
  },
  {
    "topic": "Banking",
    "role": "Customer",
    "q": "What’s the exchange rate today?",
    "q_persien": "امروز نرخ تبدیل ارز چنده؟",
    "a": ["Let me check.", "Let me check the current exchange rate for you."],
    "a_persien": ["بزارید چک کنم.", "بزارید نرخ امروز رو براتون چک کنم."]
  },
  {
    "topic": "Banking",
    "role": "Customer",
    "q": "How do I apply for a credit card?",
    "q_persien": "چطور می‌تونم برای کارت اعتباری درخواست بدم؟",
    "a": ["Apply online.", "You can apply online or at the branch."],
    "a_persien": ["آنلاین درخواست بدید.", "می‌تونید آنلاین یا حضوری درخواست بدید."]
  },
  {
    "topic": "Banking",
    "role": "Customer",
    "q": "Can I get a printed statement?",
    "q_persien": "می‌تونم صورت‌حساب چاپی بگیرم؟",
    "a": ["Yes, at the counter.", "Yes, ask at the counter and we’ll print it for you."],
    "a_persien": ["بله، باجه انجام می‌ده.", "بله، برید باجه براتون چاپ می‌کنن."]
  },
  {
    "topic": "Banking",
    "role": "Customer",
    "q": "Do you have safe deposit boxes?",
    "q_persien": "صندوق امانات دارید؟",
    "a": ["Yes, we do.", "Yes, we have safe deposit boxes. Please ask at reception."],
    "a_persien": ["بله، داریم.", "بله، صندوق امانات داریم. لطفاً از پذیرش بپرسید."]
  },
  {
    "topic": "Emergencies",
    "role": "Customer",
    "q": "Call 911! There’s an emergency.",
    "q_persien": "با ۹۱۱ تماس بگیرید! وضعیت اضطراریه.",
    "a": ["Right away!", "I’ll call 911 right now! Stay calm."],
    "a_persien": ["الان!", "همین الان با ۹۱۱ تماس می‌گیرم! آرامش داشته باشید."]
  },
  {
    "topic": "Emergencies",
    "role": "Customer",
    "q": "Where is the nearest hospital?",
    "q_persien": "نزدیک‌ترین بیمارستان کجاست؟",
    "a": ["Two blocks away.", "It’s two blocks down this road, on your left."],
    "a_persien": ["دو بلوک پایین‌تر.", "دو بلوک پایین‌تر همین خیابون، سمت چپ."]
  },
  {
    "topic": "Emergencies",
    "role": "Customer",
    "q": "I lost my wallet. What should I do?",
    "q_persien": "کیف پولم رو گم کردم. چکار کنم؟",
    "a": ["Report to the police.", "You should report it to the police and call your bank."],
    "a_persien": ["به پلیس اطلاع بدید.", "به پلیس اطلاع بدید و به بانکتون زنگ بزنید."]
  },
  {
    "topic": "Emergencies",
    "role": "Customer",
    "q": "Is there a pharmacy nearby?",
    "q_persien": "اینجا داروخانه نزدیک هست؟",
    "a": ["Yes, across the street.", "Yes, there’s one right across the street."],
    "a_persien": ["بله، روبروی خیابون.", "بله، درست روبروی خیابون داروخانه هست."]
  },
  {
    "topic": "Emergencies",
    "role": "Customer",
    "q": "Do you know any urgent care centers?",
    "q_persien": "کلینیک فوری یا اورژانس سراغ دارید؟",
    "a": ["Yes, nearby.", "Yes, there’s an urgent care two blocks from here."],
    "a_persien": ["بله، همین نزدیکی.", "بله، دو بلوک پایین‌تر یه کلینیک فوری هست."]
  },
  {
    "topic": "Emergencies",
    "role": "Customer",
    "q": "I need a doctor. Can you help?",
    "q_persien": "من به پزشک نیاز دارم. می‌تونید کمک کنید؟",
    "a": ["Sure, follow me.", "Yes, I can call a doctor for you or take you to a clinic."],
    "a_persien": ["حتماً، بفرمایید.", "بله، می‌تونم براتون دکتر خبر کنم یا شما رو ببرم درمانگاه."]
  },
  {
    "topic": "Emergencies",
    "role": "Customer",
    "q": "Is there a lost and found here?",
    "q_persien": "اینجا بخش اشیاء گمشده دارید؟",
    "a": ["Yes, at reception.", "Yes, ask at the reception desk for lost and found."],
    "a_persien": ["بله، پذیرش هست.", "بله، بخش اشیای گمشده پیش پذیرش هست."]
  },
  {
    "topic": "Emergencies",
    "role": "Customer",
    "q": "Can I use your phone to call for help?",
    "q_persien": "می‌تونم با تلفنتون کمک بخوام؟",
    "a": ["Yes, here you go.", "Of course! Here’s my phone."],
    "a_persien": ["بله، بفرمایید.", "حتماً! اینم گوشی من."]
  },
  {
    "topic": "Health",
    "role": "Customer",
    "q": "Do I need health insurance to see a doctor?",
    "q_persien": "برای مراجعه به پزشک بیمه سلامت لازم دارم؟",
    "a": ["It helps, but not always.", "Insurance helps, but you can see a doctor without it and pay directly."],
    "a_persien": ["کمک می‌کنه، اما همیشه لازم نیست.", "بیمه کمک می‌کنه اما بدون بیمه هم می‌تونید مراجعه کنید و نقدی پرداخت کنید."]
  },
  {
    "topic": "Health",
    "role": "Customer",
    "q": "Where is the nearest pharmacy?",
    "q_persien": "نزدیک‌ترین داروخانه کجاست؟",
    "a": ["Across the street.", "The nearest pharmacy is just across the street."],
    "a_persien": ["روبروی خیابون.", "نزدیک‌ترین داروخانه درست روبروی خیابون هست."]
  },
  {
    "topic": "Health",
    "role": "Customer",
    "q": "Can I get medicine without a prescription?",
    "q_persien": "بدون نسخه دارو می‌دن؟",
    "a": ["For some drugs, yes.", "For some over-the-counter drugs, yes. For antibiotics, you need a prescription."],
    "a_persien": ["برای بعضی داروها، بله.", "برای بعضی داروهای بدون نسخه بله، اما آنتی‌بیوتیک نسخه می‌خواد."]
  },
  {
    "topic": "Health",
    "role": "Customer",
    "q": "Where can I get a COVID test?",
    "q_persien": "کجا می‌تونم تست کرونا بدم؟",
    "a": ["At the pharmacy.", "You can get a COVID test at most pharmacies and clinics."],
    "a_persien": ["در داروخانه.", "در بیشتر داروخانه‌ها و درمانگاه‌ها تست کرونا انجام می‌شه."]
  },
  {
    "topic": "Health",
    "role": "Customer",
    "q": "Do you have a first aid kit?",
    "q_persien": "جعبه کمک‌های اولیه دارید؟",
    "a": ["Yes, here.", "Yes, we have a first aid kit. I’ll bring it right away."],
    "a_persien": ["بله، اینجاست.", "بله، جعبه کمک‌های اولیه داریم. الان براتون میارم."]
  },
  {
    "topic": "Addresses",
    "role": "Customer",
    "q": "What’s the address here?",
    "q_persien": "آدرس اینجا چیه؟",
    "a": ["123 Main Street.", "It’s 123 Main Street, Apartment 5."],
    "a_persien": ["خیابان مین ۱۲۳.", "خیابان مین ۱۲۳، واحد ۵."]
  },
  {
    "topic": "Addresses",
    "role": "Customer",
    "q": "Can you write down your phone number?",
    "q_persien": "می‌تونید شماره‌تونو یادداشت کنید؟",
    "a": ["Sure.", "Of course, here’s my number."],
    "a_persien": ["حتماً.", "حتماً، این شماره من."]
  },
  {
    "topic": "Addresses",
    "role": "Customer",
    "q": "Is this the right bus stop for the museum?",
    "q_persien": "این ایستگاه برای رفتن به موزه درسته؟",
    "a": ["Yes, it is.", "Yes, get off here for the museum."],
    "a_persien": ["بله، همینجاست.", "بله، همین ایستگاه برای موزه است."]
  },
  {
    "topic": "Appointments",
    "role": "Customer",
    "q": "How do I make a doctor’s appointment?",
    "q_persien": "چطور وقت دکتر بگیرم؟",
    "a": ["Call the clinic.", "You can call the clinic or book online."],
    "a_persien": ["به کلینیک زنگ بزنید.", "می‌تونید به کلینیک زنگ بزنید یا آنلاین وقت بگیرید."]
  },
  {
    "topic": "Appointments",
    "role": "Customer",
    "q": "Can I reschedule my appointment?",
    "q_persien": "می‌تونم وقت ملاقات رو جابجا کنم؟",
    "a": ["Yes, call us.", "Yes, just call us and we’ll reschedule for you."],
    "a_persien": ["بله، زنگ بزنید.", "بله، فقط با ما تماس بگیرید تا وقت جدید بدیم."]
  },
  {
    "topic": "Appointments",
    "role": "Customer",
    "q": "What time is my appointment?",
    "q_persien": "ساعت قرارم کی هست؟",
    "a": ["At 2 PM.", "Your appointment is at 2 PM."],
    "a_persien": ["ساعت ۲ ظهر.", "قرارتون ساعت ۲ ظهره."]
  },
  {
    "topic": "Appointments",
    "role": "Customer",
    "q": "Do I need to arrive early?",
    "q_persien": "باید زودتر برسم؟",
    "a": ["About 10 minutes.", "Yes, it’s best to arrive 10 minutes early."],
    "a_persien": ["حدود ۱۰ دقیقه.", "بله، بهتره حدود ۱۰ دقیقه زودتر برسید."]
  },
  {
    "topic": "Appointments",
    "role": "Customer",
    "q": "Can I walk in without an appointment?",
    "q_persien": "بدون وقت قبلی می‌تونم بیام؟",
    "a": ["Depends on the day.", "Sometimes we accept walk-ins, but it’s safer to call first."],
    "a_persien": ["بستگی به روزش داره.", "بعضی روزها بدون وقت هم قبول می‌کنیم ولی بهتره اول زنگ بزنید."]
  },
  {
    "topic": "Appointments",
    "role": "Customer",
    "q": "Is it possible to get a same-day appointment?",
    "q_persien": "امکان وقت همان‌روز هست؟",
    "a": ["Maybe, if available.", "It depends on our schedule, but we’ll try to fit you in."],
    "a_persien": ["شاید، اگه جا باشه.", "بستگی به برنامه‌مون داره، ولی سعی می‌کنیم جا بدیم."]
  },
  {
    "topic": "Everyday",
    "role": "Customer",
    "q": "What’s your name?",
    "q_persien": "اسمت چیه؟",
    "a": ["I’m Alex.", "My name is Alex, nice to meet you."],
    "a_persien": ["من الکس هستم.", "اسم من الکس هست، خوشوقتم."]
  },
  {
    "topic": "Everyday",
    "role": "Customer",
    "q": "Where are you from?",
    "q_persien": "اهل کجایی؟",
    "a": ["I’m from New York.", "I’m originally from New York City."],
    "a_persien": ["اهل نیویورکم.", "در اصل اهل نیویورک سیتی هستم."]
  },
  {
    "topic": "Everyday",
    "role": "Customer",
    "q": "How old are you?",
    "q_persien": "چند سالته؟",
    "a": ["I’m 28.", "I’m 28 years old."],
    "a_persien": ["۲۸ سالمه.", "۲۸ سال دارم."]
  },
  {
    "topic": "Everyday",
    "role": "Customer",
    "q": "Do you speak other languages?",
    "q_persien": "زبان دیگه‌ای بلدی؟",
    "a": ["Yes, Spanish.", "Yes, I speak Spanish and a little French."],
    "a_persien": ["بله، اسپانیایی.", "بله، اسپانیایی و کمی فرانسوی بلدم."]
  },
  {
    "topic": "Everyday",
    "role": "Customer",
    "q": "Can you repeat that, please?",
    "q_persien": "ممکنه دوباره تکرار کنید؟",
    "a": ["Sure.", "Of course, I’ll say it again."],
    "a_persien": ["حتماً.", "حتماً، دوباره تکرار می‌کنم."]
  },
  {
    "topic": "Everyday",
    "role": "Customer",
    "q": "Can you speak more slowly?",
    "q_persien": "ممکنه آهسته‌تر صحبت کنید؟",
    "a": ["Sure.", "Of course, I’ll speak more slowly."],
    "a_persien": ["حتماً.", "حتماً، آهسته‌تر صحبت می‌کنم."]
  },
  {
    "topic": "Everyday",
    "role": "Customer",
    "q": "Could you write that down?",
    "q_persien": "ممکنه اون رو یادداشت کنید؟",
    "a": ["Sure.", "Of course, I’ll write it down for you."],
    "a_persien": ["حتماً.", "حتماً، براتون یادداشت می‌کنم."]
  },
  {
    "topic": "Everyday",
    "role": "Customer",
    "q": "Do you have WhatsApp?",
    "q_persien": "واتساپ داری؟",
    "a": ["Yes, I do.", "Yes, here’s my WhatsApp number."],
    "a_persien": ["بله دارم.", "بله، اینم شماره واتساپ من."]
  },
  {
    "topic": "Everyday",
    "role": "Customer",
    "q": "How do you spell that?",
    "q_persien": "چطور اون رو هجی می‌کنید؟",
    "a": ["A-L-E-X.", "It’s spelled A-L-E-X."],
    "a_persien": ["اِی-اِل-اِی-اِکس.", "هجی‌ش می‌شه: اِی-اِل-اِی-اِکس."]
  },
  {
    "topic": "Everyday",
    "role": "Customer",
    "q": "Can I help you?",
    "q_persien": "می‌تونم کمکتون کنم؟",
    "a": ["No, thanks.", "No, thank you. I’m just looking."],
    "a_persien": ["نه، ممنون.", "نه، ممنون. فقط دارم نگاه می‌کنم."]
  }
,

  {
    "topic": "Home",
    "role": "Customer",
    "q": "Where is the laundry room?",
    "q_persien": "رختشوی‌خانه کجاست؟",
    "a": ["Downstairs.", "It’s downstairs, next to the storage room."],
    "a_persien": ["طبقه پایین.", "طبقه پایین کنار انباری."]
  },
  {
    "topic": "Home",
    "role": "Customer",
    "q": "Is there hot water?",
    "q_persien": "آب گرم هست؟",
    "a": ["Yes, just wait a minute.", "Yes, but sometimes you need to let it run for a minute."],
    "a_persien": ["بله، فقط یک دقیقه صبر کنید.", "بله، ولی بعضی وقت‌ها باید یک دقیقه صبر کنید تا گرم بشه."]
  },
  {
    "topic": "Home",
    "role": "Customer",
    "q": "Can I use the kitchen?",
    "q_persien": "می‌تونم از آشپزخونه استفاده کنم؟",
    "a": ["Yes, go ahead.", "Yes, feel free to use whatever you need."],
    "a_persien": ["بله، بفرمایید.", "بله، هرچی نیاز دارید استفاده کنید."]
  },
  {
    "topic": "Home",
    "role": "Customer",
    "q": "Do you have Wi-Fi?",
    "q_persien": "وای‌فای دارید؟",
    "a": ["Yes, here’s the password.", "Yes, let me give you the Wi-Fi password."],
    "a_persien": ["بله، این رمز وای‌فای.", "بله، الان رمز وای‌فای رو بهتون می‌دم."]
  },
  {
    "topic": "Home",
    "role": "Customer",
    "q": "Can I take a shower now?",
    "q_persien": "می‌تونم الان دوش بگیرم؟",
    "a": ["Yes, of course.", "Yes, go ahead. There are clean towels in the bathroom."],
    "a_persien": ["بله، حتماً.", "بله، بفرمایید. حوله تمیز توی حموم هست."]
  },
  {
    "topic": "Home",
    "role": "Customer",
    "q": "Where can I put my things?",
    "q_persien": "وسایلم رو کجا بذارم؟",
    "a": ["In the closet.", "You can use the closet or the drawers by the bed."],
    "a_persien": ["توی کمد.", "می‌تونید وسایلتون رو توی کمد یا کشوی کنار تخت بذارید."]
  },
  {
    "topic": "Home",
    "role": "Customer",
    "q": "Is smoking allowed?",
    "q_persien": "سیگار کشیدن مجازه؟",
    "a": ["No, sorry.", "No, smoking is not allowed inside the house."],
    "a_persien": ["نه، متاسفم.", "نه، توی خونه سیگار کشیدن مجاز نیست."]
  },
  {
    "topic": "Home",
    "role": "Customer",
    "q": "Do you recycle here?",
    "q_persien": "اینجا بازیافت انجام می‌دید؟",
    "a": ["Yes, blue bin.", "Yes, just put recyclables in the blue bin."],
    "a_persien": ["بله، سطل آبی.", "بله، وسایل قابل بازیافت رو توی سطل آبی بندازید."]
  },
  {
    "topic": "Home",
    "role": "Customer",
    "q": "Can I have guests over?",
    "q_persien": "می‌تونم مهمون بیارم؟",
    "a": ["Yes, just let me know.", "Yes, just let us know in advance if you have guests."],
    "a_persien": ["بله، فقط خبر بدید.", "بله، فقط قبلش بهمون اطلاع بدید اگه مهمون دارید."]
  },
  {
    "topic": "Home",
    "role": "Customer",
    "q": "Where should I throw the trash?",
    "q_persien": "زباله رو کجا بندازم؟",
    "a": ["Out back.", "Throw it in the big bin outside in the backyard."],
    "a_persien": ["حیاط پشتی.", "توی سطل بزرگ حیاط پشتی بندازید."]
  },
  {
    "topic": "School",
    "role": "Customer",
    "q": "Where is the classroom?",
    "q_persien": "کلاس کجاست؟",
    "a": ["Down the hall.", "It’s down the hall, second door on the right."],
    "a_persien": ["انتهای راهرو.", "انتهای راهرو، دومین در سمت راست."]
  },
  {
    "topic": "School",
    "role": "Customer",
    "q": "Who is the teacher?",
    "q_persien": "معلم کیه؟",
    "a": ["Ms. Smith.", "Ms. Smith is the teacher for this class."],
    "a_persien": ["خانم اسمیت.", "خانم اسمیت معلم این کلاسه."]
  },
  {
    "topic": "School",
    "role": "Customer",
    "q": "When does the class start?",
    "q_persien": "کلاس چه ساعتی شروع می‌شه؟",
    "a": ["At 9 AM.", "The class starts at 9 AM sharp."],
    "a_persien": ["ساعت ۹ صبح.", "کلاس رأس ساعت ۹ صبح شروع می‌شه."]
  },
  {
    "topic": "School",
    "role": "Customer",
    "q": "Do we have homework?",
    "q_persien": "تکلیف داریم؟",
    "a": ["Yes, page 10.", "Yes, please do the exercises on page 10."],
    "a_persien": ["بله، صفحه ۱۰.", "بله، تمرینات صفحه ۱۰ رو انجام بدید."]
  },
  {
    "topic": "School",
    "role": "Customer",
    "q": "Where is the cafeteria?",
    "q_persien": "سلف کجاست؟",
    "a": ["Next to the library.", "The cafeteria is right next to the library."],
    "a_persien": ["کنار کتابخونه.", "سلف درست کنار کتابخانه است."]
  },
  {
    "topic": "School",
    "role": "Customer",
    "q": "Is there a library here?",
    "q_persien": "اینجا کتابخانه هست؟",
    "a": ["Yes, upstairs.", "Yes, the library is upstairs, third floor."],
    "a_persien": ["بله، طبقه بالا.", "بله، کتابخانه طبقه سوم بالاست."]
  },
  {
    "topic": "School",
    "role": "Customer",
    "q": "Do you have online classes?",
    "q_persien": "کلاس آنلاین دارید؟",
    "a": ["Yes, check the website.", "Yes, you can check the schedule on the school website."],
    "a_persien": ["بله، تو سایت هست.", "بله، برنامه کلاس‌ها تو سایت مدرسه هست."]
  },
  {
    "topic": "School",
    "role": "Customer",
    "q": "Can I get a student ID?",
    "q_persien": "می‌تونم کارت دانش‌آموزی بگیرم؟",
    "a": ["Yes, go to the office.", "Yes, go to the main office to get your student ID."],
    "a_persien": ["بله، برو دفتر.", "بله، برای کارت دانش‌آموزی به دفتر مدرسه مراجعه کن."]
  },
  {
    "topic": "School",
    "role": "Customer",
    "q": "Where can I buy school supplies?",
    "q_persien": "از کجا می‌تونم لوازم تحریر بخرم؟",
    "a": ["At the bookstore.", "You can buy supplies at the bookstore or online."],
    "a_persien": ["از کتاب‌فروشی.", "می‌تونی از کتاب‌فروشی یا آنلاین لوازم تحریر بخری."]
  },
  {
    "topic": "School",
    "role": "Customer",
    "q": "Is the school bus free?",
    "q_persien": "اتوبوس مدرسه رایگانه؟",
    "a": ["Yes, for students.", "Yes, the school bus is free for all students."],
    "a_persien": ["بله، برای دانش‌آموزها.", "بله، اتوبوس مدرسه برای همه دانش‌آموزها رایگانه."]
  },
  {
    "topic": "Work",
    "role": "Customer",
    "q": "Where is the HR office?",
    "q_persien": "دفتر منابع انسانی کجاست؟",
    "a": ["On the second floor.", "The HR office is on the second floor, room 210."],
    "a_persien": ["طبقه دوم.", "دفتر منابع انسانی طبقه دوم، اتاق ۲۱۰ هست."]
  },
  {
    "topic": "Work",
    "role": "Customer",
    "q": "Who is the manager?",
    "q_persien": "مدیر کیه؟",
    "a": ["Mr. Lee.", "Mr. Lee is the manager of this department."],
    "a_persien": ["آقای لی.", "آقای لی مدیر این بخشه."]
  },
  {
    "topic": "Work",
    "role": "Customer",
    "q": "When is the lunch break?",
    "q_persien": "ساعت ناهار کیه؟",
    "a": ["12 to 1.", "Lunch break is from 12 to 1 PM."],
    "a_persien": ["۱۲ تا ۱.", "ساعت ناهار از ۱۲ تا ۱ هست."]
  },
  {
    "topic": "Work",
    "role": "Customer",
    "q": "Where can I park my car?",
    "q_persien": "ماشینم رو کجا پارک کنم؟",
    "a": ["In the parking lot.", "You can park your car in the parking lot behind the building."],
    "a_persien": ["توی پارکینگ.", "ماشینت رو می‌تونی پشت ساختمان توی پارکینگ بزاری."]
  },
  {
    "topic": "Work",
    "role": "Customer",
    "q": "Is there a dress code?",
    "q_persien": "کد لباس دارید؟",
    "a": ["Yes, business casual.", "Yes, please wear business casual attire."],
    "a_persien": ["بله، لباس نیمه‌رسمی.", "بله، لطفاً لباس نیمه‌رسمی بپوشید."]
  },
  {
    "topic": "Work",
    "role": "Customer",
    "q": "Do we have a meeting today?",
    "q_persien": "امروز جلسه داریم؟",
    "a": ["Yes, at 3 PM.", "Yes, the meeting is at 3 PM in the main conference room."],
    "a_persien": ["بله، ساعت ۳.", "بله، جلسه ساعت ۳ در سالن کنفرانس اصلیه."]
  },
  {
    "topic": "Work",
    "role": "Customer",
    "q": "Can I work from home?",
    "q_persien": "می‌تونم دورکاری کنم؟",
    "a": ["Yes, if approved.", "Yes, with manager’s approval you can work from home."],
    "a_persien": ["بله، اگر تایید بشه.", "بله، با تایید مدیر می‌تونی دورکاری کنی."]
  },
  {
    "topic": "Work",
    "role": "Customer",
    "q": "Where is the coffee machine?",
    "q_persien": "دستگاه قهوه کجاست؟",
    "a": ["In the kitchen.", "The coffee machine is in the staff kitchen, near the fridge."],
    "a_persien": ["توی آشپزخونه.", "دستگاه قهوه توی آشپزخانه کارمندان کنار یخچاله."]
  },
  {
    "topic": "Work",
    "role": "Customer",
    "q": "How do I get my paycheck?",
    "q_persien": "چطور حقوقم رو بگیرم؟",
    "a": ["Direct deposit.", "Your paycheck will be deposited directly into your bank account."],
    "a_persien": ["واریز مستقیم.", "حقوقتون مستقیم به حساب بانکیتون واریز می‌شه."]
  },
  {
    "topic": "Work",
    "role": "Customer",
    "q": "Can I have a day off?",
    "q_persien": "می‌تونم یک روز مرخصی بگیرم؟",
    "a": ["Yes, ask your manager.", "Yes, just let your manager know in advance."],
    "a_persien": ["بله، از مدیرتون بپرسید.", "بله، فقط از قبل به مدیرتون اطلاع بدید."]
  },
  {
    "topic": "Travel",
    "role": "Customer",
    "q": "Where can I get a city map?",
    "q_persien": "کجا می‌تونم نقشه شهر بگیرم؟",
    "a": ["At the visitor center.", "You can get a city map at the visitor information center."],
    "a_persien": ["از مرکز اطلاعات گردشگری.", "نقشه شهر رو می‌تونید از مرکز اطلاعات گردشگری بگیرید."]
  },
  {
    "topic": "Travel",
    "role": "Customer",
    "q": "Do you speak English?",
    "q_persien": "انگلیسی صحبت می‌کنید؟",
    "a": ["Yes, I do.", "Yes, I speak English. How can I help you?"],
    "a_persien": ["بله، صحبت می‌کنم.", "بله، انگلیسی صحبت می‌کنم. چطور می‌تونم کمکتون کنم؟"]
  },
  {
    "topic": "Travel",
    "role": "Customer",
    "q": "Where is the nearest hotel?",
    "q_persien": "نزدیک‌ترین هتل کجاست؟",
    "a": ["One block away.", "There’s a hotel one block from here, next to the gas station."],
    "a_persien": ["یک بلوک پایین‌تر.", "یک هتل کنار پمپ بنزین، یک بلوک پایین‌تر اینجاست."]
  },
  {
    "topic": "Travel",
    "role": "Customer",
    "q": "Is breakfast included?",
    "q_persien": "صبحانه شامل می‌شه؟",
    "a": ["Yes, continental breakfast.", "Yes, continental breakfast is included with your stay."],
    "a_persien": ["بله، صبحانه ساده.", "بله، صبحانه ساده همراه اقامتتون هست."]
  },
  {
    "topic": "Travel",
    "role": "Customer",
    "q": "Can I get a late checkout?",
    "q_persien": "می‌تونم دیرتر اتاق رو تحویل بدم؟",
    "a": ["Yes, until 1 PM.", "Yes, you can have late checkout until 1 PM."],
    "a_persien": ["بله، تا ساعت ۱.", "بله، تا ساعت ۱ بعد از ظهر می‌تونید اتاق رو تحویل بدید."]
  },
  {
    "topic": "Travel",
    "role": "Customer",
    "q": "How do I get to the airport?",
    "q_persien": "چطور به فرودگاه برم؟",
    "a": ["Take a taxi or shuttle.", "You can take a taxi, airport shuttle, or public transport."],
    "a_persien": ["با تاکسی یا شاتل.", "می‌تونید با تاکسی، شاتل فرودگاه یا حمل و نقل عمومی برید."]
  },
  {
    "topic": "Travel",
    "role": "Customer",
    "q": "Where can I exchange money?",
    "q_persien": "کجا می‌تونم پول چنج کنم؟",
    "a": ["At the bank.", "You can exchange money at any bank or at the airport."],
    "a_persien": ["در بانک.", "در هر بانکی یا فرودگاه می‌تونید پول چنج کنید."]
  },
  {
    "topic": "Travel",
    "role": "Customer",
    "q": "Do you have a map in Persian?",
    "q_persien": "نقشه فارسی دارید؟",
    "a": ["Yes, here.", "Yes, we have city maps in Persian. Here you go."],
    "a_persien": ["بله، اینجاست.", "بله، نقشه شهر به زبان فارسی داریم. بفرمایید."]
  },
  {
    "topic": "Travel",
    "role": "Customer",
    "q": "Is there a tour today?",
    "q_persien": "امروز تور دارید؟",
    "a": ["Yes, at 10 AM.", "Yes, there’s a city tour today at 10 AM."],
    "a_persien": ["بله، ساعت ۱۰.", "بله، امروز ساعت ۱۰ صبح تور شهر داریم."]
  }
,

  {
    "topic": "Social",
    "role": "Customer",
    "q": "Can I join you?",
    "q_persien": "می‌تونم بهتون ملحق شم؟",
    "a": ["Sure, have a seat.", "Of course, please join us!"],
    "a_persien": ["حتماً، بفرمایید.", "حتماً، خوشحال می‌شیم بیاین."]
  },
  {
    "topic": "Social",
    "role": "Customer",
    "q": "What do you do for a living?",
    "q_persien": "شغلت چیه؟",
    "a": ["I’m a student.", "I work as an engineer at a tech company."],
    "a_persien": ["دانشجو هستم.", "مهندس هستم و توی شرکت فناوری کار می‌کنم."]
  },
  {
    "topic": "Social",
    "role": "Customer",
    "q": "Are you busy this weekend?",
    "q_persien": "آخر هفته سرت شلوغه؟",
    "a": ["Not really.", "No, I’m free this weekend if you want to hang out."],
    "a_persien": ["نه خیلی.", "نه، این آخر هفته وقتم آزاده اگه دوست داری با هم باشیم."]
  },
  {
    "topic": "Social",
    "role": "Customer",
    "q": "Want to grab a coffee?",
    "q_persien": "می‌خوای یه قهوه بخوریم؟",
    "a": ["Sounds good!", "Sure, I’d love to grab a coffee with you."],
    "a_persien": ["عالیه!", "حتماً، دوست دارم با هم قهوه بخوریم."]
  },
  {
    "topic": "Social",
    "role": "Customer",
    "q": "Can you recommend a good restaurant?",
    "q_persien": "یه رستوران خوب معرفی می‌کنی؟",
    "a": ["Try Joe’s Grill.", "Joe’s Grill downtown has great food and service."],
    "a_persien": ["برو جو گرایل.", "رستوران جو گرایل تو مرکز شهر غذای عالی و سرویس خوب داره."]
  },
  {
    "topic": "Social",
    "role": "Customer",
    "q": "How do you know each other?",
    "q_persien": "چطور همدیگه رو می‌شناسید؟",
    "a": ["From college.", "We met in college and have been friends ever since."],
    "a_persien": ["از دانشگاه.", "توی دانشگاه با هم آشنا شدیم و از اون موقع دوستیم."]
  },
  {
    "topic": "Social",
    "role": "Customer",
    "q": "Is this seat taken?",
    "q_persien": "این صندلی خالیه؟",
    "a": ["No, go ahead.", "No, you can sit here if you’d like."],
    "a_persien": ["نه، بفرمایید.", "نه، اگه دوست دارید می‌تونید اینجا بشینید."]
  },
  {
    "topic": "Social",
    "role": "Customer",
    "q": "Can I help you with that?",
    "q_persien": "می‌تونم کمکتون کنم؟",
    "a": ["Thanks, I got it.", "Thank you, but I think I can handle it."],
    "a_persien": ["ممنون، خودم انجام می‌دم.", "مرسی، اما فکر کنم خودم از پسش برمیام."]
  },
  {
    "topic": "Social",
    "role": "Customer",
    "q": "Would you like some water?",
    "q_persien": "آب می‌خوای؟",
    "a": ["Yes, please.", "Yes, I’d love some. Thanks!"],
    "a_persien": ["بله، لطفاً.", "بله، خیلی ممنون می‌شم!"]
  },
  {
    "topic": "Social",
    "role": "Customer",
    "q": "May I use your bathroom?",
    "q_persien": "می‌تونم از دستشوییتون استفاده کنم؟",
    "a": ["Sure, down the hall.", "Of course! The bathroom is down the hall to the left."],
    "a_persien": ["حتماً، انتهای راهرو.", "حتماً! دستشویی انتهای راهرو سمت چپ."]
  },
  {
    "topic": "Friendship",
    "role": "Customer",
    "q": "How was your weekend?",
    "q_persien": "آخر هفته‌ات چطور بود؟",
    "a": ["It was great!", "It was great! I went hiking with some friends."],
    "a_persien": ["عالی بود!", "عالی بود! با چند تا دوست رفتم کوهنوردی."]
  },
  {
    "topic": "Friendship",
    "role": "Customer",
    "q": "Let’s keep in touch.",
    "q_persien": "در تماس باشیم.",
    "a": ["Sure!", "Absolutely, I’ll message you soon."],
    "a_persien": ["حتماً!", "حتماً، به زودی بهت پیام می‌دم."]
  },
  {
    "topic": "Friendship",
    "role": "Customer",
    "q": "Happy birthday!",
    "q_persien": "تولدت مبارک!",
    "a": ["Thank you!", "Thank you so much for remembering!"],
    "a_persien": ["مرسی!", "خیلی ممنون که یادآوری کردی!"]
  },
  {
    "topic": "Friendship",
    "role": "Customer",
    "q": "How’s your family?",
    "q_persien": "خانواده‌ات چطورن؟",
    "a": ["They’re good.", "Everyone’s doing well, thanks for asking."],
    "a_persien": ["خوبن.", "همه خوبن، ممنون که پرسیدی."]
  },
  {
    "topic": "Friendship",
    "role": "Customer",
    "q": "Call me if you need anything.",
    "q_persien": "اگه چیزی خواستی بهم زنگ بزن.",
    "a": ["Will do.", "Thanks! I’ll call you if I need help."],
    "a_persien": ["حتماً.", "مرسی! اگه کمکی خواستم بهت زنگ می‌زنم."]
  },
  {
    "topic": "Friendship",
    "role": "Customer",
    "q": "Take care!",
    "q_persien": "مواظب خودت باش!",
    "a": ["You too!", "You too! Have a great day."],
    "a_persien": ["تو هم همینطور!", "تو هم همینطور! روز خوبی داشته باش."]
  },
  {
    "topic": "Emotions",
    "role": "Customer",
    "q": "Are you okay?",
    "q_persien": "حالت خوبه؟",
    "a": ["Yes, I’m fine.", "Yes, I’m okay. Thanks for asking."],
    "a_persien": ["بله، خوبم.", "بله، خوبم. ممنون که پرسیدی."]
  },
  {
    "topic": "Emotions",
    "role": "Customer",
    "q": "You look upset. What’s wrong?",
    "q_persien": "به نظر ناراحت میای. چی شده؟",
    "a": ["I’m just tired.", "I’m just a bit tired, but I’ll be okay."],
    "a_persien": ["فقط خسته‌ام.", "فقط کمی خسته‌ام، ولی خوب می‌شم."]
  },
  {
    "topic": "Emotions",
    "role": "Customer",
    "q": "Can I give you a hug?",
    "q_persien": "می‌تونم بغلت کنم؟",
    "a": ["Sure.", "Of course, I’d appreciate that."],
    "a_persien": ["حتماً.", "حتماً، خیلی ممنون می‌شم."]
  },
  {
    "topic": "Emotions",
    "role": "Customer",
    "q": "Congratulations!",
    "q_persien": "تبریک می‌گم!",
    "a": ["Thank you!", "Thank you so much, that means a lot!"],
    "a_persien": ["مرسی!", "خیلی ممنون، برام خیلی ارزش داره!"]
  },
  {
    "topic": "Emotions",
    "role": "Customer",
    "q": "Sorry for your loss.",
    "q_persien": "تسلیت می‌گم.",
    "a": ["Thank you.", "Thank you, I appreciate your support."],
    "a_persien": ["ممنونم.", "ممنونم، از همدردیتون سپاسگزارم."]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "What time is it?",
    "q_persien": "ساعت چنده؟",
    "a": ["It’s 3 o’clock.", "It’s three o’clock in the afternoon."],
    "a_persien": ["ساعت سه‌ست.", "ساعت سه بعد از ظهره."]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "How much does it cost?",
    "q_persien": "چند درمیاد؟",
    "a": ["Ten dollars.", "It costs ten dollars including tax."],
    "a_persien": ["ده دلار.", "قیمتش با مالیات ده دلاره."]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "Can you help me?",
    "q_persien": "می‌تونی کمکم کنی؟",
    "a": ["Of course.", "Absolutely, what do you need help with?"],
    "a_persien": ["حتماً.", "حتماً، تو چه چیزی کمک می‌خوای؟"]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "Where is the nearest restroom?",
    "q_persien": "نزدیک‌ترین دستشویی کجاست؟",
    "a": ["Down the hall.", "Down the hall to the right."],
    "a_persien": ["انتهای راهرو.", "انتهای راهرو سمت راست."]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "Can you show me how this works?",
    "q_persien": "می‌تونی نشون بدی چطور کار می‌کنه؟",
    "a": ["Sure.", "Sure, let me show you step by step."],
    "a_persien": ["حتماً.", "حتماً، قدم به قدم بهت نشون می‌دم."]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "What’s today’s date?",
    "q_persien": "امروز چندمه؟",
    "a": ["It’s July 8.", "Today is July 8, 2025."],
    "a_persien": ["۸ جولای.", "امروز ۸ جولای ۲۰۲۵ است."]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "How do I use this ticket machine?",
    "q_persien": "چطور از این دستگاه بلیط استفاده کنم؟",
    "a": ["Press start.", "Press start and follow the instructions on the screen."],
    "a_persien": ["دکمه شروع رو بزن.", "دکمه شروع رو بزن و طبق دستورالعمل پیش برو."]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "What’s your email address?",
    "q_persien": "آدرس ایمیلت چیه؟",
    "a": ["alex@email.com", "My email address is alex@email.com."],
    "a_persien": ["alex@email.com", "آدرس ایمیلم alex@email.com هست."]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "What’s your phone number?",
    "q_persien": "شماره تلفنت چیه؟",
    "a": ["555-1234.", "My number is 555-1234."],
    "a_persien": ["۵۵۵-۱۲۳۴.", "شماره من ۵۵۵-۱۲۳۴ هست."]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "I’m lost. Can you help me?",
    "q_persien": "گم شدم، می‌تونی کمکم کنی؟",
    "a": ["Sure, where are you going?", "Absolutely, where do you need to go?"],
    "a_persien": ["حتماً، کجا می‌خوای بری؟", "حتماً، مقصدت کجاست؟"]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "Do you have change for a $20?",
    "q_persien": "خرد ۲۰ دلاری داری؟",
    "a": ["Let me check.", "Let me see if I have change for a $20 bill."],
    "a_persien": ["بزار ببینم.", "بزار ببینم خرد ۲۰ دلاری دارم یا نه."]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "Can I borrow your pen?",
    "q_persien": "می‌تونم خودکارتو قرض بگیرم؟",
    "a": ["Sure.", "Of course, here you go."],
    "a_persien": ["حتماً.", "حتماً، بفرمایید."]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "Where is the trash can?",
    "q_persien": "سطل زباله کجاست؟",
    "a": ["Near the door.", "It’s near the door on your left."],
    "a_persien": ["نزدیک در.", "کنار در سمت چپ."]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "Can I have a bag, please?",
    "q_persien": "می‌تونم یک کیسه بگیرم؟",
    "a": ["Sure.", "Sure, here’s a bag for your items."],
    "a_persien": ["حتماً.", "حتماً، این هم یک کیسه برای وسایلتون."]
  },
  {
    "topic": "Daily Life",
    "role": "Customer",
    "q": "Have a nice day!",
    "q_persien": "روز خوبی داشته باشید!",
    "a": ["You too!", "Thank you, you have a great day too!"],
    "a_persien": ["شما هم همینطور!", "مرسی، شما هم روز خوبی داشته باشید!"]
  }
,
















  {
    "topic": "Buy SIM",
    "role": "Customer",
    "q": "Hi, I want to buy a new SIM card.",
    "q_persien": "سلام، می‌خواهم یک سیم‌کارت جدید بخرم.",
    "a": ["Sure! Which operator are you interested in?", "Absolutely! Do you need prepaid or postpaid?"],
    "a_persien": ["حتما! به کدام اپراتور علاقه دارید؟", "البته! سیم‌کارت اعتباری می‌خواهید یا دائمی؟"]
  },
  {
    "topic": "Buy SIM",
    "role": "Operator",
    "q": "Which type of SIM do you need: regular, micro, or nano?",
    "q_persien": "چه نوع سیم‌کارتی نیاز دارید: معمولی، میکرو یا نانو؟",
    "a": ["My phone uses nano SIM, I think.", "I'm not sure, can you help me check?"],
    "a_persien": ["فکر کنم گوشی من نانو سیم‌کارت می‌خوره.", "مطمئن نیستم، می‌توانید کمکم کنید بررسی کنم؟"]
  },
  {
    "topic": "Buy SIM",
    "role": "Customer",
    "q": "What documents do I need to buy a SIM card?",
    "q_persien": "برای خرید سیم‌کارت چه مدارکی لازم دارم؟",
    "a": ["You'll need your national ID card.", "Bring your passport or official ID."],
    "a_persien": ["به کارت ملی خود نیاز دارید.", "پاسپورت یا کارت شناسایی رسمی خود را بیاورید."]
  },
  {
    "topic": "Buy SIM",
    "role": "Operator",
    "q": "Would you like to activate the SIM now?",
    "q_persien": "می‌خواهید سیم‌کارت را الان فعال کنید؟",
    "a": ["Yes, please activate it now.", "No, I'll activate it later myself."],
    "a_persien": ["بله، لطفاً همین الان فعالش کنید.", "نه، بعداً خودم فعالش می‌کنم."]
  },
  {
    "topic": "Buy SIM",
    "role": "Customer",
    "q": "Can I keep my old number when buying a new SIM?",
    "q_persien": "می‌توانم با خرید سیم‌کارت جدید، شماره قبلی‌ام را نگه دارم؟",
    "a": ["Yes, you can port your number.", "Only if your previous operator supports it."],
    "a_persien": ["بله، می‌توانید شماره خود را ترابرد کنید.", "فقط در صورتی که اپراتور قبلی شما از این قابلیت پشتیبانی کند."]
  },
  {
    "topic": "Buy SIM",
    "role": "Operator",
    "q": "Do you want a regular or data-only SIM?",
    "q_persien": "سیم‌کارت معمولی می‌خواهید یا فقط دیتا؟",
    "a": ["Regular, for calls and internet.", "Data-only, just for internet use."],
    "a_persien": ["معمولی، برای تماس و اینترنت.", "فقط دیتا، برای استفاده از اینترنت."]
  },
  {
    "topic": "Buy SIM",
    "role": "Customer",
    "q": "How much does a new SIM card cost?",
    "q_persien": "قیمت سیم‌کارت جدید چقدر است؟",
    "a": ["Prices start from 20,000 Tomans.", "It depends on the operator and package."],
    "a_persien": ["قیمت‌ها از ۲۰,۰۰۰ تومان شروع می‌شود.", "بستگی به اپراتور و بسته دارد."]
  },
  {
    "topic": "Buy SIM",
    "role": "Operator",
    "q": "Are you interested in any special packages with your SIM?",
    "q_persien": "آیا به بسته‌های ویژه همراه سیم‌کارت علاقه‌مندید؟",
    "a": ["Yes, what options do you have?", "No, just the SIM for now."],
    "a_persien": ["بله، چه گزینه‌هایی دارید؟", "نه، فعلاً فقط خود سیم‌کارت را می‌خواهم."]
  },
  {
    "topic": "Buy SIM",
    "role": "Customer",
    "q": "Can I buy a SIM card online?",
    "q_persien": "می‌توانم آنلاین سیم‌کارت بخرم؟",
    "a": ["Yes, most operators offer online purchase.", "Some operators may require in-person ID verification."],
    "a_persien": ["بله، بیشتر اپراتورها امکان خرید آنلاین را فراهم کرده‌اند.", "برخی اپراتورها ممکن است نیاز به احراز هویت حضوری داشته باشند."]
  },
  {
    "topic": "Buy SIM",
    "role": "Operator",
    "q": "Do you need the SIM for a phone or a modem?",
    "q_persien": "سیم‌کارت را برای گوشی می‌خواهید یا مودم؟",
    "a": ["For my phone.", "For my home modem."],
    "a_persien": ["برای گوشی‌ام.", "برای مودم خانگی‌ام."]
  },
  {
    "topic": "Buy SIM",
    "role": "Customer",
    "q": "Is there a limit to how many SIMs I can own?",
    "q_persien": "آیا محدودیتی برای تعداد سیم‌کارت‌هایی که می‌توانم داشته باشم وجود دارد؟",
    "a": ["You can have up to 10 active SIMs.", "There's usually a maximum of 3 SIMs per operator."],
    "a_persien": ["شما می‌توانید تا ۱۰ سیم‌کارت فعال داشته باشید.", "معمولاً حداکثر ۳ سیم‌کارت از هر اپراتور می‌توانید داشته باشید."]
  },
  {
    "topic": "Buy SIM",
    "role": "Operator",
    "q": "Are you interested in 4G or 5G SIM?",
    "q_persien": "به سیم‌کارت 4G علاقه دارید یا 5G؟",
    "a": ["4G is enough for me.", "I'd like to try 5G if available."],
    "a_persien": ["4G برای من کافی است.", "اگر 5G موجود باشد، دوست دارم امتحانش کنم."]
  },
  {
    "topic": "Buy SIM",
    "role": "Customer",
    "q": "Can I use the SIM immediately after purchase?",
    "q_persien": "می‌توانم بلافاصله بعد از خرید از سیم‌کارت استفاده کنم؟",
    "a": ["Yes, once it's activated.", "It may take a few minutes to become active."],
    "a_persien": ["بله، به محض فعال شدن.", "ممکن است چند دقیقه طول بکشد تا فعال شود."]
  },
  {
    "topic": "Buy SIM",
    "role": "Operator",
    "q": "Do you want your SIM card delivered or will you pick it up?",
    "q_persien": "می‌خواهید سیم‌کارتتان ارسال شود یا حضوری تحویل می‌گیرید؟",
    "a": ["I'd like it delivered to my address.", "I'll pick it up from your store."],
    "a_persien": ["می‌خواهم به آدرسم ارسال شود.", "از فروشگاه شما تحویل می‌گیرم."]
  },
  {
    "topic": "Buy SIM",
    "role": "Customer",
    "q": "Do you offer eSIM?",
    "q_persien": "آیا سیم‌کارت الکترونیکی (eSIM) هم دارید؟",
    "a": ["Yes, eSIM is available for compatible phones.", "Not yet, but physical SIM is available."],
    "a_persien": ["بله، eSIM برای گوشی‌های سازگار موجود است.", "هنوز نه، اما سیم‌کارت فیزیکی موجود است."]
  },


  {
    "topic": "Change SIM",
    "role": "Customer",
    "q": "My SIM doesn't fit my new phone, can I get a replacement?",
    "q_persien": "سیم‌کارتم به گوشی جدیدم نمی‌خورد، می‌توانم یک سیم‌کارت جایگزین بگیرم؟",
    "a": ["Yes, you can swap it for a compatible size.", "Sure, visit our store for a replacement."],
    "a_persien": ["بله، می‌توانید آن را با یک سایز مناسب تعویض کنید.", "حتماً، برای تعویض به فروشگاه ما مراجعه کنید."]
  },
  {
    "topic": "Change SIM",
    "role": "Operator",
    "q": "Do you want to keep your current number?",
    "q_persien": "می‌خواهید شماره فعلی‌تان را حفظ کنید؟",
    "a": ["Yes, please keep my number.", "No, a new number is fine."],
    "a_persien": ["بله، لطفاً شماره‌ام را حفظ کنید.", "نه، شماره جدید هم خوب است."]
  },
  {
    "topic": "Change SIM",
    "role": "Customer",
    "q": "How much does it cost to change my SIM card?",
    "q_persien": "هزینه تعویض سیم‌کارتم چقدر است؟",
    "a": ["SIM replacement usually costs 10,000 Tomans.", "It might be free depending on your operator."],
    "a_persien": ["تعویض سیم‌کارت معمولاً ۱۰,۰۰۰ تومان هزینه دارد.", "بسته به اپراتورتان ممکن است رایگان باشد."]
  },
  {
    "topic": "Change SIM",
    "role": "Operator",
    "q": "Do you need a 4G upgrade?",
    "q_persien": "نیاز به ارتقا به 4G دارید؟",
    "a": ["Yes, my SIM is old.", "No, my SIM already supports 4G."],
    "a_persien": ["بله، سیم‌کارتم قدیمی است.", "نه، سیم‌کارتم از قبل 4G را پشتیبانی می‌کند."]
  },
  {
    "topic": "Change SIM",
    "role": "Customer",
    "q": "Can I upgrade my SIM to 5G?",
    "q_persien": "می‌توانم سیم‌کارتم را به 5G ارتقا دهم؟",
    "a": ["Yes, bring your current SIM for an upgrade.", "Only if your phone supports 5G."],
    "a_persien": ["بله، سیم‌کارت فعلی‌تان را برای ارتقا بیاورید.", "فقط در صورتی که گوشی‌تان از 5G پشتیبانی کند."]
  },
  {
    "topic": "Change SIM",
    "role": "Operator",
    "q": "Why do you want to change your SIM?",
    "q_persien": "چرا می‌خواهید سیم‌کارتتان را عوض کنید؟",
    "a": ["It's damaged and not working.", "I need a different size for my new phone."],
    "a_persien": ["آسیب دیده و کار نمی‌کند.", "برای گوشی جدیدم به سایز دیگری نیاز دارم."]
  },
  {
    "topic": "Change SIM",
    "role": "Customer",
    "q": "How long does it take to replace my SIM card?",
    "q_persien": "تعویض سیم‌کارت چقدر طول می‌کشد؟",
    "a": ["Usually less than 30 minutes.", "Sometimes it can take up to a day."],
    "a_persien": ["معمولاً کمتر از ۳۰ دقیقه.", "گاهی ممکن است تا یک روز طول بکشد."]
  },
  {
    "topic": "Change SIM",
    "role": "Operator",
    "q": "Did you lose your SIM or is it damaged?",
    "q_persien": "سیم‌کارتتان را گم کرده‌اید یا آسیب دیده است؟",
    "a": ["I lost it.", "It's damaged and unreadable."],
    "a_persien": ["گمش کرده‌ام.", "آسیب دیده و غیرقابل خواندن است."]
  },
  {
    "topic": "Change SIM",
    "role": "Customer",
    "q": "Can someone else collect my replacement SIM for me?",
    "q_persien": "آیا شخص دیگری می‌تواند سیم‌کارت جایگزین من را تحویل بگیرد؟",
    "a": ["Yes, with an authorization letter.", "No, you must come in person with your ID."],
    "a_persien": ["بله، با داشتن وکالت‌نامه.", "نه، باید شخصاً با کارت شناسایی خودتان بیایید."]
  },
  {
    "topic": "Change SIM",
    "role": "Operator",
    "q": "Have you backed up your contacts before swapping SIMs?",
    "q_persien": "آیا قبل از تعویض سیم‌کارت از مخاطبین خود پشتیبان گرفته‌اید؟",
    "a": ["Yes, they're saved to my phone.", "No, I need help with that."],
    "a_persien": ["بله، روی گوشی‌ام ذخیره شده‌اند.", "نه، در این مورد به کمک نیاز دارم."]
  },
  {
    "topic": "Change SIM",
    "role": "Customer",
    "q": "Can I get a replacement SIM delivered?",
    "q_persien": "می‌توانم سیم‌کارت جایگزین را با ارسال پستی دریافت کنم؟",
    "a": ["Yes, we offer delivery in major cities.", "Replacement SIMs are only available in-store."],
    "a_persien": ["بله، ما در شهرهای بزرگ خدمات ارسال داریم.", "سیم‌کارت‌های جایگزین فقط در فروشگاه موجود هستند."]
  },
  {
    "topic": "Change SIM",
    "role": "Operator",
    "q": "Is your current SIM registered in your name?",
    "q_persien": "آیا سیم‌کارت فعلی‌تان به نام خودتان ثبت شده است؟",
    "a": ["Yes, it's registered to me.", "No, it's under someone else's name."],
    "a_persien": ["بله، به نام من ثبت شده.", "نه، به نام شخص دیگری است."]
  },
  {
    "topic": "Change SIM",
    "role": "Customer",
    "q": "Will changing my SIM affect my current plan?",
    "q_persien": "آیا تعویض سیم‌کارتم روی طرح فعلی‌ام تأثیر می‌گذارد؟",
    "a": ["No, your plan remains unchanged.", "Some services might need reactivation."],
    "a_persien": ["نه، طرح شما بدون تغییر باقی می‌ماند.", "برخی از خدمات ممکن است نیاز به فعال‌سازی مجدد داشته باشند."]
  },
  {
    "topic": "Change SIM",
    "role": "Operator",
    "q": "Do you need any help transferring contacts?",
    "q_persien": "برای انتقال مخاطبین به کمک نیاز دارید؟",
    "a": ["Yes, please guide me.", "No, I've already done that."],
    "a_persien": ["بله، لطفاً راهنمایی‌ام کنید.", "نه، قبلاً این کار را انجام داده‌ام."]
  },
  {
    "topic": "Change SIM",
    "role": "Customer",
    "q": "Can I upgrade my SIM for free?",
    "q_persien": "می‌توانم سیم‌کارتم را رایگان ارتقا دهم؟",
    "a": ["Free upgrades are available during promotions.", "Usually there's a small fee."],
    "a_persien": ["ارتقای رایگان در طول جشنواره‌ها امکان‌پذیر است.", "معمولاً هزینه کمی دارد."]
  }
,
    {
        "topic": "Block SIM",
        "role": "Customer",
        "q": "My SIM was stolen, can you block it?",
        "q_persien": "سیم‌کارتم دزدیده شده، می‌توانید مسدودش کنید؟",
        "a": ["Yes, we'll block it immediately.", "Please provide your SIM number to proceed."],
        "a_persien": ["بله، فوراً آن را مسدود خواهیم کرد.", "لطفاً برای ادامه، شماره سیم‌کارت خود را ارائه دهید."]
    },
    {
        "topic": "Block SIM",
        "role": "Operator",
        "q": "Do you want to block both calls and internet?",
        "q_persien": "می‌خواهید هم تماس و هم اینترنت را مسدود کنید؟",
        "a": ["Yes, block all services.", "Just block outgoing calls for now."],
        "a_persien": ["بله، تمام خدمات را مسدود کنید.", "فعلاً فقط تماس‌های خروجی را مسدود کنید."]
    },
    {
        "topic": "Block SIM",
        "role": "Customer",
        "q": "How do I unblock my suspended SIM?",
        "q_persien": "چگونه سیم‌کارت تعلیق شده‌ام را از مسدودی خارج کنم؟",
        "a": ["Visit a service center with your ID.", "Call our support line to reactivate."],
        "a_persien": ["با کارت شناسایی خود به یک مرکز خدمات مراجعه کنید.", "برای فعال‌سازی مجدد با خط پشتیبانی ما تماس بگیرید."]
    },
    {
        "topic": "Block SIM",
        "role": "Operator",
        "q": "Why do you want to block your SIM?",
        "q_persien": "چرا می‌خواهید سیم‌کارت خود را مسدود کنید؟",
        "a": ["It was lost or stolen.", "I'm not using it anymore."],
        "a_persien": ["گم شده یا دزدیده شده است.", "دیگر از آن استفاده نمی‌کنم."]
    },
    {
        "topic": "Block SIM",
        "role": "Customer",
        "q": "How long does it take to unblock my SIM?",
        "q_persien": "رفع مسدودی سیم‌کارتم چقدر طول می‌کشد؟",
        "a": ["Usually within an hour.", "It may take up to 24 hours."],
        "a_persien": ["معمولاً ظرف یک ساعت.", "ممکن است تا ۲۴ ساعت طول بکشد."]
    },
    {
        "topic": "Block SIM",
        "role": "Operator",
        "q": "Do you have your SIM registration details?",
        "q_persien": "آیا اطلاعات ثبت‌نام سیم‌کارت خود را دارید؟",
        "a": ["Yes, I have all my documents.", "No, what do I need?"],
        "a_persien": ["بله، تمام مدارکم را دارم.", "نه، چه چیزی نیاز دارم؟"]
    },
    {
        "topic": "Block SIM",
        "role": "Customer",
        "q": "Can I block my SIM online?",
        "q_persien": "آیا می‌توانم سیم‌کارتم را آنلاین مسدود کنم؟",
        "a": ["Yes, through our website or app.", "You need to call customer service."],
        "a_persien": ["بله، از طریق وب‌سایت یا اپلیکیشن ما.", "باید با خدمات مشتریان تماس بگیرید."]
    },
    {
        "topic": "Block SIM",
        "role": "Operator",
        "q": "Do you remember your SIM's PUK code?",
        "q_persien": "آیا کد PUK سیم‌کارت خود را به یاد دارید؟",
        "a": ["Yes, I have it saved.", "No, I've lost my PUK code."],
        "a_persien": ["بله، آن را ذخیره کرده‌ام.", "نه، کد PUK خود را گم کرده‌ام."]
    },
    {
        "topic": "Block SIM",
        "role": "Customer",
        "q": "Is there a fee for unblocking my SIM?",
        "q_persien": "آیا رفع مسدودی سیم‌کارتم هزینه‌ای دارد؟",
        "a": ["No, unblocking is free.", "Some operators may charge a small fee."],
        "a_persien": ["نه، رفع مسدودی رایگان است.", "برخی اپراتورها ممکن است هزینه کمی دریافت کنند."]
    },
    {
        "topic": "Block SIM",
        "role": "Operator",
        "q": "Did you enter the wrong PIN multiple times?",
        "q_persien": "آیا پین را چندین بار اشتباه وارد کرده‌اید؟",
        "a": ["Yes, my SIM is now blocked.", "No, it was blocked for another reason."],
        "a_persien": ["بله، الان سیم‌کارتم مسدود شده است.", "نه، به دلیل دیگری مسدود شد."]
    },
    {
        "topic": "Block SIM",
        "role": "Customer",
        "q": "Can you block my SIM temporarily?",
        "q_persien": "می‌توانید سیم‌کارتم را موقتاً مسدود کنید؟",
        "a": ["Yes, we can suspend it temporarily.", "We only offer permanent blocks."],
        "a_persien": ["بله، می‌توانیم آن را به طور موقت تعلیق کنیم.", "ما فقط مسدودی دائمی ارائه می‌دهیم."]
    },
    {
        "topic": "Block SIM",
        "role": "Operator",
        "q": "Do you need a new SIM after blocking?",
        "q_persien": "آیا بعد از مسدود کردن به سیم‌کارت جدیدی نیاز دارید؟",
        "a": ["Yes, please issue a new one.", "No, just unblock my current SIM."],
        "a_persien": ["بله، لطفاً یک سیم‌کارت جدید صادر کنید.", "نه، فقط سیم‌کارت فعلی‌ام را رفع مسدودی کنید."]
    },
    {
        "topic": "Block SIM",
        "role": "Customer",
        "q": "Can someone else unblock my SIM for me?",
        "q_persien": "آیا شخص دیگری می‌تواند سیم‌کارت من را رفع مسدودی کند؟",
        "a": ["No, the owner must do it.", "Yes, with proper authorization."],
        "a_persien": ["نه، مالک باید این کار را انجام دهد.", "بله، با داشتن مجوز مناسب."]
    },
    {
        "topic": "Block SIM",
        "role": "Operator",
        "q": "Is your SIM under your name?",
        "q_persien": "آیا سیم‌کارت به نام شماست؟",
        "a": ["Yes, it's registered to me.", "No, it's under my family member's name."],
        "a_persien": ["بله، به نام من ثبت شده است.", "نه، به نام یکی از اعضای خانواده‌ام است."]
    },
    {
        "topic": "Block SIM",
        "role": "Customer",
        "q": "What should I do if my blocked SIM is found?",
        "q_persien": "اگر سیم‌کارت مسدود شده‌ام پیدا شد چه کار کنم؟",
        "a": ["Contact us to reactivate it.", "Dispose of the SIM if it's already replaced."],
        "a_persien": ["برای فعال‌سازی مجدد با ما تماس بگیرید.", "اگر قبلاً جایگزین شده است، سیم‌کارت را دور بیندازید."]
    },

   
    {
        "topic": "Recharge",
        "role": "Customer",
        "q": "How can I recharge my SIM balance?",
        "q_persien": "چگونه می‌توانم موجودی سیم‌کارتم را شارژ کنم؟",
        "a": ["Use our mobile app or USSD code.", "Buy a recharge card from a store."],
        "a_persien": ["از اپلیکیشن موبایل یا کد USSD ما استفاده کنید.", "از یک فروشگاه کارت شارژ بخرید."]
    },
    {
        "topic": "Recharge",
        "role": "Operator",
        "q": "Would you like to recharge online or via voucher?",
        "q_persien": "می‌خواهید آنلاین شارژ کنید یا از طریق کارت شارژ؟",
        "a": ["Online is more convenient.", "I prefer using scratch cards."],
        "a_persien": ["آنلاین راحت‌تر است.", "ترجیح می‌دهم از کارت‌های شارژ خراشیدنی استفاده کنم."]
    },
    {
        "topic": "Recharge",
        "role": "Customer",
        "q": "What are the available recharge amounts?",
        "q_persien": "مبالغ شارژ موجود چقدر است؟",
        "a": ["Recharge starts from 10,000 Tomans.", "You can choose from various denominations."],
        "a_persien": ["شارژ از ۱۰,۰۰۰ تومان شروع می‌شود.", "می‌توانید از مبالغ مختلف انتخاب کنید."]
    },
    {
        "topic": "Recharge",
        "role": "Operator",
        "q": "Do you want auto-recharge?",
        "q_persien": "آیا شارژ خودکار می‌خواهید؟",
        "a": ["Yes, set up automatic recharge.", "No, I'll recharge manually."],
        "a_persien": ["بله، شارژ خودکار را تنظیم کنید.", "نه، دستی شارژ می‌کنم."]
    },
    {
        "topic": "Recharge",
        "role": "Customer",
        "q": "Can I transfer balance to another number?",
        "q_persien": "آیا می‌توانم به شماره دیگری اعتبار انتقال دهم؟",
        "a": ["Yes, use our balance transfer service.", "No, transfers are not supported."],
        "a_persien": ["بله، از سرویس انتقال اعتبار ما استفاده کنید.", "نه، انتقال پشتیبانی نمی‌شود."]
    },
    {
        "topic": "Recharge",
        "role": "Operator",
        "q": "Do you want to recharge credit or data?",
        "q_persien": "می‌خواهید اعتبار شارژ کنید یا دیتا؟",
        "a": ["Just credit.", "I need more data."],
        "a_persien": ["فقط اعتبار.", "به دیتای بیشتری نیاز دارم."]
    },
    {
        "topic": "Recharge",
        "role": "Customer",
        "q": "Can I get a receipt for my recharge?",
        "q_persien": "آیا می‌توانم برای شارژم رسید بگیرم؟",
        "a": ["Yes, we can send it via SMS.", "You can view it in your account online."],
        "a_persien": ["بله، می‌توانیم آن را از طریق پیامک ارسال کنیم.", "می‌توانید آن را در حساب آنلاین خود مشاهده کنید."]
    },
    {
        "topic": "Recharge",
        "role": "Operator",
        "q": "Is your recharge not reflecting?",
        "q_persien": "آیا شارژ شما اعمال نشده است؟",
        "a": ["No, I haven't received it yet.", "Yes, the balance updated instantly."],
        "a_persien": ["نه، هنوز دریافتش نکرده‌ام.", "بله، موجودی فوراً به‌روز شد."]
    },
    {
        "topic": "Recharge",
        "role": "Customer",
        "q": "Are there any discounts for online recharge?",
        "q_persien": "آیا برای شارژ آنلاین تخفیفی وجود دارد؟",
        "a": ["Yes, sometimes we have special offers.", "Discounts are not available now."],
        "a_persien": ["بله، گاهی اوقات پیشنهادات ویژه‌ای داریم.", "در حال حاضر تخفیفی موجود نیست."]
    },
    {
        "topic": "Recharge",
        "role": "Operator",
        "q": "Did you enter the recharge code correctly?",
        "q_persien": "آیا کد شارژ را به درستی وارد کردید؟",
        "a": ["Yes, I double-checked it.", "No, let me try again."],
        "a_persien": ["بله، دوباره بررسی کردم.", "نه، بگذارید دوباره امتحان کنم."]
    },
    {
        "topic": "Recharge",
        "role": "Customer",
        "q": "Can I recharge using my bank card?",
        "q_persien": "آیا می‌توانم با کارت بانکی‌ام شارژ کنم؟",
        "a": ["Yes, use our payment gateway.", "No, only vouchers are accepted."],
        "a_persien": ["بله، از درگاه پرداخت ما استفاده کنید.", "نه، فقط کارت شارژ پذیرفته می‌شود."]
    },
    {
        "topic": "Recharge",
        "role": "Operator",
        "q": "Is your SIM prepaid or postpaid?",
        "q_persien": "سیم‌کارت شما اعتباری است یا دائمی؟",
        "a": ["It's prepaid.", "It's postpaid."],
        "a_persien": ["اعتباری است.", "دائمی است."]
    },
    {
        "topic": "Recharge",
        "role": "Customer",
        "q": "Can I recharge my friend's SIM?",
        "q_persien": "آیا می‌توانم سیم‌کارت دوستم را شارژ کنم؟",
        "a": ["Yes, enter their number when recharging.", "Only the account holder can recharge."],
        "a_persien": ["بله، هنگام شارژ شماره او را وارد کنید.", "فقط صاحب حساب می‌تواند شارژ کند."]
    },
    {
        "topic": "Recharge",
        "role": "Operator",
        "q": "Would you like a recharge reminder?",
        "q_persien": "آیا یادآور شارژ می‌خواهید؟",
        "a": ["Yes, remind me before balance runs out.", "No, I don't need reminders."],
        "a_persien": ["بله، قبل از تمام شدن موجودی به من یادآوری کنید.", "نه، نیازی به یادآوری ندارم."]
    },
    {
        "topic": "Recharge",
        "role": "Customer",
        "q": "What should I do if the recharge code is invalid?",
        "q_persien": "اگر کد شارژ نامعتبر بود چه کار کنم؟",
        "a": ["Check if you entered it correctly.", "Contact customer support for help."],
        "a_persien": ["بررسی کنید که آیا آن را به درستی وارد کرده‌اید.", "برای کمک با پشتیبانی مشتریان تماس بگیرید."]
    },

    {
        "topic": "Internet",
        "role": "Customer",
        "q": "What internet packages are available?",
        "q_persien": "چه بسته‌های اینترنتی موجود است؟",
        "a": ["We offer daily, weekly, and monthly plans.", "Visit our website for full details."],
        "a_persien": ["ما طرح‌های روزانه، هفتگی و ماهانه ارائه می‌دهیم.", "برای جزئیات کامل به وب‌سایت ما مراجعه کنید."]
    },
    {
        "topic": "Internet",
        "role": "Operator",
        "q": "How much data do you need?",
        "q_persien": "چه مقدار دیتا نیاز دارید؟",
        "a": ["At least 10GB per month.", "Just a small package for basic use."],
        "a_persien": ["حداقل ۱۰ گیگابایت در ماه.", "فقط یک بسته کوچک برای استفاده معمولی."]
    },
    {
        "topic": "Internet",
        "role": "Customer",
        "q": "How do I check my data balance?",
        "q_persien": "چگونه موجودی دیتای خود را بررسی کنم؟",
        "a": ["Dial *555# for your balance.", "Use our app to check data usage."],
        "a_persien": ["برای اطلاع از موجودی خود #۵۵۵* را شماره‌گیری کنید.", "از اپلیکیشن ما برای بررسی مصرف دیتا استفاده کنید."]
    },
    {
        "topic": "Internet",
        "role": "Operator",
        "q": "Are you interested in unlimited packages?",
        "q_persien": "آیا به بسته‌های نامحدود علاقه دارید؟",
        "a": ["Yes, unlimited would be great.", "No, limited data is enough."],
        "a_persien": ["بله، نامحدود عالی خواهد بود.", "نه، دیتای محدود کافی است."]
    },
    {
        "topic": "Internet",
        "role": "Customer",
        "q": "Can I share my data with others?",
        "q_persien": "آیا می‌توانم دیتای خود را با دیگران به اشتراک بگذارم؟",
        "a": ["Yes, data sharing is supported.", "No, this feature isn't available."],
        "a_persien": ["بله، اشتراک‌گذاری دیتا پشتیبانی می‌شود.", "نه، این ویژگی در دسترس نیست."]
    },
    {
        "topic": "Internet",
        "role": "Operator",
        "q": "Do you want a combo (voice+data) package?",
        "q_persien": "آیا بسته ترکیبی (صدا + دیتا) می‌خواهید؟",
        "a": ["Yes, a combo works for me.", "No, just data please."],
        "a_persien": ["بله، بسته ترکیبی برایم مناسب است.", "نه، لطفاً فقط دیتا."]
    },
    {
        "topic": "Internet",
        "role": "Customer",
        "q": "Can I buy extra data if I run out?",
        "q_persien": "اگر دیتایم تمام شد می‌توانم دیتای اضافی بخرم؟",
        "a": ["Yes, top-up packages are available.", "Data will be throttled unless you buy more."],
        "a_persien": ["بله، بسته‌های افزایشی موجود است.", "مگر اینکه بیشتر بخرید، سرعت دیتا کاهش می‌یابد."]
    },
    {
        "topic": "Internet",
        "role": "Operator",
        "q": "Is your SIM LTE compatible?",
        "q_persien": "آیا سیم‌کارت شما با LTE سازگار است؟",
        "a": ["Yes, my SIM is LTE-ready.", "No, I think it's only 3G."],
        "a_persien": ["بله، سیم‌کارت من آماده LTE است.", "نه، فکر می‌کنم فقط 3G است."]
    },
    {
        "topic": "Internet",
        "role": "Customer",
        "q": "How can I activate an internet package?",
        "q_persien": "چگونه می‌توانم یک بسته اینترنتی را فعال کنم؟",
        "a": ["Send the package code via SMS.", "Activate through your online account."],
        "a_persien": ["کد بسته را از طریق پیامک ارسال کنید.", "از طریق حساب آنلاین خود فعال کنید."]
    },
    {
        "topic": "Internet",
        "role": "Operator",
        "q": "Do you use internet mostly at home or outside?",
        "q_persien": "بیشتر در خانه از اینترنت استفاده می‌کنید یا بیرون؟",
        "a": ["Mostly at home.", "I use it everywhere."],
        "a_persien": ["بیشتر در خانه.", "همه جا از آن استفاده می‌کنم."]
    },
    {
        "topic": "Internet",
        "role": "Customer",
        "q": "Are there any student discounts?",
        "q_persien": "آیا تخفیف دانشجویی وجود دارد؟",
        "a": ["Yes, special plans for students are available.", "No, regular plans only."],
        "a_persien": ["بله، طرح‌های ویژه‌ای برای دانشجویان موجود است.", "نه، فقط طرح‌های معمولی."]
    },
    {
        "topic": "Internet",
        "role": "Operator",
        "q": "How often do you run out of data?",
        "q_persien": "هر چند وقت یک‌بار دیتای شما تمام می‌شود؟",
        "a": ["Almost every month.", "Rarely, my package is enough."],
        "a_persien": ["تقریباً هر ماه.", "به ندرت، بسته‌ام کافی است."]
    },
    {
        "topic": "Internet",
        "role": "Customer",
        "q": "Can I pause my internet package?",
        "q_persien": "آیا می‌توانم بسته اینترنتی خود را متوقف کنم؟",
        "a": ["No, packages are continuous.", "Some plans can be paused temporarily."],
        "a_persien": ["نه، بسته‌ها پیوسته هستند.", "برخی طرح‌ها را می‌توان موقتاً متوقف کرد."]
    },
    {
        "topic": "Internet",
        "role": "Operator",
        "q": "Do you want faster internet for streaming?",
        "q_persien": "آیا برای پخش آنلاین ویدیو به اینترنت سریع‌تری نیاز دارید؟",
        "a": ["Yes, I stream a lot.", "No, normal speed is fine."],
        "a_persien": ["بله، من زیاد استریم می‌کنم.", "نه، سرعت معمولی خوب است."]
    },
    {
        "topic": "Internet",
        "role": "Customer",
        "q": "Is my SIM suitable for use in a modem?",
        "q_persien": "آیا سیم‌کارت من برای استفاده در مودم مناسب است؟",
        "a": ["Yes, it's data-enabled.", "No, it's only for phones."],
        "a_persien": ["بله، قابلیت دیتا دارد.", "نه، فقط برای گوشی است."]
    },
    {
        "topic": "Internet",
        "role": "Operator",
        "q": "Would you like to set a data usage limit?",
        "q_persien": "آیا می‌خواهید محدودیت مصرف دیتا تعیین کنید؟",
        "a": ["Yes, please set a monthly limit.", "No, I manage usage myself."],
        "a_persien": ["بله، لطفاً یک محدودیت ماهانه تعیین کنید.", "نه، خودم مصرف را مدیریت می‌کنم."]
    },
    {
        "topic": "Internet",
        "role": "Customer",
        "q": "Do you offer FD-LTE or TD-LTE?",
        "q_persien": "شما FD-LTE ارائه می‌دهید یا TD-LTE؟",
        "a": ["We offer both FD-LTE and TD-LTE SIMs.", "Only FD-LTE is available in your area."],
        "a_persien": ["ما هم سیم‌کارت‌های FD-LTE و هم TD-LTE ارائه می‌دهیم.", "در منطقه شما فقط FD-LTE در دسترس است."]
    },
    {
        "topic": "Internet",
        "role": "Operator",
        "q": "Is your phone compatible with 5G?",
        "q_persien": "آیا گوشی شما با 5G سازگار است؟",
        "a": ["Yes, it's a new model.", "No, it's only 4G capable."],
        "a_persien": ["بله، مدل جدیدی است.", "نه، فقط قابلیت 4G دارد."]
    },
    {
        "topic": "Internet",
        "role": "Customer",
        "q": "Can I switch from TD-LTE to FD-LTE?",
        "q_persien": "آیا می‌توانم از TD-LTE به FD-LTE تغییر دهم؟",
        "a": ["Yes, you can change your package.", "Only if your modem supports FD-LTE."],
        "a_persien": ["بله، می‌توانید بسته خود را تغییر دهید.", "فقط اگر مودم شما از FD-LTE پشتیبانی کند."]
    },
    {
        "topic": "Internet",
        "role": "Operator",
        "q": "Do you need help setting up your modem?",
        "q_persien": "برای راه‌اندازی مودم خود به کمک نیاز دارید؟",
        "a": ["Yes, I need setup instructions.", "No, I can handle it myself."],
        "a_persien": ["بله، به دستورالعمل راه‌اندازی نیاز دارم.", "نه، خودم می‌توانم انجام دهم."]
    },

 
    {
        "topic": "Modem",
        "role": "Customer",
        "q": "Which modem is best for my SIM?",
        "q_persien": "کدام مودم برای سیم‌کارت من بهتر است؟",
        "a": ["Depends on your internet usage.", "We recommend compatible models from our list."],
        "a_persien": ["بستگی به میزان مصرف اینترنت شما دارد.", "ما مدل‌های سازگار را از لیست خود توصیه می‌کنیم."]
    },
    {
        "topic": "Modem",
        "role": "Operator",
        "q": "Do you want a portable or fixed modem?",
        "q_persien": "مودم قابل حمل می‌خواهید یا ثابت؟",
        "a": ["Portable for travel.", "Fixed for home use."],
        "a_persien": ["قابل حمل برای سفر.", "ثابت برای استفاده در خانه."]
    },
    {
        "topic": "Modem",
        "role": "Customer",
        "q": "How do I configure my modem settings?",
        "q_persien": "چگونه تنظیمات مودم خود را پیکربندی کنم؟",
        "a": ["Follow our online setup guide.", "Contact support for step-by-step help."],
        "a_persien": ["راهنمای راه‌اندازی آنلاین ما را دنبال کنید.", "برای کمک گام به گام با پشتیبانی تماس بگیرید."]
    },
    {
        "topic": "Modem",
        "role": "Operator",
        "q": "Is your modem locked to any operator?",
        "q_persien": "آیا مودم شما قفل اپراتور خاصی است؟",
        "a": ["No, it's unlocked.", "Yes, it's locked to another operator."],
        "a_persien": ["نه، آنلاک است.", "بله، قفل اپراتور دیگری است."]
    },
    {
        "topic": "Modem",
        "role": "Customer",
        "q": "Can I use the SIM in any modem?",
        "q_persien": "آیا می‌توانم از این سیم‌کارت در هر مودمی استفاده کنم؟",
        "a": ["Yes, if the modem is unlocked.", "No, it must be compatible with our network."],
        "a_persien": ["بله، اگر مودم آنلاک باشد.", "نه، باید با شبکه ما سازگار باشد."]
    },
    {
        "topic": "Modem",
        "role": "Operator",
        "q": "Is your modem 4G or 5G capable?",
        "q_persien": "آیا مودم شما قابلیت 4G دارد یا 5G؟",
        "a": ["It's a 4G modem.", "It's 5G ready."],
        "a_persien": ["این یک مودم 4G است.", "آماده 5G است."]
    },
    {
        "topic": "Modem",
        "role": "Customer",
        "q": "What should I do if my modem doesn't detect the SIM?",
        "q_persien": "اگر مودم من سیم‌کارت را شناسایی نکرد چه کار کنم؟",
        "a": ["Restart and reinsert the SIM.", "Try the SIM in another device to test."],
        "a_persien": ["مودم را ری‌استارت کرده و سیم‌کارت را دوباره جا بزنید.", "سیم‌کارت را برای تست در دستگاه دیگری امتحان کنید."]
    },
    {
        "topic": "Modem",
        "role": "Operator",
        "q": "Are you getting any error messages?",
        "q_persien": "آیا پیام خطایی دریافت می‌کنید؟",
        "a": ["Yes, it says 'No SIM'.", "No, but there's no internet connection."],
        "a_persien": ["بله، می‌گوید 'سیم‌کارت وجود ندارد'.", "نه، اما اتصال اینترنت وجود ندارد."]
    },
    {
        "topic": "Modem",
        "role": "Customer",
        "q": "How do I reset my modem?",
        "q_persien": "چگونه مودم خود را ریست کنم؟",
        "a": ["Hold the reset button for 10 seconds.", "Check the manual for specific instructions."],
        "a_persien": ["دکمه ریست را به مدت ۱۰ ثانیه نگه دارید.", "برای دستورالعمل‌های خاص، دفترچه راهنما را بررسی کنید."]
    },
    {
        "topic": "Modem",
        "role": "Operator",
        "q": "Do you need a new modem or just the SIM?",
        "q_persien": "مودم جدید نیاز دارید یا فقط سیم‌کارت؟",
        "a": ["Just the SIM for now.", "I'd like a modem package too."],
        "a_persien": ["فعلاً فقط سیم‌کارت.", "بسته مودم هم می‌خواهم."]
    },
    {
        "topic": "Modem",
        "role": "Customer",
        "q": "Can I use my phone as a modem?",
        "q_persien": "آیا می‌توانم از گوشی خود به عنوان مودم استفاده کنم؟",
        "a": ["Yes, enable hotspot mode.", "Some plans may not support tethering."],
        "a_persien": ["بله، حالت هات‌اسپات را فعال کنید.", "برخی طرح‌ها ممکن است از تترینگ (اشتراک‌گذاری اینترنت) پشتیبانی نکنند."]
    },
    {
        "topic": "Modem",
        "role": "Operator",
        "q": "Have you updated your modem's firmware?",
        "q_persien": "آیا فریم‌ور مودم خود را به‌روزرسانی کرده‌اید؟",
        "a": ["No, I need help updating it.", "Yes, it's up to date."],
        "a_persien": ["نه، برای به‌روزرسانی آن به کمک نیاز دارم.", "بله، به‌روز است."]
    },
    {
        "topic": "Modem",
        "role": "Customer",
        "q": "Does your network support WiFi modems?",
        "q_persien": "آیا شبکه شما از مودم‌های وای‌فای پشتیبانی می‌کند؟",
        "a": ["Yes, we support WiFi modems.", "No, only USB modems are compatible."],
        "a_persien": ["بله، ما از مودم‌های وای‌فای پشتیبانی می‌کنیم.", "نه، فقط مودم‌های USB سازگار هستند."]
    },
    {
        "topic": "Modem",
        "role": "Operator",
        "q": "Do you need technical support for setup?",
        "q_persien": "آیا برای راه‌اندازی به پشتیبانی فنی نیاز دارید؟",
        "a": ["Yes, please assist me.", "No, I'll manage on my own."],
        "a_persien": ["بله، لطفاً به من کمک کنید.", "نه، خودم مدیریت می‌کنم."]
    },
    {
        "topic": "Modem",
        "role": "Customer",
        "q": "Can I buy a modem with installments?",
        "q_persien": "آیا می‌توانم مودم را قسطی بخرم؟",
        "a": ["Yes, we offer installment plans.", "No, full payment is required."],
        "a_persien": ["بله، ما طرح‌های اقساطی ارائه می‌دهیم.", "نه، پرداخت کامل لازم است."]
    },
    {
        "topic": "Modem",
        "role": "Operator",
        "q": "Would you like a bundle (SIM+modem)?",
        "q_persien": "آیا بسته ترکیبی (سیم‌کارت + مودم) می‌خواهید؟",
        "a": ["Yes, what's included?", "No, just the SIM card."],
        "a_persien": ["بله، شامل چه چیزهایی است؟", "نه، فقط سیم‌کارت."]
    },
    {
        "topic": "Modem",
        "role": "Customer",
        "q": "Is there a warranty on the modem?",
        "q_persien": "آیا مودم گارانتی دارد؟",
        "a": ["Yes, one-year warranty applies.", "Warranty depends on the brand."],
        "a_persien": ["بله، گارانتی یک ساله دارد.", "گارانتی بستگی به برند دارد."]
    },
    {
        "topic": "Modem",
        "role": "Operator",
        "q": "Do you need indoor or outdoor coverage?",
        "q_persien": "به پوشش داخلی نیاز دارید یا خارجی؟",
        "a": ["Indoor coverage is more important.", "Both are important to me."],
        "a_persien": ["پوشش داخلی مهم‌تر است.", "هر دو برایم مهم هستند."]
    },
    {
        "topic": "Modem",
        "role": "Customer",
        "q": "Can I upgrade my current modem?",
        "q_persien": "آیا می‌توانم مودم فعلی خود را ارتقا دهم؟",
        "a": ["Yes, trade-in options are available.", "Upgrades depend on the modem model."],
        "a_persien": ["بله، گزینه‌های تعویض (طرح تعویض کهنه با نو) موجود است.", "ارتقا بستگی به مدل مودم دارد."]
    },
    {
        "topic": "Modem",
        "role": "Operator",
        "q": "Do you want to test modem speed before purchase?",
        "q_persien": "آیا می‌خواهید سرعت مودم را قبل از خرید تست کنید؟",
        "a": ["Yes, that's a good idea.", "No, I trust your recommendation."],
        "a_persien": ["بله، ایده خوبی است.", "نه، به توصیه شما اعتماد دارم."]
    },


    {
        "topic": "Coverage",
        "role": "Customer",
        "q": "Is your network available in my area?",
        "q_persien": "آیا شبکه شما در منطقه من در دسترس است؟",
        "a": ["Yes, coverage is strong there.", "Coverage may be limited in that region."],
        "a_persien": ["بله، پوشش در آنجا قوی است.", "پوشش در آن منطقه ممکن است محدود باشد."]
    },
    {
        "topic": "Coverage",
        "role": "Operator",
        "q": "Can you provide your location for coverage check?",
        "q_persien": "می‌توانید موقعیت مکانی خود را برای بررسی پوشش ارائه دهید؟",
        "a": ["I'm in Tehran, District 1.", "My location is Rasht, please check."],
        "a_persien": ["من در تهران، منطقه ۱ هستم.", "موقعیت من رشت است، لطفاً بررسی کنید."]
    },
    {
        "topic": "Coverage",
        "role": "Customer",
        "q": "Why is my signal weak?",
        "q_persien": "چرا سیگنال من ضعیف است؟",
        "a": ["There may be network issues in your area.", "Try restarting your phone."],
        "a_persien": ["ممکن است مشکلات شبکه‌ای در منطقه شما وجود داشته باشد.", "گوشی خود را ری‌استارت کنید."]
    },
    {
        "topic": "Coverage",
        "role": "Operator",
        "q": "Are you indoors or outdoors?",
        "q_persien": "شما داخل ساختمان هستید یا بیرون؟",
        "a": ["Indoors, at my home.", "I'm outside, but still have low signal."],
        "a_persien": ["داخل ساختمان، در خانه‌ام.", "بیرون هستم، اما هنوز سیگنال ضعیفی دارم."]
    },
    {
        "topic": "Coverage",
        "role": "Customer",
        "q": "Does your SIM work in other cities?",
        "q_persien": "آیا سیم‌کارت شما در شهرهای دیگر کار می‌کند؟",
        "a": ["Yes, it works nationwide.", "No, only in some areas."],
        "a_persien": ["بله، در سراسر کشور کار می‌کند.", "نه، فقط در برخی مناطق."]
    },
    {
        "topic": "Coverage",
        "role": "Operator",
        "q": "Do you experience frequent disconnections?",
        "q_persien": "آیا قطعی‌های مکرر را تجربه می‌کنید؟",
        "a": ["Yes, the connection drops often.", "No, it's mostly stable."],
        "a_persien": ["بله، اتصال اغلب قطع می‌شود.", "نه، بیشتر پایدار است."]
    },
    {
        "topic": "Coverage",
        "role": "Customer",
        "q": "How can I improve my signal?",
        "q_persien": "چگونه می‌توانم سیگنال خود را بهبود بخشم؟",
        "a": ["Try moving closer to a window.", "Use an external antenna with your modem."],
        "a_persien": ["سعی کنید به پنجره نزدیک‌تر شوید.", "از یک آنتن خارجی با مودم خود استفاده کنید."]
    },
    {
        "topic": "Coverage",
        "role": "Operator",
        "q": "Does your device show 'No Service'?",
        "q_persien": "آیا دستگاه شما 'عدم سرویس' (No Service) نشان می‌دهد؟",
        "a": ["Yes, there's no signal at all.", "No, but the signal is very weak."],
        "a_persien": ["بله، اصلاً سیگنالی وجود ندارد.", "نه، اما سیگنال بسیار ضعیف است."]
    },
    {
        "topic": "Coverage",
        "role": "Customer",
        "q": "Can I report a coverage problem?",
        "q_persien": "آیا می‌توانم مشکل پوشش‌دهی را گزارش دهم؟",
        "a": ["Yes, please provide the location details.", "You can use our app to report issues."],
        "a_persien": ["بله، لطفاً جزئیات موقعیت مکانی را ارائه دهید.", "می‌توانید از اپلیکیشن ما برای گزارش مشکلات استفاده کنید."]
    },
    {
        "topic": "Coverage",
        "role": "Operator",
        "q": "Do you need help with network settings?",
        "q_persien": "آیا برای تنظیمات شبکه به کمک نیاز دارید؟",
        "a": ["Yes, please guide me.", "No, I have the settings correct."],
        "a_persien": ["بله، لطفاً راهنمایی‌ام کنید.", "نه، تنظیماتم درست است."]
    },
    {
        "topic": "Coverage",
        "role": "Customer",
        "q": "Is there better coverage with another operator?",
        "q_persien": "آیا پوشش‌دهی با اپراتور دیگری بهتر است؟",
        "a": ["Yes, I get better signal from a different operator.", "No, your network is the best here."],
        "a_persien": ["بله، از یک اپراتور دیگر سیگنال بهتری می‌گیرم.", "نه، شبکه شما اینجا بهترین است."]
    },
    {
        "topic": "Coverage",
        "role": "Operator",
        "q": "Are you using an old SIM card?",
        "q_persien": "آیا از سیم‌کارت قدیمی استفاده می‌کنید؟",
        "a": ["Yes, it's quite old.", "No, it's a new SIM."],
        "a_persien": ["بله، خیلی قدیمی است.", "نه، سیم‌کارت جدیدی است."]
    },
    {
        "topic": "Coverage",
        "role": "Customer",
        "q": "Are network boosters allowed?",
        "q_persien": "آیا تقویت‌کننده‌های شبکه مجاز هستند؟",
        "a": ["You can use boosters with permission.", "Network boosters are not permitted."],
        "a_persien": ["می‌توانید با مجوز از تقویت‌کننده‌ها استفاده کنید.", "تقویت‌کننده‌های شبکه مجاز نیستند."]
    },
    {
        "topic": "Coverage",
        "role": "Operator",
        "q": "Do you travel a lot?",
        "q_persien": "آیا زیاد سفر می‌کنید؟",
        "a": ["Yes, I need good coverage everywhere.", "No, mostly in one place."],
        "a_persien": ["بله، به پوشش خوب در همه جا نیاز دارم.", "نه، بیشتر در یک مکان هستم."]
    },
    {
        "topic": "Coverage",
        "role": "Customer",
        "q": "How do I enable roaming?",
        "q_persien": "چگونه رومینگ را فعال کنم؟",
        "a": ["Enable it from your phone's settings.", "Contact us to activate roaming."],
        "a_persien": ["آن را از تنظیمات گوشی خود فعال کنید.", "برای فعال کردن رومینگ با ما تماس بگیرید."]
    },
    {
        "topic": "Coverage",
        "role": "Operator",
        "q": "Do you want to check coverage for rural areas?",
        "q_persien": "آیا می‌خواهید پوشش‌دهی را برای مناطق روستایی بررسی کنید؟",
        "a": ["Yes, especially villages.", "No, just urban areas."],
        "a_persien": ["بله، به خصوص روستاها.", "نه، فقط مناطق شهری."]
    },
    {
        "topic": "Coverage",
        "role": "Customer",
        "q": "What should I do if my SIM isn't recognized in another city?",
        "q_persien": "اگر سیم‌کارتم در شهر دیگری شناسایی نشد چه کار کنم؟",
        "a": ["Restart your device and try again.", "Check if roaming is enabled."],
        "a_persien": ["دستگاه خود را ری‌استارت کرده و دوباره امتحان کنید.", "بررسی کنید که آیا رومینگ فعال است."]
    },
    {
        "topic": "Coverage",
        "role": "Operator",
        "q": "Have you updated your device settings?",
        "q_persien": "آیا تنظیمات دستگاه خود را به‌روزرسانی کرده‌اید؟",
        "a": ["No, please help me update.", "Yes, but no improvement."],
        "a_persien": ["نه، لطفاً برای به‌روزرسانی به من کمک کنید.", "بله، اما بهبودی حاصل نشد."]
    },
    {
        "topic": "Coverage",
        "role": "Customer",
        "q": "Can you guarantee signal in elevators?",
        "q_persien": "آیا می‌توانید سیگنال در آسانسورها را تضمین کنید؟",
        "a": ["Unfortunately, signals may drop in elevators.", "No operator can guarantee that."],
        "a_persien": ["متاسفانه، سیگنال‌ها ممکن است در آسانسورها قطع شوند.", "هیچ اپراتوری نمی‌تواند آن را تضمین کند."]
    },
    {
        "topic": "Coverage",
        "role": "Operator",
        "q": "Do you need a signal booster?",
        "q_persien": "آیا به تقویت‌کننده سیگنال نیاز دارید؟",
        "a": ["Yes, please recommend one.", "No, just basic coverage is enough."],
        "a_persien": ["بله، لطفاً یکی را توصیه کنید.", "نه، فقط پوشش اولیه کافی است."]
    },


    {
        "topic": "SIM Swap",
        "role": "Customer",
        "q": "Can I transfer my number to a new SIM?",
        "q_persien": "آیا می‌توانم شماره خود را به یک سیم‌کارت جدید منتقل کنم؟",
        "a": ["Yes, via SIM swap process.", "You must verify your identity first."],
        "a_persien": ["بله، از طریق فرآیند تعویض سیم‌کارت.", "ابتدا باید هویت خود را تأیید کنید."]
    },
    {
        "topic": "SIM Swap",
        "role": "Operator",
        "q": "Is your old SIM still active?",
        "q_persien": "آیا سیم‌کارت قدیمی شما هنوز فعال است؟",
        "a": ["Yes, but I want to swap.", "No, it's not working."],
        "a_persien": ["بله، اما می‌خواهم تعویض کنم.", "نه، کار نمی‌کند."]
    },
    {
        "topic": "SIM Swap",
        "role": "Customer",
        "q": "How do I start a SIM swap?",
        "q_persien": "چگونه فرآیند تعویض سیم‌کارت را شروع کنم؟",
        "a": ["Visit a service center with your ID.", "Request online and confirm via SMS."],
        "a_persien": ["با کارت شناسایی خود به یک مرکز خدمات مراجعه کنید.", "آنلاین درخواست دهید و از طریق پیامک تأیید کنید."]
    },
    {
        "topic": "SIM Swap",
        "role": "Operator",
        "q": "Do you need to change your SIM due to damage?",
        "q_persien": "آیا به دلیل آسیب‌دیدگی نیاز به تعویض سیم‌کارت دارید؟",
        "a": ["Yes, it's damaged.", "No, I just want to upgrade."],
        "a_persien": ["بله، آسیب دیده است.", "نه، فقط می‌خواهم ارتقا دهم."]
    },
    {
        "topic": "SIM Swap",
        "role": "Customer",
        "q": "Can I keep all my old settings after swap?",
        "q_persien": "آیا می‌توانم بعد از تعویض، تمام تنظیمات قدیمی خود را حفظ کنم؟",
        "a": ["Some settings may need to be reconfigured.", "Contacts stored on SIM may not transfer."],
        "a_persien": ["برخی تنظیمات ممکن است نیاز به پیکربندی مجدد داشته باشند.", "مخاطبین ذخیره شده روی سیم‌کارت ممکن است منتقل نشوند."]
    },
    {
        "topic": "SIM Swap",
        "role": "Operator",
        "q": "Is the SIM registered in your name?",
        "q_persien": "آیا سیم‌کارت به نام شما ثبت شده است؟",
        "a": ["Yes, it's my SIM.", "No, it's in someone else's name."],
        "a_persien": ["بله، سیم‌کارت من است.", "نه، به نام شخص دیگری است."]
    },
    {
        "topic": "SIM Swap",
        "role": "Customer",
        "q": "How long does a SIM swap take?",
        "q_persien": "تعویض سیم‌کارت چقدر طول می‌کشد؟",
        "a": ["Usually less than an hour.", "Sometimes up to 24 hours."],
        "a_persien": ["معمولاً کمتر از یک ساعت.", "گاهی اوقات تا ۲۴ ساعت."]
    },
    {
        "topic": "SIM Swap",
        "role": "Operator",
        "q": "Do you need your old SIM deactivated?",
        "q_persien": "آیا نیاز دارید سیم‌کارت قدیمی شما غیرفعال شود؟",
        "a": ["Yes, please deactivate it.", "No, keep it active for now."],
        "a_persien": ["بله، لطفاً آن را غیرفعال کنید.", "نه، فعلاً فعال نگه دارید."]
    },
    {
        "topic": "SIM Swap",
        "role": "Customer",
        "q": "Can someone else do the SIM swap for me?",
        "q_persien": "آیا شخص دیگری می‌تواند برای من تعویض سیم‌کارت انجام دهد؟",
        "a": ["Only with a power of attorney.", "The owner must be present."],
        "a_persien": ["فقط با داشتن وکالت‌نامه.", "مالک باید حضور داشته باشد."]
    },
    {
        "topic": "SIM Swap",
        "role": "Operator",
        "q": "Why do you want to swap your SIM?",
        "q_persien": "چرا می‌خواهید سیم‌کارت خود را تعویض کنید؟",
        "a": ["It's not working well.", "I want to change the number."],
        "a_persien": ["خوب کار نمی‌کند.", "می‌خواهم شماره را تغییر دهم."]
    }
,
    {
        "topic": "SIM Swap",
        "role": "Customer",
        "q": "Is there a fee for SIM swap?",
        "q_persien": "آیا تعویض سیم‌کارت هزینه‌ای دارد؟",
        "a": ["Yes, a small processing fee applies.", "No fee during promotional periods."],
        "a_persien": ["بله، هزینه پردازش کمی اعمال می‌شود.", "در دوره‌های تبلیغاتی هزینه‌ای ندارد."]
    },
    {
        "topic": "SIM Swap",
        "role": "Operator",
        "q": "Have you backed up your contacts?",
        "q_persien": "آیا از مخاطبین خود پشتیبان گرفته‌اید؟",
        "a": ["Yes, all backed up.", "No, I need instructions."],
        "a_persien": ["بله، همه پشتیبان‌گیری شده‌اند.", "نه، به دستورالعمل نیاز دارم."]
    },
    {
        "topic": "SIM Swap",
        "role": "Customer",
        "q": "Will my services be interrupted?",
        "q_persien": "آیا خدمات من قطع خواهد شد؟",
        "a": ["Briefly, during the swap.", "No, it's usually seamless."],
        "a_persien": ["به طور خلاصه، در حین تعویض.", "نه، معمولاً یکپارچه است."]
    },
    {
        "topic": "SIM Swap",
        "role": "Operator",
        "q": "Are you swapping to an eSIM?",
        "q_persien": "آیا به یک سیم‌کارت الکترونیکی (eSIM) تعویض می‌کنید؟",
        "a": ["Yes, my phone supports eSIM.", "No, just another physical SIM."],
        "a_persien": ["بله، گوشی من از eSIM پشتیبانی می‌کند.", "نه، فقط یک سیم‌کارت فیزیکی دیگر."]
    },
    {
        "topic": "SIM Swap",
        "role": "Customer",
        "q": "Can I swap my SIM online?",
        "q_persien": "آیا می‌توانم سیم‌کارت خود را آنلاین تعویض کنم؟",
        "a": ["Yes, some operators support online swaps.", "In-person visit may be required."],
        "a_persien": ["بله، برخی اپراتورها از تعویض آنلاین پشتیبانی می‌کنند.", "ممکن است نیاز به مراجعه حضوری باشد."]
    },
    {
        "topic": "SIM Swap",
        "role": "Operator",
        "q": "Do you have your old SIM's PUK code?",
        "q_persien": "آیا کد PUK سیم‌کارت قدیمی خود را دارید؟",
        "a": ["Yes, here it is.", "No, I lost it."],
        "a_persien": ["بله، اینجاست.", "نه، گمش کرده‌ام."]
    },
    {
        "topic": "SIM Swap",
        "role": "Customer",
        "q": "Is SIM swap available for prepaid and postpaid?",
        "q_persien": "آیا تعویض سیم‌کارت برای اعتباری و دائمی موجود است؟",
        "a": ["Yes, for both types.", "Some restrictions may apply."],
        "a_persien": ["بله، برای هر دو نوع.", "ممکن است برخی محدودیت‌ها اعمال شود."]
    },
    {
        "topic": "SIM Swap",
        "role": "Operator",
        "q": "Do you need help reactivating your line?",
        "q_persien": "آیا برای فعال‌سازی مجدد خط خود به کمک نیاز دارید؟",
        "a": ["Yes, please assist.", "No, I know the process."],
        "a_persien": ["بله، لطفاً کمک کنید.", "نه، فرآیند را می‌دانم."]
    },
    {
        "topic": "SIM Swap",
        "role": "Customer",
        "q": "Will SIM swap affect my subscriptions?",
        "q_persien": "آیا تعویض سیم‌کارت بر اشتراک‌های من تأثیر می‌گذارد؟",
        "a": ["No, services continue as usual.", "Some apps may require re-login."],
        "a_persien": ["نه، خدمات طبق معمول ادامه می‌یابد.", "برخی برنامه‌ها ممکن است نیاز به ورود مجدد داشته باشند."]
    },
    {
        "topic": "SIM Swap",
        "role": "Operator",
        "q": "Do you have all required documents for swap?",
        "q_persien": "آیا تمام مدارک مورد نیاز برای تعویض را دارید؟",
        "a": ["Yes, I have my ID.", "No, what do I need?"],
        "a_persien": ["بله، کارت شناسایی خود را دارم.", "نه، چه چیزی نیاز دارم؟"]
    },
    {
        "topic": "SIM Apps",
        "role": "Customer",
        "q": "What are SIM applications?",
        "q_persien": "اپلیکیشن‌های سیم‌کارت چیست؟",
        "a": ["They're apps stored on your SIM card.", "They provide quick access to services."],
        "a_persien": ["آنها برنامه‌هایی هستند که روی سیم‌کارت شما ذخیره شده‌اند.", "آنها دسترسی سریع به خدمات را فراهم می‌کنند."]
    },
    {
        "topic": "SIM Apps",
        "role": "Operator",
        "q": "Do you use SIM menu for services?",
        "q_persien": "آیا از منوی سیم‌کارت برای خدمات استفاده می‌کنید؟",
        "a": ["Yes, I use it for balance check.", "No, I prefer mobile apps."],
        "a_persien": ["بله، من از آن برای بررسی موجودی استفاده می‌کنم.", "نه، من برنامه‌های موبایل را ترجیح می‌دهم."]
    },
    {
        "topic": "SIM Apps",
        "role": "Customer",
        "q": "How do I access SIM apps?",
        "q_persien": "چگونه به برنامه‌های سیم‌کارت دسترسی پیدا کنم؟",
        "a": ["Via SIM Toolkit in your phone menu.", "Check under 'Apps' or 'Tools'."],
        "a_persien": ["از طریق کیت ابزار سیم‌کارت در منوی گوشی خود.", "زیر 'برنامه‌ها' یا 'ابزارها' را بررسی کنید."]
    },
    {
        "topic": "SIM Apps",
        "role": "Operator",
        "q": "Are your SIM apps working?",
        "q_persien": "آیا برنامه‌های سیم‌کارت شما کار می‌کنند؟",
        "a": ["No, they're not showing.", "Yes, I can access them."],
        "a_persien": ["نه، نشان داده نمی‌شوند.", "بله، می‌توانم به آنها دسترسی پیدا کنم."]
    },
    {
        "topic": "SIM Apps",
        "role": "Customer",
        "q": "Can I update SIM apps?",
        "q_persien": "آیا می‌توانم برنامه‌های سیم‌کارت را به‌روزرسانی کنم؟",
        "a": ["Updates are automatic via network.", "Manual update isn't possible."],
        "a_persien": ["به‌روزرسانی‌ها به طور خودکار از طریق شبکه انجام می‌شوند.", "به‌روزرسانی دستی امکان‌پذیر نیست."]
    },
    {
        "topic": "SIM Apps",
        "role": "Operator",
        "q": "Do you use value-added services?",
        "q_persien": "آیا از خدمات ارزش افزوده استفاده می‌کنید؟",
        "a": ["Yes, like news and sports.", "No, I don't use them."],
        "a_persien": ["بله، مانند اخبار و ورزش.", "نه، از آنها استفاده نمی‌کنم."]
    },
    {
        "topic": "SIM Apps",
        "role": "Customer",
        "q": "Are there charges for using SIM apps?",
        "q_persien": "آیا برای استفاده از برنامه‌های سیم‌کارت هزینه‌ای وجود دارد؟",
        "a": ["Some services are free, others are paid.", "Check your app menu for prices."],
        "a_persien": ["برخی خدمات رایگان هستند، برخی دیگر پولی.", "برای اطلاع از قیمت‌ها، منوی برنامه خود را بررسی کنید."]
    },
    {
        "topic": "SIM Apps",
        "role": "Operator",
        "q": "Which services do you use most?",
        "q_persien": "بیشتر از کدام خدمات استفاده می‌کنید؟",
        "a": ["Mobile banking.", "Daily news updates."],
        "a_persien": ["بانکداری موبایلی.", "به‌روزرسانی‌های اخبار روزانه."]
    },
    {
        "topic": "SIM Apps",
        "role": "Customer",
        "q": "Can I remove unwanted SIM apps?",
        "q_persien": "آیا می‌توانم برنامه‌های سیم‌کارت ناخواسته را حذف کنم؟",
        "a": ["Some can be hidden, not deleted.", "They are fixed on the SIM."],
        "a_persien": ["برخی را می‌توان پنهان کرد، نه حذف.", "آنها روی سیم‌کارت ثابت هستند."]
    },
    {
        "topic": "SIM Apps",
        "role": "Operator",
        "q": "Do you want to activate new services?",
        "q_persien": "آیا می‌خواهید خدمات جدیدی را فعال کنید؟",
        "a": ["Yes, recommend some.", "No, current ones are enough."],
        "a_persien": ["بله، چند مورد را توصیه کنید.", "نه، موارد فعلی کافی هستند."]
    },
    {
        "topic": "SIM Apps",
        "role": "Customer",
        "q": "How do I disable paid services?",
        "q_persien": "چگونه خدمات پولی را غیرفعال کنم؟",
        "a": ["Send an SMS to the service code.", "Call customer service to cancel."],
        "a_persien": ["یک پیامک به کد سرویس ارسال کنید.", "برای لغو با خدمات مشتریان تماس بگیرید."]
    },
    {
        "topic": "SIM Apps",
        "role": "Operator",
        "q": "Did you accidentally subscribe to a service?",
        "q_persien": "آیا به طور تصادفی در یک سرویس مشترک شده‌اید؟",
        "a": ["Yes, please help unsubscribe.", "No, I subscribed intentionally."],
        "a_persien": ["بله، لطفاً برای لغو اشتراک کمک کنید.", "نه، من عمداً مشترک شدم."]
    },
    {
        "topic": "SIM Apps",
        "role": "Customer",
        "q": "Are there special SIM apps for Iran?",
        "q_persien": "آیا برنامه‌های سیم‌کارت ویژه‌ای برای ایران وجود دارد؟",
        "a": ["Yes, many operators offer localized apps.", "All major services are available."],
        "a_persien": ["بله، بسیاری از اپراتورها برنامه‌های محلی‌سازی شده ارائه می‌دهند.", "تمام خدمات اصلی در دسترس هستند."]
    },
    {
        "topic": "SIM Apps",
        "role": "Operator",
        "q": "Do you want SIM apps in Persian or English?",
        "q_persien": "آیا برنامه‌های سیم‌کارت را به زبان فارسی می‌خواهید یا انگلیسی؟",
        "a": ["Persian, please.", "English is fine."],
        "a_persien": ["فارسی، لطفاً.", "انگلیسی خوب است."]
    },
    {
        "topic": "SIM Apps",
        "role": "Customer",
        "q": "How do I get more info on SIM services?",
        "q_persien": "چگونه اطلاعات بیشتری در مورد خدمات سیم‌کارت کسب کنم؟",
        "a": ["Check our website.", "Call support for details."],
        "a_persien": ["وب‌سایت ما را بررسی کنید.", "برای جزئیات با پشتیبانی تماس بگیرید."]
    },
    {
        "topic": "SIM Apps",
        "role": "Operator",
        "q": "Would you like free promotional services?",
        "q_persien": "آیا خدمات تبلیغاتی رایگان می‌خواهید؟",
        "a": ["Yes, sign me up.", "No, thanks."],
        "a_persien": ["بله، من را ثبت‌نام کنید.", "نه، متشکرم."]
    },
    {
        "topic": "SIM Apps",
        "role": "Customer",
        "q": "Why can't I see the SIM Toolkit?",
        "q_persien": "چرا نمی‌توانم کیت ابزار سیم‌کارت را ببینم؟",
        "a": ["Try restarting your phone.", "Your SIM might be faulty."],
        "a_persien": ["گوشی خود را ری‌استارت کنید.", "سیم‌کارت شما ممکن است معیوب باشد."]
    },
    {
        "topic": "SIM Apps",
        "role": "Operator",
        "q": "Do you use SIM for banking?",
        "q_persien": "آیا از سیم‌کارت برای بانکداری استفاده می‌کنید؟",
        "a": ["Yes, mobile banking is essential.", "No, I don't use banking services."],
        "a_persien": ["بله، بانکداری موبایلی ضروری است.", "نه، من از خدمات بانکی استفاده نمی‌کنم."]
    },
    {
        "topic": "SIM Apps",
        "role": "Customer",
        "q": "How do I use USSD codes?",
        "q_persien": "چگونه از کدهای USSD استفاده کنم؟",
        "a": ["Dial * and # codes from your phone.", "Find codes on our website."],
        "a_persien": ["کدهای * و # را از گوشی خود شماره‌گیری کنید.", "کدها را در وب‌سایت ما پیدا کنید."]
    },
    {
        "topic": "SIM Apps",
        "role": "Operator",
        "q": "Do you want to block premium SMS?",
        "q_persien": "آیا می‌خواهید پیامک‌های ویژه را مسدود کنید؟",
        "a": ["Yes, block them.", "No, keep them active."],
        "a_persien": ["بله، آنها را مسدود کنید.", "نه، آنها را فعال نگه دارید."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "How do I pay my postpaid SIM bill?",
        "q_persien": "چگونه قبض سیم‌کارت دائمی خود را پرداخت کنم؟",
        "a": ["Pay online through your account.", "Use our USSD payment code."],
        "a_persien": ["آنلاین از طریق حساب خود پرداخت کنید.", "از کد پرداخت USSD ما استفاده کنید."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Do you want a paper or digital bill?",
        "q_persien": "قبض کاغذی می‌خواهید یا دیجیتال؟",
        "a": ["Digital bill via SMS.", "Paper bill to my address."],
        "a_persien": ["قبض دیجیتال از طریق پیامک.", "قبض کاغذی به آدرس من."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "What happens if I miss a payment?",
        "q_persien": "اگر پرداختی را از دست بدهم چه اتفاقی می‌افتد؟",
        "a": ["Your line may be suspended.", "Late fees may apply."],
        "a_persien": ["خط شما ممکن است معلق شود.", "ممکن است جریمه دیرکرد اعمال شود."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Would you like to set up auto-pay?",
        "q_persien": "آیا می‌خواهید پرداخت خودکار را تنظیم کنید؟",
        "a": ["Yes, that would help.", "No, I'll pay manually."],
        "a_persien": ["بله، این کمک می‌کند.", "نه، من دستی پرداخت می‌کنم."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "Can I pay someone else's bill?",
        "q_persien": "آیا می‌توانم قبض شخص دیگری را پرداخت کنم؟",
        "a": ["Yes, just enter their phone number.", "Only for numbers under your name."],
        "a_persien": ["بله، فقط شماره تلفن آنها را وارد کنید.", "فقط برای شماره‌هایی که به نام شما هستند."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Have you received your latest bill?",
        "q_persien": "آیا آخرین قبض خود را دریافت کرده‌اید؟",
        "a": ["No, please resend it.", "Yes, I got it."],
        "a_persien": ["نه، لطفاً دوباره ارسال کنید.", "بله، دریافت کردم."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "Can I get an installment plan for payment?",
        "q_persien": "آیا می‌توانم برای پرداخت طرح اقساطی بگیرم؟",
        "a": ["Yes, we offer payment plans.", "No, full payment is needed."],
        "a_persien": ["بله، ما طرح‌های پرداخت ارائه می‌دهیم.", "نه، پرداخت کامل لازم است."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Is your billing address up-to-date?",
        "q_persien": "آیا آدرس صورتحساب شما به‌روز است؟",
        "a": ["Yes, it's correct.", "No, I need to update it."],
        "a_persien": ["بله، صحیح است.", "نه، باید آن را به‌روز کنم."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "How do I check my outstanding balance?",
        "q_persien": "چگونه موجودی باقیمانده خود را بررسی کنم؟",
        "a": ["Dial *140# or check online.", "Use our mobile app."],
        "a_persien": ["#۱۴۰* را شماره‌گیری کنید یا آنلاین بررسی کنید.", "از برنامه موبایل ما استفاده کنید."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Would you like a bill reminder?",
        "q_persien": "آیا یادآور قبض می‌خواهید؟",
        "a": ["Yes, please set reminders.", "No, I don't need one."],
        "a_persien": ["بله، لطفاً یادآورها را تنظیم کنید.", "نه، نیازی ندارم."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "Can I get a detailed bill?",
        "q_persien": "آیا می‌توانم قبض دقیقی دریافت کنم؟",
        "a": ["Yes, request it online or by SMS.", "Detailed bills are sent monthly."],
        "a_persien": ["بله، آن را آنلاین یا با پیامک درخواست کنید.", "قبض‌های دقیق ماهانه ارسال می‌شوند."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Do you want to change your billing cycle?",
        "q_persien": "آیا می‌خواهید دوره صورتحساب خود را تغییر دهید؟",
        "a": ["Yes, adjust my cycle.", "No, current cycle is fine."],
        "a_persien": ["بله، دوره من را تنظیم کنید.", "نه، دوره فعلی خوب است."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "Can I view my bill history?",
        "q_persien": "آیا می‌توانم سابقه قبض خود را مشاهده کنم؟",
        "a": ["Yes, log in to your account online.", "Check previous bills in our app."],
        "a_persien": ["بله، به حساب آنلاین خود وارد شوید.", "قبض‌های قبلی را در برنامه ما بررسی کنید."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Do you want payment alerts?",
        "q_persien": "آیا هشدارهای پرداخت می‌خواهید؟",
        "a": ["Yes, via SMS.", "No, via email."],
        "a_persien": ["بله، از طریق پیامک.", "نه، از طریق ایمیل."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "How do I correct a payment error?",
        "q_persien": "چگونه خطای پرداخت را اصلاح کنم؟",
        "a": ["Contact customer support for correction.", "Provide your payment receipt for review."],
        "a_persien": ["برای اصلاح با پشتیبانی مشتریان تماس بگیرید.", "رسید پرداخت خود را برای بررسی ارائه دهید."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Was your payment successful?",
        "q_persien": "آیا پرداخت شما موفقیت‌آمیز بود؟",
        "a": ["Yes, I got confirmation.", "No, it failed."],
        "a_persien": ["بله، تأییدیه دریافت کردم.", "نه، ناموفق بود."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "Is there a late payment penalty?",
        "q_persien": "آیا جریمه دیرکرد پرداخت وجود دارد؟",
        "a": ["Yes, small penalties may apply.", "No, but your line could be suspended."],
        "a_persien": ["بله، ممکن است جریمه‌های کوچکی اعمال شود.", "نه، اما خط شما ممکن است معلق شود."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Do you need a payment extension?",
        "q_persien": "آیا به تمدید مهلت پرداخت نیاز دارید؟",
        "a": ["Yes, extend my due date.", "No, I'll pay soon."],
        "a_persien": ["بله، تاریخ سررسید من را تمدید کنید.", "نه، به زودی پرداخت خواهم کرد."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "Can I pay my bill with mobile wallet?",
        "q_persien": "آیا می‌توانم قبض خود را با کیف پول موبایلی پرداخت کنم؟",
        "a": ["Yes, several wallets are supported.", "No, only bank cards are accepted."],
        "a_persien": ["بله، چندین کیف پول پشتیبانی می‌شود.", "نه، فقط کارت‌های بانکی پذیرفته می‌شوند."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Do you need an invoice for your payment?",
        "q_persien": "آیا برای پرداخت خود به فاکتور نیاز دارید؟",
        "a": ["Yes, please email it.", "No, SMS is enough."],
        "a_persien": ["بله، لطفاً آن را ایمیل کنید.", "نه، پیامک کافی است."]
    },
    {
        "topic": "Support",
        "role": "Customer",
        "q": "How do I contact customer service?",
        "q_persien": "چگونه با خدمات مشتریان تماس بگیرم؟",
        "a": ["Call 9999 from your SIM.", "Use our online chat support."],
        "a_persien": ["از سیم‌کارت خود با ۹۹۹۹ تماس بگیرید.", "از پشتیبانی چت آنلاین ما استفاده کنید."]
    },
    {
        "topic": "Support",
        "role": "Operator",
        "q": "Do you need help with your device settings?",
        "q_persien": "آیا برای تنظیمات دستگاه خود به کمک نیاز دارید؟",
        "a": ["Yes, my settings are incorrect.", "No, they're fine."],
        "a_persien": ["بله، تنظیمات من نادرست است.", "نه، خوب هستند."]
    },
    {
        "topic": "Support",
        "role": "Customer",
        "q": "How do I file a complaint?",
        "q_persien": "چگونه شکایت ثبت کنم؟",
        "a": ["Call our complaints hotline.", "Submit a ticket online."],
        "a_persien": ["با خط تلفن شکایات ما تماس بگیرید.", "آنلاین تیکت ثبت کنید."]
    },
    {
        "topic": "Support",
        "role": "Operator",
        "q": "Did you face this issue before?",
        "q_persien": "آیا قبلاً با این مشکل مواجه شده‌اید؟",
        "a": ["No, it's the first time.", "Yes, it's recurring."],
        "a_persien": ["نه، اولین بار است.", "بله، تکرار می‌شود."]
    },
    {
        "topic": "Support",
        "role": "Customer",
        "q": "How do I change my registered address?",
        "q_persien": "چگونه آدرس ثبت‌شده خود را تغییر دهم؟",
        "a": ["Submit proof of address online.", "Visit a service center with ID."],
        "a_persien": ["مدرک نشانی را آنلاین ارسال کنید.", "با کارت شناسایی به یک مرکز خدمات مراجعه کنید."]
    },
    {
        "topic": "Support",
        "role": "Operator",
        "q": "Do you want to speak to a supervisor?",
        "q_persien": "آیا می‌خواهید با یک سرپرست صحبت کنید؟",
        "a": ["Yes, escalate my issue.", "No, operator assistance is enough."],
        "a_persien": ["بله، مشکلم را ارجاع دهید.", "نه، کمک اپراتور کافی است."]
    },
    {
        "topic": "Support",
        "role": "Customer",
        "q": "Are there any new offers?",
        "q_persien": "آیا پیشنهاد جدیدی وجود دارد؟",
        "a": ["Yes, check our website for latest deals.", "We have summer promotions now."],
        "a_persien": ["بله، برای آخرین تخفیف‌ها وب‌سایت ما را بررسی کنید.", "ما اکنون تبلیغات تابستانی داریم."]
    },
    {
        "topic": "Support",
        "role": "Operator",
        "q": "Did you try restarting your device?",
        "q_persien": "آیا دستگاه خود را ری‌استارت کرده‌اید؟",
        "a": ["Yes, but the issue persists.", "No, I'll try that now."],
        "a_persien": ["بله، اما مشکل همچنان پابرجاست.", "نه، الان امتحان می‌کنم."]
    },
    {
        "topic": "Support",
        "role": "Customer",
        "q": "Can I change my phone number?",
        "q_persien": "آیا می‌توانم شماره تلفن خود را تغییر دهم؟",
        "a": ["Yes, number change service is available.", "No, only new SIM purchase changes number."],
        "a_persien": ["بله، سرویس تغییر شماره موجود است.", "نه، فقط خرید سیم‌کارت جدید شماره را تغییر می‌دهد."]
    },
    {
        "topic": "Support",
        "role": "Operator",
        "q": "Are you using the latest app version?",
        "q_persien": "آیا از آخرین نسخه برنامه استفاده می‌کنید؟",
        "a": ["Yes, just updated it.", "No, I'll update now."],
        "a_persien": ["بله، همین الان به‌روزرسانی کردم.", "نه، الان به‌روزرسانی می‌کنم."]
    },
    {
        "topic": "Support",
        "role": "Customer",
        "q": "Is there a way to protect my SIM from theft?",
        "q_persien": "آیا راهی برای محافظت از سیم‌کارتم در برابر سرقت وجود دارد؟",
        "a": ["Set a SIM PIN code.", "Enable SIM lock in phone settings."],
        "a_persien": ["یک کد پین برای سیم‌کارت تنظیم کنید.", "قفل سیم‌کارت را در تنظیمات گوشی فعال کنید."]
    },
    {
        "topic": "Support",
        "role": "Operator",
        "q": "Do you need help with your account password?",
        "q_persien": "آیا برای رمز عبور حساب خود به کمک نیاز دارید؟",
        "a": ["Yes, I forgot my password.", "No, I remember it."],
        "a_persien": ["بله، رمز عبورم را فراموش کرده‌ام.", "نه، یادم است."]
    },
    {
        "topic": "Support",
        "role": "Customer",
        "q": "Can I manage my SIM from abroad?",
        "q_persien": "آیا می‌توانم سیم‌کارتم را از خارج از کشور مدیریت کنم؟",
        "a": ["Yes, use our international portal.", "Some services may be limited."],
        "a_persien": ["بله، از پورتال بین‌المللی ما استفاده کنید.", "برخی خدمات ممکن است محدود باشند."]
    },
    {
        "topic": "Support",
        "role": "Operator",
        "q": "Are you calling about your personal SIM or business account?",
        "q_persien": "شما در مورد سیم‌کارت شخصی خود تماس می‌گیرید یا حساب تجاری؟",
        "a": ["It's my personal SIM.", "I'm managing a business line."],
        "a_persien": ["این سیم‌کارت شخصی من است.", "من یک خط تجاری را مدیریت می‌کنم."]
    },
    {
        "topic": "Support",
        "role": "Customer",
        "q": "Can I add another person as a user?",
        "q_persien": "آیا می‌توانم شخص دیگری را به عنوان کاربر اضافه کنم؟",
        "a": ["Yes, as an authorized user.", "No, only one registered user per SIM."],
        "a_persien": ["بله، به عنوان کاربر مجاز.", "نه، فقط یک کاربر ثبت‌شده برای هر سیم‌کارت."]
    },
    {
        "topic": "Support",
        "role": "Operator",
        "q": "Is this your first time contacting us?",
        "q_persien": "آیا این اولین بار است که با ما تماس می‌گیرید؟",
        "a": ["Yes, first time.", "No, I've called before."],
        "a_persien": ["بله، اولین بار.", "نه، قبلاً تماس گرفته‌ام."]
    },
    {
        "topic": "Support",
        "role": "Customer",
        "q": "Do you offer support in English?",
        "q_persien": "آیا پشتیبانی به زبان انگلیسی ارائه می‌دهید؟",
        "a": ["Yes, English support is available.", "Currently, support is in Persian only."],
        "a_persien": ["بله، پشتیبانی به زبان انگلیسی موجود است.", "در حال حاضر، پشتیبانی فقط به زبان فارسی است."]
    },
    {
        "topic": "Support",
        "role": "Operator",
        "q": "Do you have any other issues today?",
        "q_persien": "آیا امروز مشکل دیگری دارید؟",
        "a": ["No, that's all for now.", "Yes, one more question."],
        "a_persien": ["نه، فعلاً همین.", "بله، یک سؤال دیگر."]
    },
    {
        "topic": "Support",
        "role": "Customer",
        "q": "How do I give feedback?",
        "q_persien": "چگونه بازخورد بدهم؟",
        "a": ["Use our feedback form online.", "Leave a rating after the call."],
        "a_persien": ["از فرم بازخورد آنلاین ما استفاده کنید.", "بعد از تماس امتیاز بدهید."]
    },
    {
        "topic": "Support",
        "role": "Operator",
        "q": "Can I help you with anything else?",
        "q_persien": "آیا می‌توانم در مورد چیز دیگری به شما کمک کنم؟",
        "a": ["No, thank you.", "Yes, please help with another issue."],
        "a_persien": ["نه، متشکرم.", "بله، لطفاً در مورد مشکل دیگری کمک کنید."]
    },
    {
        "topic": "Start/End Service",
        "role": "Customer",
        "q": "How do I activate my new SIM card?",
        "q_persien": "چگونه سیم‌کارت جدید خود را فعال کنم؟",
        "a": ["Insert the SIM and restart your device.", "Call 1234 for activation instructions."],
        "a_persien": ["سیم‌کارت را وارد کرده و دستگاه خود را ری‌استارت کنید.", "برای دستورالعمل‌های فعال‌سازی با ۱۲۳۴ تماس بگیرید."]
    },
    {
        "topic": "Start/End Service",
        "role": "Operator",
        "q": "Would you like to keep your number when starting the service?",
        "q_persien": "آیا می‌خواهید هنگام شروع سرویس، شماره خود را حفظ کنید؟",
        "a": ["Yes, I'd like to keep my old number.", "No, a new number is fine."],
        "a_persien": ["بله، می‌خواهم شماره قدیمی خود را حفظ کنم.", "نه، شماره جدید خوب است."]
    },
    {
        "topic": "Start/End Service",
        "role": "Customer",
        "q": "How do I cancel my SIM card service?",
        "q_persien": "چگونه سرویس سیم‌کارت خود را لغو کنم؟",
        "a": ["Visit a branch with your ID for deactivation.", "Call support and request cancellation."],
        "a_persien": ["برای غیرفعال‌سازی با کارت شناسایی خود به یک شعبه مراجعه کنید.", "با پشتیبانی تماس بگیرید و درخواست لغو کنید."]
    },
    {
        "topic": "Start/End Service",
        "role": "Operator",
        "q": "Is there any outstanding payment on your account before closing?",
        "q_persien": "آیا قبل از بستن حساب، پرداخت معوقه‌ای در حساب شما وجود دارد؟",
        "a": ["No, my balance is zero.", "Yes, I'll pay the bill now."],
        "a_persien": ["نه، موجودی من صفر است.", "بله، الان قبض را پرداخت می‌کنم."]
    },
    {
        "topic": "Start/End Service",
        "role": "Customer",
        "q": "How can I suspend my line temporarily?",
        "q_persien": "چگونه می‌توانم خط خود را به طور موقت معلق کنم؟",
        "a": ["You can suspend your line via our app.", "Call customer support for temporary suspension."],
        "a_persien": ["می‌توانید خط خود را از طریق برنامه ما معلق کنید.", "برای تعلیق موقت با پشتیبانی مشتریان تماس بگیرید."]
    },
    {
        "topic": "Start/End Service",
        "role": "Operator",
        "q": "Why do you want to end your service?",
        "q_persien": "چرا می‌خواهید سرویس خود را پایان دهید؟",
        "a": ["I'm leaving the country.", "I don't need the SIM anymore."],
        "a_persien": ["من در حال ترک کشور هستم.", "دیگر به سیم‌کارت نیازی ندارم."]
    },
    {
        "topic": "Start/End Service",
        "role": "Customer",
        "q": "Will my unused balance be refunded if I end my service?",
        "q_persien": "اگر سرویس خود را پایان دهم، آیا موجودی استفاده نشده من بازپرداخت می‌شود؟",
        "a": ["No, balance is non-refundable.", "In some cases, refunds are possible."],
        "a_persien": ["نه، موجودی غیرقابل بازپرداخت است.", "در برخی موارد، بازپرداخت امکان‌پذیر است."]
    },
    {
        "topic": "Start/End Service",
        "role": "Operator",
        "q": "Are you sure you want to terminate your account?",
        "q_persien": "آیا مطمئن هستید که می‌خواهید حساب خود را خاتمه دهید؟",
        "a": ["Yes, please proceed.", "No, I want to think about it."],
        "a_persien": ["بله، لطفاً ادامه دهید.", "نه، می‌خواهم در مورد آن فکر کنم."]
    },
    {
        "topic": "Start/End Service",
        "role": "Customer",
        "q": "How long does it take to reactivate a suspended SIM?",
        "q_persien": "فعال‌سازی مجدد یک سیم‌کارت معلق چقدر طول می‌کشد؟",
        "a": ["Usually within a few hours.", "Sometimes up to 24 hours."],
        "a_persien": ["معمولاً ظرف چند ساعت.", "گاهی اوقات تا ۲۴ ساعت."]
    },
    {
        "topic": "Start/End Service",
        "role": "Operator",
        "q": "Do you need a written confirmation to close your account?",
        "q_persien": "آیا برای بستن حساب خود به تأییدیه کتبی نیاز دارید؟",
        "a": ["Yes, I need official confirmation.", "No, just a verbal confirmation is fine."],
        "a_persien": ["بله، به تأییدیه رسمی نیاز دارم.", "نه، فقط تأییدیه شفاهی کافی است."]
    },
    {
        "topic": "Start/End Service",
        "role": "Customer",
        "q": "Can I keep my number for future use?",
        "q_persien": "آیا می‌توانم شماره خود را برای استفاده در آینده نگه دارم؟",
        "a": ["You can park your number for a small fee.", "After cancellation, the number returns to the pool."],
        "a_persien": ["می‌توانید شماره خود را با هزینه کمی پارک کنید.", "پس از لغو، شماره به مجموعه بازمی‌گردد."]
    },
    {
        "topic": "Start/End Service",
        "role": "Operator",
        "q": "Would you like to transfer your balance to another number before ending?",
        "q_persien": "آیا می‌خواهید قبل از پایان، موجودی خود را به شماره دیگری منتقل کنید؟",
        "a": ["Yes, please transfer it.", "No, you can cancel directly."],
        "a_persien": ["بله، لطفاً آن را منتقل کنید.", "نه، می‌توانید مستقیماً لغو کنید."]
    },
    {
        "topic": "Start/End Service",
        "role": "Customer",
        "q": "Can I temporarily disconnect my line for travel?",
        "q_persien": "آیا می‌توانم خط خود را برای سفر به طور موقت قطع کنم؟",
        "a": ["Yes, temporary suspension is possible.", "No, but you can use roaming."],
        "a_persien": ["بله، تعلیق موقت امکان‌پذیر است.", "نه، اما می‌توانید از رومینگ استفاده کنید."]
    },
    {
        "topic": "Start/End Service",
        "role": "Operator",
        "q": "Have you settled all dues before disconnection?",
        "q_persien": "آیا قبل از قطع، تمام بدهی‌ها را تسویه کرده‌اید؟",
        "a": ["Yes, everything is paid.", "No, I need to pay now."],
        "a_persien": ["بله، همه چیز پرداخت شده است.", "نه، باید الان پرداخت کنم."]
    },
    {
        "topic": "Start/End Service",
        "role": "Customer",
        "q": "Will I lose my contacts if I end my SIM service?",
        "q_persien": "اگر سرویس سیم‌کارت خود را پایان دهم، آیا مخاطبین خود را از دست خواهم داد؟",
        "a": ["Contacts stored on the SIM will be lost.", "Back up your contacts before cancellation."],
        "a_persien": ["مخاطبین ذخیره شده روی سیم‌کارت از بین خواهند رفت.", "قبل از لغو از مخاطبین خود پشتیبان بگیرید."]
    },
    {
        "topic": "Start/End Service",
        "role": "Operator",
        "q": "Do you need any help backing up your information?",
        "q_persien": "آیا برای پشتیبان‌گیری از اطلاعات خود به کمک نیاز دارید؟",
        "a": ["Yes, please guide me.", "No, I've already backed up."],
        "a_persien": ["بله، لطفاً راهنمایی‌ام کنید.", "نه، من قبلاً پشتیبان گرفته‌ام."]
    },
    {
        "topic": "Start/End Service",
        "role": "Customer",
        "q": "Can I end service online?",
        "q_persien": "آیا می‌توانم سرویس را آنلاین پایان دهم؟",
        "a": ["Yes, use your account portal.", "You must visit a branch in person."],
        "a_persien": ["بله، از پورتال حساب خود استفاده کنید.", "باید حضوری به یک شعبه مراجعه کنید."]
    },
    {
        "topic": "Start/End Service",
        "role": "Operator",
        "q": "Would you like a retention offer to stay with us?",
        "q_persien": "آیا پیشنهاد حفظ مشتری برای ماندن با ما را می‌خواهید؟",
        "a": ["Yes, let me hear it.", "No, I want to leave."],
        "a_persien": ["بله، بگذارید بشنوم.", "نه، می‌خواهم بروم."]
    },
    {
        "topic": "Start/End Service",
        "role": "Customer",
        "q": "If I return, can I use my old number?",
        "q_persien": "اگر برگردم، می‌توانم از شماره قدیمی خود استفاده کنم؟",
        "a": ["Only if it's not reassigned.", "After a period, old numbers are recycled."],
        "a_persien": ["فقط اگر دوباره واگذار نشده باشد.", "پس از مدتی، شماره‌های قدیمی بازیافت می‌شوند."]
    },
    {
        "topic": "Start/End Service",
        "role": "Operator",
        "q": "Do you want to deactivate all services or just specific ones?",
        "q_persien": "آیا می‌خواهید تمام خدمات را غیرفعال کنید یا فقط موارد خاصی را؟",
        "a": ["Just the main line.", "All services, please."],
        "a_persien": ["فقط خط اصلی.", "تمام خدمات، لطفاً."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Your current bill is overdue, would you like to pay now?",
        "q_persien": "قبض فعلی شما سررسید شده است، آیا می‌خواهید الان پرداخت کنید؟",
        "a": ["Yes, please send me the payment link.", "No, I will pay later."],
        "a_persien": ["بله، لطفاً لینک پرداخت را برای من ارسال کنید.", "نه، بعداً پرداخت خواهم کرد."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "What payment options do I have?",
        "q_persien": "چه گزینه‌های پرداختی دارم؟",
        "a": ["Online, in-person, or via app.", "Bank transfer and USSD code."],
        "a_persien": ["آنلاین، حضوری یا از طریق برنامه.", "انتقال بانکی و کد USSD."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Do you want to set up automatic payments?",
        "q_persien": "آیا می‌خواهید پرداخت‌های خودکار را تنظیم کنید؟",
        "a": ["Yes, that would be helpful.", "No, I prefer manual payment."],
        "a_persien": ["بله، این مفید خواهد بود.", "نه، من پرداخت دستی را ترجیح می‌دهم."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "Why did I get charged twice this month?",
        "q_persien": "چرا این ماه دو بار از من هزینه کسر شد؟",
        "a": ["Possibly a billing error, let us check.", "Could be for extra services."],
        "a_persien": ["احتمالاً یک خطای صورتحساب، بگذارید بررسی کنیم.", "می‌تواند برای خدمات اضافی باشد."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "There’s an unpaid fee for SIM replacement. Will you pay it now?",
        "q_persien": "هزینه پرداخت‌نشده‌ای برای تعویض سیم‌کارت وجود دارد. آیا الان آن را پرداخت می‌کنید؟",
        "a": ["Yes, I’ll pay now.", "No, I’ll pay when I pick up the SIM."],
        "a_persien": ["بله، الان پرداخت می‌کنم.", "نه، وقتی سیم‌کارت را تحویل گرفتم پرداخت می‌کنم."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "Is there a way to reduce my monthly costs?",
        "q_persien": "آیا راهی برای کاهش هزینه‌های ماهانه من وجود دارد؟",
        "a": ["Consider changing your plan.", "Reduce usage of premium services."],
        "a_persien": ["تغییر طرح خود را در نظر بگیرید.", "استفاده از خدمات ویژه را کاهش دهید."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Do you want to split your bill into installments?",
        "q_persien": "آیا می‌خواهید قبض خود را به صورت اقساطی تقسیم کنید؟",
        "a": ["Yes, please set it up.", "No, I’ll pay in full."],
        "a_persien": ["بله، لطفاً آن را تنظیم کنید.", "نه، من به طور کامل پرداخت می‌کنم."]
    }
,
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "Why do I have to pay a deposit?",
        "q_persien": "چرا باید ودیعه پرداخت کنم؟",
        "a": ["Deposits are required for certain services.", "It’s standard for new postpaid customers."],
        "a_persien": ["ودیعه برای برخی خدمات الزامی است.", "این برای مشتریان جدید دائمی استاندارد است."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Your account will be suspended without payment. Shall I guide you to pay now?",
        "q_persien": "حساب شما بدون پرداخت معلق خواهد شد. آیا شما را برای پرداخت راهنمایی کنم؟",
        "a": ["Yes, please guide me.", "No, I’ll manage myself."],
        "a_persien": ["بله، لطفاً راهنمایی‌ام کنید.", "نه، خودم مدیریت می‌کنم."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "Are there any late fees?",
        "q_persien": "آیا جریمه دیرکرد وجود دارد؟",
        "a": ["Yes, a small fee applies after the due date.", "No, but service will be suspended."],
        "a_persien": ["بله، پس از تاریخ سررسید، هزینه کمی اعمال می‌شود.", "نه، اما سرویس معلق خواهد شد."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Your current package requires an advance payment. Will you proceed?",
        "q_persien": "بسته فعلی شما نیاز به پیش‌پرداخت دارد. آیا ادامه می‌دهید؟",
        "a": ["Yes, I agree.", "No, I want a different package."],
        "a_persien": ["بله، موافقم.", "نه، من بسته دیگری می‌خواهم."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "Can I pay with cash at the branch?",
        "q_persien": "آیا می‌توانم در شعبه با پول نقد پرداخت کنم؟",
        "a": ["Yes, cash payments are accepted.", "Preferably use card, but cash is possible."],
        "a_persien": ["بله، پرداخت‌های نقدی پذیرفته می‌شوند.", "ترجیحاً از کارت استفاده کنید، اما پول نقد هم امکان‌پذیر است."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Do you need a payment receipt for your records?",
        "q_persien": "آیا برای سوابق خود به رسید پرداخت نیاز دارید؟",
        "a": ["Yes, please email it to me.", "No, SMS is enough."],
        "a_persien": ["بله، لطفاً آن را به من ایمیل کنید.", "نه، پیامک کافی است."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "How soon will my payment reflect on my account?",
        "q_persien": "پرداخت من چقدر زود در حساب من منعکس می‌شود؟",
        "a": ["Within a few minutes.", "Sometimes up to 24 hours."],
        "a_persien": ["ظرف چند دقیقه.", "گاهی اوقات تا ۲۴ ساعت."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Do you need instructions for online payment?",
        "q_persien": "آیا برای پرداخت آنلاین به دستورالعمل نیاز دارید؟",
        "a": ["Yes, please send them.", "No, I know how to pay."],
        "a_persien": ["بله، لطفاً آنها را ارسال کنید.", "نه، می‌دانم چگونه پرداخت کنم."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "Why is my balance negative?",
        "q_persien": "چرا موجودی من منفی است؟",
        "a": ["You may have used services on credit.", "Recent payments may not have cleared."],
        "a_persien": ["ممکن است از خدمات اعتباری استفاده کرده باشید.", "پرداخت‌های اخیر ممکن است تسویه نشده باشند."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Do you want to top up your SIM before it runs out?",
        "q_persien": "آیا می‌خواهید قبل از اتمام، سیم‌کارت خود را شارژ کنید؟",
        "a": ["Yes, please top up.", "No, not now."],
        "a_persien": ["بله، لطفاً شارژ کنید.", "نه، الان نه."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "Can I get an official invoice for my payment?",
        "q_persien": "آیا می‌توانم برای پرداخت خود فاکتور رسمی بگیرم؟",
        "a": ["Yes, we can email it to you.", "Download it from your account portal."],
        "a_persien": ["بله، می‌توانیم آن را به شما ایمیل کنیم.", "آن را از پورتال حساب خود دانلود کنید."]
    },
    {
        "topic": "Payment",
        "role": "Operator",
        "q": "Are you ready to pay now or do you need more time?",
        "q_persien": "آیا الان آماده پرداخت هستید یا به زمان بیشتری نیاز دارید؟",
        "a": ["I'm ready to pay now.", "I need a few more days."],
        "a_persien": ["من الان آماده پرداخت هستم.", "به چند روز دیگر نیاز دارم."]
    },
    {
        "topic": "Payment",
        "role": "Customer",
        "q": "How can I avoid service suspension for non-payment?",
        "q_persien": "چگونه می‌توانم از تعلیق سرویس به دلیل عدم پرداخت جلوگیری کنم؟",
        "a": ["Set reminders or use auto-pay.", "Pay on time to avoid disruption."],
        "a_persien": ["یادآور تنظیم کنید یا از پرداخت خودکار استفاده کنید.", "به موقع پرداخت کنید تا از اختلال جلوگیری شود."]
    },
    {
        "topic": "Ownership Change",
        "role": "Customer",
        "q": "How can I transfer my SIM card ownership?",
        "q_persien": "چگونه می‌توانم مالکیت سیم‌کارت خود را منتقل کنم؟",
        "a": ["Visit a branch with both parties and IDs.", "Fill out the ownership transfer form online."],
        "a_persien": ["با هر دو طرف و کارت شناسایی به یک شعبه مراجعه کنید.", "فرم انتقال مالکیت را آنلاین پر کنید."]
    },
    {
        "topic": "Ownership Change",
        "role": "Operator",
        "q": "Is the new owner present with you?",
        "q_persien": "آیا مالک جدید با شما حضور دارد؟",
        "a": ["Yes, they are here with me.", "No, they’ll come later."],
        "a_persien": ["بله، آنها اینجا با من هستند.", "نه، آنها بعداً می‌آیند."]
    },
    {
        "topic": "Ownership Change",
        "role": "Customer",
        "q": "What documents are needed for ownership transfer?",
        "q_persien": "برای انتقال مالکیت چه مدارکی لازم است؟",
        "a": ["Both parties need national ID cards.", "Ownership transfer form must be completed."],
        "a_persien": ["هر دو طرف به کارت ملی نیاز دارند.", "فرم انتقال مالکیت باید تکمیل شود."]
    },
    {
        "topic": "Ownership Change",
        "role": "Operator",
        "q": "Do you want to keep the current plan for the new owner?",
        "q_persien": "آیا می‌خواهید طرح فعلی را برای مالک جدید حفظ کنید؟",
        "a": ["Yes, keep the plan.", "No, change to a new plan."],
        "a_persien": ["بله، طرح را حفظ کنید.", "نه، به یک طرح جدید تغییر دهید."]
    },
    {
        "topic": "Ownership Change",
        "role": "Customer",
        "q": "Is there a fee to change SIM card ownership?",
        "q_persien": "آیا برای تغییر مالکیت سیم‌کارت هزینه‌ای وجود دارد؟",
        "a": ["Yes, a small processing fee applies.", "No fee during certain promotions."],
        "a_persien": ["بله، هزینه پردازش کمی اعمال می‌شود.", "در طول برخی تبلیغات هزینه‌ای ندارد."]
    },
    {
        "topic": "Ownership Change",
        "role": "Operator",
        "q": "Are there any unpaid bills before transfer?",
        "q_persien": "آیا قبل از انتقال قبض پرداخت‌نشده‌ای وجود دارد؟",
        "a": ["No, all paid.", "Yes, we’ll pay them now."],
        "a_persien": ["نه، همه پرداخت شده‌اند.", "بله، الان آنها را پرداخت می‌کنیم."]
    },
    {
        "topic": "Ownership Change",
        "role": "Customer",
        "q": "Can I transfer ownership remotely?",
        "q_persien": "آیا می‌توانم مالکیت را از راه دور منتقل کنم؟",
        "a": ["Some operators allow online transfer.", "Usually both must be present at a branch."],
        "a_persien": ["برخی اپراتورها انتقال آنلاین را مجاز می‌دانند.", "معمولاً هر دو باید در یک شعبه حضور داشته باشند."]
    },
    {
        "topic": "Ownership Change",
        "role": "Operator",
        "q": "Will the current SIM number remain after transfer?",
        "q_persien": "آیا شماره سیم‌کارت فعلی پس از انتقال باقی می‌ماند؟",
        "a": ["Yes, the number stays the same.", "No, only if the new owner requests a change."],
        "a_persien": ["بله، شماره همان باقی می‌ماند.", "نه، فقط اگر مالک جدید درخواست تغییر دهد."]
    },
    {
        "topic": "Ownership Change",
        "role": "Customer",
        "q": "How long does the ownership change process take?",
        "q_persien": "فرآیند تغییر مالکیت چقدر طول می‌کشد؟",
        "a": ["Usually done the same day.", "Sometimes up to 48 hours."],
        "a_persien": ["معمولاً در همان روز انجام می‌شود.", "گاهی اوقات تا ۴۸ ساعت."]
    },
    {
        "topic": "Ownership Change",
        "role": "Operator",
        "q": "Do you have both parties' signatures on the form?",
        "q_persien": "آیا امضای هر دو طرف را روی فرم دارید؟",
        "a": ["Yes, both have signed.", "Not yet, we’ll sign now."],
        "a_persien": ["بله، هر دو امضا کرده‌اند.", "هنوز نه، الان امضا می‌کنیم."]
    },
    {
        "topic": "Ownership Change",
        "role": "Customer",
        "q": "Will my account info be visible to the new owner?",
        "q_persien": "آیا اطلاعات حساب من برای مالک جدید قابل مشاهده خواهد بود؟",
        "a": ["No, personal info is deleted on transfer.", "Yes, unless you erase your data."],
        "a_persien": ["نه، اطلاعات شخصی هنگام انتقال حذف می‌شود.", "بله، مگر اینکه داده‌های خود را پاک کنید."]
    },
    {
        "topic": "Ownership Change",
        "role": "Operator",
        "q": "Are you transferring a prepaid or postpaid SIM?",
        "q_persien": "آیا سیم‌کارت اعتباری منتقل می‌کنید یا دائمی؟",
        "a": ["It’s prepaid.", "It’s a postpaid SIM."],
        "a_persien": ["اعتباری است.", "این یک سیم‌کارت دائمی است."]
    },
    {
        "topic": "Ownership Change",
        "role": "Customer",
        "q": "Can I reverse the ownership transfer?",
        "q_persien": "آیا می‌توانم انتقال مالکیت را برگردانم؟",
        "a": ["Only with mutual agreement and documents.", "Once completed, reversal is difficult."],
        "a_persien": ["فقط با توافق دوجانبه و مدارک.", "پس از تکمیل، برگرداندن دشوار است."]
    },
    {
        "topic": "Ownership Change",
        "role": "Operator",
        "q": "Does the new owner accept the terms and conditions?",
        "q_persien": "آیا مالک جدید شرایط و ضوابط را می‌پذیرد؟",
        "a": ["Yes, they agree.", "No, they want to review them."],
        "a_persien": ["بله، آنها موافق هستند.", "نه، آنها می‌خواهند آنها را بررسی کنند."]
    },
    {
        "topic": "Ownership Change",
        "role": "Customer",
        "q": "Can someone else act as my proxy for ownership change?",
        "q_persien": "آیا شخص دیگری می‌تواند به عنوان نماینده من برای تغییر مالکیت عمل کند؟",
        "a": ["Yes, with legal authorization.", "No, both must be present."],
        "a_persien": ["بله، با مجوز قانونی.", "نه، هر دو باید حضور داشته باشند."]
    },
    {
        "topic": "Ownership Change",
        "role": "Operator",
        "q": "Is the SIM registered in the correct name?",
        "q_persien": "آیا سیم‌کارت به نام صحیح ثبت شده است؟",
        "a": ["Yes, it matches the ID.", "No, there’s a mismatch."],
        "a_persien": ["بله، با کارت شناسایی مطابقت دارد.", "نه، مغایرت وجود دارد."]
    },
    {
        "topic": "Ownership Change",
        "role": "Customer",
        "q": "Do I lose my credit after ownership transfer?",
        "q_persien": "آیا پس از انتقال مالکیت، اعتبار خود را از دست می‌دهم؟",
        "a": ["Remaining credit is transferred too.", "No, but confirm with your operator."],
        "a_persien": ["اعتبار باقیمانده نیز منتقل می‌شود.", "نه، اما با اپراتور خود تأیید کنید."]
    },
    {
        "topic": "Ownership Change",
        "role": "Operator",
        "q": "Have you backed up your contacts before transfer?",
        "q_persien": "آیا قبل از انتقال از مخاطبین خود پشتیبان گرفته‌اید؟",
        "a": ["Yes, I have a backup.", "No, please help me."],
        "a_persien": ["بله، من یک نسخه پشتیبان دارم.", "نه، لطفاً به من کمک کنید."]
    },
    {
        "topic": "Ownership Change",
        "role": "Customer",
        "q": "Can I transfer SIM ownership for a blocked SIM?",
        "q_persien": "آیا می‌توانم مالکیت سیم‌کارت را برای یک سیم‌کارت مسدود شده منتقل کنم؟",
        "a": ["Unblock it first, then transfer.", "No, transfer only for active SIMs."],
        "a_persien": ["ابتدا آن را رفع مسدودی کنید، سپس منتقل کنید.", "نه، انتقال فقط برای سیم‌کارت‌های فعال."]
    },
    {
        "topic": "Ownership Change",
        "role": "Operator",
        "q": "Do you need help with the transfer paperwork?",
        "q_persien": "آیا برای کارهای اداری انتقال به کمک نیاز دارید؟",
        "a": ["Yes, please assist me.", "No, I have the forms."],
        "a_persien": ["بله، لطفاً به من کمک کنید.", "نه، من فرم‌ها را دارم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Customer",
        "q": "How can I get a tourist SIM card in Iran?",
        "q_persien": "چگونه می‌توانم در ایران سیم‌کارت توریستی بگیرم؟",
        "a": ["Visit authorized kiosks at airports.", "Buy from operator branches with your passport."],
        "a_persien": ["به کیوسک‌های مجاز در فرودگاه‌ها مراجعه کنید.", "از شعب اپراتور با پاسپورت خود خرید کنید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you have your passport with you?",
        "q_persien": "آیا پاسپورت خود را همراه دارید؟",
        "a": ["Yes, here it is.", "No, I’ll bring it next time."],
        "a_persien": ["بله، اینجاست.", "نه، دفعه بعد می‌آورم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Customer",
        "q": "What documents are needed for a tourist SIM?",
        "q_persien": "برای سیم‌کارت توریستی چه مدارکی لازم است؟",
        "a": ["Only your passport is needed.", "Some require a visa stamp as well."],
        "a_persien": ["فقط پاسپورت شما لازم است.", "برخی به مهر ویزا نیز نیاز دارند."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "How long will your stay be in Iran?",
        "q_persien": "چه مدت در ایران اقامت خواهید داشت؟",
        "a": ["Two weeks.", "About three months."],
        "a_persien": ["دو هفته.", "حدود سه ماه."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Customer",
        "q": "Is the tourist SIM prepaid or postpaid?",
        "q_persien": "آیا سیم‌کارت توریستی اعتباری است یا دائمی؟",
        "a": ["Prepaid only for tourists.", "Postpaid not available for tourists."],
        "a_persien": ["فقط اعتباری برای توریست‌ها.", "دائمی برای توریست‌ها موجود نیست."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you want a data-only or voice SIM?",
        "q_persien": "سیم‌کارت فقط دیتا می‌خواهید یا صوتی؟",
        "a": ["Data only, for internet.", "Voice and data, please."],
        "a_persien": ["فقط دیتا، برای اینترنت.", "صوتی و دیتا، لطفاً."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Customer",
        "q": "How long is the tourist SIM valid?",
        "q_persien": "سیم‌کارت توریستی چه مدت اعتبار دارد؟",
        "a": ["Usually 30 days.", "Up to 90 days, depending on the plan."],
        "a_persien": ["معمولاً ۳۰ روز.", "تا ۹۰ روز، بسته به طرح."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you need English instructions?",
        "q_persien": "آیا به دستورالعمل‌های انگلیسی نیاز دارید؟",
        "a": ["Yes, please.", "No, Persian is fine."],
        "a_persien": ["بله، لطفاً.", "نه، فارسی خوب است."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Customer",
        "q": "Where can I recharge my tourist SIM?",
        "q_persien": "کجا می‌توانم سیم‌کارت توریستی خود را شارژ کنم؟",
        "a": ["At any operator kiosk.", "Online via the operator website."],
        "a_persien": ["در هر کیوسک اپراتور.", "آنلاین از طریق وب‌سایت اپراتور."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Would you like a SIM card with a tourist package?",
        "q_persien": "آیا سیم‌کارتی با بسته توریستی می‌خواهید؟",
        "a": ["Yes, please recommend a package.", "No, just the SIM."],
        "a_persien": ["بله، لطفاً یک بسته را توصیه کنید.", "نه، فقط سیم‌کارت."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Customer",
        "q": "Can I keep my tourist SIM after I leave Iran?",
        "q_persien": "آیا می‌توانم پس از خروج از ایران، سیم‌کارت توریستی خود را نگه دارم؟",
        "a": ["It expires after your visa period.", "You may keep it as a souvenir, but it won't work."],
        "a_persien": ["پس از دوره ویزای شما منقضی می‌شود.", "می‌توانید آن را به عنوان یادگاری نگه دارید، اما کار نخواهد کرد."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you need help activating your tourist SIM?",
        "q_persien": "آیا برای فعال کردن سیم‌کارت توریستی خود به کمک نیاز دارید؟",
        "a": ["Yes, please activate it for me.", "No, I can do it myself."],
        "a_persien": ["بله، لطفاً آن را برای من فعال کنید.", "نه، خودم می‌توانم انجام دهم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Customer",
        "q": "Can I use my tourist SIM for roaming?",
        "q_persien": "آیا می‌توانم از سیم‌کارت توریستی خود برای رومینگ استفاده کنم؟",
        "a": ["Roaming isn't available for tourist SIMs.", "Only local use is allowed."],
        "a_persien": ["رومینگ برای سیم‌کارت‌های توریستی در دسترس نیست.", "فقط استفاده محلی مجاز است."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you need help with SIM registration?",
        "q_persien": "آیا برای ثبت‌نام سیم‌کارت به کمک نیاز دارید؟",
        "a": ["Yes, please assist.", "No, I already registered."],
        "a_persien": ["بله، لطفاً کمک کنید.", "نه، من قبلاً ثبت‌نام کرده‌ام."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Customer",
        "q": "Are tourist SIMs available at the border?",
        "q_persien": "آیا سیم‌کارت‌های توریستی در مرز موجود هستند؟",
        "a": ["Yes, at most border points.", "No, best to buy at the airport."],
        "a_persien": ["بله، در بیشتر نقاط مرزی.", "نه، بهتر است در فرودگاه بخرید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you have a local contact number?",
        "q_persien": "آیا شماره تماس محلی دارید؟",
        "a": ["No, just the tourist SIM.", "Yes, I have a local friend."],
        "a_persien": ["نه، فقط سیم‌کارت توریستی.", "بله، من یک دوست محلی دارم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Customer",
        "q": "Is the tourist SIM compatible with my device?",
        "q_persien": "آیا سیم‌کارت توریستی با دستگاه من سازگار است؟",
        "a": ["Works in all unlocked phones.", "Check compatibility at the kiosk."],
        "a_persien": ["در تمام گوشی‌های آنلاک کار می‌کند.", "سازگاری را در کیوسک بررسی کنید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you want to activate data packages too?",
        "q_persien": "آیا می‌خواهید بسته‌های دیتا را نیز فعال کنید؟",
        "a": ["Yes, I need internet.", "No, just basic use."],
        "a_persien": ["بله، به اینترنت نیاز دارم.", "نه، فقط استفاده اولیه."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Customer",
        "q": "Will my SIM work after my visa ends?",
        "q_persien": "آیا سیم‌کارت من پس از پایان ویزای من کار خواهد کرد؟",
        "a": ["No, it will be deactivated.", "You'll need to buy a new SIM."],
        "a_persien": ["نه، غیرفعال خواهد شد.", "باید سیم‌کارت جدیدی بخرید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Would you like a map of free Wi-Fi hotspots?",
        "q_persien": "آیا نقشه نقاط وای‌فای رایگان را می‌خواهید؟",
        "a": ["Yes, that would help.", "No, I have mobile data."],
        "a_persien": ["بله، این کمک می‌کند.", "نه، من دیتای موبایل دارم."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "Why is my SIM card not working?",
        "q_persien": "چرا سیم‌کارت من کار نمی‌کند؟",
        "a": ["It may be damaged or inactive.", "Try restarting your device."],
        "a_persien": ["ممکن است آسیب دیده یا غیرفعال باشد.", "دستگاه خود را ری‌استارت کنید."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Have you tried your SIM in another phone?",
        "q_persien": "آیا سیم‌کارت خود را در گوشی دیگری امتحان کرده‌اید؟",
        "a": ["Yes, same problem.", "No, I’ll test it now."],
        "a_persien": ["بله، همان مشکل.", "نه، الان آن را تست می‌کنم."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "How do I change my plan?",
        "q_persien": "چگونه طرح خود را تغییر دهم؟",
        "a": ["Use the mobile app to change your plan.", "Visit a branch for assistance."],
        "a_persien": ["از برنامه موبایل برای تغییر طرح خود استفاده کنید.", "برای کمک به یک شعبه مراجعه کنید."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Do you want a family plan?",
        "q_persien": "آیا طرح خانواده می‌خواهید؟",
        "a": ["Yes, add family members.", "No, single line is enough."],
        "a_persien": ["بله، اعضای خانواده را اضافه کنید.", "نه، یک خط کافی است."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "Can I have two SIMs with the same number?",
        "q_persien": "آیا می‌توانم دو سیم‌کارت با یک شماره داشته باشم؟",
        "a": ["No, each SIM has a unique number.", "Only dual-SIM phones can use two numbers."],
        "a_persien": ["نه، هر سیم‌کارت شماره منحصر به فردی دارد.", "فقط گوشی‌های دو سیم‌کارته می‌توانند از دو شماره استفاده کنند."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Are you using a dual-SIM phone?",
        "q_persien": "آیا از گوشی دو سیم‌کارته استفاده می‌کنید؟",
        "a": ["Yes, I have two SIM slots.", "No, just one SIM slot."],
        "a_persien": ["بله، من دو جای سیم‌کارت دارم.", "نه، فقط یک جای سیم‌کارت."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "Why is my data so slow?",
        "q_persien": "چرا دیتای من اینقدر کند است؟",
        "a": ["Check if you have coverage issues.", "Maybe you've reached your data limit."],
        "a_persien": ["بررسی کنید که آیا مشکلات پوشش‌دهی دارید.", "شاید به حد مجاز دیتای خود رسیده‌اید."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Are you connected to 4G or 5G?",
        "q_persien": "آیا به 4G یا 5G متصل هستید؟",
        "a": ["I see 4G on my phone.", "My phone is only 3G."],
        "a_persien": ["من 4G را روی گوشی خود می‌بینم.", "گوشی من فقط 3G است."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "How do I set up voicemail?",
        "q_persien": "چگونه پست صوتی را تنظیم کنم؟",
        "a": ["Call the voicemail setup number.", "Use the settings in your phone."],
        "a_persien": ["با شماره تنظیم پست صوتی تماس بگیرید.", "از تنظیمات گوشی خود استفاده کنید."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Do you need help setting up voicemail?",
        "q_persien": "آیا برای تنظیم پست صوتی به کمک نیاز دارید؟",
        "a": ["Yes, please walk me through it.", "No, I’ll manage."],
        "a_persien": ["بله، لطفاً مرا راهنمایی کنید.", "نه، خودم مدیریت می‌کنم."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "Why am I not receiving SMS?",
        "q_persien": "چرا پیامک دریافت نمی‌کنم؟",
        "a": ["Check if SMSC is set correctly.", "Network may be down temporarily."],
        "a_persien": ["بررسی کنید که آیا SMSC به درستی تنظیم شده است.", "شبکه ممکن است به طور موقت قطع باشد."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Do you have SMS blocked on your account?",
        "q_persien": "آیا پیامک در حساب شما مسدود شده است؟",
        "a": ["No, it's not blocked.", "Maybe, please check for me."],
        "a_persien": ["نه، مسدود نیست.", "شاید، لطفاً برای من بررسی کنید."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "How do I enable international calling?",
        "q_persien": "چگونه تماس بین‌المللی را فعال کنم؟",
        "a": ["Request activation via the app.", "Visit a branch to activate."],
        "a_persien": ["از طریق برنامه درخواست فعال‌سازی کنید.", "برای فعال کردن به یک شعبه مراجعه کنید."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Are you traveling abroad soon?",
        "q_persien": "آیا به زودی به خارج از کشور سفر می‌کنید؟",
        "a": ["Yes, please activate roaming.", "No, staying in Iran."],
        "a_persien": ["بله، لطفاً رومینگ را فعال کنید.", "نه، در ایران می‌مانم."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "Why was my SIM blocked?",
        "q_persien": "چرا سیم‌کارت من مسدود شد؟",
        "a": ["Due to non-payment or verification issues.", "Repeated wrong PIN entries block the SIM."],
        "a_persien": ["به دلیل عدم پرداخت یا مشکلات تأیید هویت.", "ورود مکرر پین اشتباه، سیم‌کارت را مسدود می‌کند."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Did you enter the wrong PIN three times?",
        "q_persien": "آیا پین را سه بار اشتباه وارد کردید؟",
        "a": ["Yes, now it's asking for PUK.", "No, that's not the issue."],
        "a_persien": ["بله، الان PUK می‌خواهد.", "نه، مشکل این نیست."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "How do I get a replacement for a lost SIM?",
        "q_persien": "چگونه برای یک سیم‌کارت گم‌شده، جایگزین بگیرم؟",
        "a": ["Visit a branch with your ID.", "Order a replacement online, if available."],
        "a_persien": ["با کارت شناسایی خود به یک شعبه مراجعه کنید.", "در صورت امکان، آنلاین جایگزین سفارش دهید."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Is your ID up to date for replacement?",
        "q_persien": "آیا کارت شناسایی شما برای جایگزینی به‌روز است؟",
        "a": ["Yes, I have my new ID.", "No, it’s expired."],
        "a_persien": ["بله، من کارت شناسایی جدید خود را دارم.", "نه، منقضی شده است."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "What should I do if I forgot my PUK code?",
        "q_persien": "اگر کد PUK خود را فراموش کردم چه کار کنم؟",
        "a": ["Request it from the operator.", "Check the original SIM package."],
        "a_persien": ["آن را از اپراتور درخواست کنید.", "بسته اصلی سیم‌کارت را بررسی کنید."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Do you have the SIM package or card?",
        "q_persien": "آیا بسته یا کارت سیم‌کارت را دارید؟",
        "a": ["No, I lost it.", "Yes, I have it here."],
        "a_persien": ["نه، گمش کرده‌ام.", "بله، اینجا دارمش."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "How can I check my number?",
        "q_persien": "چگونه می‌توانم شماره خود را بررسی کنم؟",
        "a": ["Dial *733# or check in phone settings.", "Call another phone to see your number."],
        "a_persien": ["#۷۳۳* را شماره‌گیری کنید یا در تنظیمات گوشی بررسی کنید.", "با گوشی دیگری تماس بگیرید تا شماره خود را ببینید."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Do you want me to send your number by SMS?",
        "q_persien": "آیا می‌خواهید شماره شما را با پیامک ارسال کنم؟",
        "a": ["Yes, please.", "No, I know my number."],
        "a_persien": ["بله، لطفاً.", "نه، شماره‌ام را می‌دانم."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "What’s the customer service number?",
        "q_persien": "شماره خدمات مشتریان چند است؟",
        "a": ["Dial 9999 from your SIM.", "Check our website for the number."],
        "a_persien": ["از سیم‌کارت خود با ۹۹۹۹ تماس بگیرید.", "برای شماره، وب‌سایت ما را بررسی کنید."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Do you have the app installed?",
        "q_persien": "آیا برنامه را نصب کرده‌اید؟",
        "a": ["Yes, I use it often.", "No, how do I get it?"],
        "a_persien": ["بله، من اغلب از آن استفاده می‌کنم.", "نه، چگونه آن را بگیرم؟"]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "Is my SIM compatible with my iPhone?",
        "q_persien": "آیا سیم‌کارت من با آیفون من سازگار است؟",
        "a": ["All major SIMs work with iPhone.", "Some older SIMs may need replacement."],
        "a_persien": ["تمام سیم‌کارت‌های اصلی با آیفون کار می‌کنند.", "برخی سیم‌کارت‌های قدیمی‌تر ممکن است نیاز به تعویض داشته باشند."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Do you need a nano or micro SIM?",
        "q_persien": "به سیم‌کارت نانو نیاز دارید یا میکرو؟",
        "a": ["Nano SIM for my phone.", "Micro SIM is fine."],
        "a_persien": ["سیم‌کارت نانو برای گوشی من.", "سیم‌کارت میکرو خوب است."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "How do I transfer contacts from SIM to phone?",
        "q_persien": "چگونه مخاطبین را از سیم‌کارت به گوشی منتقل کنم؟",
        "a": ["Use your phone’s import feature.", "Ask our staff for guidance."],
        "a_persien": ["از ویژگی واردات گوشی خود استفاده کنید.", "از کارکنان ما راهنمایی بخواهید."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Is your device Android or iOS?",
        "q_persien": "دستگاه شما اندروید است یا iOS؟",
        "a": ["Android.", "iOS."],
        "a_persien": ["اندروید.", "iOS."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "How do I know my plan details?",
        "q_persien": "چگونه جزئیات طرح خود را بدانم؟",
        "a": ["Check the app for your plan info.", "Dial *111# for details."],
        "a_persien": ["برنامه را برای اطلاعات طرح خود بررسی کنید.", "برای جزئیات #۱۱۱* را شماره‌گیری کنید."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Would you like me to text your plan details?",
        "q_persien": "آیا می‌خواهید جزئیات طرح شما را برایتان پیامک کنم؟",
        "a": ["Yes, send them to me.", "No, I’ll check the app."],
        "a_persien": ["بله، آنها را برای من ارسال کنید.", "نه، من برنامه را بررسی می‌کنم."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "Can I upgrade my SIM to 5G?",
        "q_persien": "آیا می‌توانم سیم‌کارت خود را به 5G ارتقا دهم؟",
        "a": ["If your phone supports it, yes.", "5G upgrades are available at branches."],
        "a_persien": ["اگر گوشی شما از آن پشتیبانی کند، بله.", "ارتقا به 5G در شعب موجود است."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Do you want a physical or eSIM?",
        "q_persien": "سیم‌کارت فیزیکی می‌خواهید یا eSIM؟",
        "a": ["Physical SIM.", "eSIM if possible."],
        "a_persien": ["سیم‌کارت فیزیکی.", "eSIM در صورت امکان."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "How do I check my usage history?",
        "q_persien": "چگونه سابقه مصرف خود را بررسی کنم؟",
        "a": ["Login to your account online.", "Request a statement by SMS."],
        "a_persien": ["به حساب آنلاین خود وارد شوید.", "درخواست صورتحساب با پیامک."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Would you like usage alerts?",
        "q_persien": "آیا هشدارهای مصرف می‌خواهید؟",
        "a": ["Yes, via SMS.", "No, email is fine."],
        "a_persien": ["بله، از طریق پیامک.", "نه، ایمیل خوب است."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "What is the SIM expiration policy?",
        "q_persien": "سیاست انقضای سیم‌کارت چیست؟",
        "a": ["Inactive SIMs expire after 6 months.", "It varies by operator."],
        "a_persien": ["سیم‌کارت‌های غیرفعال پس از ۶ ماه منقضی می‌شوند.", "بسته به اپراتور متفاوت است."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Have you used the SIM recently?",
        "q_persien": "آیا اخیراً از سیم‌کارت استفاده کرده‌اید؟",
        "a": ["Yes, this week.", "No, it’s been months."],
        "a_persien": ["بله، این هفته.", "نه، ماه‌هاست."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "Can I use the SIM in a tablet?",
        "q_persien": "آیا می‌توانم از سیم‌کارت در تبلت استفاده کنم؟",
        "a": ["Yes, if it’s unlocked.", "Check compatibility first."],
        "a_persien": ["بله، اگر آنلاک باشد.", "ابتدا سازگاری را بررسی کنید."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Do you want to enable tethering?",
        "q_persien": "آیا می‌خواهید تترینگ را فعال کنید؟",
        "a": ["Yes, for internet sharing.", "No, I don’t need that."],
        "a_persien": ["بله، برای اشتراک‌گذاری اینترنت.", "نه، به آن نیازی ندارم."]
    },
    {
        "topic": "General FAQ",
        "role": "Customer",
        "q": "How can I block unwanted calls?",
        "q_persien": "چگونه می‌توانم تماس‌های ناخواسته را مسدود کنم؟",
        "a": ["Use the block feature on your phone.", "Contact operator for call barring."],
        "a_persien": ["از ویژگی مسدود کردن در گوشی خود استفاده کنید.", "برای مسدود کردن تماس با اپراتور تماس بگیرید."]
    },
    {
        "topic": "General FAQ",
        "role": "Operator",
        "q": "Would you like to set up call barring?",
        "q_persien": "آیا می‌خواهید مسدود کردن تماس را تنظیم کنید؟",
        "a": ["Yes, activate it.", "No, just blocking on phone."],
        "a_persien": ["بله، آن را فعال کنید.", "نه، فقط مسدود کردن روی گوشی."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Operator",
        "q": "May I transfer your call to my colleague for further assistance?",
        "q_persien": "آیا می‌توانم تماس شما را برای کمک بیشتر به همکارم منتقل کنم؟",
        "a": ["Yes, please transfer me.", "No, I want to speak with you."],
        "a_persien": ["بله، لطفاً مرا منتقل کنید.", "نه، می‌خواهم با شما صحبت کنم."]
    }
,
    {
        "topic": "Colleague Handoff",
        "role": "Customer",
        "q": "Can I speak to a technical expert?",
        "q_persien": "می‌توانم با یک کارشناس فنی صحبت کنم؟",
        "a": ["Yes, I'll transfer you now.", "Our technical team will call you soon."],
        "a_persien": ["بله، الان شما را منتقل می‌کنم.", "تیم فنی ما به زودی با شما تماس خواهد گرفت."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Operator",
        "q": "My colleague will need to verify your ID, is that okay?",
        "q_persien": "همکارم نیاز به تأیید هویت شما دارد، مشکلی نیست؟",
        "a": ["Yes, that's fine.", "Can I verify later?"],
        "a_persien": ["بله، مشکلی نیست.", "می‌توانم بعداً تأیید کنم؟"]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Customer",
        "q": "Will I need to repeat my issue to the next agent?",
        "q_persien": "آیا باید مشکلم را برای نماینده بعدی تکرار کنم؟",
        "a": ["Yes, for security, please explain again.", "No, your details are in our system."],
        "a_persien": ["بله، برای امنیت، لطفاً دوباره توضیح دهید.", "نه، جزئیات شما در سیستم ما ثبت شده است."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Operator",
        "q": "My colleague will help you complete your payment.",
        "q_persien": "همکارم به شما در تکمیل پرداختتان کمک خواهد کرد.",
        "a": ["Okay, please transfer me.", "No problem."],
        "a_persien": ["باشه، لطفاً مرا منتقل کنید.", "مشکلی نیست."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Customer",
        "q": "Can your colleague assist me in English?",
        "q_persien": "آیا همکار شما می‌تواند به زبان انگلیسی به من کمک کند؟",
        "a": ["Yes, we have English support.", "Currently, support is in Persian only."],
        "a_persien": ["بله، ما پشتیبانی انگلیسی داریم.", "در حال حاضر، پشتیبانی فقط به زبان فارسی است."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Operator",
        "q": "Are you comfortable sharing your details with another agent?",
        "q_persien": "آیا با اشتراک‌گذاری جزئیات خود با یک نماینده دیگر راحت هستید؟",
        "a": ["Yes, I trust your team.", "No, I prefer to speak with you."],
        "a_persien": ["بله، من به تیم شما اعتماد دارم.", "نه، ترجیح می‌دهم با شما صحبت کنم."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Customer",
        "q": "How do I send my documents to your colleague?",
        "q_persien": "چگونه مدارکم را برای همکارتان ارسال کنم؟",
        "a": ["Email or upload via our portal.", "Bring originals to the branch."],
        "a_persien": ["از طریق پورتال ما ایمیل یا بارگذاری کنید.", "اصل مدارک را به شعبه بیاورید."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Operator",
        "q": "Would you like to schedule a callback with my colleague?",
        "q_persien": "آیا می‌خواهید یک تماس برگشتی با همکارم برنامه‌ریزی کنید؟",
        "a": ["Yes, tomorrow morning is good.", "No, I'll call back myself."],
        "a_persien": ["بله، فردا صبح خوب است.", "نه، خودم تماس می‌گیرم."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Customer",
        "q": "Is your colleague authorized to handle SIM transfers?",
        "q_persien": "آیا همکار شما مجاز به انجام انتقال سیم‌کارت است؟",
        "a": ["Yes, all agents are trained.", "Some tasks require a supervisor."],
        "a_persien": ["بله، همه نمایندگان آموزش دیده‌اند.", "برخی وظایف نیاز به سرپرست دارند."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Operator",
        "q": "My colleague will send you the required forms.",
        "q_persien": "همکارم فرم‌های مورد نیاز را برای شما ارسال خواهد کرد.",
        "a": ["Great, I'll watch for them.", "Please remind me if I don't receive."],
        "a_persien": ["عالی، منتظرشان خواهم بود.", "لطفاً اگر دریافت نکردم به من یادآوری کنید."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Customer",
        "q": "Can your colleague deliver my SIM?",
        "q_persien": "آیا همکار شما می‌تواند سیم‌کارت من را تحویل دهد؟",
        "a": ["Yes, with appointment.", "No, only at the branch."],
        "a_persien": ["بله، با تعیین وقت قبلی.", "نه، فقط در شعبه."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Operator",
        "q": "My colleague will guide you through the app setup.",
        "q_persien": "همکارم شما را در راه‌اندازی برنامه راهنمایی خواهد کرد.",
        "a": ["Thank you, I'm ready.", "Let me know if I need to do anything first."],
        "a_persien": ["متشکرم، من آماده‌ام.", "اگر باید کاری را اول انجام دهم به من اطلاع دهید."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Customer",
        "q": "If I give my documents to your colleague, is it safe?",
        "q_persien": "اگر مدارکم را به همکارتان بدهم، امن است؟",
        "a": ["Yes, all data is secure.", "Documents are only used for your case."],
        "a_persien": ["بله، همه داده‌ها امن هستند.", "مدارک فقط برای پرونده شما استفاده می‌شوند."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Operator",
        "q": "Would you like a follow-up call from our team?",
        "q_persien": "آیا تماس پیگیری از تیم ما می‌خواهید؟",
        "a": ["Yes, please check back.", "No, I will reach out if needed."],
        "a_persien": ["بله، لطفاً دوباره بررسی کنید.", "نه، در صورت نیاز تماس خواهم گرفت."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Customer",
        "q": "Can I pick up my SIM from your colleague?",
        "q_persien": "می‌توانم سیم‌کارتم را از همکارتان تحویل بگیرم؟",
        "a": ["Yes, at the assigned counter.", "No, please wait for your turn."],
        "a_persien": ["بله، در باجه تعیین شده.", "نه، لطفاً منتظر نوبت خود باشید."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Operator",
        "q": "Please hand your documents to my colleague at the front desk.",
        "q_persien": "لطفاً مدارک خود را به همکارم در میز پذیرش تحویل دهید.",
        "a": ["Will do, thank you.", "Let me know if anything else is needed."],
        "a_persien": ["انجام می‌دهم، متشکرم.", "اگر چیز دیگری لازم است به من اطلاع دهید."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Customer",
        "q": "Do I need to bring original documents or copies?",
        "q_persien": "آیا باید مدارک اصلی را بیاورم یا کپی؟",
        "a": ["Originals are required.", "Copies are accepted for some services."],
        "a_persien": ["اصل مدارک الزامی است.", "کپی برای برخی خدمات پذیرفته می‌شود."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Operator",
        "q": "Do you have all the necessary documents ready for my colleague?",
        "q_persien": "آیا تمام مدارک لازم را برای همکارم آماده کرده‌اید؟",
        "a": ["Yes, I brought everything.", "No, I’ll come back with more."],
        "a_persien": ["بله، همه چیز را آورده‌ام.", "نه، با مدارک بیشتری برمی‌گردم."]
    },
    {
        "topic": "Colleague Handoff",
        "role": "Customer",
        "q": "Will my issue be resolved today?",
        "q_persien": "آیا مشکلم امروز حل خواهد شد؟",
        "a": ["Most likely, yes.", "If not, we’ll follow up soon."],
        "a_persien": ["به احتمال زیاد، بله.", "اگر نه، به زودی پیگیری خواهیم کرد."]
    },
    {
        "topic": "Documents",
        "role": "Operator",
        "q": "Can you provide your national ID card?",
        "q_persien": "می‌توانید کارت ملی خود را ارائه دهید؟",
        "a": ["Yes, here it is.", "No, I need to get it first."],
        "a_persien": ["بله، اینجاست.", "نه، باید اول آن را بگیرم."]
    },
    {
        "topic": "Documents",
        "role": "Customer",
        "q": "Do I need to submit my passport for SIM registration?",
        "q_persien": "آیا برای ثبت‌نام سیم‌کارت باید پاسپورتم را ارائه دهم؟",
        "a": ["Yes, for non-Iranians.", "No, just your ID card is fine."],
        "a_persien": ["بله، برای غیرایرانیان.", "نه، فقط کارت شناسایی شما کافی است."]
    },
    {
        "topic": "Documents",
        "role": "Operator",
        "q": "Please sign the service agreement.",
        "q_persien": "لطفاً قرارداد خدمات را امضا کنید.",
        "a": ["Done, I’ve signed it.", "I have a few questions before signing."],
        "a_persien": ["انجام شد، امضا کردم.", "قبل از امضا چند سؤال دارم."]
    },
    {
        "topic": "Documents",
        "role": "Customer",
        "q": "Where can I upload my documents?",
        "q_persien": "کجا می‌توانم مدارکم را بارگذاری کنم؟",
        "a": ["Use our secure online portal.", "Bring them to the nearest branch."],
        "a_persien": ["از پورتال آنلاین امن ما استفاده کنید.", "آنها را به نزدیکترین شعبه بیاورید."]
    },
    {
        "topic": "Documents",
        "role": "Operator",
        "q": "Can you email us a scan of your ID?",
        "q_persien": "می‌توانید اسکن کارت شناسایی خود را برای ما ایمیل کنید؟",
        "a": ["Yes, I’ll send it now.", "No, I can bring a physical copy."],
        "a_persien": ["بله، الان ارسال می‌کنم.", "نه، می‌توانم یک نسخه فیزیکی بیاورم."]
    },
    {
        "topic": "Documents",
        "role": "Customer",
        "q": "What documents are needed for corporate SIM cards?",
        "q_persien": "برای سیم‌کارت‌های شرکتی چه مدارکی لازم است؟",
        "a": ["Company registration and manager’s ID.", "Additional legal documents may be needed."],
        "a_persien": ["ثبت شرکت و کارت شناسایی مدیر.", "ممکن است به مدارک قانونی اضافی نیاز باشد."]
    },
    {
        "topic": "Documents",
        "role": "Operator",
        "q": "Do you agree to our terms and conditions?",
        "q_persien": "آیا با شرایط و ضوابط ما موافق هستید؟",
        "a": ["Yes, I accept.", "No, I want to review them first."],
        "a_persien": ["بله، می‌پذیرم.", "نه، می‌خواهم اول آنها را بررسی کنم."]
    },
    {
        "topic": "Documents",
        "role": "Customer",
        "q": "Do I need a photo for SIM registration?",
        "q_persien": "آیا برای ثبت‌نام سیم‌کارت به عکس نیاز دارم؟",
        "a": ["Yes, a recent photo is required.", "No, only your ID is needed."],
        "a_persien": ["بله، یک عکس جدید لازم است.", "نه، فقط کارت شناسایی شما لازم است."]
    },
    {
        "topic": "Documents",
        "role": "Operator",
        "q": "Can you provide proof of address?",
        "q_persien": "می‌توانید گواهی نشانی ارائه دهید؟",
        "a": ["Yes, I have a utility bill.", "No, I don’t have it with me."],
        "a_persien": ["بله، من یک قبض خدماتی دارم.", "نه، با خودم ندارم."]
    },
    {
        "topic": "Documents",
        "role": "Customer",
        "q": "What happens to my documents after registration?",
        "q_persien": "پس از ثبت‌نام چه اتفاقی برای مدارک من می‌افتد؟",
        "a": ["They're stored securely and confidentially.", "Used only for regulatory compliance."],
        "a_persien": ["آنها به صورت امن و محرمانه ذخیره می‌شوند.", "فقط برای رعایت مقررات استفاده می‌شوند."]
    },
    {
        "topic": "Documents",
        "role": "Operator",
        "q": "Do you authorize us to check your credit history?",
        "q_persien": "آیا به ما اجازه می‌دهید سابقه اعتباری شما را بررسی کنیم؟",
        "a": ["Yes, I give permission.", "No, I prefer not to."],
        "a_persien": ["بله، اجازه می‌دهم.", "نه، ترجیح می‌دهم نه."]
    },
    {
        "topic": "Documents",
        "role": "Customer",
        "q": "Is my information shared with third parties?",
        "q_persien": "آیا اطلاعات من با اشخاص ثالث به اشتراک گذاشته می‌شود؟",
        "a": ["No, it's confidential.", "Only for legal compliance when required."],
        "a_persien": ["نه، محرمانه است.", "فقط در صورت لزوم برای رعایت قوانین."]
    },
    {
        "topic": "Documents",
        "role": "Operator",
        "q": "Do you need a stamped receipt for your documents?",
        "q_persien": "آیا برای مدارک خود به رسید مهر شده نیاز دارید؟",
        "a": ["Yes, please stamp it.", "No, an email is fine."],
        "a_persien": ["بله، لطفاً آن را مهر کنید.", "نه، یک ایمیل کافی است."]
    },
    {
        "topic": "Documents",
        "role": "Customer",
        "q": "Can I bring a digital copy of my documents?",
        "q_persien": "آیا می‌توانم یک نسخه دیجیتالی از مدارکم را بیاورم؟",
        "a": ["Yes, digital copies are accepted.", "Only originals for some services."],
        "a_persien": ["بله، نسخه‌های دیجیتالی پذیرفته می‌شوند.", "فقط اصل مدارک برای برخی خدمات."]
    },
    {
        "topic": "Documents",
        "role": "Operator",
        "q": "Please check that your documents are up to date.",
        "q_persien": "لطفاً بررسی کنید که مدارک شما به‌روز باشند.",
        "a": ["Yes, all are current.", "No, I’ll update them."],
        "a_persien": ["بله، همه به‌روز هستند.", "نه، آنها را به‌روز خواهم کرد."]
    },
    {
        "topic": "Documents",
        "role": "Customer",
        "q": "How long will it take to verify my documents?",
        "q_persien": "تأیید مدارک من چقدر طول می‌کشد؟",
        "a": ["Usually within an hour.", "Some cases take a few days."],
        "a_persien": ["معمولاً ظرف یک ساعت.", "برخی موارد چند روز طول می‌کشد."]
    },
    {
        "topic": "Documents",
        "role": "Operator",
        "q": "Do you have parental consent for a minor’s SIM card?",
        "q_persien": "آیا برای سیم‌کارت یک فرد زیر سن قانونی رضایت والدین دارید؟",
        "a": ["Yes, here’s the letter.", "No, I need to get consent."],
        "a_persien": ["بله، این نامه است.", "نه، باید رضایت بگیرم."]
    },
    {
        "topic": "Documents",
        "role": "Customer",
        "q": "Do you need a signature for each document?",
        "q_persien": "آیا برای هر مدرک به امضا نیاز دارید؟",
        "a": ["Yes, please sign each one.", "No, one signature is enough."],
        "a_persien": ["بله، لطفاً هر کدام را امضا کنید.", "نه، یک امضا کافی است."]
    },
    {
        "topic": "Documents",
        "role": "Operator",
        "q": "Have you reviewed all requirements before submitting?",
        "q_persien": "آیا قبل از ارسال، تمام الزامات را بررسی کرده‌اید؟",
        "a": ["Yes, I’ve checked everything.", "No, please help me review."],
        "a_persien": ["بله، همه چیز را بررسی کرده‌ام.", "نه، لطفاً به من در بررسی کمک کنید."]
    },
    {
        "topic": "Documents",
        "role": "Customer",
        "q": "What should I do if a document is missing?",
        "q_persien": "اگر یک مدرک گم شده باشد چه کار کنم؟",
        "a": ["Bring it as soon as possible.", "Request an extension if needed."],
        "a_persien": ["در اسرع وقت آن را بیاورید.", "در صورت نیاز درخواست تمدید مهلت کنید."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Hello and welcome! How can I assist you today?",
        "q_persien": "سلام و خوش آمدید! امروز چگونه می‌توانم به شما کمک کنم؟",
        "a": ["Hi! I have a question about my bill.", "Hello, I need help activating my SIM."],
        "a_persien": ["سلام! سؤالی در مورد قبض خود دارم.", "سلام، برای فعال کردن سیم‌کارتم به کمک نیاز دارم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Good morning! What brings you to us today?",
        "q_persien": "صبح بخیر! امروز چه چیزی شما را به اینجا کشانده است؟",
        "a": ["Good morning! I want to upgrade my package.", "Hi, I need technical support."],
        "a_persien": ["صبح بخیر! می‌خواهم بسته‌ام را ارتقا دهم.", "سلام، به پشتیبانی فنی نیاز دارم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thank you for calling our customer care line. How may I help?",
        "q_persien": "از تماس شما با خط مراقبت از مشتریان متشکریم. چگونه می‌توانم کمک کنم؟",
        "a": ["I want to know about your internet offers.", "I lost my SIM card, can you help?"],
        "a_persien": ["می‌خواهم در مورد پیشنهادات اینترنتی شما بدانم.", "سیم‌کارتم را گم کرده‌ام، می‌توانید کمک کنید؟"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Welcome to our support service. What can I do for you?",
        "q_persien": "به سرویس پشتیبانی ما خوش آمدید. چه کاری می‌توانم برای شما انجام دهم؟",
        "a": ["How do I check my remaining balance?", "I need to report a problem."],
        "a_persien": ["چگونه موجودی باقیمانده خود را بررسی کنم؟", "باید مشکلی را گزارش دهم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Hi, you’ve reached our service center. How may I help?",
        "q_persien": "سلام، شما با مرکز خدمات ما تماس گرفته‌اید. چگونه می‌توانم کمک کنم؟",
        "a": ["I'd like to buy a new SIM card.", "Can you help me with roaming settings?"],
        "a_persien": ["می‌خواهم یک سیم‌کارت جدید بخرم.", "می‌توانید در مورد تنظیمات رومینگ به من کمک کنید؟"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Hello and thank you for calling. May I have your name, please?",
        "q_persien": "سلام و از تماس شما متشکرم. ممکن است نام شما را داشته باشم، لطفاً؟",
        "a": ["Sure, I’m Reza.", "My name is Sara."],
        "a_persien": ["حتماً، من رضا هستم.", "نام من سارا است."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thank you for choosing us. How can I make your day better?",
        "q_persien": "از اینکه ما را انتخاب کردید متشکریم. چگونه می‌توانم روز شما را بهتر کنم؟",
        "a": ["Please tell me about your data plans.", "I need to suspend my line."],
        "a_persien": ["لطفاً در مورد طرح‌های دیتای خود به من بگویید.", "باید خطم را معلق کنم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Good afternoon! How can I assist?",
        "q_persien": "بعد از ظهر بخیر! چگونه می‌توانم کمک کنم؟",
        "a": ["I want to block a stolen SIM.", "Can you send me my usage history?"],
        "a_persien": ["می‌خواهم یک سیم‌کارت دزدیده شده را مسدود کنم.", "می‌توانید سابقه مصرف من را برایم ارسال کنید؟"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Welcome! How may I serve you today?",
        "q_persien": "خوش آمدید! امروز چگونه می‌توانم در خدمت شما باشم؟",
        "a": ["I’m interested in new SIM cards.", "Can I upgrade my SIM to 4G?"],
        "a_persien": ["من به سیم‌کارت‌های جدید علاقه‌مندم.", "می‌توانم سیم‌کارتم را به 4G ارتقا دهم؟"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thank you for contacting us. How can we be of service?",
        "q_persien": "از تماس شما با ما متشکریم. چگونه می‌توانیم در خدمت باشیم؟",
        "a": ["Can you help me reset my password?", "I want to file a complaint."],
        "a_persien": ["می‌توانید به من در بازنشانی رمز عبورم کمک کنید؟", "می‌خواهم شکایتی ثبت کنم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "It’s a pleasure to have you on the line. How are you today?",
        "q_persien": "خوشحالم که با شما صحبت می‌کنم. امروز حال شما چطور است؟",
        "a": ["I’m good, thank you.", "I’m having some trouble with my account."],
        "a_persien": ["من خوبم، متشکرم.", "من با حسابم مشکل دارم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thanks for calling! Is there anything I can do for you?",
        "q_persien": "از تماس شما متشکریم! آیا کاری هست که بتوانم برای شما انجام دهم؟",
        "a": ["Yes, my internet is slow.", "No, just checking info."],
        "a_persien": ["بله، اینترنتم کند است.", "نه، فقط اطلاعات را بررسی می‌کنم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "We’re happy to help. What would you like to discuss today?",
        "q_persien": "خوشحالیم که کمک کنیم. امروز در مورد چه چیزی می‌خواهید صحبت کنید؟",
        "a": ["My SIM is not working.", "How do I get an itemized bill?"],
        "a_persien": ["سیم‌کارتم کار نمی‌کند.", "چگونه یک قبض تفکیکی بگیرم؟"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Welcome! Your satisfaction matters to us. How can I help?",
        "q_persien": "خوش آمدید! رضایت شما برای ما مهم است. چگونه می‌توانم کمک کنم؟",
        "a": ["I want to transfer credit.", "How do I activate voicemail?"],
        "a_persien": ["می‌خواهم اعتبار منتقل کنم.", "چگونه پست صوتی را فعال کنم؟"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thank you for reaching out. How can I assist?",
        "q_persien": "از تماس شما متشکریم. چگونه می‌توانم کمک کنم؟",
        "a": ["Can I order a tourist SIM?", "What documents do I need for SIM registration?"],
        "a_persien": ["می‌توانم یک سیم‌کارت توریستی سفارش دهم؟", "برای ثبت‌نام سیم‌کارت به چه مدارکی نیاز دارم؟"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Glad to speak with you today. What can I do for you?",
        "q_persien": "خوشحالم که امروز با شما صحبت می‌کنم. چه کاری می‌توانم برای شما انجام دهم؟",
        "a": ["How do I update my personal info?", "Can I block spam messages?"],
        "a_persien": ["چگونه اطلاعات شخصی خود را به‌روز کنم؟", "می‌توانم پیام‌های اسپم را مسدود کنم؟"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "We appreciate your call! What do you need today?",
        "q_persien": "از تماس شما قدردانی می‌کنیم! امروز به چه چیزی نیاز دارید؟",
        "a": ["I want to change my plan.", "Can I use my SIM abroad?"],
        "a_persien": ["می‌خواهم طرح خود را تغییر دهم.", "می‌توانم از سیم‌کارتم در خارج از کشور استفاده کنم؟"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thanks for joining us. How can we help make things easier?",
        "q_persien": "از اینکه به ما پیوستید متشکریم. چگونه می‌توانیم کارها را آسان‌تر کنیم؟",
        "a": ["I want to report a lost SIM.", "How do I recharge online?"],
        "a_persien": ["می‌خواهم یک سیم‌کارت گم‌شده را گزارش دهم.", "چگونه آنلاین شارژ کنم؟"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "We’re here to help. How can I make your day better?",
        "q_persien": "ما اینجا هستیم تا کمک کنیم. چگونه می‌توانم روز شما را بهتر کنم؟",
        "a": ["I need help transferring ownership.", "How do I stop marketing SMS?"],
        "a_persien": ["برای انتقال مالکیت به کمک نیاز دارم.", "چگونه پیامک‌های تبلیغاتی را متوقف کنم؟"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "It’s wonderful to connect with you. What can I do for you?",
        "q_persien": "فوق‌العاده است که با شما ارتباط برقرار می‌کنم. چه کاری می‌توانم برای شما انجام دهم؟",
        "a": ["Can I reactivate my old number?", "How do I get a replacement SIM?"],
        "a_persien": ["می‌توانم شماره قدیمی خود را دوباره فعال کنم؟", "چگونه یک سیم‌کارت جایگزین بگیرم؟"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thank you for calling us today!",
        "q_persien": "از تماس امروز شما با ما متشکریم!",
        "a": ["Thanks for helping me.", "I appreciate your support."],
        "a_persien": ["ممنون که به من کمک کردید.", "از حمایت شما قدردانی می‌کنم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "We value your loyalty. How else can we help?",
        "q_persien": "ما برای وفاداری شما ارزش قائل هستیم. دیگر چگونه می‌توانیم کمک کنیم؟",
        "a": ["No, that’s all for now, thanks!", "Can you help with my device settings?"],
        "a_persien": ["نه، فعلاً همین، متشکرم!", "می‌توانید در مورد تنظیمات دستگاه من کمک کنید؟"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "We appreciate your trust in our services.",
        "q_persien": "ما از اعتماد شما به خدماتمان قدردانی می‌کنیم.",
        "a": ["Thank you for always being helpful.", "I like your service."],
        "a_persien": ["متشکرم که همیشه کمک‌کننده هستید.", "من سرویس شما را دوست دارم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thanks for your patience while I check your information.",
        "q_persien": "از صبر شما در حین بررسی اطلاعاتتان متشکرم.",
        "a": ["No problem!", "Take your time."],
        "a_persien": ["مشکلی نیست!", "وقت بگذارید."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thank you for choosing us again.",
        "q_persien": "از اینکه دوباره ما را انتخاب کردید متشکریم.",
        "a": ["I’m happy to be back.", "You have great offers."],
        "a_persien": ["خوشحالم که برگشتم.", "شما پیشنهادات عالی دارید."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "We’re grateful for your feedback.",
        "q_persien": "ما از بازخورد شما سپاسگزاریم.",
        "a": ["I’m glad to help improve things.", "Thanks for listening."],
        "a_persien": ["خوشحالم که به بهبود اوضاع کمک می‌کنم.", "ممنون که گوش دادید."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thank you for your time and attention.",
        "q_persien": "از وقت و توجه شما متشکرم.",
        "a": ["Thank you for your help.", "Glad to talk to you."],
        "a_persien": ["از کمکتان متشکرم.", "خوشحالم که با شما صحبت کردم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Your satisfaction means a lot to us.",
        "q_persien": "رضایت شما برای ما ارزش زیادی دارد.",
        "a": ["I feel valued, thank you.", "That’s great to hear."],
        "a_persien": ["احساس می‌کنم ارزشمندم، متشکرم.", "شنیدنش عالی است."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thanks for sharing your thoughts.",
        "q_persien": "ممنون که نظراتتان را به اشتراک گذاشتید.",
        "a": ["Happy to give feedback.", "Hope it’s helpful."],
        "a_persien": ["خوشحالم که بازخورد می‌دهم.", "امیدوارم مفید باشد."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "We appreciate your cooperation today.",
        "q_persien": "از همکاری امروز شما قدردانی می‌کنیم.",
        "a": ["Thank you!", "Happy to help."],
        "a_persien": ["متشکرم!", "خوشحالم که کمک می‌کنم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "It’s been a pleasure assisting you.",
        "q_persien": "کمک به شما باعث افتخار بود.",
        "a": ["Same here, thank you.", "You made it easy."],
        "a_persien": ["من هم همینطور، متشکرم.", "شما کار را آسان کردید."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "We’re glad you called us.",
        "q_persien": "خوشحالیم که با ما تماس گرفتید.",
        "a": ["Thank you for your support.", "Your help is appreciated."],
        "a_persien": ["از حمایت شما متشکرم.", "کمک شما قابل قدردانی است."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Your comfort matters to us.",
        "q_persien": "راحتی شما برای ما مهم است.",
        "a": ["I feel comfortable calling you.", "Thanks for being supportive."],
        "a_persien": ["من با تماس با شما احساس راحتی می‌کنم.", "ممنون که حمایت‌گر هستید."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "We care about your satisfaction.",
        "q_persien": "ما به رضایت شما اهمیت می‌دهیم.",
        "a": ["It shows, thank you.", "I like your attitude."],
        "a_persien": ["نشان می‌دهد، متشکرم.", "من نگرش شما را دوست دارم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thank you for being with us.",
        "q_persien": "از اینکه با ما هستید متشکریم.",
        "a": ["Happy to be your customer.", "Thanks for your services."],
        "a_persien": ["خوشحالم که مشتری شما هستم.", "ممنون از خدماتتان."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thanks for working with us.",
        "q_persien": "ممنون که با ما کار می‌کنید.",
        "a": ["You’re welcome!", "I appreciate your effort."],
        "a_persien": ["خواهش می‌کنم!", "از تلاشتان قدردانی می‌کنم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thanks for calling and have a great day!",
        "q_persien": "ممنون از تماس و روز خوبی داشته باشید!",
        "a": ["Thank you! You too.", "Goodbye, and thanks."],
        "a_persien": ["متشکرم! شما هم همینطور.", "خداحافظ، و ممنون."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "We hope to hear from you again soon.",
        "q_persien": "امیدواریم به زودی دوباره از شما بشنویم.",
        "a": ["I’ll definitely call if I need anything.", "Thanks, I will!"],
        "a_persien": ["حتماً اگر به چیزی نیاز داشته باشم تماس می‌گیرم.", "ممنون، حتماً!"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thank you for trusting us with your needs.",
        "q_persien": "از اینکه به ما برای نیازهایتان اعتماد کردید متشکریم.",
        "a": ["I appreciate your honesty.", "Thanks for being reliable."],
        "a_persien": ["از صداقت شما قدردانی می‌کنم.", "ممنون که قابل اعتماد هستید."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Your happiness is important to us.",
        "q_persien": "خوشحالی شما برای ما مهم است.",
        "a": ["That’s why I call you!", "Thank you for caring."],
        "a_persien": ["به همین دلیل با شما تماس می‌گیرم!", "متشکرم که اهمیت می‌دهید."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Is there anything else I can help you with before we end?",
        "q_persien": "آیا قبل از پایان، چیز دیگری هست که بتوانم به شما کمک کنم؟",
        "a": ["No, that’s all for now.", "Yes, one more thing please."],
        "a_persien": ["نه، فعلاً همین.", "بله، یک چیز دیگر لطفاً."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "If you have any other questions, please call us anytime.",
        "q_persien": "اگر سؤال دیگری دارید، لطفاً هر زمان خواستید با ما تماس بگیرید.",
        "a": ["Thank you, I will.", "That’s good to know."],
        "a_persien": ["متشکرم، حتماً.", "خوب است بدانم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Have a wonderful day and thank you for your call!",
        "q_persien": "روز فوق‌العاده‌ای داشته باشید و از تماستان متشکریم!",
        "a": ["You too, goodbye!", "Thanks, take care."],
        "a_persien": ["شما هم همینطور، خداحافظ!", "ممنون، مراقب باشید."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thank you for your time. Goodbye!",
        "q_persien": "از وقت شما متشکرم. خداحافظ!",
        "a": ["Goodbye, and thank you.", "See you next time."],
        "a_persien": ["خداحافظ، و متشکرم.", "دفعه بعد می‌بینمتان."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "We look forward to serving you again.",
        "q_persien": "مشتاقانه منتظر خدمت‌رسانی مجدد به شما هستیم.",
        "a": ["Thank you!", "Will do."],
        "a_persien": ["متشکرم!", "انجام خواهم داد."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "If you need further assistance, we’re just a call away.",
        "q_persien": "اگر به کمک بیشتری نیاز دارید، ما فقط یک تماس با شما فاصله داریم.",
        "a": ["Thanks for the info.", "I’ll remember that."],
        "a_persien": ["ممنون از اطلاعات.", "یادم خواهد ماند."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thank you for your trust. Take care!",
        "q_persien": "از اعتماد شما متشکرم. مراقب باشید!",
        "a": ["You too, goodbye.", "Stay safe!"],
        "a_persien": ["شما هم همینطور، خداحافظ.", "مراقب باشید!"]
    }
,
    {
        "topic": "General",
        "role": "Operator",
        "q": "We hope you enjoy your day!",
        "q_persien": "امیدواریم از روزتان لذت ببرید!",
        "a": ["Thank you, same to you!", "Wish you a great day too."],
        "a_persien": ["متشکرم، شما هم همینطور!", "برای شما هم روز خوبی آرزو می‌کنم."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Goodbye and thank you for choosing us.",
        "q_persien": "خداحافظ و از اینکه ما را انتخاب کردید متشکریم.",
        "a": ["Goodbye!", "Thanks for everything."],
        "a_persien": ["خداحافظ!", "ممنون برای همه چیز."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "We’re here whenever you need us.",
        "q_persien": "هر وقت به ما نیاز داشتید ما اینجا هستیم.",
        "a": ["Thanks, I appreciate it.", "That’s reassuring."],
        "a_persien": ["ممنون، قدردانی می‌کنم.", "این اطمینان‌بخش است."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "All the best to you. Goodbye!",
        "q_persien": "بهترین‌ها برای شما. خداحافظ!",
        "a": ["Thank you, goodbye!", "Take care!"],
        "a_persien": ["متشکرم، خداحافظ!", "مراقب باشید!"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Hope we helped you today. Goodbye!",
        "q_persien": "امیدواریم امروز به شما کمک کرده باشیم. خداحافظ!",
        "a": ["You did, thanks!", "Goodbye and thanks."],
        "a_persien": ["کردید، ممنون!", "خداحافظ و ممنون."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thanks for being part of our family. Bye!",
        "q_persien": "ممنون که بخشی از خانواده ما هستید. خداحافظ!",
        "a": ["Glad to be a customer.", "Goodbye!"],
        "a_persien": ["خوشحالم که مشتری هستم.", "خداحافظ!"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Feel free to call us back if you have any concerns.",
        "q_persien": "اگر نگرانی‌ای داشتید، راحت باشید و دوباره با ما تماس بگیرید.",
        "a": ["I will, thank you.", "Sure, thanks!"],
        "a_persien": ["حتماً، متشکرم.", "حتماً، ممنون!"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Hope you have a smooth experience!",
        "q_persien": "امیدواریم تجربه راحتی داشته باشید!",
        "a": ["Thank you, I hope so too.", "See you!"],
        "a_persien": ["متشکرم، من هم امیدوارم.", "می‌بینمتان!"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Wishing you a pleasant day ahead.",
        "q_persien": "روز خوشی را برایتان آرزومندم.",
        "a": ["Thank you, you too.", "Goodbye."],
        "a_persien": ["متشکرم، شما هم همینطور.", "خداحافظ."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "You’re always welcome here. Goodbye!",
        "q_persien": "شما همیشه اینجا خوش آمدید. خداحافظ!",
        "a": ["Thank you for the warm service.", "Goodbye!"],
        "a_persien": ["ممنون از خدمات گرمتان.", "خداحافظ!"]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "We’ll be waiting for your next call.",
        "q_persien": "منتظر تماس بعدی شما خواهیم بود.",
        "a": ["I’ll call if I need anything.", "Goodbye."],
        "a_persien": ["اگر چیزی لازم داشتم تماس می‌گیرم.", "خداحافظ."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Take care and talk to you soon.",
        "q_persien": "مراقب باشید و به زودی با شما صحبت می‌کنیم.",
        "a": ["You too, thanks!", "See you next time."],
        "a_persien": ["شما هم همینطور، ممنون!", "دفعه بعد می‌بینمتان."]
    },
    {
        "topic": "General",
        "role": "Operator",
        "q": "Thanks for your trust. Goodbye!",
        "q_persien": "از اعتمادتان متشکرم. خداحافظ!",
        "a": ["Goodbye and thank you.", "I appreciate your help."],
        "a_persien": ["خداحافظ و متشکرم.", "از کمکتان قدردانی می‌کنم."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How can I check my SIM balance?",
        "q_persien": "چگونه می‌توانم موجودی سیم‌کارتم را بررسی کنم؟",
        "a": ["Dial *140# to check your balance.", "Use the mobile app to view your balance."],
        "a_persien": ["برای بررسی موجودی خود #۱۴۰* را شماره‌گیری کنید.", "از اپلیکیشن موبایل برای مشاهده موجودی خود استفاده کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I activate my new SIM card?",
        "q_persien": "چگونه سیم‌کارت جدیدم را فعال کنم؟",
        "a": ["Insert it and restart your phone.", "Call 1234 to activate."],
        "a_persien": ["آن را وارد کرده و گوشی خود را ری‌استارت کنید.", "برای فعال‌سازی با ۱۲۳۴ تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I transfer my number to another operator?",
        "q_persien": "می‌توانم شماره‌ام را به اپراتور دیگری منتقل کنم؟",
        "a": ["Yes, number portability is available.", "Visit our store for assistance."],
        "a_persien": ["بله، قابلیت ترابرد شماره وجود دارد.", "برای کمک به فروشگاه ما مراجعه کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I buy more data?",
        "q_persien": "چگونه دیتای بیشتری بخرم؟",
        "a": ["Purchase via the app.", "Send the package code by SMS."],
        "a_persien": ["از طریق اپلیکیشن خرید کنید.", "کد بسته را با پیامک ارسال کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Why is my internet slow?",
        "q_persien": "چرا اینترنتم کند است؟",
        "a": ["It could be a network issue.", "Try restarting your device."],
        "a_persien": ["ممکن است مشکل شبکه باشد.", "دستگاه خود را ری‌استارت کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "What documents do I need to buy a SIM?",
        "q_persien": "برای خرید سیم‌کارت به چه مدارکی نیاز دارم؟",
        "a": ["Just your national ID card.", "Passport is also accepted."],
        "a_persien": ["فقط کارت ملی شما.", "پاسپورت هم پذیرفته می‌شود."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I block a lost SIM card?",
        "q_persien": "چگونه یک سیم‌کارت گم‌شده را مسدود کنم؟",
        "a": ["Call customer support to block it.", "Visit our branch with your ID."],
        "a_persien": ["برای مسدود کردن با پشتیبانی مشتریان تماس بگیرید.", "با کارت شناسایی خود به شعبه ما مراجعه کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I activate roaming on my SIM?",
        "q_persien": "می‌توانم رومینگ را روی سیم‌کارتم فعال کنم؟",
        "a": ["Yes, activate it via the app.", "Contact us to enable international use."],
        "a_persien": ["بله، از طریق اپلیکیشن آن را فعال کنید.", "برای فعال کردن استفاده بین‌المللی با ما تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I check my plan details?",
        "q_persien": "چگونه جزئیات طرحم را بررسی کنم؟",
        "a": ["Use the app or website to check.", "Dial *123# for details."],
        "a_persien": ["برای بررسی از اپلیکیشن یا وب‌سایت استفاده کنید.", "برای جزئیات #۱۲۳* را شماره‌گیری کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I top up my credit?",
        "q_persien": "چگونه اعتبارم را شارژ کنم؟",
        "a": ["Buy a recharge voucher.", "Recharge online or through banking app."],
        "a_persien": ["یک کارت شارژ بخرید.", "آنلاین یا از طریق اپلیکیشن بانکی شارژ کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "What should I do if I forget my PIN?",
        "q_persien": "اگر پین خود را فراموش کردم چه کار کنم؟",
        "a": ["Use the PUK code to unlock.", "Contact support for instructions."],
        "a_persien": ["برای باز کردن قفل از کد PUK استفاده کنید.", "برای دستورالعمل با پشتیبانی تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How can I update my account information?",
        "q_persien": "چگونه می‌توانم اطلاعات حسابم را به‌روز کنم؟",
        "a": ["Visit a branch with your ID.", "Update it online through your account."],
        "a_persien": ["با کارت شناسایی خود به یک شعبه مراجعه کنید.", "آن را آنلاین از طریق حساب خود به‌روز کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I activate or deactivate voicemail?",
        "q_persien": "چگونه پست صوتی را فعال یا غیرفعال کنم؟",
        "a": ["Dial the voicemail setup number.", "Use the settings in your phone."],
        "a_persien": ["شماره تنظیم پست صوتی را شماره‌گیری کنید.", "از تنظیمات گوشی خود استفاده کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I use my SIM card in another country?",
        "q_persien": "می‌توانم از سیم‌کارتم در کشور دیگری استفاده کنم؟",
        "a": ["If roaming is active, yes.", "Check for coverage with our partners."],
        "a_persien": ["اگر رومینگ فعال باشد، بله.", "پوشش‌دهی را با شرکای ما بررسی کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "What are your customer support hours?",
        "q_persien": "ساعات پشتیبانی مشتریان شما چیست؟",
        "a": ["We’re available 24/7.", "Check our website for specific hours."],
        "a_persien": ["ما ۲۴/۷ در دسترس هستیم.", "برای ساعات مشخص وب‌سایت ما را بررسی کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I change my phone number?",
        "q_persien": "چگونه شماره تلفنم را تغییر دهم؟",
        "a": ["Request a number change at a branch.", "New SIM purchase is required."],
        "a_persien": ["در یک شعبه درخواست تغییر شماره دهید.", "خرید سیم‌کارت جدید الزامی است."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I activate a data package?",
        "q_persien": "چگونه یک بسته دیتا را فعال کنم؟",
        "a": ["Buy a package through the app.", "Send a package code by SMS."],
        "a_persien": ["یک بسته را از طریق اپلیکیشن بخرید.", "یک کد بسته را با پیامک ارسال کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Why is my SIM card not working?",
        "q_persien": "چرا سیم‌کارت من کار نمی‌کند؟",
        "a": ["It may be inactive or damaged.", "Try cleaning and reinserting it."],
        "a_persien": ["ممکن است غیرفعال یا آسیب دیده باشد.", "آن را تمیز کرده و دوباره وارد کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I transfer credit to another user?",
        "q_persien": "چگونه اعتبار را به کاربر دیگری منتقل کنم؟",
        "a": ["Use the credit transfer code.", "Do it through our app."],
        "a_persien": ["از کد انتقال اعتبار استفاده کنید.", "این کار را از طریق اپلیکیشن ما انجام دهید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I report a network problem?",
        "q_persien": "چگونه یک مشکل شبکه را گزارش دهم؟",
        "a": ["Call customer care and explain the issue.", "Report it through our mobile app."],
        "a_persien": ["با مراقبت از مشتریان تماس بگیرید و مشکل را توضیح دهید.", "آن را از طریق اپلیکیشن موبایل ما گزارش دهید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I change SIM card ownership?",
        "q_persien": "چگونه مالکیت سیم‌کارت را تغییر دهم؟",
        "a": ["Both parties must visit a branch with IDs.", "Complete the ownership transfer form."],
        "a_persien": ["هر دو طرف باید با کارت شناسایی به یک شعبه مراجعه کنند.", "فرم انتقال مالکیت را تکمیل کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I use one SIM card in multiple devices?",
        "q_persien": "می‌توانم از یک سیم‌کارت در چند دستگاه استفاده کنم؟",
        "a": ["Not at the same time, but you can swap it.", "Consider a multi-SIM package."],
        "a_persien": ["همزمان نه، اما می‌توانید آن را جابجا کنید.", "یک بسته چند سیم‌کارته را در نظر بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "What is the difference between prepaid and postpaid?",
        "q_persien": "تفاوت بین اعتباری و دائمی چیست؟",
        "a": ["Prepaid pays in advance, postpaid after use.", "Postpaid offers monthly billing."],
        "a_persien": ["اعتباری از قبل پرداخت می‌شود، دائمی پس از استفاده.", "دائمی صورت‌حساب ماهانه ارائه می‌دهد."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I unsubscribe from services?",
        "q_persien": "چگونه از خدمات لغو اشتراک کنم؟",
        "a": ["Send the unsubscribe code by SMS.", "Use the app to manage services."],
        "a_persien": ["کد لغو اشتراک را با پیامک ارسال کنید.", "از اپلیکیشن برای مدیریت خدمات استفاده کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I keep my unused credit if I change plans?",
        "q_persien": "اگر طرحم را تغییر دهم می‌توانم اعتبار استفاده نشده‌ام را نگه دارم؟",
        "a": ["Unused credit is carried over.", "Depends on the new plan’s rules."],
        "a_persien": ["اعتبار استفاده نشده منتقل می‌شود.", "بستگی به قوانین طرح جدید دارد."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Why am I receiving spam messages?",
        "q_persien": "چرا پیام‌های اسپم دریافت می‌کنم؟",
        "a": ["Your number might be public.", "Block or report unwanted numbers."],
        "a_persien": ["شماره شما ممکن است عمومی باشد.", "شماره‌های ناخواسته را مسدود یا گزارش دهید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I upgrade my SIM to 5G?",
        "q_persien": "می‌توانم سیم‌کارتم را به 5G ارتقا دهم؟",
        "a": ["If your phone supports it, yes.", "Visit a branch for 5G upgrade."],
        "a_persien": ["اگر گوشی شما پشتیبانی کند، بله.", "برای ارتقا به 5G به یک شعبه مراجعه کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I reset my SIM PIN?",
        "q_persien": "چگونه پین سیم‌کارتم را بازنشانی کنم؟",
        "a": ["Use the PUK code provided.", "Contact support for reset."],
        "a_persien": ["از کد PUK ارائه‌شده استفاده کنید.", "برای بازنشانی با پشتیبانی تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "What is my current plan?",
        "q_persien": "طرح فعلی من چیست؟",
        "a": ["Check it in the app.", "Dial *111# for details."],
        "a_persien": ["آن را در اپلیکیشن بررسی کنید.", "برای جزئیات #۱۱۱* را شماره‌گیری کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I set up parental controls?",
        "q_persien": "چگونه کنترل‌های والدین را تنظیم کنم؟",
        "a": ["Use the app to enable controls.", "Call support for setup help."],
        "a_persien": ["از اپلیکیشن برای فعال کردن کنترل‌ها استفاده کنید.", "برای کمک در راه‌اندازی با پشتیبانی تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I suspend my SIM temporarily?",
        "q_persien": "می‌توانم سیم‌کارتم را موقتاً معلق کنم؟",
        "a": ["Yes, request it via app or support.", "Some plans allow temporary suspension."],
        "a_persien": ["بله، از طریق اپلیکیشن یا پشتیبانی درخواست دهید.", "برخی طرح‌ها امکان تعلیق موقت را می‌دهند."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I reactivate a suspended SIM?",
        "q_persien": "چگونه یک سیم‌کارت معلق را دوباره فعال کنم؟",
        "a": ["Call customer care to reactivate.", "Reactivate through your account online."],
        "a_persien": ["برای فعال‌سازی مجدد با مراقبت از مشتریان تماس بگیرید.", "از طریق حساب آنلاین خود دوباره فعال کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Why am I charged twice?",
        "q_persien": "چرا دو بار از من هزینه کسر شده است؟",
        "a": ["May be a billing cycle overlap.", "Check your detailed bill."],
        "a_persien": ["ممکن است تداخل دوره صورت‌حساب باشد.", "قبض تفکیکی خود را بررسی کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How can I dispute a charge?",
        "q_persien": "چگونه می‌توانم یک هزینه را مورد اعتراض قرار دهم؟",
        "a": ["Call customer support to dispute.", "Submit a complaint online."],
        "a_persien": ["برای اعتراض با پشتیبانی مشتریان تماس بگیرید.", "آنلاین شکایت ثبت کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I receive an invoice by email?",
        "q_persien": "می‌توانم فاکتور را با ایمیل دریافت کنم؟",
        "a": ["Yes, request it in the app.", "We can email it upon request."],
        "a_persien": ["بله، در اپلیکیشن درخواست دهید.", "می‌توانیم در صورت درخواست آن را ایمیل کنیم."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I set up automatic payments?",
        "q_persien": "چگونه پرداخت‌های خودکار را تنظیم کنم؟",
        "a": ["Enable auto-pay in your account.", "Use your bank’s recurring payment feature."],
        "a_persien": ["پرداخت خودکار را در حساب خود فعال کنید.", "از ویژگی پرداخت مکرر بانک خود استفاده کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I have more than one SIM on my name?",
        "q_persien": "می‌توانم بیش از یک سیم‌کارت به نام خودم داشته باشم؟",
        "a": ["Yes, you can own several SIMs.", "There’s a limit per national ID."],
        "a_persien": ["بله، می‌توانید چندین سیم‌کارت داشته باشید.", "برای هر کارت ملی محدودیتی وجود دارد."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I activate a tourist SIM?",
        "q_persien": "چگونه یک سیم‌کارت توریستی را فعال کنم؟",
        "a": ["Provide your passport at the airport.", "Activate at a branch with your visa."],
        "a_persien": ["پاسپورت خود را در فرودگاه ارائه دهید.", "در یک شعبه با ویزای خود فعال کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How can I request a detailed usage report?",
        "q_persien": "چگونه می‌توانم گزارش مصرف دقیقی درخواست کنم؟",
        "a": ["Request via the mobile app.", "Call support for a printed statement."],
        "a_persien": ["از طریق اپلیکیشن موبایل درخواست دهید.", "برای یک صورت‌حساب چاپی با پشتیبانی تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "What is the expiration policy for inactive SIMs?",
        "q_persien": "سیاست انقضا برای سیم‌کارت‌های غیرفعال چیست؟",
        "a": ["Usually deactivated after 6 months of no use.", "Check operator’s terms for exact timing."],
        "a_persien": ["معمولاً پس از ۶ ماه عدم استفاده غیرفعال می‌شود.", "برای زمان دقیق، شرایط اپراتور را بررسی کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can you recommend the best plan for my usage?",
        "q_persien": "می‌توانید بهترین طرح را برای مصرف من توصیه کنید؟",
        "a": ["Tell me about your usage habits.", "Check your average monthly data and calls."],
        "a_persien": ["در مورد عادات مصرف خود به من بگویید.", "میانگین دیتای ماهانه و تماس‌های خود را بررسی کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Is there a family plan option?",
        "q_persien": "آیا گزینه طرح خانواده وجود دارد؟",
        "a": ["Yes, we have family bundles.", "Let me explain the available packages."],
        "a_persien": ["بله، ما بسته‌های خانواده داریم.", "اجازه دهید بسته‌های موجود را توضیح دهم."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I get a student discount?",
        "q_persien": "می‌توانم تخفیف دانشجویی بگیرم؟",
        "a": ["Yes, student plans are available.", "Show your student ID at registration."],
        "a_persien": ["بله، طرح‌های دانشجویی موجود است.", "در هنگام ثبت‌نام کارت دانشجویی خود را نشان دهید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I get technical support after hours?",
        "q_persien": "چگونه پس از ساعات اداری پشتیبانی فنی بگیرم؟",
        "a": ["We offer 24/7 technical support.", "You can use the app for support anytime."],
        "a_persien": ["ما پشتیبانی فنی ۲۴/۷ ارائه می‌دهیم.", "می‌توانید هر زمان برای پشتیبانی از اپلیکیشن استفاده کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "What’s the best way to contact you?",
        "q_persien": "بهترین راه برای تماس با شما چیست؟",
        "a": ["Call our hotline or use online chat.", "Our website has all contact details."],
        "a_persien": ["با خط تلفن ما تماس بگیرید یا از چت آنلاین استفاده کنید.", "وب‌سایت ما تمام جزئیات تماس را دارد."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How can I share feedback?",
        "q_persien": "چگونه می‌توانم بازخورد به اشتراک بگذارم؟",
        "a": ["Leave feedback via our app.", "Use our website form to share thoughts."],
        "a_persien": ["از طریق اپلیکیشن ما بازخورد بگذارید.", "از فرم وب‌سایت ما برای به اشتراک گذاشتن نظرات استفاده کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I block unwanted calls?",
        "q_persien": "می‌توانم تماس‌های ناخواسته را مسدود کنم؟",
        "a": ["Use your phone's call-blocking feature.", "Contact us for advanced call barring."],
        "a_persien": ["از ویژگی مسدود کردن تماس گوشی خود استفاده کنید.", "برای مسدود کردن تماس پیشرفته با ما تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Is my phone compatible with your SIM?",
        "q_persien": "آیا گوشی من با سیم‌کارت شما سازگار است؟",
        "a": ["Most unlocked phones work fine.", "We can check your device compatibility."],
        "a_persien": ["بیشتر گوشی‌های آنلاک به خوبی کار می‌کنند.", "می‌توانیم سازگاری دستگاه شما را بررسی کنیم."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I use the SIM in a modem?",
        "q_persien": "چگونه از سیم‌کارت در مودم استفاده کنم؟",
        "a": ["Insert it in the modem and restart.", "Configure modem settings if needed."],
        "a_persien": ["آن را در مودم قرار داده و ری‌استارت کنید.", "در صورت نیاز تنظیمات مودم را پیکربندی کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I pause my data package?",
        "q_persien": "می‌توانم بسته دیتایم را متوقف کنم؟",
        "a": ["Some plans allow pausing.", "Otherwise, wait until renewal."],
        "a_persien": ["برخی طرح‌ها امکان توقف را می‌دهند.", "در غیر این صورت، تا زمان تمدید صبر کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I reset my account password?",
        "q_persien": "چگونه رمز عبور حسابم را بازنشانی کنم؟",
        "a": ["Use the 'Forgot Password' link.", "Call support for reset assistance."],
        "a_persien": ["از لینک 'فراموشی رمز عبور' استفاده کنید.", "برای کمک در بازنشانی با پشتیبانی تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Is eSIM available?",
        "q_persien": "آیا eSIM موجود است؟",
        "a": ["Yes, for compatible phones.", "Check our website for eligible models."],
        "a_persien": ["بله، برای گوشی‌های سازگار.", "برای مدل‌های واجد شرایط وب‌سایت ما را بررسی کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I order a SIM online?",
        "q_persien": "می‌توانم سیم‌کارت آنلاین سفارش دهم؟",
        "a": ["Yes, visit our online store.", "We deliver to most cities."],
        "a_persien": ["بله، از فروشگاه آنلاین ما دیدن کنید.", "ما به بیشتر شهرها تحویل می‌دهیم."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How can I update my billing address?",
        "q_persien": "چگونه می‌توانم آدرس صورت‌حسابم را به‌روز کنم؟",
        "a": ["Edit it online in your profile.", "Visit a branch for changes."],
        "a_persien": ["آن را آنلاین در پروفایل خود ویرایش کنید.", "برای تغییرات به یک شعبه مراجعه کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I check if my payment went through?",
        "q_persien": "چگونه بررسی کنم که آیا پرداخنم انجام شده است؟",
        "a": ["Check your SMS for confirmation.", "View transactions in the app."],
        "a_persien": ["پیامک خود را برای تأیید بررسی کنید.", "تراکنش‌ها را در اپلیکیشن مشاهده کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Why was my SIM deactivated?",
        "q_persien": "چرا سیم‌کارت من غیرفعال شد؟",
        "a": ["Possibly due to non-use.", "Check for unpaid bills."],
        "a_persien": ["احتمالاً به دلیل عدم استفاده.", "قبض‌های پرداخت‌نشده را بررسی کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I enable/disable premium SMS?",
        "q_persien": "چگونه پیامک‌های ویژه را فعال/غیرفعال کنم؟",
        "a": ["Change settings in your account.", "Contact support for help."],
        "a_persien": ["تنظیمات را در حساب خود تغییر دهید.", "برای کمک با پشتیبانی تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "What’s the process for replacing a damaged SIM?",
        "q_persien": "فرآیند تعویض یک سیم‌کارت آسیب‌دیده چیست؟",
        "a": ["Visit a branch with your ID.", "Order a replacement online if possible."],
        "a_persien": ["با کارت شناسایی خود به یک شعبه مراجعه کنید.", "در صورت امکان آنلاین جایگزین سفارش دهید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How can I stop marketing calls?",
        "q_persien": "چگونه می‌توانم تماس‌های تبلیغاتی را متوقف کنم؟",
        "a": ["Register for the do-not-call list.", "Change preferences in your account."],
        "a_persien": ["در لیست عدم تماس ثبت‌نام کنید.", "ترجیحات را در حساب خود تغییر دهید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I get a SIM for my child?",
        "q_persien": "چگونه برای فرزندم سیم‌کارت بگیرم؟",
        "a": ["Parental consent may be needed.", "Visit a branch with your child’s ID."],
        "a_persien": ["ممکن است به رضایت والدین نیاز باشد.", "با کارت شناسایی فرزندتان به یک شعبه مراجعه کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I transfer my contacts to a new SIM?",
        "q_persien": "چگونه مخاطبینم را به یک سیم‌کارت جدید منتقل کنم؟",
        "a": ["Use your phone’s import/export feature.", "Ask our staff for assistance."],
        "a_persien": ["از ویژگی واردات/صادرات گوشی خود استفاده کنید.", "از کارکنان ما برای کمک کمک بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I use my SIM in a tablet?",
        "q_persien": "می‌توانم از سیم‌کارتم در تبلت استفاده کنم؟",
        "a": ["Yes, if the tablet is unlocked.", "Check compatibility first."],
        "a_persien": ["بله، اگر تبلت آنلاک باشد.", "ابتدا سازگاری را بررسی کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I report a lost or stolen phone?",
        "q_persien": "چگونه یک گوشی گم‌شده یا دزدیده شده را گزارش دهم؟",
        "a": ["Call us immediately to block your SIM.", "Use the app to report and block."],
        "a_persien": ["فوراً با ما تماس بگیرید تا سیم‌کارت خود را مسدود کنید.", "از اپلیکیشن برای گزارش و مسدود کردن استفاده کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I get proof of address for registration?",
        "q_persien": "چگونه برای ثبت‌نام گواهی نشانی بگیرم؟",
        "a": ["Bring a utility bill or bank statement.", "Contact your municipality if needed."],
        "a_persien": ["یک قبض خدماتی یا صورت‌حساب بانکی بیاورید.", "در صورت نیاز با شهرداری خود تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I collect a SIM on behalf of someone else?",
        "q_persien": "می‌توانم به جای شخص دیگری سیم‌کارت تحویل بگیرم؟",
        "a": ["Yes, with written authorization.", "Bring both IDs to the branch."],
        "a_persien": ["بله، با وکالت‌نامه کتبی.", "هر دو کارت شناسایی را به شعبه بیاورید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I check network coverage in my area?",
        "q_persien": "چگونه پوشش‌دهی شبکه را در منطقه‌ام بررسی کنم؟",
        "a": ["Use our website coverage map.", "Call us for a manual check."],
        "a_persien": ["از نقشه پوشش‌دهی وب‌سایت ما استفاده کنید.", "برای بررسی دستی با ما تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Is there a penalty for late payment?",
        "q_persien": "آیا برای پرداخت دیرهنگام جریمه‌ای وجود دارد؟",
        "a": ["Late fees may apply.", "Service might be suspended."],
        "a_persien": ["ممکن است جریمه دیرکرد اعمال شود.", "سرویس ممکن است معلق شود."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I cancel a package?",
        "q_persien": "چگونه یک بسته را لغو کنم؟",
        "a": ["Send the cancel code via SMS.", "Manage packages in your app."],
        "a_persien": ["کد لغو را با پیامک ارسال کنید.", "بسته‌ها را در اپلیکیشن خود مدیریت کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I request a detailed paper bill?",
        "q_persien": "می‌توانم درخواست یک قبض کاغذی تفکیکی بدهم؟",
        "a": ["Yes, request at your branch.", "Order it from your account online."],
        "a_persien": ["بله، در شعبه خود درخواست دهید.", "آن را از حساب آنلاین خود سفارش دهید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "What should I do if I suspect fraud?",
        "q_persien": "اگر به کلاهبرداری مشکوک شدم چه کار کنم؟",
        "a": ["Report it to us immediately.", "We’ll investigate suspicious activity."],
        "a_persien": ["فوراً به ما گزارش دهید.", "ما فعالیت مشکوک را بررسی خواهیم کرد."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I use SIM apps for mobile banking?",
        "q_persien": "می‌توانم از اپلیکیشن‌های سیم‌کارت برای بانکداری موبایلی استفاده کنم؟",
        "a": ["Yes, if your bank supports it.", "Install the bank’s app for better security."],
        "a_persien": ["بله، اگر بانک شما پشتیبانی کند.", "برای امنیت بهتر اپلیکیشن بانک را نصب کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I disable international calls?",
        "q_persien": "چگونه تماس‌های بین‌المللی را غیرفعال کنم؟",
        "a": ["Use your account settings.", "Call us to block international calling."],
        "a_persien": ["از تنظیمات حساب خود استفاده کنید.", "برای مسدود کردن تماس بین‌المللی با ما تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I set spending limits on my account?",
        "q_persien": "می‌توانم محدودیت‌های هزینه بر روی حسابم تنظیم کنم؟",
        "a": ["Yes, in the app settings.", "Contact support for help."],
        "a_persien": ["بله، در تنظیمات اپلیکیشن.", "برای کمک با پشتیبانی تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I change my SIM size?",
        "q_persien": "می‌توانم سایز سیم‌کارتم را تغییر دهم؟",
        "a": ["Yes, swap to the correct size at a branch.", "Order a multi-size SIM online."],
        "a_persien": ["بله، در یک شعبه به سایز صحیح تعویض کنید.", "یک سیم‌کارت چندسایزه آنلاین سفارش دهید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I activate voice mail?",
        "q_persien": "چگونه پست صوتی را فعال کنم؟",
        "a": ["Dial the setup code.", "Use your phone’s voicemail menu."],
        "a_persien": ["کد راه‌اندازی را شماره‌گیری کنید.", "از منوی پست صوتی گوشی خود استفاده کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How can I check my number?",
        "q_persien": "چگونه می‌توانم شماره‌ام را بررسی کنم؟",
        "a": ["Dial *733#.", "Find it in your phone settings."],
        "a_persien": ["#۷۳۳* را شماره‌گیری کنید.", "آن را در تنظیمات گوشی خود پیدا کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I order a replacement SIM for delivery?",
        "q_persien": "می‌توانم یک سیم‌کارت جایگزین برای تحویل سفارش دهم؟",
        "a": ["Yes, we offer home delivery.", "Check availability in your area."],
        "a_persien": ["بله، ما تحویل در منزل ارائه می‌دهیم.", "موجود بودن در منطقه خود را بررسی کنید."]
    }
,
    {
        "topic": "General",
        "role": "Customer",
        "q": "What is my customer ID?",
        "q_persien": "شناسه مشتری من چیست؟",
        "a": ["Check your bill or app profile.", "Call support to confirm your ID."],
        "a_persien": ["قبض یا پروفایل اپلیکیشن خود را بررسی کنید.", "برای تأیید شناسه خود با پشتیبانی تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I request a callback from support?",
        "q_persien": "می‌توانم درخواست تماس برگشتی از پشتیبانی بدهم؟",
        "a": ["Yes, schedule it in the app.", "Leave your number for a callback."],
        "a_persien": ["بله، در اپلیکیشن آن را برنامه‌ریزی کنید.", "شماره خود را برای تماس برگشتی بگذارید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I change my registered email?",
        "q_persien": "چگونه ایمیل ثبت‌شده خود را تغییر دهم؟",
        "a": ["Update it in your account online.", "Call us for help updating."],
        "a_persien": ["آن را در حساب آنلاین خود به‌روز کنید.", "برای کمک در به‌روزرسانی با ما تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I join your loyalty program?",
        "q_persien": "چگونه به برنامه وفاداری شما بپیوندم؟",
        "a": ["Register via the app.", "Sign up in person at a branch."],
        "a_persien": ["از طریق اپلیکیشن ثبت‌نام کنید.", "حضوری در یک شعبه ثبت‌نام کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How can I refer a friend?",
        "q_persien": "چگونه می‌توانم یک دوست را معرفی کنم؟",
        "a": ["Use the referral link in our app.", "Share your code with friends."],
        "a_persien": ["از لینک معرفی در اپلیکیشن ما استفاده کنید.", "کد خود را با دوستان به اشتراک بگذارید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I freeze my account for a period?",
        "q_persien": "می‌توانم حسابم را برای مدتی مسدود کنم؟",
        "a": ["Request a freeze through support.", "Available on select plans."],
        "a_persien": ["از طریق پشتیبانی درخواست مسدودسازی کنید.", "در طرح‌های منتخب موجود است."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I reset all network settings?",
        "q_persien": "چگونه تمام تنظیمات شبکه را بازنشانی کنم؟",
        "a": ["Use your phone’s settings menu.", "Call support for step-by-step guidance."],
        "a_persien": ["از منوی تنظیمات گوشی خود استفاده کنید.", "برای راهنمایی گام‌به‌گام با پشتیبانی تماس بگیرید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I check my usage for past months?",
        "q_persien": "می‌توانم مصرفم را برای ماه‌های گذشته بررسی کنم؟",
        "a": ["Yes, request it in your online account.", "Ask support for a printed statement."],
        "a_persien": ["بله، در حساب آنلاین خود درخواست دهید.", "از پشتیبانی یک صورت‌حساب چاپی بخواهید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "Can I pick up my SIM at the airport?",
        "q_persien": "می‌توانم سیم‌کارتم را در فرودگاه تحویل بگیرم؟",
        "a": ["Yes, we have airport kiosks.", "Check which terminals offer this."],
        "a_persien": ["بله، ما کیوسک‌های فرودگاهی داریم.", "بررسی کنید کدام ترمینال‌ها این را ارائه می‌دهند."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How can I protect my SIM from unauthorized use?",
        "q_persien": "چگونه می‌توانم از سیم‌کارتم در برابر استفاده غیرمجاز محافظت کنم؟",
        "a": ["Set a SIM PIN code.", "Enable SIM lock in your device."],
        "a_persien": ["یک کد پین برای سیم‌کارت تنظیم کنید.", "قفل سیم‌کارت را در دستگاه خود فعال کنید."]
    },
    {
        "topic": "General",
        "role": "Customer",
        "q": "How do I activate a promotional offer?",
        "q_persien": "چگونه یک پیشنهاد تبلیغاتی را فعال کنم؟",
        "a": ["Enter the promo code in your app.", "Send the code by SMS to the operator."],
        "a_persien": ["کد تبلیغاتی را در اپلیکیشن خود وارد کنید.", "کد را با پیامک به اپراتور ارسال کنید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Hello and welcome to Iran! How can I assist you today?",
        "q_persien": "سلام و به ایران خوش آمدید! امروز چگونه می‌توانم به شما کمک کنم؟",
        "a": ["Hi, I’d like to buy a SIM card.", "Hello! I want to know about your internet plans."],
        "a_persien": ["سلام، می‌خواهم یک سیم‌کارت بخرم.", "سلام! می‌خواهم در مورد طرح‌های اینترنتی شما بدانم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Good morning! Are you enjoying your stay so far?",
        "q_persien": "صبح بخیر! تا اینجا از اقامتتان لذت می‌برید؟",
        "a": ["Yes, Iran is beautiful!", "Absolutely, thank you."],
        "a_persien": ["بله، ایران زیباست!", "قطعاً، متشکرم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Welcome! What brings you to our service center today?",
        "q_persien": "خوش آمدید! امروز چه چیزی شما را به مرکز خدمات ما کشانده است؟",
        "a": ["I need help with my tourist SIM.", "I want to activate a new SIM card."],
        "a_persien": ["برای سیم‌کارت توریستی‌ام به کمک نیاز دارم.", "می‌خواهم یک سیم‌کارت جدید فعال کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for calling our tourist hotline. How may I help?",
        "q_persien": "از تماس شما با خط تلفن توریستی ما متشکریم. چگونه می‌توانم کمک کنم؟",
        "a": ["I want to know the SIM card price.", "How can I recharge my SIM?"],
        "a_persien": ["می‌خواهم قیمت سیم‌کارت را بدانم.", "چگونه می‌توانم سیم‌کارتم را شارژ کنم؟"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "It’s wonderful to have you visiting. How can we help?",
        "q_persien": "فوق‌العاده است که شما را در حال بازدید داریم. چگونه می‌توانیم کمک کنیم؟",
        "a": ["What are your data packages for tourists?", "Can I use my SIM in another city?"],
        "a_persien": ["بسته‌های دیتای شما برای توریست‌ها چیست؟", "می‌توانم از سیم‌کارتم در شهر دیگری استفاده کنم؟"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Good afternoon! How is your trip going?",
        "q_persien": "بعد از ظهر بخیر! سفرتان چطور پیش می‌رود؟",
        "a": ["Very well, thank you!", "Great so far, thanks for asking."],
        "a_persien": ["خیلی خوب، متشکرم!", "تا اینجا عالی، ممنون که پرسیدید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Hi! Thank you for choosing our services. How can I help you?",
        "q_persien": "سلام! از اینکه خدمات ما را انتخاب کردید متشکریم. چگونه می‌توانم به شما کمک کنم؟",
        "a": ["How do I activate my SIM?", "Where can I find WiFi hotspots?"],
        "a_persien": ["چگونه سیم‌کارتم را فعال کنم؟", "کجا می‌توانم نقاط وای‌فای را پیدا کنم؟"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Welcome to our country! How can I assist your communication needs?",
        "q_persien": "به کشور ما خوش آمدید! چگونه می‌توانم نیازهای ارتباطی شما را یاری دهم؟",
        "a": ["I want to buy a SIM for my phone.", "Is English support available?"],
        "a_persien": ["می‌خواهم برای گوشی‌ام یک سیم‌کارت بخرم.", "آیا پشتیبانی انگلیسی موجود است؟"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Hello, and welcome! May I know where you are visiting from?",
        "q_persien": "سلام و خوش آمدید! ممکن است بدانم از کجا بازدید می‌کنید؟",
        "a": ["I'm from Germany.", "I came from Turkey."],
        "a_persien": ["من از آلمان هستم.", "من از ترکیه آمدم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for calling us! What can I do for you today?",
        "q_persien": "از تماس شما با ما متشکریم! امروز چه کاری می‌توانم برای شما انجام دهم؟",
        "a": ["What documents do I need for a SIM?", "Can you help me set up mobile internet?"],
        "a_persien": ["برای یک سیم‌کارت به چه مدارکی نیاز دارم؟", "می‌توانید به من در راه‌اندازی اینترنت موبایل کمک کنید؟"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We’re happy to have you in Iran! How’s your experience so far?",
        "q_persien": "خوشحالیم که شما را در ایران داریم! تا اینجا تجربه‌تان چطور بوده است؟",
        "a": ["I’m loving it!", "People are very friendly."],
        "a_persien": ["من عاشقش هستم!", "مردم بسیار مهربان هستند."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "How did you hear about our SIM cards?",
        "q_persien": "چگونه در مورد سیم‌کارت‌های ما شنیدید؟",
        "a": ["From the airport kiosk.", "My hotel recommended you."],
        "a_persien": ["از کیوسک فرودگاه.", "هتلم شما را توصیه کرد."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Welcome! Is this your first time in Iran?",
        "q_persien": "خوش آمدید! آیا این اولین بار است که در ایران هستید؟",
        "a": ["Yes, it is!", "No, I’ve visited before."],
        "a_persien": ["بله، هست!", "نه، قبلاً بازدید کرده‌ام."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Can I offer you any information about local attractions?",
        "q_persien": "می‌توانم اطلاعاتی در مورد جاذبه‌های محلی به شما ارائه دهم؟",
        "a": ["That would be great, thank you.", "Yes, please suggest some!"],
        "a_persien": ["این عالی خواهد بود، متشکرم.", "بله، لطفاً چند مورد را پیشنهاد دهید!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for calling! Is there anything you need right away?",
        "q_persien": "از تماس شما متشکریم! آیا چیزی هست که فوراً نیاز داشته باشید؟",
        "a": ["I need fast internet for maps.", "Where can I buy a SIM in the city center?"],
        "a_persien": ["برای نقشه‌ها به اینترنت سریع نیاز دارم.", "کجا می‌توانم در مرکز شهر سیم‌کارت بخرم؟"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "I hope you’re having a pleasant trip! How may I help?",
        "q_persien": "امیدوارم سفر خوشی داشته باشید! چگونه می‌توانم کمک کنم؟",
        "a": ["How can I check my balance?", "What languages do you support?"],
        "a_persien": ["چگونه می‌توانم موجودی‌ام را بررسی کنم؟", "چه زبان‌هایی را پشتیبانی می‌کنید؟"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "How’s the weather treating you here?",
        "q_persien": "هوا اینجا با شما چطور رفتار می‌کند؟",
        "a": ["It’s warmer than I expected!", "Nice and sunny!"],
        "a_persien": ["گرم‌تر از چیزی است که انتظار داشتم!", "خوب و آفتابی!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you have any special plans while you’re here?",
        "q_persien": "آیا در حین اقامتتان برنامه‌های خاصی دارید؟",
        "a": ["I’m going to Shiraz next.", "I plan to visit Persepolis."],
        "a_persien": ["بعداً به شیراز می‌روم.", "قصد دارم از تخت جمشید بازدید کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Can I help you find your way around the city?",
        "q_persien": "می‌توانم به شما در پیدا کردن راه در شهر کمک کنم؟",
        "a": ["Yes, I’d appreciate that.", "No, I have a map, thank you."],
        "a_persien": ["بله، سپاسگزار خواهم بود.", "نه، نقشه دارم، متشکرم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Welcome again! Is there anything else we can make easier for you?",
        "q_persien": "دوباره خوش آمدید! آیا چیز دیگری هست که بتوانیم برای شما آسان‌تر کنیم؟",
        "a": ["How do I extend my SIM validity?", "Do you have tourist support in English?"],
        "a_persien": ["چگونه اعتبار سیم‌کارتم را تمدید کنم؟", "آیا پشتیبانی توریستی به زبان انگلیسی دارید؟"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Where are you staying in Iran?",
        "q_persien": "در ایران کجا اقامت دارید؟",
        "a": ["In a hotel in Tehran.", "I’m staying with friends."],
        "a_persien": ["در یک هتل در تهران.", "من با دوستانم اقامت دارم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Are you here for business or vacation?",
        "q_persien": "برای کار اینجا هستید یا تعطیلات؟",
        "a": ["Just for vacation.", "I’m here for work."],
        "a_persien": ["فقط برای تعطیلات.", "من برای کار اینجا هستم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "How long will you be staying?",
        "q_persien": "چه مدت اقامت خواهید داشت؟",
        "a": ["Two weeks.", "Just a few days."],
        "a_persien": ["دو هفته.", "فقط چند روز."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Have you tried Persian food yet?",
        "q_persien": "آیا تا به حال غذای ایرانی را امتحان کرده‌اید؟",
        "a": ["Yes, I loved the kebab!", "Not yet, any recommendations?"],
        "a_persien": ["بله، عاشق کباب شدم!", "هنوز نه، توصیه‌ای دارید؟"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Is there a specific city you plan to visit next?",
        "q_persien": "آیا شهر خاصی وجود دارد که قصد دارید بعداً بازدید کنید؟",
        "a": ["I’ll go to Isfahan.", "Still deciding."],
        "a_persien": ["من به اصفهان خواهم رفت.", "هنوز در حال تصمیم‌گیری هستم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "What’s your favorite thing about Iran so far?",
        "q_persien": "تا اینجا چیز مورد علاقه شما در مورد ایران چیست؟",
        "a": ["The hospitality!", "The historical sites."],
        "a_persien": ["مهمان‌نوازی!", "اماکن تاریخی."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Would you like any travel tips for your journey?",
        "q_persien": "آیا برای سفرتان نکات مسافرتی می‌خواهید؟",
        "a": ["Yes, that would be helpful.", "No, I’m set for now."],
        "a_persien": ["بله، این مفید خواهد بود.", "نه، فعلاً آماده‌ام."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Are you traveling alone or with others?",
        "q_persien": "تنها سفر می‌کنید یا با دیگران؟",
        "a": ["I’m with family.", "Just me on this trip."],
        "a_persien": ["من با خانواده هستم.", "فقط من در این سفر."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Have you visited any museums yet?",
        "q_persien": "آیا تا به حال از موزه‌ای بازدید کرده‌اید؟",
        "a": ["Yes, the National Museum was amazing!", "Not yet, it’s on my list."],
        "a_persien": ["بله، موزه ملی فوق‌العاده بود!", "هنوز نه، در لیستم هست."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Would you like help with transportation options?",
        "q_persien": "آیا در مورد گزینه‌های حمل‌ونقل کمک می‌خواهید؟",
        "a": ["Yes, please.", "No, I have it figured out."],
        "a_persien": ["بله، لطفاً.", "نه، من آن را فهمیده‌ام."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you need a SIM for internet only or also for calls?",
        "q_persien": "آیا فقط برای اینترنت به سیم‌کارت نیاز دارید یا برای تماس هم؟",
        "a": ["Internet only, please.", "Both calls and internet."],
        "a_persien": ["فقط اینترنت، لطفاً.", "هم تماس و هم اینترنت."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Would you like a local guide recommendation?",
        "q_persien": "آیا توصیه راهنمای محلی می‌خواهید؟",
        "a": ["That sounds great!", "Maybe later, thank you."],
        "a_persien": ["عالی به نظر می‌رسد!", "شاید بعداً، متشکرم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Have you faced any issues with your SIM so far?",
        "q_persien": "آیا تا به حال با سیم‌کارت خود مشکلی داشته‌اید؟",
        "a": ["No, it works well.", "It’s a bit slow sometimes."],
        "a_persien": ["نه، خوب کار می‌کند.", "گاهی اوقات کمی کند است."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Would you like to know about Persian customs?",
        "q_persien": "آیا می‌خواهید در مورد آداب و رسوم ایرانی بدانید؟",
        "a": ["Yes, that would be interesting.", "I’ve read a little online."],
        "a_persien": ["بله، جالب خواهد بود.", "من کمی آنلاین خوانده‌ام."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Can I suggest some mobile apps for travel in Iran?",
        "q_persien": "می‌توانم چند اپلیکیشن موبایل برای سفر در ایران پیشنهاد دهم؟",
        "a": ["Yes, please share!", "I already have some, thanks."],
        "a_persien": ["بله، لطفاً به اشتراک بگذارید!", "من قبلاً چند تا دارم، ممنون."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Would you like information on cultural events?",
        "q_persien": "آیا اطلاعاتی در مورد رویدادهای فرهنگی می‌خواهید؟",
        "a": ["Yes, is there a music festival soon?", "No, I’m here mostly for sightseeing."],
        "a_persien": ["بله، آیا به زودی جشنواره موسیقی وجود دارد؟", "نه، من بیشتر برای گشت‌وگذار اینجا هستم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "How’s your hotel or accommodation?",
        "q_persien": "هتل یا محل اقامتتان چطور است؟",
        "a": ["It’s comfortable, thank you.", "It’s a bit noisy but nice."],
        "a_persien": ["راحت است، متشکرم.", "کمی پر سر و صدا است اما خوب است."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you need information about local SIM regulations?",
        "q_persien": "آیا به اطلاعاتی در مورد مقررات سیم‌کارت محلی نیاز دارید؟",
        "a": ["Yes, tell me more.", "No, I’m familiar already."],
        "a_persien": ["بله، بیشتر به من بگویید.", "نه، من قبلاً آشنا هستم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "How can we make your stay more enjoyable?",
        "q_persien": "چگونه می‌توانیم اقامت شما را لذت‌بخش‌تر کنیم؟",
        "a": ["Help me find SIM top-up shops.", "Nothing right now, thanks."],
        "a_persien": ["به من در پیدا کردن فروشگاه‌های شارژ سیم‌کارت کمک کنید.", "فعلاً هیچی، ممنون."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Have you learned any Persian words?",
        "q_persien": "آیا کلمات فارسی یاد گرفته‌اید؟",
        "a": ["Just Salam and Merci!", "I’m trying to learn more."],
        "a_persien": ["فقط سلام و مرسی!", "دارم سعی می‌کنم بیشتر یاد بگیرم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "If you need help at any time, just give us a call.",
        "q_persien": "اگر هر زمانی به کمک نیاز داشتید، فقط با ما تماس بگیرید.",
        "a": ["Thank you, that’s reassuring.", "I appreciate your support."],
        "a_persien": ["متشکرم، این اطمینان‌بخش است.", "از حمایت شما قدردانی می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We want you to feel at home in Iran.",
        "q_persien": "ما می‌خواهیم شما در ایران احساس راحتی کنید.",
        "a": ["Thank you, I feel very welcome.", "You’ve all been so kind."],
        "a_persien": ["متشکرم، من خیلی احساس خوش‌آمدگویی می‌کنم.", "شما همه خیلی مهربان بوده‌اید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Your comfort and satisfaction are important to us.",
        "q_persien": "راحتی و رضایت شما برای ما مهم است.",
        "a": ["Thank you!", "That means a lot."],
        "a_persien": ["متشکرم!", "این خیلی معنی دارد."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "If you need translation help, we’re happy to assist.",
        "q_persien": "اگر به کمک ترجمه نیاز دارید، خوشحال می‌شویم کمک کنیم.",
        "a": ["That’s very helpful, thank you.", "I might need it, thanks."],
        "a_persien": ["این خیلی مفید است، متشکرم.", "ممکن است به آن نیاز داشته باشم، ممنون."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "You’re always welcome to contact us, day or night.",
        "q_persien": "شما همیشه می‌توانید با ما تماس بگیرید، روز یا شب.",
        "a": ["That’s great to know!", "I will, thank you."],
        "a_persien": ["دانستنش عالی است!", "حتماً، متشکرم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Is there anything we can do to make things easier?",
        "q_persien": "آیا کاری هست که بتوانیم برای آسان‌تر کردن کارها انجام دهیم؟",
        "a": ["No, you’ve been very helpful.", "Maybe some info on city tours."],
        "a_persien": ["نه، شما خیلی کمک‌کننده بوده‌اید.", "شاید کمی اطلاعات در مورد تورهای شهری."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Please let us know if you need anything at all.",
        "q_persien": "لطفاً اگر به هر چیزی نیاز داشتید به ما اطلاع دهید.",
        "a": ["Thank you!", "I appreciate that offer."],
        "a_persien": ["متشکرم!", "از این پیشنهاد قدردانی می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We hope you make wonderful memories here.",
        "q_persien": "امیدواریم خاطرات فوق‌العاده‌ای اینجا بسازید.",
        "a": ["Thank you, I already am!", "I hope so too."],
        "a_persien": ["متشکرم، من قبلاً دارم می‌سازم!", "من هم امیدوارم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "It’s always a pleasure to help travelers like you.",
        "q_persien": "همیشه کمک به مسافرانی مثل شما باعث افتخار است.",
        "a": ["That’s very kind, thank you.", "You’ve made my day easier."],
        "a_persien": ["این خیلی مهربانانه است، متشکرم.", "شما روزم را آسان‌تر کردید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We care about your experience in Iran.",
        "q_persien": "ما به تجربه شما در ایران اهمیت می‌دهیم.",
        "a": ["Thank you, I feel cared for.", "You’re all so helpful."],
        "a_persien": ["متشکرم، احساس می‌کنم به من اهمیت داده می‌شود.", "شما همه خیلی کمک‌کننده هستید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We’re just a call away if you need assistance.",
        "q_persien": "ما فقط یک تماس با شما فاصله داریم اگر به کمک نیاز دارید.",
        "a": ["Good to know, thank you!", "I’ll save your number."],
        "a_persien": ["دانستنش خوب است، متشکرم!", "شماره شما را ذخیره خواهم کرد."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Our team is here to support you throughout your trip.",
        "q_persien": "تیم ما اینجا است تا در طول سفرتان از شما حمایت کند.",
        "a": ["That’s very helpful.", "I appreciate your availability."],
        "a_persien": ["این خیلی مفید است.", "از در دسترس بودنتان قدردانی می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We hope you enjoy every moment in Iran!",
        "q_persien": "امیدواریم از هر لحظه در ایران لذت ببرید!",
        "a": ["Thank you, I will!", "That’s very sweet."],
        "a_persien": ["متشکرم، حتماً!", "این خیلی شیرین است."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Please feel free to ask about anything local.",
        "q_persien": "لطفاً در مورد هر چیز محلی راحت باشید و بپرسید.",
        "a": ["I might have questions later.", "Thank you, I appreciate it."],
        "a_persien": ["ممکن است بعداً سؤالاتی داشته باشم.", "متشکرم، قدردانی می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "You can always reach out if you feel lost or need help.",
        "q_persien": "اگر احساس گم شدن کردید یا به کمک نیاز داشتید همیشه می‌توانید تماس بگیرید.",
        "a": ["Thank you, that’s very reassuring.", "I will if I need anything."],
        "a_persien": ["متشکرم، این خیلی اطمینان‌بخش است.", "اگر به چیزی نیاز داشته باشم حتماً."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Let us know if you face any challenges.",
        "q_persien": "اگر با چالشی روبرو شدید به ما اطلاع دهید.",
        "a": ["Thank you, will do.", "So far everything is fine!"],
        "a_persien": ["متشکرم، انجام خواهم داد.", "تا اینجا همه چیز خوب است!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Your peace of mind is important to us.",
        "q_persien": "آرامش خاطر شما برای ما مهم است.",
        "a": ["That’s good to hear.", "Thank you for saying so."],
        "a_persien": ["شنیدنش خوب است.", "متشکرم که این را گفتید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "If you need to recharge your SIM, just ask us.",
        "q_persien": "اگر نیاز به شارژ سیم‌کارت خود دارید، فقط از ما بپرسید.",
        "a": ["Great, thank you!", "I might need help soon."],
        "a_persien": ["عالی، متشکرم!", "ممکن است به زودی به کمک نیاز داشته باشم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We’re always happy to welcome guests from abroad.",
        "q_persien": "ما همیشه از پذیرایی از مهمانان خارجی خوشحال می‌شویم.",
        "a": ["It’s good to feel welcomed.", "Thank you so much."],
        "a_persien": ["احساس خوش‌آمدگویی خوب است.", "خیلی متشکرم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "If you have a problem, we’ll do our best to solve it.",
        "q_persien": "اگر مشکلی دارید، ما تمام تلاش خود را برای حل آن خواهیم کرد.",
        "a": ["That’s reassuring!", "Thank you, I trust your help."],
        "a_persien": ["این اطمینان‌بخش است!", "متشکرم، من به کمک شما اعتماد دارم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for calling us today!",
        "q_persien": "از تماس امروز شما با ما متشکریم!",
        "a": ["Thank you for your help.", "Glad to speak with you."],
        "a_persien": ["از کمکتان متشکرم.", "خوشحالم که با شما صحبت کردم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We appreciate your trust in our service.",
        "q_persien": "ما از اعتماد شما به خدماتمان قدردانی می‌کنیم.",
        "a": ["You’re very helpful, thank you.", "I appreciate your care."],
        "a_persien": ["شما خیلی کمک‌کننده هستید، متشکرم.", "از مراقبت شما قدردانی می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for choosing our SIM for your journey.",
        "q_persien": "از اینکه سیم‌کارت ما را برای سفرتان انتخاب کردید متشکریم.",
        "a": ["I’m glad I did!", "Thank you for the support."],
        "a_persien": ["خوشحالم که این کار را کردم!", "ممنون از حمایتتان."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thanks for sharing your experience with us.",
        "q_persien": "ممنون که تجربه‌تان را با ما به اشتراک گذاشتید.",
        "a": ["You’re welcome!", "Happy to help improve things."],
        "a_persien": ["خواهش می‌کنم!", "خوشحالم که به بهبود اوضاع کمک می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We’re honored to assist you during your travels.",
        "q_persien": "افتخار می‌کنیم که در طول سفرهایتان به شما کمک کنیم.",
        "a": ["Thank you!", "It means a lot to me."],
        "a_persien": ["متشکرم!", "این برای من خیلی معنی دارد."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We’re grateful you chose us for your stay.",
        "q_persien": "سپاسگزاریم که ما را برای اقامتتان انتخاب کردید.",
        "a": ["Your service is great!", "Thanks for everything."],
        "a_persien": ["خدمات شما عالی است!", "ممنون برای همه چیز."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for being our guest.",
        "q_persien": "ممنون که مهمان ما هستید.",
        "a": ["Thank you for your kindness.", "It’s been a pleasure."],
        "a_persien": ["ممنون از مهربانی‌تان.", "باعث افتخار بود."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We value your feedback about our service.",
        "q_persien": "ما برای بازخورد شما در مورد خدماتمان ارزش قائل هستیم.",
        "a": ["I’ll leave a review.", "Happy to give feedback."],
        "a_persien": ["من یک نظر خواهم گذاشت.", "خوشحالم که بازخورد می‌دهم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for your time and attention.",
        "q_persien": "از وقت و توجه شما متشکرم.",
        "a": ["Thank you for your help!", "I appreciate the support."],
        "a_persien": ["از کمکتان متشکرم!", "از حمایتتان قدردانی می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We appreciate you choosing us!",
        "q_persien": "قدردانی می‌کنیم که ما را انتخاب کردید!",
        "a": ["Glad I did!", "Thank you."],
        "a_persien": ["خوشحالم که کردم!", "متشکرم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for your patience while we assist you.",
        "q_persien": "از صبر شما در حین کمک به شما متشکریم.",
        "a": ["No problem, thanks!", "Your service is worth it."],
        "a_persien": ["مشکلی نیست، ممنون!", "خدمات شما ارزشش را دارد."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We’re happy to help, anytime.",
        "q_persien": "خوشحالیم که کمک کنیم، هر زمان.",
        "a": ["Thank you so much!", "I’ll reach out again if needed."],
        "a_persien": ["خیلی متشکرم!", "در صورت نیاز دوباره تماس خواهم گرفت."]
    }
,
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for your kind words.",
        "q_persien": "از کلمات محبت‌آمیز شما متشکرم.",
        "a": ["You deserve it!", "I mean it."],
        "a_persien": ["شما لایقش هستید!", "جدی می‌گویم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "It’s our pleasure to have you as a customer.",
        "q_persien": "باعث افتخار ماست که شما مشتری ما هستید.",
        "a": ["Thank you!", "You’re the best."],
        "a_persien": ["متشکرم!", "شما بهترین هستید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thanks for letting us be a part of your journey.",
        "q_persien": "ممنون که به ما اجازه دادید بخشی از سفر شما باشیم.",
        "a": ["I appreciate it.", "Glad you’re here for tourists."],
        "a_persien": ["قدردانی می‌کنم.", "خوشحالم که برای توریست‌ها اینجا هستید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for trusting us with your needs.",
        "q_persien": "از اینکه به ما برای نیازهایتان اعتماد کردید متشکریم.",
        "a": ["You earned my trust!", "Thanks for being reliable."],
        "a_persien": ["شما اعتمادم را جلب کردید!", "ممنون که قابل اعتماد هستید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We’re delighted to hear you’re enjoying your stay.",
        "q_persien": "خوشحالیم که می‌شنویم از اقامتتان لذت می‌برید.",
        "a": ["Thank you, I really am.", "Iran has been wonderful."],
        "a_persien": ["متشکرم، واقعاً لذت می‌برم.", "ایران فوق‌العاده بوده است."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for your questions today!",
        "q_persien": "از سؤالات امروزتان متشکریم!",
        "a": ["I appreciate your answers.", "You made it easy."],
        "a_persien": ["از پاسخ‌هایتان قدردانی می‌کنم.", "شما کار را آسان کردید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for sharing your story with us.",
        "q_persien": "ممنون که داستانتان را با ما به اشتراک گذاشتید.",
        "a": ["Happy to chat!", "Thanks for listening."],
        "a_persien": ["خوشحال شدم از چت کردن!", "ممنون که گوش دادید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We’re here if you need us—thank you and enjoy your trip!",
        "q_persien": "ما اینجا هستیم اگر به ما نیاز داشتید—متشکرم و از سفرتان لذت ببرید!",
        "a": ["Thank you, I will!", "Goodbye and thank you."],
        "a_persien": ["متشکرم، حتماً!", "خداحافظ و متشکرم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Is there anything else I can do for you before we end?",
        "q_persien": "آیا قبل از پایان، کار دیگری هست که بتوانم برای شما انجام دهم؟",
        "a": ["No, that’s all, thank you!", "Yes, just one more thing."],
        "a_persien": ["نه، همین بود، متشکرم!", "بله، فقط یک چیز دیگر."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "If you have more questions, please call us anytime.",
        "q_persien": "اگر سؤالات بیشتری دارید، لطفاً هر زمانی با ما تماس بگیرید.",
        "a": ["Thank you, I will.", "That’s good to know."],
        "a_persien": ["متشکرم، حتماً.", "دانستنش خوب است."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Have a fantastic stay and thank you for your call!",
        "q_persien": "اقامت فوق‌العاده‌ای داشته باشید و از تماستان متشکریم!",
        "a": ["You too, goodbye!", "Thanks, take care."],
        "a_persien": ["شما هم همینطور، خداحافظ!", "ممنون، مراقب باشید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for your time. Enjoy your journey!",
        "q_persien": "از وقت شما متشکرم. از سفرتان لذت ببرید!",
        "a": ["Goodbye and thank you.", "See you next time."],
        "a_persien": ["خداحافظ و متشکرم.", "دفعه بعد می‌بینمتان."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We look forward to hearing from you again.",
        "q_persien": "مشتاقانه منتظر شنیدن دوباره از شما هستیم.",
        "a": ["Thank you!", "Will do."],
        "a_persien": ["متشکرم!", "حتماً."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "If you need more help, we’re always here.",
        "q_persien": "اگر به کمک بیشتری نیاز دارید، ما همیشه اینجا هستیم.",
        "a": ["Thanks for the info.", "I’ll remember that."],
        "a_persien": ["ممنون از اطلاعات.", "یادم خواهد ماند."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for your trust. Safe travels!",
        "q_persien": "از اعتماد شما متشکرم. سفر بخیر!",
        "a": ["You too, goodbye.", "Stay safe!"],
        "a_persien": ["شما هم همینطور، خداحافظ.", "مراقب باشید!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We hope you enjoy your time in Iran!",
        "q_persien": "امیدواریم از وقتتان در ایران لذت ببرید!",
        "a": ["Thank you, same to you!", "Wish you a great day too."],
        "a_persien": ["متشکرم، شما هم همینطور!", "برای شما هم روز خوبی آرزو می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Goodbye and thank you for choosing us.",
        "q_persien": "خداحافظ و از اینکه ما را انتخاب کردید متشکریم.",
        "a": ["Goodbye!", "Thanks for everything."],
        "a_persien": ["خداحافظ!", "ممنون برای همه چیز."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We’re here whenever you need us.",
        "q_persien": "هر وقت به ما نیاز داشتید ما اینجا هستیم.",
        "a": ["Thanks, I appreciate it.", "That’s reassuring."],
        "a_persien": ["ممنون، قدردانی می‌کنم.", "این اطمینان‌بخش است."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "All the best for your trip. Goodbye!",
        "q_persien": "بهترین‌ها برای سفرتان. خداحافظ!",
        "a": ["Thank you, goodbye!", "Take care!"],
        "a_persien": ["متشکرم، خداحافظ!", "مراقب باشید!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Hope we helped you today. Goodbye!",
        "q_persien": "امیدواریم امروز به شما کمک کرده باشیم. خداحافظ!",
        "a": ["You did, thanks!", "Goodbye and thanks."],
        "a_persien": ["کردید، ممنون!", "خداحافظ و ممنون."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thanks for being our guest. Bye!",
        "q_persien": "ممنون که مهمان ما بودید. خداحافظ!",
        "a": ["Glad to be a customer.", "Goodbye!"],
        "a_persien": ["خوشحالم که مشتری هستم.", "خداحافظ!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Feel free to call us back if you have any questions.",
        "q_persien": "اگر سؤالی داشتید، راحت باشید و دوباره با ما تماس بگیرید.",
        "a": ["I will, thank you.", "Sure, thanks!"],
        "a_persien": ["حتماً، متشکرم.", "حتماً، ممنون!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Wishing you many great adventures in Iran!",
        "q_persien": "ماجراجویی‌های بزرگی در ایران برایتان آرزومندم!",
        "a": ["Thank you, I hope so too.", "See you!"],
        "a_persien": ["متشکرم، من هم امیدوارم.", "می‌بینمتان!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Safe journeys and wonderful memories to you!",
        "q_persien": "سفرهای امن و خاطرات فوق‌العاده‌ای برای شما!",
        "a": ["Thank you so much!", "That’s very sweet."],
        "a_persien": ["خیلی متشکرم!", "این خیلی شیرین است."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "You’re always welcome to call us again. Goodbye!",
        "q_persien": "همیشه خوش آمدید دوباره با ما تماس بگیرید. خداحافظ!",
        "a": ["Thank you for the warm service.", "Goodbye!"],
        "a_persien": ["ممنون از خدمات گرمتان.", "خداحافظ!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We’ll be happy to hear from you again.",
        "q_persien": "خوشحال خواهیم شد دوباره از شما بشنویم.",
        "a": ["I’ll call if I need anything.", "Goodbye."],
        "a_persien": ["اگر چیزی لازم داشتم تماس می‌گیرم.", "خداحافظ."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Take care and talk to you soon.",
        "q_persien": "مراقب باشید و به زودی با شما صحبت می‌کنیم.",
        "a": ["You too, thanks!", "See you next time."],
        "a_persien": ["شما هم همینطور، ممنون!", "دفعه بعد می‌بینمتان."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thanks for your trust. Goodbye!",
        "q_persien": "از اعتمادتان متشکرم. خداحافظ!",
        "a": ["Goodbye and thank you.", "I appreciate your help."],
        "a_persien": ["خداحافظ و متشکرم.", "از کمکتان قدردانی می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We wish you all the best for your travels!",
        "q_persien": "بهترین‌ها را برای سفرهایتان آرزومندیم!",
        "a": ["Thank you!", "I appreciate it."],
        "a_persien": ["متشکرم!", "قدردانی می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "If you need help in the future, don’t hesitate to contact us.",
        "q_persien": "اگر در آینده به کمک نیاز داشتید، در تماس با ما تردید نکنید.",
        "a": ["Thank you, I will.", "That’s great, thanks."],
        "a_persien": ["متشکرم، حتماً.", "عالی است، ممنون."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Good luck and enjoy every minute!",
        "q_persien": "موفق باشید و از هر لحظه لذت ببرید!",
        "a": ["Thank you!", "I’ll try!"],
        "a_persien": ["متشکرم!", "سعی خواهم کرد!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "You made our day with your call. Goodbye!",
        "q_persien": "با تماستان روز ما را ساختید. خداحافظ!",
        "a": ["Glad to call you.", "Thanks for everything."],
        "a_persien": ["خوشحالم که با شما تماس گرفتم.", "ممنون برای همه چیز."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Have a safe and pleasant journey!",
        "q_persien": "سفر امن و خوشی داشته باشید!",
        "a": ["Thank you!", "Goodbye."],
        "a_persien": ["متشکرم!", "خداحافظ."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Wishing you many smiles on your trip!",
        "q_persien": "لبخندهای زیادی در سفرتان برایتان آرزومندم!",
        "a": ["Thank you, that’s very nice!", "I appreciate it."],
        "a_persien": ["متشکرم، این خیلی خوب است!", "قدردانی می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "May your journey be full of happiness. Goodbye!",
        "q_persien": "باشد که سفرتان پر از شادی باشد. خداحافظ!",
        "a": ["Thank you, same to you!", "Goodbye!"],
        "a_persien": ["متشکرم، شما هم همینطور!", "خداحافظ!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "All the best from our team to you!",
        "q_persien": "بهترین‌ها از تیم ما برای شما!",
        "a": ["Thank you, and to you!", "Goodbye!"],
        "a_persien": ["متشکرم، و برای شما!", "خداحافظ!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Bon voyage and see you again!",
        "q_persien": "سفر بخیر و دوباره می‌بینمتان!",
        "a": ["Thank you, goodbye!", "See you next time!"],
        "a_persien": ["متشکرم، خداحافظ!", "دفعه بعد می‌بینمتان!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Don’t forget to take lots of photos!",
        "q_persien": "فراموش نکنید عکس‌های زیادی بگیرید!",
        "a": ["I will!", "That’s a good idea."],
        "a_persien": ["حتماً!", "ایده خوبی است."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We’ll be thinking of you during your travels!",
        "q_persien": "در طول سفرهایتان به فکر شما خواهیم بود!",
        "a": ["Thank you, that’s touching.", "Goodbye and thanks."],
        "a_persien": ["متشکرم، این تأثیرگذار است.", "خداحافظ و ممنون."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for making us a part of your adventure.",
        "q_persien": "ممنون که ما را بخشی از ماجراجویی خود کردید.",
        "a": ["You’re welcome!", "I’m glad I chose you."],
        "a_persien": ["خواهش می‌کنم!", "خوشحالم که شما را انتخاب کردم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Take care and have a fantastic trip!",
        "q_persien": "مراقب باشید و سفر فوق‌العاده‌ای داشته باشید!",
        "a": ["Thank you!", "Goodbye!"],
        "a_persien": ["متشکرم!", "خداحافظ!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We hope you come back to Iran soon!",
        "q_persien": "امیدواریم به زودی به ایران برگردید!",
        "a": ["I hope so too!", "Thank you, maybe next year!"],
        "a_persien": ["من هم امیدوارم!", "متشکرم، شاید سال بعد!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you need help finding local restaurants?",
        "q_persien": "آیا برای پیدا کردن رستوران‌های محلی به کمک نیاز دارید؟",
        "a": ["Yes, please suggest some.", "No, I already have some ideas."],
        "a_persien": ["بله، لطفاً چند مورد را پیشنهاد دهید.", "نه، من قبلاً چند ایده دارم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Would you like us to text you useful tourist information?",
        "q_persien": "آیا می‌خواهید اطلاعات توریستی مفیدی را برایتان پیامک کنیم؟",
        "a": ["Yes, that would help.", "No, I’m okay for now."],
        "a_persien": ["بله، این کمک می‌کند.", "نه، فعلاً خوبم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Have you tried local sweets yet?",
        "q_persien": "آیا تا به حال شیرینی‌های محلی را امتحان کرده‌اید؟",
        "a": ["Yes, I love baklava!", "Not yet, I’d like to."],
        "a_persien": ["بله، من عاشق باقلوا هستم!", "هنوز نه، دوست دارم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you have everything you need for your phone?",
        "q_persien": "آیا همه چیزهایی که برای گوشی‌تان نیاز دارید را دارید؟",
        "a": ["Yes, I think so.", "Not sure, maybe you can check?"],
        "a_persien": ["بله، فکر می‌کنم.", "مطمئن نیستم، شاید شما بتوانید بررسی کنید؟"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Are you comfortable using Persian mobile apps?",
        "q_persien": "آیا با استفاده از اپلیکیشن‌های موبایل فارسی راحت هستید؟",
        "a": ["I might need help.", "I’m managing fine."],
        "a_persien": ["ممکن است به کمک نیاز داشته باشم.", "من خوب مدیریت می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Would you like info on SIM recharge locations?",
        "q_persien": "آیا اطلاعاتی در مورد مکان‌های شارژ سیم‌کارت می‌خواهید؟",
        "a": ["Yes, please.", "No, I found one nearby."],
        "a_persien": ["بله، لطفاً.", "نه، یکی در نزدیکی پیدا کردم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you have questions about your SIM expiry?",
        "q_persien": "آیا در مورد انقضای سیم‌کارت خود سؤالی دارید؟",
        "a": ["Yes, when does it expire?", "No, I already checked."],
        "a_persien": ["بله، کی منقضی می‌شود؟", "نه، من قبلاً بررسی کرده‌ام."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Can I help you with directions?",
        "q_persien": "می‌توانم در مورد آدرس‌ها به شما کمک کنم؟",
        "a": ["Yes, I’m looking for the bazaar.", "No, I’m using Google Maps."],
        "a_persien": ["بله، من دنبال بازار هستم.", "نه، من از گوگل مپ استفاده می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Is your hotel providing free WiFi?",
        "q_persien": "آیا هتل شما وای‌فای رایگان ارائه می‌دهد؟",
        "a": ["Yes, but it’s slow.", "No, that’s why I need a SIM."],
        "a_persien": ["بله، اما کند است.", "نه، به همین دلیل به سیم‌کارت نیاز دارم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you have a local contact number to share?",
        "q_persien": "آیا شماره تماس محلی برای اشتراک‌گذاری دارید؟",
        "a": ["No, just my tourist SIM.", "Yes, I have a friend here."],
        "a_persien": ["نه، فقط سیم‌کارت توریستی‌ام.", "بله، من یک دوست اینجا دارم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Would you like to extend your SIM for a longer stay?",
        "q_persien": "آیا می‌خواهید سیم‌کارت خود را برای اقامت طولانی‌تر تمدید کنید؟",
        "a": ["Yes, please explain how.", "No, I leave soon."],
        "a_persien": ["بله، لطفاً توضیح دهید چگونه.", "نه، من به زودی می‌روم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you want to register a device for local use?",
        "q_persien": "آیا می‌خواهید یک دستگاه برای استفاده محلی ثبت کنید؟",
        "a": ["Yes, can you guide me?", "No, it’s not necessary."],
        "a_persien": ["بله، می‌توانید مرا راهنمایی کنید؟", "نه، لازم نیست."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Is your SIM working well in all the cities you’ve visited?",
        "q_persien": "آیا سیم‌کارت شما در تمام شهرهایی که بازدید کرده‌اید خوب کار می‌کند؟",
        "a": ["Yes, everywhere so far.", "It was slow in one town."],
        "a_persien": ["بله، تا اینجا همه جا.", "در یک شهر کند بود."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Would you like English instructions for your SIM?",
        "q_persien": "آیا دستورالعمل‌های انگلیسی برای سیم‌کارت خود می‌خواهید؟",
        "a": ["Yes, please!", "No, Persian is fine."],
        "a_persien": ["بله، لطفاً!", "نه، فارسی خوب است."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you feel comfortable with your current plan?",
        "q_persien": "آیا با طرح فعلی خود راحت هستید؟",
        "a": ["Yes, it’s just right.", "I may need more data."],
        "a_persien": ["بله، دقیقاً مناسب است.", "ممکن است به دیتای بیشتری نیاز داشته باشم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you need help using any local apps?",
        "q_persien": "آیا برای استفاده از اپلیکیشن‌های محلی به کمک نیاز دارید؟",
        "a": ["Yes, please help.", "No, I’ll figure it out."],
        "a_persien": ["بله، لطفاً کمک کنید.", "نه، خودم متوجه می‌شوم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Would you like an introduction to local etiquette?",
        "q_persien": "آیا مقدمه‌ای در مورد آداب و رسوم محلی می‌خواهید؟",
        "a": ["Yes, that would be nice.", "No, thank you."],
        "a_persien": ["بله، خوب خواهد بود.", "نه، متشکرم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "How did you find our service today?",
        "q_persien": "امروز خدمات ما را چگونه یافتید؟",
        "a": ["Very helpful, thank you!", "Quick and friendly!"],
        "a_persien": ["بسیار مفید، متشکرم!", "سریع و دوستانه!"]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Is there anything you’d suggest we improve for tourists?",
        "q_persien": "آیا چیزی هست که پیشنهاد دهید ما برای توریست‌ها بهبود ببخشیم؟",
        "a": ["Maybe longer SIM validity.", "More English signage."],
        "a_persien": ["شاید اعتبار سیم‌کارت طولانی‌تر.", "تابلوهای انگلیسی بیشتر."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Did you enjoy your interaction with us?",
        "q_persien": "آیا از تعاملتان با ما لذت بردید؟",
        "a": ["Yes, very much!", "Yes, you were great."],
        "a_persien": ["بله، خیلی زیاد!", "بله، شما عالی بودید."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Will you recommend our service to other travelers?",
        "q_persien": "آیا خدمات ما را به مسافران دیگر توصیه خواهید کرد؟",
        "a": ["Definitely, you’re the best!", "I certainly will."],
        "a_persien": ["قطعاً، شما بهترین هستید!", "حتماً خواهم کرد."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Do you need a list of emergency contacts?",
        "q_persien": "آیا به لیستی از مخاطبین اضطراری نیاز دارید؟",
        "a": ["Yes, that would be helpful.", "No, I got them from my hotel."],
        "a_persien": ["بله، این مفید خواهد بود.", "نه، من آنها را از هتلم گرفتم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Did you get everything you needed from this call?",
        "q_persien": "آیا همه چیزهایی که از این تماس نیاز داشتید را گرفتید؟",
        "a": ["Yes, all good.", "I have everything, thank you."],
        "a_persien": ["بله، همه چیز خوب است.", "من همه چیز دارم، متشکرم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Are you leaving the country soon?",
        "q_persien": "آیا به زودی کشور را ترک می‌کنید؟",
        "a": ["Yes, I depart tomorrow.", "No, I still have time."],
        "a_persien": ["بله، من فردا حرکت می‌کنم.", "نه، هنوز وقت دارم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Would you like a summary of your account sent to your email?",
        "q_persien": "آیا می‌خواهید خلاصه‌ای از حسابتان به ایمیلتان ارسال شود؟",
        "a": ["Yes, please send it.", "No, SMS is fine."],
        "a_persien": ["بله، لطفاً ارسال کنید.", "نه، پیامک خوب است."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Can I wish you a safe journey home?",
        "q_persien": "می‌توانم سفر امنی به خانه برایتان آرزو کنم؟",
        "a": ["Thank you, yes!", "I appreciate that."],
        "a_persien": ["متشکرم، بله!", "قدردانی می‌کنم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Hope your memories of Iran are wonderful!",
        "q_persien": "امیدوارم خاطراتتان از ایران فوق‌العاده باشد!",
        "a": ["Thank you, they will be!", "I’m sure they will."],
        "a_persien": ["متشکرم، خواهند بود!", "مطمئنم خواهند بود."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Thank you for being part of our international family.",
        "q_persien": "ممنون که بخشی از خانواده بین‌المللی ما هستید.",
        "a": ["Glad to join!", "Thank you, it’s an honor."],
        "a_persien": ["خوشحالم که پیوستم!", "متشکرم، باعث افتخار است."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "Is there any way we can support you further?",
        "q_persien": "آیا راهی هست که بتوانیم بیشتر از شما حمایت کنیم؟",
        "a": ["No, you’ve been perfect.", "I’ll call again if I need anything."],
        "a_persien": ["نه، شما عالی بوده‌اید.", "اگر به چیزی نیاز داشته باشم دوباره تماس می‌گیرم."]
    },
    {
        "topic": "Tourist SIM",
        "role": "Operator",
        "q": "We’re always here for you. Safe travels!",
        "q_persien": "ما همیشه برای شما اینجا هستیم. سفر بخیر!",
        "a": ["Thank you!", "See you next time."],
        "a_persien": ["متشکرم!", "دفعه بعد می‌بینمتان."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Can you tell me how to get to the main square?",
        "q_persien": "می‌توانید به من بگویید چگونه به میدان اصلی بروم؟",
        "a": ["Go straight and turn left at the lights.", "It's two blocks down this road."],
        "a_persien": ["مستقیم بروید و در چراغ راهنمایی به چپ بپیچید.", "دو بلوک پایین‌تر در این جاده است."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Where is the nearest metro station?",
        "q_persien": "نزدیکترین ایستگاه مترو کجاست؟",
        "a": ["It's next to the shopping mall.", "Just follow this street and you'll see it."],
        "a_persien": ["کنار مرکز خرید است.", "فقط این خیابان را دنبال کنید و آن را خواهید دید."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Is there a bank nearby?",
        "q_persien": "آیا بانکی در این نزدیکی هست؟",
        "a": ["Yes, there's one on the corner.", "You’ll find an ATM in the next block."],
        "a_persien": ["بله، یکی در نبش خیابان هست.", "در بلوک بعدی یک خودپرداز پیدا خواهید کرد."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "How do I get to the airport from here?",
        "q_persien": "چگونه از اینجا به فرودگاه بروم؟",
        "a": ["Take a taxi or the shuttle bus.", "You can also use the metro line."],
        "a_persien": ["یک تاکسی یا اتوبوس شاتل بگیرید.", "می‌توانید از خط مترو هم استفاده کنید."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Can you show me this place on the map?",
        "q_persien": "می‌توانید این مکان را روی نقشه به من نشان دهید؟",
        "a": ["Of course, here it is.", "Let me mark it for you."],
        "a_persien": ["البته، اینجاست.", "اجازه دهید برایتان علامت بزنم."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "What’s the address of this shop?",
        "q_persien": "آدرس این مغازه چیست؟",
        "a": ["It’s 25 Elm Street.", "The shop is on the second floor."],
        "a_persien": ["خیابان الم ۲۵ است.", "مغازه در طبقه دوم است."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Which bus goes to the museum?",
        "q_persien": "کدام اتوبوس به موزه می‌رود؟",
        "a": ["Bus number 6 stops there.", "You can also take a taxi."],
        "a_persien": ["اتوبوس شماره ۶ آنجا توقف می‌کند.", "می‌توانید تاکسی هم بگیرید."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "How far is it to the city center?",
        "q_persien": "تا مرکز شهر چقدر فاصله دارد؟",
        "a": ["About 10 minutes by car.", "It’s a 20-minute walk."],
        "a_persien": ["حدود ۱۰ دقیقه با ماشین.", "۲۰ دقیقه پیاده‌روی است."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Can you help me find my hotel?",
        "q_persien": "می‌توانید به من در پیدا کردن هتلم کمک کنید؟",
        "a": ["What’s the name of your hotel?", "Let me check the location for you."],
        "a_persien": ["نام هتل شما چیست؟", "اجازه دهید موقعیت را برایتان بررسی کنم."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Is there a pharmacy close to here?",
        "q_persien": "آیا داروخانه‌ای نزدیک اینجا هست؟",
        "a": ["Yes, one across the street.", "Walk right and you'll see the sign."],
        "a_persien": ["بله، یکی آن طرف خیابان.", "به راست بروید و تابلو را خواهید دید."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Do you know this street?",
        "q_persien": "این خیابان را می‌شناسید؟",
        "a": ["Yes, it’s near the old park.", "No, but I can help you look it up."],
        "a_persien": ["بله، نزدیک پارک قدیمی است.", "نه، اما می‌توانم به شما در جستجویش کمک کنم."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Can you write down the address for me?",
        "q_persien": "می‌توانید آدرس را برایم بنویسید؟",
        "a": ["Sure, I’ll write it here.", "Let me text it to you."],
        "a_persien": ["حتماً، اینجا می‌نویسم.", "اجازه دهید برایتان پیامک کنم."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Where can I catch a taxi?",
        "q_persien": "کجا می‌توانم تاکسی بگیرم؟",
        "a": ["There’s a taxi stand outside.", "Just wave on the main street."],
        "a_persien": ["یک ایستگاه تاکسی بیرون هست.", "فقط در خیابان اصلی دست تکان دهید."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Is this the way to the train station?",
        "q_persien": "آیا این راه به ایستگاه قطار است؟",
        "a": ["Yes, keep going straight.", "No, you need to go the other way."],
        "a_persien": ["بله، مستقیم ادامه دهید.", "نه، باید از آن طرف بروید."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "How do I get to the nearest supermarket?",
        "q_persien": "چگونه به نزدیکترین سوپرمارکت بروم؟",
        "a": ["It’s just around the corner.", "There’s a big one near the plaza."],
        "a_persien": ["درست همین نزدیکی‌هاست.", "یک بزرگ نزدیک میدان هست."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "What’s the zip code for this area?",
        "q_persien": "کد پستی این منطقه چیست؟",
        "a": ["It’s 12345.", "Let me check for you."],
        "a_persien": ["۱۲۳۴۵ است.", "اجازه دهید برایتان بررسی کنم."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Can you help me use Google Maps?",
        "q_persien": "می‌توانید به من در استفاده از گوگل مپ کمک کنید؟",
        "a": ["Sure, show me your phone.", "Open the app and type the address."],
        "a_persien": ["حتماً، گوشی‌تان را به من نشان دهید.", "اپلیکیشن را باز کنید و آدرس را تایپ کنید."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "How long does it take to get there?",
        "q_persien": "چقدر طول می‌کشد تا به آنجا برسیم؟",
        "a": ["About 15 minutes by bus.", "It’s not far, maybe a short walk."],
        "a_persien": ["حدود ۱۵ دقیقه با اتوبوس.", "دور نیست، شاید یک پیاده‌روی کوتاه."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Can you call me a taxi?",
        "q_persien": "می‌توانید برایم تاکسی بگیرید؟",
        "a": ["Of course, one moment.", "I’ll order one on the app."],
        "a_persien": ["البته، یک لحظه.", "یکی در اپلیکیشن سفارش می‌دهم."]
    },
    {
        "topic": "Directions",
        "role": "Customer",
        "q": "Is there a parking lot here?",
        "q_persien": "آیا اینجا پارکینگ هست؟",
        "a": ["Yes, behind the building.", "No, you have to park on the street."],
        "a_persien": ["بله، پشت ساختمان.", "نه، باید در خیابان پارک کنید."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "Can I have your phone number?",
        "q_persien": "می‌توانم شماره تلفنتان را داشته باشم؟",
        "a": ["Sure, it’s 0912-XXXXXXX.", "Let me write it down for you."],
        "a_persien": ["حتماً، ۰۹۱۲-XXXXXXX است.", "اجازه دهید برایتان بنویسم."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "What’s the number for a taxi service?",
        "q_persien": "شماره سرویس تاکسی چیست؟",
        "a": ["Call 133 for a taxi.", "Here’s a private company’s number."],
        "a_persien": ["برای تاکسی با ۱۳۳ تماس بگیرید.", "این شماره یک شرکت خصوصی است."]
    }
,
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "Can you give me your WhatsApp?",
        "q_persien": "می‌توانید شماره واتس‌اپ خود را به من بدهید؟",
        "a": ["Sure, here it is.", "Let me send it to you."],
        "a_persien": ["حتماً، اینجاست.", "اجازه دهید برایتان ارسال کنم."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "How do I contact this business?",
        "q_persien": "چگونه با این کسب و کار تماس بگیرم؟",
        "a": ["Here’s their card.", "Check their Instagram for contact info."],
        "a_persien": ["این کارت ویزیتشان است.", "برای اطلاعات تماس، اینستاگرامشان را بررسی کنید."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "Do you have an emergency number?",
        "q_persien": "آیا شماره اضطراری دارید؟",
        "a": ["Call 115 for ambulance.", "The police number is 110."],
        "a_persien": ["برای آمبولانس با ۱۱۵ تماس بگیرید.", "شماره پلیس ۱۱۰ است."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "Can you help me call someone?",
        "q_persien": "می‌توانید به من کمک کنید با کسی تماس بگیرم؟",
        "a": ["Yes, tell me the number.", "I can lend you my phone."],
        "a_persien": ["بله، شماره را به من بگویید.", "می‌توانم گوشی‌ام را به شما قرض دهم."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "What’s your email address?",
        "q_persien": "آدرس ایمیل شما چیست؟",
        "a": ["It's info@example.com.", "Let me write it down."],
        "a_persien": ["info@example.com است.", "اجازه دهید بنویسم."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "Can I leave my number for you to call back?",
        "q_persien": "می‌توانم شماره‌ام را بگذارم تا بعداً با من تماس بگیرید؟",
        "a": ["Yes, I’ll note it down.", "Of course, I’ll call you soon."],
        "a_persien": ["بله، یادداشت می‌کنم.", "البته، به زودی با شما تماس می‌گیرم."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "How do I save this contact?",
        "q_persien": "چگونه این مخاطب را ذخیره کنم؟",
        "a": ["Add it in your phone’s address book.", "I can show you how."],
        "a_persien": ["آن را در دفترچه تلفن گوشی خود اضافه کنید.", "می‌توانم به شما نشان دهم چگونه."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "Can you share your location with me?",
        "q_persien": "می‌توانید موقعیت مکانی خود را با من به اشتراک بگذارید؟",
        "a": ["I’ll send it on WhatsApp.", "Check your messages for my location."],
        "a_persien": ["در واتس‌اپ برایتان ارسال می‌کنم.", "برای موقعیت مکانی من، پیام‌های خود را بررسی کنید."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "Is there WiFi I can use?",
        "q_persien": "آیا وای‌فای برای استفاده وجود دارد؟",
        "a": ["Yes, here’s the password.", "No, sorry, only for staff."],
        "a_persien": ["بله، این رمز عبور است.", "نه، متأسفم، فقط برای کارکنان."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "Can you help me find a lost phone?",
        "q_persien": "می‌توانید به من در پیدا کردن یک گوشی گم‌شده کمک کنید؟",
        "a": ["Let’s try calling it first.", "You can check with the lost and found."],
        "a_persien": ["بیایید اول سعی کنیم با آن تماس بگیریم.", "می‌توانید با بخش اشیاء گمشده بررسی کنید."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "How can I get in touch with the hotel reception?",
        "q_persien": "چگونه می‌توانم با پذیرش هتل تماس بگیرم؟",
        "a": ["Dial 0 from your room phone.", "Here’s their WhatsApp number."],
        "a_persien": ["از تلفن اتاقتان ۰ را شماره‌گیری کنید.", "این شماره واتس‌اپشان است."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "Can I borrow your phone for a moment?",
        "q_persien": "می‌توانم برای یک لحظه گوشی شما را قرض بگیرم؟",
        "a": ["Sure, go ahead.", "Sorry, my battery is low."],
        "a_persien": ["حتماً، بفرمایید.", "متأسفم، باتری‌ام کم است."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "Can I send you a message later?",
        "q_persien": "می‌توانم بعداً برایتان پیام بفرستم؟",
        "a": ["Yes, feel free.", "I’ll wait for your message."],
        "a_persien": ["بله، راحت باشید.", "منتظر پیامتان خواهم بود."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "How do I connect to the WiFi here?",
        "q_persien": "چگونه به وای‌فای اینجا وصل شوم؟",
        "a": ["Ask the staff for the password.", "It’s written on the wall."],
        "a_persien": ["از کارکنان رمز عبور را بپرسید.", "روی دیوار نوشته شده است."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "Can you recommend someone to help me?",
        "q_persien": "می‌توانید کسی را برای کمک به من توصیه کنید؟",
        "a": ["Yes, my friend can assist.", "I know someone who can help."],
        "a_persien": ["بله، دوستم می‌تواند کمک کند.", "من کسی را می‌شناسم که می‌تواند کمک کند."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "Is there a help desk in this building?",
        "q_persien": "آیا در این ساختمان میز راهنما وجود دارد؟",
        "a": ["Yes, on the ground floor.", "No, ask at the main entrance."],
        "a_persien": ["بله، در طبقه همکف.", "نه، در ورودی اصلی بپرسید."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "Can I leave a message for someone?",
        "q_persien": "می‌توانم برای کسی پیام بگذارم؟",
        "a": ["Yes, I’ll pass it along.", "Leave a note at the front desk."],
        "a_persien": ["بله، من آن را منتقل می‌کنم.", "یک یادداشت در میز پذیرش بگذارید."]
    },
    {
        "topic": "Contact",
        "role": "Customer",
        "q": "What’s the best way to contact you?",
        "q_persien": "بهترین راه برای تماس با شما چیست؟",
        "a": ["Call my mobile anytime.", "Email works best for me."],
        "a_persien": ["هر زمان خواستید با موبایلم تماس بگیرید.", "ایمیل برای من بهترین کار می‌کند."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "How much does this cost?",
        "q_persien": "این چقدر قیمت دارد؟",
        "a": ["It’s 250,000 tomans.", "There’s a 10% discount today."],
        "a_persien": ["۲۵۰,۰۰۰ تومان است.", "امروز ۱۰٪ تخفیف دارد."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Do you accept credit cards?",
        "q_persien": "آیا کارت اعتباری قبول می‌کنید؟",
        "a": ["Yes, all major cards.", "Sorry, cash only."],
        "a_persien": ["بله، همه کارت‌های اصلی.", "متأسفم، فقط پول نقد."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Is there a cheaper option?",
        "q_persien": "آیا گزینه ارزان‌تری وجود دارد؟",
        "a": ["Yes, here’s a budget model.", "That’s our best price."],
        "a_persien": ["بله، این یک مدل اقتصادی است.", "این بهترین قیمت ماست."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Can I get a receipt?",
        "q_persien": "می‌توانم رسید بگیرم؟",
        "a": ["Of course, here you go.", "Would you like it by email?"],
        "a_persien": ["البته، بفرمایید.", "آیا می‌خواهید با ایمیل برایتان ارسال شود؟"]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Do you have this in a different color?",
        "q_persien": "آیا این را در رنگ دیگری دارید؟",
        "a": ["Yes, we have red and blue.", "Sorry, only this color left."],
        "a_persien": ["بله، ما قرمز و آبی داریم.", "متأسفم، فقط این رنگ باقی مانده است."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "How much for two of these?",
        "q_persien": "قیمت دو تا از اینها چقدر می‌شود؟",
        "a": ["I can give you a small discount.", "It’s double the single price."],
        "a_persien": ["می‌توانم به شما تخفیف کوچکی بدهم.", "دو برابر قیمت تکی است."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Can you give me a better price?",
        "q_persien": "می‌توانید قیمت بهتری به من بدهید؟",
        "a": ["Let me ask my manager.", "Sorry, prices are fixed."],
        "a_persien": ["اجازه دهید از مدیرم بپرسم.", "متأسفم، قیمت‌ها ثابت هستند."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Is this on sale?",
        "q_persien": "آیا این در حراج است؟",
        "a": ["Yes, 20% off today.", "No, regular price only."],
        "a_persien": ["بله، امروز ۲۰٪ تخفیف دارد.", "نه، فقط قیمت معمولی."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Can I pay in installments?",
        "q_persien": "می‌توانم قسطی پرداخت کنم؟",
        "a": ["Yes, with a small down payment.", "No, only full payment."],
        "a_persien": ["بله، با یک پیش‌پرداخت کوچک.", "نه، فقط پرداخت کامل."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Do you have a loyalty program?",
        "q_persien": "آیا برنامه وفاداری دارید؟",
        "a": ["Yes, join at the register.", "No, not at this time."],
        "a_persien": ["بله، در صندوق ثبت‌نام کنید.", "نه، در حال حاضر نه."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Can I return this if it doesn’t fit?",
        "q_persien": "اگر اندازه‌اش مناسب نبود می‌توانم این را برگردانم؟",
        "a": ["Yes, within 7 days.", "No returns on sale items."],
        "a_persien": ["بله، ظرف ۷ روز.", "اجناس حراجی قابل بازگشت نیستند."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Do you deliver?",
        "q_persien": "آیا تحویل دارید؟",
        "a": ["Yes, we offer free delivery.", "Delivery charges may apply."],
        "a_persien": ["بله، ما تحویل رایگان داریم.", "ممکن است هزینه‌های تحویل اعمال شود."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "How long does shipping take?",
        "q_persien": "ارسال چقدر طول می‌کشد؟",
        "a": ["1-3 business days.", "Depends on your location."],
        "a_persien": ["۱-۳ روز کاری.", "بستگی به موقعیت مکانی شما دارد."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "What’s your exchange policy?",
        "q_persien": "سیاست تعویض شما چیست؟",
        "a": ["Exchange within 14 days.", "No exchanges on electronics."],
        "a_persien": ["تعویض ظرف ۱۴ روز.", "تعویض برای لوازم الکترونیکی وجود ندارد."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Do you have a price list?",
        "q_persien": "آیا لیست قیمت دارید؟",
        "a": ["Yes, here’s our catalog.", "Check prices on our website."],
        "a_persien": ["بله، این کاتالوگ ماست.", "قیمت‌ها را در وب‌سایت ما بررسی کنید."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Can I see the menu?",
        "q_persien": "می‌توانم منو را ببینم؟",
        "a": ["Of course, here’s the menu.", "Use the QR code on your table."],
        "a_persien": ["البته، این منو است.", "از کد QR روی میزتان استفاده کنید."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Can I get a sample?",
        "q_persien": "می‌توانم یک نمونه بگیرم؟",
        "a": ["Yes, please try.", "Samples are not available."],
        "a_persien": ["بله، لطفاً امتحان کنید.", "نمونه موجود نیست."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Are there any special offers?",
        "q_persien": "آیا پیشنهاد ویژه‌ای وجود دارد؟",
        "a": ["Yes, buy one get one free.", "No offers today, sorry."],
        "a_persien": ["بله، یکی بخر یکی رایگان ببر.", "امروز پیشنهادی نیست، متأسفم."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Can I reserve this item?",
        "q_persien": "می‌توانم این کالا را رزرو کنم؟",
        "a": ["Yes, for 24 hours.", "Sorry, we can’t reserve items."],
        "a_persien": ["بله، برای ۲۴ ساعت.", "متأسفم، نمی‌توانیم کالا رزرو کنیم."]
    },
    {
        "topic": "Shopping",
        "role": "Customer",
        "q": "Can you show me something similar?",
        "q_persien": "می‌توانید چیزی شبیه به این به من نشان دهید؟",
        "a": ["Sure, follow me.", "We have these options too."],
        "a_persien": ["حتماً، دنبالم بیایید.", "ما این گزینه‌ها را هم داریم."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Do you have vegetarian options?",
        "q_persien": "آیا گزینه‌های گیاهی دارید؟",
        "a": ["Yes, we have several.", "Let me show you the menu."],
        "a_persien": ["بله، ما چندین مورد داریم.", "اجازه دهید منو را به شما نشان دهم."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "What do you recommend here?",
        "q_persien": "اینجا چه چیزی را توصیه می‌کنید؟",
        "a": ["Try the kebab, it’s very popular.", "Our special is the stew today."],
        "a_persien": ["کباب را امتحان کنید، خیلی محبوب است.", "ویژه امروز ما خورش است."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Can I see the dessert menu?",
        "q_persien": "می‌توانم منوی دسر را ببینم؟",
        "a": ["Here you go.", "Dessert menu is at the back."],
        "a_persien": ["بفرمایید.", "منوی دسر در پشت است."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Is tap water safe to drink?",
        "q_persien": "آیا آب لوله‌کشی برای نوشیدن امن است؟",
        "a": ["Yes, it’s safe in the city.", "Better to drink bottled water."],
        "a_persien": ["بله، در شهر امن است.", "بهتر است آب معدنی بنوشید."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Can I get my food to go?",
        "q_persien": "می‌توانم غذایم را بیرون‌بر بگیرم؟",
        "a": ["Absolutely, I’ll pack it for you.", "Yes, would you like a bag?"],
        "a_persien": ["قطعاً، برایتان بسته‌بندی می‌کنم.", "بله، آیا کیسه می‌خواهید؟"]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "How spicy is this dish?",
        "q_persien": "این غذا چقدر تند است؟",
        "a": ["It’s mildly spicy.", "You can ask for it less spicy."],
        "a_persien": ["کمی تند است.", "می‌توانید بخواهید که کمتر تند باشد."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Can I make a reservation for tonight?",
        "q_persien": "می‌توانم برای امشب رزرو کنم؟",
        "a": ["Yes, for what time?", "Sorry, we’re fully booked."],
        "a_persien": ["بله، برای چه ساعتی؟", "متأسفم، ما کاملاً رزرو شده‌ایم."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Do you serve breakfast?",
        "q_persien": "آیا صبحانه سرو می‌کنید؟",
        "a": ["Yes, from 7 to 10 a.m.", "No, only lunch and dinner."],
        "a_persien": ["بله، از ۷ تا ۱۰ صبح.", "نه، فقط ناهار و شام."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Can I pay separately?",
        "q_persien": "می‌توانم جداگانه پرداخت کنم؟",
        "a": ["Yes, we can split the bill.", "Sorry, one bill only."],
        "a_persien": ["بله، می‌توانیم صورت‌حساب را تقسیم کنیم.", "متأسفم، فقط یک صورت‌حساب."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Do you offer delivery service?",
        "q_persien": "آیا خدمات تحویل دارید؟",
        "a": ["Yes, call our number.", "Order online for delivery."],
        "a_persien": ["بله، با شماره ما تماس بگیرید.", "برای تحویل آنلاین سفارش دهید."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Can I have the bill, please?",
        "q_persien": "می‌توانم صورت‌حساب را داشته باشم، لطفاً؟",
        "a": ["Here it is.", "Would you like to pay by card?"],
        "a_persien": ["اینجاست.", "آیا می‌خواهید با کارت پرداخت کنید؟"]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Is service included?",
        "q_persien": "آیا سرویس شامل می‌شود؟",
        "a": ["Yes, 10% service charge.", "No, tips are optional."],
        "a_persien": ["بله، ۱۰٪ حق سرویس.", "نه، انعام اختیاری است."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Do you have free WiFi?",
        "q_persien": "آیا وای‌فای رایگان دارید؟",
        "a": ["Yes, password is on your receipt.", "No, we don’t offer WiFi."],
        "a_persien": ["بله، رمز عبور روی رسید شماست.", "نه، ما وای‌فای ارائه نمی‌دهیم."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Can I have some more bread?",
        "q_persien": "می‌توانم نان بیشتری داشته باشم؟",
        "a": ["Of course, I’ll bring it.", "Sure, just a moment."],
        "a_persien": ["البته، می‌آورم.", "حتماً، یک لحظه."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Do you have any vegan options?",
        "q_persien": "آیا گزینه‌های وگان دارید؟",
        "a": ["Yes, we have vegan meals.", "Sorry, none at the moment."],
        "a_persien": ["بله، ما غذاهای وگان داریم.", "متأسفم، در حال حاضر هیچکدام."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Is this table available?",
        "q_persien": "آیا این میز خالی است؟",
        "a": ["Yes, please have a seat.", "Sorry, it’s reserved."],
        "a_persien": ["بله، لطفاً بنشینید.", "متأسفم، رزرو شده است."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Can you recommend a local dish?",
        "q_persien": "می‌توانید یک غذای محلی توصیه کنید؟",
        "a": ["Try the Fesenjan.", "The Ghormeh Sabzi is famous here."],
        "a_persien": ["فسنجان را امتحان کنید.", "قورمه سبزی اینجا معروف است."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Do you have takeaway boxes?",
        "q_persien": "آیا جعبه بیرون‌بر دارید؟",
        "a": ["Yes, I’ll pack your leftovers.", "Sure, let me bring a box."],
        "a_persien": ["بله، باقی‌مانده غذایتان را بسته‌بندی می‌کنم.", "حتماً، اجازه دهید یک جعبه بیاورم."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "How long is the wait for a table?",
        "q_persien": "زمان انتظار برای یک میز چقدر است؟",
        "a": ["About 10 minutes.", "We have a table right now."],
        "a_persien": ["حدود ۱۰ دقیقه.", "ما الان یک میز داریم."]
    },
    {
        "topic": "Food",
        "role": "Customer",
        "q": "Is there a children’s menu?",
        "q_persien": "آیا منوی کودک وجود دارد؟",
        "a": ["Yes, here’s the kids’ menu.", "No, but we can make smaller portions."],
        "a_persien": ["بله، این منوی کودکان است.", "نه، اما می‌توانیم порции کوچکتری درست کنیم."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Can I use your restroom?",
        "q_persien": "می‌توانم از دستشویی شما استفاده کنم؟",
        "a": ["Yes, it’s at the back.", "Sorry, for customers only."],
        "a_persien": ["بله، در پشت است.", "متأسفم، فقط برای مشتریان."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Is there a place to charge my phone?",
        "q_persien": "آیا جایی برای شارژ گوشی من هست؟",
        "a": ["Yes, you can use that outlet.", "Sorry, no charging spots."],
        "a_persien": ["بله، می‌توانید از آن پریز استفاده کنید.", "متأسفم، جای شارژ نیست."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Can you help me carry my bags?",
        "q_persien": "می‌توانید به من در حمل کیف‌هایم کمک کنید؟",
        "a": ["Of course, let me help.", "I’ll call someone to assist you."],
        "a_persien": ["البته، اجازه دهید کمک کنم.", "من کسی را برای کمک به شما صدا می‌زنم."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Can I get a glass of water?",
        "q_persien": "می‌توانم یک لیوان آب بگیرم؟",
        "a": ["Sure, I’ll bring it now.", "Help yourself at the counter."],
        "a_persien": ["حتماً، الان می‌آورم.", "از پیشخوان برای خودتان بردارید."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Do you have a lost and found?",
        "q_persien": "آیا بخش اشیاء گمشده دارید؟",
        "a": ["Yes, ask at the front desk.", "No, check with security."],
        "a_persien": ["بله، از میز پذیرش بپرسید.", "نه، با امنیت بررسی کنید."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Can I borrow an umbrella?",
        "q_persien": "می‌توانم یک چتر قرض بگیرم؟",
        "a": ["Yes, we have one you can use.", "Sorry, we don’t have any."],
        "a_persien": ["بله، ما یکی داریم که می‌توانید استفاده کنید.", "متأسفم، ما هیچکدام نداریم."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Is there a waiting area?",
        "q_persien": "آیا محوطه انتظار وجود دارد؟",
        "a": ["Yes, please have a seat.", "No, you’ll need to wait outside."],
        "a_persien": ["بله، لطفاً بنشینید.", "نه، باید بیرون منتظر بمانید."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Can I get change for this bill?",
        "q_persien": "می‌توانم برای این اسکناس پول خرد بگیرم؟",
        "a": ["Yes, let me get some change.", "Sorry, I don’t have enough change."],
        "a_persien": ["بله، اجازه دهید مقداری پول خرد بیاورم.", "متأسفم، من پول خرد کافی ندارم."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Where can I find a taxi?",
        "q_persien": "کجا می‌توانم تاکسی پیدا کنم؟",
        "a": ["There’s a stand outside.", "I can call one for you."],
        "a_persien": ["یک ایستگاه بیرون هست.", "می‌توانم یکی برایتان صدا بزنم."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Is there a doctor nearby?",
        "q_persien": "آیا دکتری در این نزدیکی هست؟",
        "a": ["Yes, the clinic is one block away.", "No, but there’s a pharmacy close."],
        "a_persien": ["بله، کلینیک یک بلوک دورتر است.", "نه، اما یک داروخانه نزدیک هست."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Do you have a first aid kit?",
        "q_persien": "آیا جعبه کمک‌های اولیه دارید؟",
        "a": ["Yes, I’ll bring it.", "No, but the pharmacy is close."],
        "a_persien": ["بله، می‌آورم.", "نه، اما داروخانه نزدیک است."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Can I store my luggage here?",
        "q_persien": "می‌توانم چمدانم را اینجا نگه دارم؟",
        "a": ["Yes, in our storage room.", "No, we don’t have storage."],
        "a_persien": ["بله، در انبار ما.", "نه، ما انبار نداریم."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "How do I book an appointment?",
        "q_persien": "چگونه وقت ملاقات رزرو کنم؟",
        "a": ["Call this number to book.", "Book online on our website."],
        "a_persien": ["برای رزرو با این شماره تماس بگیرید.", "در وب‌سایت ما آنلاین رزرو کنید."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Do you have a business card?",
        "q_persien": "آیا کارت ویزیت دارید؟",
        "a": ["Yes, here you go.", "Sorry, we ran out."],
        "a_persien": ["بله، بفرمایید.", "متأسفم، تمام کرده‌ایم."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Can I get a copy of this document?",
        "q_persien": "می‌توانم یک کپی از این سند بگیرم؟",
        "a": ["Yes, let me make a copy.", "Sorry, our copier is not working."],
        "a_persien": ["بله، اجازه دهید یک کپی بگیرم.", "متأسفم، دستگاه کپی ما کار نمی‌کند."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Is this area safe at night?",
        "q_persien": "آیا این منطقه در شب امن است؟",
        "a": ["Yes, it’s generally safe.", "Be careful and avoid dark alleys."],
        "a_persien": ["بله، به طور کلی امن است.", "مراقب باشید و از کوچه‌های تاریک دوری کنید."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "How do I pay the electricity bill?",
        "q_persien": "چگونه قبض برق را پرداخت کنم؟",
        "a": ["Use the online payment system.", "Go to the nearest bank."],
        "a_persien": ["از سیستم پرداخت آنلاین استفاده کنید.", "به نزدیکترین بانک بروید."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Can you recommend a good place to stay?",
        "q_persien": "می‌توانید یک جای خوب برای اقامت توصیه کنید؟",
        "a": ["Try the Grand Hotel.", "There’s a nice hostel nearby."],
        "a_persien": ["هتل بزرگ را امتحان کنید.", "یک هاستل خوب در این نزدیکی هست."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Is it okay to take photos here?",
        "q_persien": "آیا اینجا عکس گرفتن اشکالی ندارد؟",
        "a": ["Yes, no problem.", "No, photography is not allowed."],
        "a_persien": ["بله، مشکلی نیست.", "نه، عکاسی مجاز نیست."]
    },
    {
        "topic": "Daily",
        "role": "Customer",
        "q": "Can you help me with my suitcase?",
        "q_persien": "می‌توانید در مورد چمدانم به من کمک کنید؟",
        "a": ["Sure, let me help you.", "I’ll get someone to assist."],
        "a_persien": ["حتماً، اجازه دهید به شما کمک کنم.", "من کسی را برای کمک می‌آورم."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "How are you today?",
        "q_persien": "امروز چطورید؟",
        "a": ["I’m good, thank you!", "Doing well, how about you?"],
        "a_persien": ["من خوبم، متشکرم!", "خوبم، شما چطورید؟"]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "Isn’t the weather nice today?",
        "q_persien": "امروز هوا خوب نیست؟",
        "a": ["Yes, it’s beautiful.", "A bit hot for me, but nice."],
        "a_persien": ["بله، زیباست.", "کمی برای من گرم است، اما خوب است."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "How’s your day going?",
        "q_persien": "روزتان چطور می‌گذرد؟",
        "a": ["Pretty good, thanks!", "Busy but good."],
        "a_persien": ["خیلی خوب، ممنون!", "شلوغ اما خوب."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "Are you from around here?",
        "q_persien": "شما اهل اینجا هستید؟",
        "a": ["Yes, I live nearby.", "No, I’m just visiting."],
        "a_persien": ["بله، من در این نزدیکی زندگی می‌کنم.", "نه، من فقط بازدید می‌کنم."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "Is this your first time here?",
        "q_persien": "آیا این اولین بار است که اینجا هستید؟",
        "a": ["Yes, I just arrived.", "No, I come here often."],
        "a_persien": ["بله، من تازه رسیدم.", "نه، من اغلب به اینجا می‌آیم."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "Do you like living in this city?",
        "q_persien": "آیا زندگی در این شهر را دوست دارید؟",
        "a": ["Yes, it’s a great place.", "It has its ups and downs."],
        "a_persien": ["بله، جای فوق‌العاده‌ای است.", "فراز و نشیب‌های خودش را دارد."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "How long have you worked here?",
        "q_persien": "چند وقت است اینجا کار می‌کنید؟",
        "a": ["About five years.", "Just a few months."],
        "a_persien": ["حدود پنج سال.", "فقط چند ماه."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "What do you recommend to see around here?",
        "q_persien": "چه چیزی را برای دیدن در این اطراف توصیه می‌کنید؟",
        "a": ["The old bazaar is a must.", "Don’t miss the local park."],
        "a_persien": ["بازار قدیمی را حتماً باید دید.", "پارک محلی را از دست ندهید."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "Do you have family here?",
        "q_persien": "آیا اینجا خانواده دارید؟",
        "a": ["Yes, my parents live nearby.", "No, my family is in another city."],
        "a_persien": ["بله، والدینم در این نزدیکی زندگی می‌کنند.", "نه، خانواده‌ام در شهر دیگری هستند."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "How busy does it get here?",
        "q_persien": "اینجا چقدر شلوغ می‌شود؟",
        "a": ["Very busy in the evenings.", "Usually quiet in the mornings."],
        "a_persien": ["در عصرها خیلی شلوغ است.", "معمولاً در صبح‌ها خلوت است."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "Is it always this crowded?",
        "q_persien": "آیا همیشه اینقدر شلوغ است؟",
        "a": ["Only on weekends.", "No, today is a special event."],
        "a_persien": ["فقط در آخر هفته‌ها.", "نه، امروز یک رویداد ویژه است."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "Do you have any hobbies?",
        "q_persien": "آیا سرگرمی‌ای دارید؟",
        "a": ["I like hiking and reading.", "Mostly spending time with family."],
        "a_persien": ["من کوهنوردی و کتابخوانی را دوست دارم.", "بیشتر وقتم را با خانواده می‌گذرانم."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "Do you speak other languages?",
        "q_persien": "آیا به زبان‌های دیگری صحبت می‌کنید؟",
        "a": ["Yes, I speak a little English.", "Only Persian, sorry."],
        "a_persien": ["بله، کمی انگلیسی صحبت می‌کنم.", "فقط فارسی، متأسفم."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "What do you do for fun?",
        "q_persien": "برای تفریح چه کار می‌کنید؟",
        "a": ["I enjoy watching movies.", "Cooking is my hobby."],
        "a_persien": ["من از تماشای فیلم لذت می‌برم.", "آشپزی سرگرمی من است."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "Do you enjoy your job?",
        "q_persien": "آیا از شغلتان لذت می‌برید؟",
        "a": ["Yes, I love meeting new people.", "Sometimes, it can be stressful."],
        "a_persien": ["بله، من عاشق ملاقات با افراد جدید هستم.", "گاهی اوقات، می‌تواند استرس‌زا باشد."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "How’s business these days?",
        "q_persien": "این روزها کسب و کار چطور است؟",
        "a": ["Pretty good, thanks.", "A bit slow recently."],
        "a_persien": ["خیلی خوب، ممنون.", "اخیراً کمی کند است."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "Are you from this neighborhood?",
        "q_persien": "شما اهل این محله هستید؟",
        "a": ["Yes, I grew up here.", "No, I just moved here."],
        "a_persien": ["بله، من اینجا بزرگ شدم.", "نه، من تازه به اینجا نقل مکان کرده‌ام."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "Do you like the food here?",
        "q_persien": "آیا غذای اینجا را دوست دارید؟",
        "a": ["Yes, it’s delicious.", "Not really, it’s too spicy for me."],
        "a_persien": ["بله، خوشمزه است.", "نه واقعاً، برای من خیلی تند است."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "Is there anything fun to do at night?",
        "q_persien": "آیا شب‌ها کار سرگرم‌کننده‌ای برای انجام دادن هست؟",
        "a": ["Try the night market.", "There’s a concert tonight."],
        "a_persien": ["بازار شب را امتحان کنید.", "امشب کنسرت هست."]
    },
    {
        "topic": "Social",
        "role": "Customer",
        "q": "How do you usually get around the city?",
        "q_persien": "معمولاً چگونه در شهر تردد می‌کنید؟",
        "a": ["Mostly by metro.", "I use taxis a lot."],
        "a_persien": ["بیشتر با مترو.", "من زیاد از تاکسی استفاده می‌کنم."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "Can you recommend a good mechanic?",
        "q_persien": "می‌توانید یک مکانیک خوب توصیه کنید؟",
        "a": ["Try Ali’s Garage nearby.", "I’ll send you the contact info."],
        "a_persien": ["گاراژ علی در این نزدیکی را امتحان کنید.", "اطلاعات تماس را برایتان ارسال می‌کنم."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "Where’s the nearest gas station?",
        "q_persien": "نزدیکترین پمپ بنزین کجاست؟",
        "a": ["One block down the road.", "Take a right at the intersection."],
        "a_persien": ["یک بلوک پایین‌تر در جاده.", "در تقاطع به راست بپیچید."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "How do I get a SIM card?",
        "q_persien": "چگونه سیم‌کارت بگیرم؟",
        "a": ["Visit a mobile shop.", "You can buy one at the airport."],
        "a_persien": ["به یک فروشگاه موبایل مراجعه کنید.", "می‌توانید یکی در فرودگاه بخرید."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "Where can I change money?",
        "q_persien": "کجا می‌توانم پول چنج کنم؟",
        "a": ["There’s an exchange near the bank.", "Ask at the main street, several options."],
        "a_persien": ["یک صرافی نزدیک بانک هست.", "در خیابان اصلی بپرسید، چندین گزینه هست."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "What’s the weather like tomorrow?",
        "q_persien": "هوای فردا چطور است؟",
        "a": ["Sunny and warm.", "There’s a chance of rain."],
        "a_persien": ["آفتابی و گرم.", "احتمال باران وجود دارد."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "How can I get to the hospital?",
        "q_persien": "چگونه به بیمارستان بروم؟",
        "a": ["Take bus number 3.", "Taxi is the fastest way."],
        "a_persien": ["اتوبوس شماره ۳ را بگیرید.", "تاکسی سریع‌ترین راه است."]
    }
,
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "Is there a pet shop around here?",
        "q_persien": "آیا در این اطراف فروشگاه حیوانات خانگی هست؟",
        "a": ["Yes, two streets over.", "No, you’ll have to go downtown."],
        "a_persien": ["بله، دو خیابان آن طرف‌تر.", "نه، باید به مرکز شهر بروید."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "Do you know a good hairdresser?",
        "q_persien": "آیا آرایشگر خوبی می‌شناسید؟",
        "a": ["Yes, Leila’s Salon is great.", "I can give you their number."],
        "a_persien": ["بله، سالن لیلا عالی است.", "می‌توانم شماره‌شان را به شما بدهم."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "Where can I buy groceries?",
        "q_persien": "از کجا می‌توانم خواربار بخرم؟",
        "a": ["Try the supermarket nearby.", "There’s a fresh market in the square."],
        "a_persien": ["سوپرمارکت نزدیک را امتحان کنید.", "یک بازار تازه در میدان هست."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "Is there a good park for kids?",
        "q_persien": "آیا پارک خوبی برای بچه‌ها هست؟",
        "a": ["Yes, Family Park is nearby.", "I recommend the city garden."],
        "a_persien": ["بله، پارک خانواده در این نزدیکی است.", "من باغ شهر را توصیه می‌کنم."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "Can you recommend a good dentist?",
        "q_persien": "می‌توانید یک دندانپزشک خوب توصیه کنید؟",
        "a": ["Yes, Dr. Rahimi is excellent.", "Here’s a clinic’s phone number."],
        "a_persien": ["بله، دکتر رحیمی عالی است.", "این شماره تلفن یک کلینیک است."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "How do I report a lost item?",
        "q_persien": "چگونه یک شیء گمشده را گزارش دهم؟",
        "a": ["Go to the police station.", "Check at the lost and found desk."],
        "a_persien": ["به ایستگاه پلیس بروید.", "در میز اشیاء گمشده بررسی کنید."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "Where is the embassy located?",
        "q_persien": "سفارت کجا قرار دارد؟",
        "a": ["On Azadi Avenue.", "I can show you on the map."],
        "a_persien": ["در خیابان آزادی.", "می‌توانم روی نقشه به شما نشان دهم."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "Can I book a tour here?",
        "q_persien": "می‌توانم اینجا تور رزرو کنم؟",
        "a": ["Yes, let me show you the options.", "Sorry, we don’t offer tours."],
        "a_persien": ["بله، اجازه دهید گزینه‌ها را به شما نشان دهم.", "متأسفم، ما تور ارائه نمی‌دهیم."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "What’s the best time to visit the museum?",
        "q_persien": "بهترین زمان برای بازدید از موزه کی است؟",
        "a": ["Early morning is best.", "Avoid weekends, it’s crowded."],
        "a_persien": ["صبح زود بهترین زمان است.", "از آخر هفته‌ها خودداری کنید، شلوغ است."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "Do you know where I can print documents?",
        "q_persien": "می‌دانید کجا می‌توانم اسناد را چاپ کنم؟",
        "a": ["There’s a copy shop nearby.", "We can print for you here."],
        "a_persien": ["یک مغازه کپی در این نزدیکی هست.", "ما می‌توانیم اینجا برای شما چاپ کنیم."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "Where can I buy souvenirs?",
        "q_persien": "از کجا می‌توانم سوغاتی بخرم؟",
        "a": ["Try the bazaar.", "There’s a gift shop next door."],
        "a_persien": ["بازار را امتحان کنید.", "یک فروشگاه هدیه در همسایگی هست."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "How do I get tickets for the bus?",
        "q_persien": "چگونه برای اتوبوس بلیط بگیرم؟",
        "a": ["Buy at the station.", "Some buses accept cash."],
        "a_persien": ["در ایستگاه بخرید.", "برخی اتوبوس‌ها پول نقد قبول می‌کنند."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "Is there a place to rent bicycles?",
        "q_persien": "آیا جایی برای اجاره دوچرخه هست؟",
        "a": ["Yes, at the park entrance.", "No, but there’s a scooter rental."],
        "a_persien": ["بله، در ورودی پارک.", "نه، اما یک مرکز اجاره اسکوتر هست."]
    },
    {
        "topic": "Everyday",
        "role": "Customer",
        "q": "How can I get a taxi late at night?",
        "q_persien": "چگونه می‌توانم در اواخر شب تاکسی بگیرم؟",
        "a": ["Call the 24-hour taxi line.", "Use a ride-hailing app."],
        "a_persien": ["با خط تاکسی ۲۴ ساعته تماس بگیرید.", "از یک اپلیکیشن درخواست خودرو استفاده کنید."]
    },
      {
    "topic": "General Greeting",
    "role": "Colleague",
    "q": "Good morning! How are you?",
    "q_persien": "صبح بخیر! حالت چطوره؟",
    "a": ["Good morning! I’m well, thanks. How about you?", "Hello, I’m doing fine, thank you for asking."],
    "a_persien": ["صبح بخیر! خوبم، ممنون. تو چطوری؟", "سلام، خوبم، ممنون که پرسیدی."]
  },
  {
    "topic": "General Greeting",
    "role": "Colleague",
    "q": "Did you have a good weekend?",
    "q_persien": "آخر هفته خوبی داشتی؟",
    "a": ["Yes, it was great. How was yours?", "Yes, thank you. I hope yours was nice as well."],
    "a_persien": ["بله، عالی بود. مال تو چطور بود؟", "بله، ممنون. امیدوارم مال شما هم خوب بوده باشه."]
  },
  {
    "topic": "General Request",
    "role": "Manager",
    "q": "Can you send me the report by end of day?",
    "q_persien": "میتونی تا آخر امروز گزارش رو برام بفرستی؟",
    "a": ["Sure, I’ll send it over soon.", "Of course, I will make sure to send it by EOD."],
    "a_persien": ["حتماً، به زودی می‌فرستم.", "حتماً، تا پایان امروز ارسال می‌کنم."]
  },
  {
    "topic": "General Request",
    "role": "Colleague",
    "q": "Can you help me with this task?",
    "q_persien": "میتونی تو این کار کمکم کنی؟",
    "a": ["Of course, let’s do it together.", "Yes, I’d be happy to help you."],
    "a_persien": ["حتماً، با هم انجامش بدیم.", "بله، خوشحال میشم کمکت کنم."]
  },
  {
    "topic": "Meeting",
    "role": "Manager",
    "q": "Are you available for a meeting this afternoon?",
    "q_persien": "امروز بعدازظهر برای جلسه وقت داری؟",
    "a": ["Yes, that works for me.", "Yes, I am available this afternoon."],
    "a_persien": ["بله، برام اوکیه.", "بله، امروز بعدازظهر وقتم آزاده."]
  },
  {
    "topic": "Meeting",
    "role": "Colleague",
    "q": "Can we reschedule our meeting?",
    "q_persien": "میشه جلسه‌مون رو جابجا کنیم؟",
    "a": ["Sure, what time works for you?", "Of course, let me know your preferred time."],
    "a_persien": ["حتماً، چه زمانی برات مناسبه؟", "حتماً، زمان مورد نظرت رو بهم بگو."]
  },
  {
    "topic": "Feedback",
    "role": "Manager",
    "q": "Can I give you some feedback?",
    "q_persien": "می‌تونم کمی بازخورد بهت بدم؟",
    "a": ["Sure, I’d appreciate it.", "Yes, I’m open to feedback."],
    "a_persien": ["حتماً، ممنون میشم.", "بله، خوشحال میشم بازخورد بگیرم."]
  },
  {
    "topic": "Feedback",
    "role": "Colleague",
    "q": "Do you want any feedback on your work?",
    "q_persien": "دوست داری روی کارت بازخورد بدم؟",
    "a": ["Yes, that would help me improve.", "Yes, please share your thoughts."],
    "a_persien": ["بله، کمکم می‌کنه بهتر بشم.", "بله، لطفاً نظرت رو بگو."]
  },
  {
    "topic": "Task Delegation",
    "role": "Manager",
    "q": "Can you handle this project?",
    "q_persien": "می‌تونی این پروژه رو انجام بدی؟",
    "a": ["Yes, I’ll take care of it.", "Yes, I can manage this project."],
    "a_persien": ["بله، انجامش میدم.", "بله، می‌تونم این پروژه رو مدیریت کنم."]
  },
  {
    "topic": "Task Delegation",
    "role": "Colleague",
    "q": "Do you need help with your workload?",
    "q_persien": "برای حجم کارت کمک لازم داری؟",
    "a": ["Yes, some help would be great.", "Yes, I could use some assistance."],
    "a_persien": ["بله، کمی کمک خیلی خوبه.", "بله، به کمی کمک نیاز دارم."]
  },
  {
    "topic": "Lunch Break",
    "role": "Colleague",
    "q": "Do you want to grab lunch together?",
    "q_persien": "می‌خوای با هم بریم ناهار؟",
    "a": ["Sure, let’s go!", "Yes, I’d like that."],
    "a_persien": ["حتماً، بریم!", "بله، خوشحال میشم."]
  },
  {
    "topic": "Lunch Break",
    "role": "Colleague",
    "q": "Where do you usually have lunch?",
    "q_persien": "معمولاً کجا ناهار می‌خوری؟",
    "a": ["Usually at the café nearby.", "I often eat at the office cafeteria."],
    "a_persien": ["معمولاً تو کافه نزدیک شرکت.", "اغلب توی سلف شرکت غذا می‌خورم."]
  },
  {
    "topic": "Coffee Break",
    "role": "Colleague",
    "q": "Would you like some coffee?",
    "q_persien": "قهوه می‌خوای؟",
    "a": ["Yes, I’d love some!", "Yes, coffee would be great, thanks."],
    "a_persien": ["بله، خیلی دوست دارم!", "بله، قهوه خیلی خوبه، مرسی."]
  },
  {
    "topic": "Coffee Break",
    "role": "Colleague",
    "q": "Where’s the coffee machine?",
    "q_persien": "دستگاه قهوه کجاست؟",
    "a": ["It’s in the kitchen.", "The coffee machine is by the kitchen area."],
    "a_persien": ["توی آشپزخونه است.", "دستگاه قهوه کنار آشپزخونه است."]
  },
  {
    "topic": "IT Support",
    "role": "Employee",
    "q": "My computer isn’t working, can you help?",
    "q_persien": "کامپیوترم کار نمی‌کنه، می‌تونی کمکم کنی؟",
    "a": ["Sure, let me take a look.", "Yes, I will check it right away."],
    "a_persien": ["حتماً، یه نگاه بندازم.", "بله، الان بررسیش می‌کنم."]
  },
  {
    "topic": "IT Support",
    "role": "IT",
    "q": "Have you tried restarting your device?",
    "q_persien": "دستگاه رو ری‌استارت کردی؟",
    "a": ["Not yet, I’ll try that now.", "No, I’ll restart and see if it helps."],
    "a_persien": ["نه، الان امتحان می‌کنم.", "نه، ری‌استارت می‌کنم ببینم درست میشه یا نه."]
  },
  {
    "topic": "Remote Work",
    "role": "Manager",
    "q": "Are you working from home today?",
    "q_persien": "امروز داری دورکاری می‌کنی؟",
    "a": ["Yes, I’m working remotely.", "Yes, I’m working from home today."],
    "a_persien": ["بله، دارم از خونه کار می‌کنم.", "بله، امروز دورکاری می‌کنم."]
  },
  {
    "topic": "Remote Work",
    "role": "Colleague",
    "q": "How do you find working from home?",
    "q_persien": "دورکاری برات چطوره؟",
    "a": ["I like it, but sometimes miss the office.", "It’s good, but I miss seeing everyone in person."],
    "a_persien": ["دوستش دارم ولی گاهی دلم برای شرکت تنگ میشه.", "خوبه، فقط دلم برای دیدن همه تنگ میشه."]
  },
  {
    "topic": "Project Status",
    "role": "Manager",
    "q": "What’s the status of your project?",
    "q_persien": "وضعیت پروژه‌ات چطوره؟",
    "a": ["It’s going well and on track.", "The project is progressing as planned."],
    "a_persien": ["خوب پیش میره و طبق برنامه است.", "پروژه طبق برنامه داره پیش میره."]
  },
  {
    "topic": "Project Status",
    "role": "Colleague",
    "q": "Do you need any support for your project?",
    "q_persien": "برای پروژه‌ات کمکی لازم داری؟",
    "a": ["Thanks, I’m okay for now.", "No, everything is under control, but thanks!"],
    "a_persien": ["ممنون، فعلاً همه چیز خوبه.", "نه، همه چی تحت کنترله، مرسی!"]
  },
  {
    "topic": "Out of Office",
    "role": "Manager",
    "q": "Will you be out of office tomorrow?",
    "q_persien": "فردا سر کار نمیای؟",
    "a": ["Yes, I have a personal day off.", "Yes, I’ll be out, but reachable by email."],
    "a_persien": ["بله، مرخصی شخصی دارم.", "بله، سر کار نمیام ولی با ایمیل در دسترسم."]
  },
  {
    "topic": "Out of Office",
    "role": "Employee",
    "q": "Who should I contact while you’re away?",
    "q_persien": "وقتی نباشی باید با کی تماس بگیرم؟",
    "a": ["Please contact Sarah if you need anything.", "You can reach out to my colleague, Sarah."],
    "a_persien": ["اگه چیزی لازم داشتی با سارا تماس بگیر.", "می‌تونی با همکارم سارا تماس بگیری."]
  },
  {
    "topic": "Pay & Benefits",
    "role": "Employee",
    "q": "When is the salary paid?",
    "q_persien": "حقوق چه روزی پرداخت میشه؟",
    "a": ["Usually on the last day of the month.", "Salaries are paid at the end of each month."],
    "a_persien": ["معمولاً آخر ماه.", "حقوق‌ها آخر هر ماه پرداخت میشه."]
  },
  {
    "topic": "Pay & Benefits",
    "role": "HR",
    "q": "How do I apply for health benefits?",
    "q_persien": "چطور باید برای بیمه درمانی اقدام کنم؟",
    "a": ["You can apply online through the HR portal.", "Fill out the form on our HR website."],
    "a_persien": ["می‌تونی آنلاین از طریق پورتال منابع انسانی اقدام کنی.", "فرم رو تو سایت منابع انسانی پر کن."]
  },
  {
    "topic": "Teamwork",
    "role": "Colleague",
    "q": "Would you like to work together on this?",
    "q_persien": "دوست داری روی این با هم کار کنیم؟",
    "a": ["Yes, teamwork makes it easier.", "Yes, I’d enjoy collaborating on this."],
    "a_persien": ["بله، با همکاری راحت‌تره.", "بله، خوشحال میشم با هم کار کنیم."]
  },
  {
    "topic": "Teamwork",
    "role": "Colleague",
    "q": "Can we have a brainstorming session?",
    "q_persien": "میشه یه جلسه طوفان فکری داشته باشیم؟",
    "a": ["Great idea, let’s set a time.", "Yes, let’s schedule a brainstorming meeting."],
    "a_persien": ["عالیه، یک زمان مشخص کنیم.", "بله، یه جلسه برای طوفان فکری بگذاریم."]
  },
  {
    "topic": "Networking",
    "role": "Colleague",
    "q": "Can I connect with you on LinkedIn?",
    "q_persien": "می‌تونم تو لینکدین باهات ارتباط بگیرم؟",
    "a": ["Of course, I’ll send you my profile.", "Yes, feel free to add me."],
    "a_persien": ["حتماً، پروفایلم رو می‌فرستم.", "بله، خوشحال میشم اَد کنی."]
  },
  {
    "topic": "Networking",
    "role": "Colleague",
    "q": "Do you go to any professional events?",
    "q_persien": "تو رویدادهای تخصصی شرکت می‌کنی؟",
    "a": ["Yes, I try to attend when I can.", "Yes, I participate in industry events."],
    "a_persien": ["بله، سعی می‌کنم برم.", "بله، تو رویدادهای صنعت شرکت می‌کنم."]
  },
  {
    "topic": "Start-up Culture",
    "role": "Colleague",
    "q": "What do you like about working at a start-up?",
    "q_persien": "چی باعث میشه کار کردن تو استارت‌آپ رو دوست داشته باشی؟",
    "a": ["I love the fast pace and innovation.", "The creative and dynamic environment is great."],
    "a_persien": ["عاشق سرعت و نوآوری هستم.", "محیط خلاق و پویاش خیلی خوبه."]
  },
  {
    "topic": "Start-up Culture",
    "role": "Colleague",
    "q": "Do you feel your ideas are heard here?",
    "q_persien": "اینجا حس می‌کنی ایده‌هات شنیده میشه؟",
    "a": ["Yes, the team values everyone’s input.", "Yes, I feel my contributions are appreciated."],
    "a_persien": ["بله، تیم به نظرات همه اهمیت میده.", "بله، فکر می‌کنم به کارم ارزش می‌دن."]
  },
  {
    "topic": "Work-Life Balance",
    "role": "Colleague",
    "q": "How do you manage your work-life balance?",
    "q_persien": "چطور تعادل کار و زندگی رو حفظ می‌کنی؟",
    "a": ["I set clear boundaries after work.", "I prioritize my time outside work."],
    "a_persien": ["بعد کار برای خودم مرز می‌گذارم.", "زمان بیرون از کار رو اولویت می‌دم."]
  },
  {
    "topic": "Work-Life Balance",
    "role": "Colleague",
    "q": "Do you work overtime often?",
    "q_persien": "اغلب اضافه‌کاری می‌کنی؟",
    "a": ["Sometimes, but I try to avoid it.", "Not often, I value my free time."],
    "a_persien": ["گاهی، اما سعی می‌کنم پرهیز کنم.", "نه زیاد، زمان آزادم برام مهمه."]
  },
  {
    "topic": "Promotion",
    "role": "Employee",
    "q": "How can I get promoted here?",
    "q_persien": "چطور می‌تونم اینجا ارتقا بگیرم؟",
    "a": ["Focus on your goals and communicate with your manager.", "Deliver quality work and ask for feedback regularly."],
    "a_persien": ["روی هدفت تمرکز کن و با مدیرت صحبت کن.", "کار با کیفیت ارائه بده و همیشه بازخورد بگیر."]
  },
  {
    "topic": "Promotion",
    "role": "Manager",
    "q": "Are you interested in career growth opportunities?",
    "q_persien": "به فرصت‌های رشد شغلی علاقه داری؟",
    "a": ["Yes, I’m always looking to grow.", "Yes, I’d like to discuss my career path."],
    "a_persien": ["بله، همیشه دنبال رشد هستم.", "بله، دوست دارم در مورد مسیر شغلیم صحبت کنم."]
  },
  {
    "topic": "Leave",
    "role": "Employee",
    "q": "How do I request time off?",
    "q_persien": "چطور باید مرخصی بگیرم؟",
    "a": ["Submit your request in the HR system.", "Send an email to HR and your manager."],
    "a_persien": ["در سیستم منابع انسانی درخواست بده.", "یه ایمیل به منابع انسانی و مدیرت بزن."]
  },
  {
    "topic": "Leave",
    "role": "Manager",
    "q": "Is your leave request approved?",
    "q_persien": "درخواست مرخصی‌ات تایید شده؟",
    "a": ["Yes, HR confirmed it.", "Yes, I have the approval from HR."],
    "a_persien": ["بله، منابع انسانی تایید کرد.", "بله، تایید منابع انسانی رو دارم."]
  },
  {
    "topic": "Conflict",
    "role": "Colleague",
    "q": "How do you resolve conflicts at work?",
    "q_persien": "چطور اختلافات کاری رو حل می‌کنی؟",
    "a": ["I try to talk openly and find a solution.", "I discuss issues directly and look for compromise."],
    "a_persien": ["سعی می‌کنم باز حرف بزنم و راه‌حل پیدا کنم.", "مستقیم مسائل رو مطرح می‌کنم و دنبال راه‌حل می‌گردم."]
  },
  {
    "topic": "Conflict",
    "role": "Manager",
    "q": "Do you feel comfortable bringing up concerns?",
    "q_persien": "راحتی نگرانی‌هات رو مطرح کنی؟",
    "a": ["Yes, I feel comfortable sharing concerns.", "Yes, I know the team is supportive."],
    "a_persien": ["بله، راحت نگرانی‌هام رو میگم.", "بله، می‌دونم تیم حمایتم می‌کنه."]
  },
  {
    "topic": "Deadlines",
    "role": "Manager",
    "q": "Will you meet the project deadline?",
    "q_persien": "به ددلاین پروژه می‌رسی؟",
    "a": ["Yes, I’m on track for the deadline.", "Yes, everything is on schedule."],
    "a_persien": ["بله، طبق برنامه هستم.", "بله، همه چیز طبق برنامه است."]
  },
  {
    "topic": "Deadlines",
    "role": "Employee",
    "q": "Can I get an extension on the deadline?",
    "q_persien": "میشه ددلاین رو تمدید کنم؟",
    "a": ["Yes, let me know your new timeline.", "Yes, just update me on your progress."],
    "a_persien": ["بله، زمان جدیدت رو اعلام کن.", "بله، فقط از وضعیتت خبر بده."]
  },
  {
    "topic": "Appreciation",
    "role": "Manager",
    "q": "Great job on the last project!",
    "q_persien": "کارت تو پروژه قبلی عالی بود!",
    "a": ["Thank you, I appreciate it!", "Thanks, glad to hear that!"],
    "a_persien": ["ممنون، لطف داری!", "مرسی، خوشحالم شنیدم!"]
  },
  {
    "topic": "Appreciation",
    "role": "Colleague",
    "q": "Thanks for your help!",
    "q_persien": "ممنون بابت کمکت!",
    "a": ["No problem, anytime!", "You’re welcome, happy to help."],
    "a_persien": ["خواهش می‌کنم، هر وقت خواستی!", "خواهش می‌کنم، خوشحال شدم."]
  },
  {
    "topic": "Introduction",
    "role": "Colleague",
    "q": "Let me introduce myself. I’m Alex from marketing.",
    "q_persien": "اجازه بده خودمو معرفی کنم. من الکس از بخش بازاریابی هستم.",
    "a": ["Nice to meet you, Alex!", "Pleasure to meet you, Alex."],
    "a_persien": ["از آشنایی باهات خوشحالم، الکس!", "باعث افتخاره که با شما آشنا شدم، الکس."]
  },
  {
    "topic": "Introduction",
    "role": "Colleague",
    "q": "What’s your role at the company?",
    "q_persien": "سمتت تو شرکت چیه؟",
    "a": ["I’m a software developer.", "I work as a software engineer here."],
    "a_persien": ["من توسعه‌دهنده نرم‌افزارم.", "من به عنوان مهندس نرم‌افزار اینجا کار می‌کنم."]
  },
  {
    "topic": "Office Tour",
    "role": "Colleague",
    "q": "Can I give you a quick tour of the office?",
    "q_persien": "می‌خوای یه تور کوتاه از دفتر بهت نشون بدم؟",
    "a": ["Yes, that would be great!", "Thank you, I’d appreciate that."],
    "a_persien": ["بله، خیلی عالی میشه!", "ممنون، قدردانم."]
  },
  {
    "topic": "Onboarding",
    "role": "HR",
    "q": "Did you receive the onboarding materials?",
    "q_persien": "آیا بسته راه‌اندازی رو دریافت کردی؟",
    "a": ["Yes, I got everything. Thanks!", "Yes, I’ve received all the materials."],
    "a_persien": ["بله، همه چیز رو گرفتم. ممنون!", "بله، همه بسته‌ها رو دریافت کردم."]
  },
  {
    "topic": "Company Info",
    "role": "Colleague",
    "q": "How long have you been with the company?",
    "q_persien": "چند وقته اینجا کار می‌کنی؟",
    "a": ["About two years now.", "I have been here for two years."],
    "a_persien": ["حدود دو ساله.", "دو ساله اینجا هستم."]
  },
  {
    "topic": "Company Info",
    "role": "Colleague",
    "q": "What do you like most about working here?",
    "q_persien": "بیشتر از همه چی رو در اینجا دوست داری؟",
    "a": ["I love the team spirit.", "The supportive environment is great."],
    "a_persien": ["روحیه تیمی رو دوست دارم.", "محیط حمایتی خیلی خوبه."]
  },
  {
    "topic": "Career",
    "role": "Manager",
    "q": "Where do you see yourself in five years?",
    "q_persien": "پنج سال دیگه خودتو کجا می‌بینی؟",
    "a": ["Hopefully in a senior role.", "I hope to be in a leadership position."],
    "a_persien": ["امیدوارم تو یه سمت بالاتر.", "امیدوارم تو جایگاه مدیریتی باشم."]
  },
  {
    "topic": "Career",
    "role": "Manager",
    "q": "Are you interested in learning new skills?",
    "q_persien": "علاقه‌مندی مهارت جدید یاد بگیری؟",
    "a": ["Yes, always up for learning!", "Yes, I am open to new learning opportunities."],
    "a_persien": ["بله، همیشه دوست دارم یاد بگیرم!", "بله، همیشه آماده یادگیری مهارت‌های جدیدم."]
  },
  {
    "topic": "Training",
    "role": "HR",
    "q": "Did you complete the safety training?",
    "q_persien": "آیا آموزش ایمنی رو گذروندی؟",
    "a": ["Yes, I finished it last week.", "Yes, I have completed the training."],
    "a_persien": ["بله، هفته پیش تمومش کردم.", "بله، آموزش رو کامل گذروندم."]
  },
  {
    "topic": "Training",
    "role": "Manager",
    "q": "Do you want to attend a workshop?",
    "q_persien": "دوست داری در کارگاه آموزشی شرکت کنی؟",
    "a": ["Yes, that sounds interesting.", "Yes, I would like to participate."],
    "a_persien": ["بله، جالبه.", "بله، دوست دارم شرکت کنم."]
  },
  {
    "topic": "Relocation",
    "role": "HR",
    "q": "Are you open to relocating for work?",
    "q_persien": "حاضری برای کار به شهر دیگه منتقل شی؟",
    "a": ["Yes, I’m open to relocation.", "Yes, I can consider relocation if needed."],
    "a_persien": ["بله، مشکلی ندارم.", "بله، اگه لازم باشه، می‌تونم."]
  },
  {
    "topic": "Relocation",
    "role": "Manager",
    "q": "How would you feel about working in a different office?",
    "q_persien": "نظرت درباره کار در دفتر دیگه چیه؟",
    "a": ["I’m fine with that.", "I am comfortable with that possibility."],
    "a_persien": ["برام مشکلی نداره.", "با این امکان مشکلی ندارم."]
  },
  {
    "topic": "Salary",
    "role": "Employee",
    "q": "Can I discuss my salary with HR?",
    "q_persien": "می‌تونم درباره حقوقم با منابع انسانی صحبت کنم؟",
    "a": ["Yes, you can schedule a meeting.", "Of course, HR is available for discussions."],
    "a_persien": ["بله، می‌تونی وقت بگیری.", "حتماً، منابع انسانی برای گفتگو آماده‌ست."]
  },
  {
    "topic": "Salary",
    "role": "Manager",
    "q": "Are you satisfied with your compensation?",
    "q_persien": "از دستمزدت راضی هستی؟",
    "a": ["Yes, I am satisfied.", "Yes, I am content with my salary."],
    "a_persien": ["بله، راضی‌ام.", "بله، از حقوقم راضی‌ام."]
  },
  {
    "topic": "Workload",
    "role": "Employee",
    "q": "Is your workload manageable?",
    "q_persien": "حجم کارت قابل مدیریت هست؟",
    "a": ["Yes, I can handle it.", "Yes, my workload is manageable."],
    "a_persien": ["بله، می‌تونم انجامش بدم.", "بله، حجم کارم مناسبه."]
  },
  {
    "topic": "Workload",
    "role": "Manager",
    "q": "Let me know if you ever feel overwhelmed.",
    "q_persien": "اگه حس کردی کارت زیاده، بهم بگو.",
    "a": ["Thanks, I will!", "Thank you, I appreciate your support."],
    "a_persien": ["ممنون، حتماً!", "ممنون، از حمایتت سپاسگزارم."]
  },
  {
    "topic": "Performance Review",
    "role": "Manager",
    "q": "Your annual review is coming up soon.",
    "q_persien": "ارزیابی سالانه‌ات به زودی انجام میشه.",
    "a": ["Thanks for letting me know.", "Thank you for the heads-up."],
    "a_persien": ["ممنون که خبر دادی.", "ممنون که اطلاع دادی."]
  },
  {
    "topic": "Performance Review",
    "role": "Employee",
    "q": "Will I get feedback after my review?",
    "q_persien": "بعد ارزیابی بهم بازخورد می‌دید؟",
    "a": ["Yes, definitely.", "Yes, you’ll receive detailed feedback."],
    "a_persien": ["بله، حتماً.", "بله، بازخورد دقیق می‌گیری."]
  },
  {
    "topic": "Job Application",
    "role": "HR",
    "q": "Thank you for your application.",
    "q_persien": "ممنون بابت درخواست همکاری.",
    "a": ["Thanks for considering me!", "Thank you for the opportunity."],
    "a_persien": ["ممنون که به من فکر کردید!", "ممنون از این فرصت."]
  },
  {
    "topic": "Job Application",
    "role": "Applicant",
    "q": "When will I hear back about the job?",
    "q_persien": "کی جواب درخواست کار رو می‌گیرم؟",
    "a": ["We’ll get back to you soon.", "We will update you as soon as possible."],
    "a_persien": ["به زودی بهت خبر می‌دیم.", "در اسرع وقت بهت اطلاع می‌دیم."]
  },
  {
    "topic": "Remote Meeting",
    "role": "Colleague",
    "q": "Can you send me the Zoom link?",
    "q_persien": "می‌تونی لینک زوم رو برام بفرستی؟",
    "a": ["Sure, sending it now.", "Absolutely, I will send you the link."],
    "a_persien": ["حتماً، الان می‌فرستم.", "حتماً، لینک رو می‌فرستم."]
  },
  {
    "topic": "Remote Meeting",
    "role": "Colleague",
    "q": "Are you joining the call now?",
    "q_persien": "الان به تماس ملحق می‌شی؟",
    "a": ["Yes, I’m joining.", "Yes, I will join right now."],
    "a_persien": ["بله، دارم وصل میشم.", "بله، همین الان ملحق میشم."]
  },
  {
    "topic": "Travel",
    "role": "Manager",
    "q": "Do you have any travel coming up?",
    "q_persien": "قراره سفر کاری بری؟",
    "a": ["Not right now.", "No travel plans at the moment."],
    "a_persien": ["فعلاً نه.", "الان برنامه سفر کاری ندارم."]
  },
  {
    "topic": "Travel",
    "role": "Colleague",
    "q": "How was your business trip?",
    "q_persien": "سفر کاری چطور بود؟",
    "a": ["It went well, thanks!", "The trip was productive."],
    "a_persien": ["خوب بود، ممنون!", "سفر مفیدی بود."]
  },
  {
    "topic": "Events",
    "role": "Colleague",
    "q": "Are you going to the company event?",
    "q_persien": "قراره بری رویداد شرکت؟",
    "a": ["Yes, I’m planning to.", "Yes, I will attend the event."],
    "a_persien": ["بله، برنامه دارم برم.", "بله، در رویداد شرکت می‌کنم."]
  },
  {
    "topic": "Events",
    "role": "Manager",
    "q": "Will you present at the meeting?",
    "q_persien": "تو جلسه ارائه می‌دی؟",
    "a": ["Yes, I have a short presentation.", "Yes, I am scheduled to present."],
    "a_persien": ["بله، یه ارائه کوتاه دارم.", "بله، برنامه ارائه دارم."]
  },
  {
    "topic": "Support",
    "role": "Colleague",
    "q": "Let me know if you need anything.",
    "q_persien": "اگه چیزی لازم داشتی، خبر بده.",
    "a": ["Thank you, I will!", "Thank you, that means a lot."],
    "a_persien": ["ممنون، حتماً!", "ممنون، لطف داری."]
  },
  {
    "topic": "Support",
    "role": "Manager",
    "q": "Do you need resources for your project?",
    "q_persien": "برای پروژه‌ات منابع نیاز داری؟",
    "a": ["Yes, some extra resources would help.", "Yes, additional resources would be appreciated."],
    "a_persien": ["بله، منابع اضافی خیلی کمک می‌کنه.", "بله، منابع بیشتر ممنون میشم."]
  },
  {
    "topic": "Documentation",
    "role": "Colleague",
    "q": "Where can I find the project files?",
    "q_persien": "فایل‌های پروژه کجاست؟",
    "a": ["Check the shared drive.", "You’ll find them on the shared drive."],
    "a_persien": ["تو درایو مشترک هست.", "رو درایو مشترک پیدا می‌کنی."]
  },
  {
    "topic": "Documentation",
    "role": "Colleague",
    "q": "Can you update the documentation?",
    "q_persien": "میشه مستندات رو آپدیت کنی؟",
    "a": ["Sure, I’ll update it today.", "Yes, I will update the documentation."],
    "a_persien": ["حتماً، امروز به‌روزش می‌کنم.", "بله، مستندات رو آپدیت می‌کنم."]
  },
  {
    "topic": "Security",
    "role": "IT",
    "q": "Have you changed your password recently?",
    "q_persien": "اخیراً رمز عبورت رو عوض کردی؟",
    "a": ["Not yet, I will do that now.", "No, I will change it today."],
    "a_persien": ["نه هنوز، الان این کار رو می‌کنم.", "نه، امروز عوض می‌کنم."]
  },
  {
    "topic": "Security",
    "role": "Colleague",
    "q": "Did you receive the security alert?",
    "q_persien": "هشدار امنیتی رو دریافت کردی؟",
    "a": ["Yes, thanks for letting me know.", "Yes, I got the security notice."],
    "a_persien": ["بله، ممنون که خبر دادی.", "بله، اطلاعیه امنیتی رو گرفتم."]
  },
  {
    "topic": "Recognition",
    "role": "Manager",
    "q": "You’ve been nominated for employee of the month.",
    "q_persien": "برای کارمند ماه انتخاب شدی.",
    "a": ["Wow, thanks a lot!", "Thank you, it’s an honor."],
    "a_persien": ["وای، خیلی ممنون!", "ممنونم، باعث افتخاره."]
  },
  {
    "topic": "Recognition",
    "role": "Colleague",
    "q": "Congrats on your promotion!",
    "q_persien": "ارتقا رو تبریک می‌گم!",
    "a": ["Thank you so much!", "Thank you, I appreciate it."],
    "a_persien": ["خیلی ممنون!", "ممنون، لطف داری."]
  },
  {
    "topic": "Conflict Resolution",
    "role": "Manager",
    "q": "Let’s resolve this issue together.",
    "q_persien": "بیایید این مشکل رو با هم حل کنیم.",
    "a": ["Sounds good to me.", "Yes, I agree, let’s work together."],
    "a_persien": ["به نظرم خوبه.", "بله، موافقم، با هم حلش کنیم."]
  },
  {
    "topic": "Conflict Resolution",
    "role": "Colleague",
    "q": "Can we talk privately?",
    "q_persien": "می‌تونیم خصوصی صحبت کنیم؟",
    "a": ["Of course, let’s find a quiet spot.", "Yes, we can have a private discussion."],
    "a_persien": ["حتماً، یه جای خلوت پیدا کنیم.", "بله، می‌تونیم خصوصی صحبت کنیم."]
  },
  {
    "topic": "Goodbye",
    "role": "Colleague",
    "q": "See you tomorrow!",
    "q_persien": "فردا می‌بینمت!",
    "a": ["See you!", "See you tomorrow."],
    "a_persien": ["می‌بینمت!", "تا فردا."]
  },
  {
    "topic": "Goodbye",
    "role": "Colleague",
    "q": "Have a great evening!",
    "q_persien": "عصر خوبی داشته باشی!",
    "a": ["You too, take care!", "Thank you, have a good evening."],
    "a_persien": ["تو هم همینطور، مراقب باش!", "ممنون، عصر خوبی داشته باشید."]
  },
   {
    "topic": "Restaurant",
    "role": "Customer",
    "q": "Can I see the menu, please?",
    "q_persien": "می‌تونم منو رو ببینم لطفاً؟",
    "a": ["Of course! Here you go.", "Certainly, I'll bring you a menu."],
    "a_persien": ["حتماً! بفرمایید.", "حتماً، الان منو رو براتون میارم."]
  },
  {
    "topic": "Restaurant",
    "role": "Customer",
    "q": "Do you have any vegan options?",
    "q_persien": "غذای وگان دارید؟",
    "a": ["Yes, we have several vegan dishes.", "Yes, we offer a vegan section on our menu."],
    "a_persien": ["بله، چند غذای وگان داریم.", "بله، یه بخش وگان تو منومون هست."]
  },
  {
    "topic": "Restaurant",
    "role": "Waiter",
    "q": "Would you like something to drink?",
    "q_persien": "نوشیدنی میل دارید؟",
    "a": ["Yes, I'd like some water.", "Yes, could I have a glass of water, please?"],
    "a_persien": ["بله، یکم آب لطفاً.", "بله، میشه یه لیوان آب بیارید؟"]
  },
  {
    "topic": "Restaurant",
    "role": "Customer",
    "q": "Is there Wi-Fi available here?",
    "q_persien": "اینجا وای‌فای دارید؟",
    "a": ["Yes, the password is on your receipt.", "Yes, you can ask the staff for the Wi-Fi password."],
    "a_persien": ["بله، رمز روی رسیدتونه.", "بله، می‌تونید رمز رو از کارکنان بپرسید."]
  },
  {
    "topic": "Restaurant",
    "role": "Waiter",
    "q": "Are you ready to order?",
    "q_persien": "آماده سفارش دادن هستید؟",
    "a": ["Yes, I'd like the chicken salad.", "Yes, may I order the chicken salad, please?"],
    "a_persien": ["بله، سالاد مرغ می‌خوام.", "بله، میشه سالاد مرغ سفارش بدم؟"]
  },
  {
    "topic": "Restaurant",
    "role": "Customer",
    "q": "Could I have the bill, please?",
    "q_persien": "می‌شه صورت‌حساب رو بیارید؟",
    "a": ["Sure, I'll bring it right away.", "Certainly, I'll get your bill."],
    "a_persien": ["حتماً، همین الان میارم.", "حتماً، صورت‌حساب رو میارم."]
  },
  {
    "topic": "Restaurant",
    "role": "Customer",
    "q": "Can I pay by card?",
    "q_persien": "می‌تونم با کارت پرداخت کنم؟",
    "a": ["Yes, we accept cards.", "Yes, all major cards are accepted here."],
    "a_persien": ["بله، کارت قبول می‌کنیم.", "بله، همه کارت‌های اصلی رو قبول داریم."]
  },
  {
    "topic": "Restaurant",
    "role": "Customer",
    "q": "Is service charge included?",
    "q_persien": "آیا هزینه سرویس حساب شده؟",
    "a": ["Yes, it's included in the bill.", "Yes, service charge is already added."],
    "a_persien": ["بله، تو صورت‌حساب هست.", "بله، هزینه سرویس لحاظ شده."]
  },
  {
    "topic": "Restaurant",
    "role": "Waiter",
    "q": "Would you like dessert?",
    "q_persien": "دسر میل دارید؟",
    "a": ["Yes, what do you recommend?", "Yes, could I see the dessert menu, please?"],
    "a_persien": ["بله، چی پیشنهاد می‌کنید؟", "بله، میشه منوی دسر رو ببینم؟"]
  },
  {
    "topic": "Restaurant",
    "role": "Customer",
    "q": "Can I have this to go?",
    "q_persien": "میشه این رو برای بیرون ببرم؟",
    "a": ["Absolutely, I'll pack it for you.", "Certainly, I will prepare it for takeout."],
    "a_persien": ["حتماً، بسته‌بندی می‌کنم.", "حتماً، براتون بسته‌بندی می‌کنم."]
  },
  {
    "topic": "Restaurant",
    "role": "Waiter",
    "q": "How is your meal?",
    "q_persien": "غذا چطور بود؟",
    "a": ["It's delicious, thank you!", "Very good, thank you for asking."],
    "a_persien": ["خیلی خوشمزه‌ست، ممنون!", "خیلی خوبه، ممنون که پرسیدید."]
  },
  {
    "topic": "Restaurant",
    "role": "Customer",
    "q": "Can I get this without nuts?",
    "q_persien": "میشه این رو بدون آجیل درست کنید؟",
    "a": ["Yes, we can make it nut-free.", "Yes, I'll inform the kitchen about your allergy."],
    "a_persien": ["بله، بدون آجیل آماده می‌کنیم.", "بله، به آشپزخونه اطلاع می‌دم."]
  },
  {
    "topic": "Restaurant",
    "role": "Customer",
    "q": "Can we have a table by the window?",
    "q_persien": "میشه یه میز کنار پنجره داشته باشیم؟",
    "a": ["Let me check for you.", "Certainly, I'll see if one is available."],
    "a_persien": ["اجازه بدید چک کنم.", "حتماً، ببینم آزاد هست یا نه."]
  },
  {
    "topic": "Restaurant",
    "role": "Waiter",
    "q": "Is everything okay with your food?",
    "q_persien": "همه‌چیز با غذاتون اوکیه؟",
    "a": ["Yes, everything's great!", "Yes, thank you, it's perfect."],
    "a_persien": ["بله، همه‌چیز عالیه!", "بله، ممنون، همه‌چیز عالیه."]
  },
  {
    "topic": "Restaurant",
    "role": "Customer",
    "q": "Do you have a kids’ menu?",
    "q_persien": "منوی کودکان دارید؟",
    "a": ["Yes, we have special dishes for kids.", "Yes, I'll bring you the kids' menu."],
    "a_persien": ["بله، منوی مخصوص کودکان داریم.", "بله، منوی کودکان رو میارم."]
  },
  {
    "topic": "Restaurant",
    "role": "Waiter",
    "q": "Would you like to order appetizers?",
    "q_persien": "پیش‌غذا میل دارید؟",
    "a": ["Yes, let's try the soup.", "Yes, I'll have the house soup, please."],
    "a_persien": ["بله، سوپ رو امتحان کنیم.", "بله، سوپ مخصوص رو لطفاً بیارید."]
  },
  {
    "topic": "Restaurant",
    "role": "Customer",
    "q": "Is your food halal?",
    "q_persien": "غذاهاتون حلاله؟",
    "a": ["Yes, we have halal options.", "Yes, we use halal ingredients."],
    "a_persien": ["بله، غذای حلال داریم.", "بله، از مواد اولیه حلال استفاده می‌کنیم."]
  },
  {
    "topic": "Restaurant",
    "role": "Customer",
    "q": "Can I split the bill?",
    "q_persien": "میشه صورت‌حساب رو دنگی حساب کنیم؟",
    "a": ["Yes, we can split it.", "Yes, just let me know how you'd like to split it."],
    "a_persien": ["بله، می‌تونیم دنگی کنیم.", "بله، فقط بگید چطور تقسیم کنیم."]
  },
  {
    "topic": "Restaurant",
    "role": "Waiter",
    "q": "Do you have a reservation?",
    "q_persien": "رزرو دارید؟",
    "a": ["Yes, it's under Smith.", "Yes, the reservation is for Smith."],
    "a_persien": ["بله، به نام اسمیت.", "بله، رزرو به نام اسمیت هست."]
  },
  {
    "topic": "Restaurant",
    "role": "Customer",
    "q": "Is this dish spicy?",
    "q_persien": "این غذا تنده؟",
    "a": ["A little, but we can make it mild.", "Yes, but we can reduce the spice if you prefer."],
    "a_persien": ["یکم، ولی می‌تونیم ملایمش کنیم.", "بله، اما اگه بخواید کمترش می‌کنیم."]
  }
,
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "Where is the check-in counter?",
    "q_persien": "پیشخوان پذیرش کجاست؟",
    "a": ["It's at the end of this hall.", "You'll find it at the far end of the terminal."],
    "a_persien": ["آخر این سالن هست.", "انتهای ترمینال پیداش می‌کنید."]
  },
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "What time does boarding start?",
    "q_persien": "زمان سوار شدن کیه؟",
    "a": ["Boarding starts at 5:30 PM.", "It starts 45 minutes before departure."],
    "a_persien": ["سوار شدن ساعت ۵:۳۰ عصر شروع میشه.", "۴۵ دقیقه قبل از پرواز شروع میشه."]
  },
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "How much is extra baggage?",
    "q_persien": "هزینه بار اضافی چقدره؟",
    "a": ["It's $50 per bag.", "Each additional bag costs $50."],
    "a_persien": ["۵۰ دلار برای هر چمدون.", "هر چمدون اضافی ۵۰ دلار هزینه داره."]
  },
  {
    "topic": "Airport",
    "role": "Staff",
    "q": "May I see your passport?",
    "q_persien": "می‌تونم پاسپورتتون رو ببینم؟",
    "a": ["Here it is.", "Certainly, here is my passport."],
    "a_persien": ["بفرمایید.", "حتماً، اینم پاسپورتم."]
  },
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "Where is gate A21?",
    "q_persien": "گیت A21 کجاست؟",
    "a": ["Go left, then follow the signs.", "It's down the corridor to your left."],
    "a_persien": ["برو سمت چپ، بعد تابلوها رو دنبال کن.", "پایین راهرو سمت چپت."]
  },
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "Is there free Wi-Fi at the airport?",
    "q_persien": "فرودگاه وای‌فای رایگان داره؟",
    "a": ["Yes, connect to 'Airport Free Wi-Fi'.", "Yes, the network name is 'Airport Free Wi-Fi'."],
    "a_persien": ["بله، به 'Airport Free Wi-Fi' وصل بشید.", "بله، اسم شبکه 'Airport Free Wi-Fi' هست."]
  },
  {
    "topic": "Airport",
    "role": "Staff",
    "q": "Have your bags been with you at all times?",
    "q_persien": "همیشه وسایلتون پیشتون بوده؟",
    "a": ["Yes, always.", "Yes, they've never left my sight."],
    "a_persien": ["بله، همیشه.", "بله، هیچ‌وقت از چشمم دور نبوده."]
  },
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "Is my flight on time?",
    "q_persien": "پروازم به موقعه؟",
    "a": ["Yes, it's on schedule.", "Yes, your flight is on time."],
    "a_persien": ["بله، طبق برنامه هست.", "بله، پروازتون به موقعه."]
  },
  {
    "topic": "Airport",
    "role": "Staff",
    "q": "Would you like assistance with your bags?",
    "q_persien": "کمک برای حمل وسایل می‌خواید؟",
    "a": ["Yes, please.", "Yes, I would appreciate that."],
    "a_persien": ["بله، لطفاً.", "بله، ممنون میشم."]
  },
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "Can I change my seat?",
    "q_persien": "میشه صندلیم رو عوض کنم؟",
    "a": ["Yes, let me check availability.", "Yes, I will see if that's possible."],
    "a_persien": ["بله، اجازه بدید چک کنم.", "بله، الان بررسی می‌کنم."]
  },
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "Where is the nearest restroom?",
    "q_persien": "دستشویی نزدیک کجاست؟",
    "a": ["Around the corner to the right.", "Go right and you'll see the restrooms."],
    "a_persien": ["دور اون گوشه سمت راست.", "سمت راست برید، می‌بینید."]
  },
  {
    "topic": "Airport",
    "role": "Staff",
    "q": "Your flight is delayed by an hour.",
    "q_persien": "پروازتون یک ساعت تاخیر داره.",
    "a": ["Thank you for the update.", "Thanks for letting me know."],
    "a_persien": ["ممنون که خبر دادید.", "ممنون بابت اطلاع."]
  },
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "Where can I get a taxi?",
    "q_persien": "کجا می‌تونم تاکسی بگیرم؟",
    "a": ["Outside, near exit 3.", "Please exit through gate 3 for taxis."],
    "a_persien": ["بیرون، نزدیک خروجی ۳.", "از خروجی ۳ برید بیرون برای تاکسی."]
  },
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "Is there a currency exchange here?",
    "q_persien": "اینجا صرافی هست؟",
    "a": ["Yes, near the main entrance.", "Yes, you'll find one near the entrance."],
    "a_persien": ["بله، نزدیک ورودی اصلیه.", "بله، کنار ورودی هست."]
  },
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "Can I get an upgrade?",
    "q_persien": "میشه صندلیم رو ارتقا بدم؟",
    "a": ["Let me check availability for upgrades.", "Yes, let me see if we have seats available."],
    "a_persien": ["بذارید موجودی ارتقا رو چک کنم.", "بله، بذارید ببینم صندلی خالی داریم."]
  },
  {
    "topic": "Airport",
    "role": "Staff",
    "q": "Is this your final destination?",
    "q_persien": "این مقصد نهاییتونه؟",
    "a": ["Yes, it is.", "Yes, this is my final stop."],
    "a_persien": ["بله، همین‌جاست.", "بله، اینجا آخر خطه."]
  },
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "Where can I find a luggage cart?",
    "q_persien": "کجا میشه چرخ دستی پیدا کرد؟",
    "a": ["Right by the entrance.", "You’ll find them near the entrance."],
    "a_persien": ["کنار ورودی هست.", "نزدیک ورودی قرار داره."]
  },
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "What gate is my flight departing from?",
    "q_persien": "پروازم از چه گیتی حرکت می‌کنه؟",
    "a": ["From gate B15.", "Your flight leaves from gate B15."],
    "a_persien": ["از گیت B15.", "پروازتون از گیت B15 حرکت می‌کنه."]
  },
  {
    "topic": "Airport",
    "role": "Passenger",
    "q": "Where is baggage claim?",
    "q_persien": "محل تحویل بار کجاست؟",
    "a": ["Downstairs, follow the signs.", "It's on the lower level, just follow the signs."],
    "a_persien": ["پایین، تابلوها رو دنبال کن.", "طبقه پایین، تابلوها رو دنبال کنید."]
  },
  {
    "topic": "Airport",
    "role": "Staff",
    "q": "Do you have any liquids in your carry-on?",
    "q_persien": "مایع توی چمدون دستی‌تون دارید؟",
    "a": ["No, I don't.", "No, there are no liquids."],
    "a_persien": ["نه، ندارم.", "نه، هیچ مایعی نیست."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "Where is the admissions office?",
    "q_persien": "دفتر پذیرش کجاست؟",
    "a": ["It's on the first floor.", "You'll find it on the first floor, room 101."],
    "a_persien": ["طبقه اول هست.", "طبقه اول، اتاق ۱۰۱."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "How can I get a student ID?",
    "q_persien": "چطور کارت دانشجویی بگیرم؟",
    "a": ["Apply online or at the office.", "Fill out the form at the admissions office."],
    "a_persien": ["آنلاین یا حضوری اقدام کن.", "فرم رو تو دفتر پذیرش پر کن."]
  },
  {
    "topic": "University",
    "role": "Professor",
    "q": "Have you done the assignment?",
    "q_persien": "تکلیف رو انجام دادی؟",
    "a": ["Yes, I submitted it online.", "Yes, I turned it in through the portal."],
    "a_persien": ["بله، آنلاین تحویل دادم.", "بله، از طریق پورتال ارسال کردم."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "When are the office hours?",
    "q_persien": "ساعت مشاوره استاد چه موقع است؟",
    "a": ["Tuesdays from 2 to 4 PM.", "Office hours are Tuesday, 2-4 PM."],
    "a_persien": ["سه‌شنبه‌ها ۲ تا ۴.", "ساعت مشاوره سه‌شنبه ۲ تا ۴."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "Where is the library?",
    "q_persien": "کتابخانه کجاست؟",
    "a": ["Across from the cafeteria.", "It’s right next to the cafeteria."],
    "a_persien": ["روبروی سلف هست.", "دقیقاً کنار سلف دانشگاهه."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "How do I register for classes?",
    "q_persien": "چطور برای کلاس‌ها ثبت‌نام کنم؟",
    "a": ["Online through the portal.", "Register via the university website."],
    "a_persien": ["از طریق پورتال آنلاین.", "از طریق سایت دانشگاه ثبت‌نام کن."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "Is attendance mandatory?",
    "q_persien": "حضور در کلاس اجباریه؟",
    "a": ["Yes, it's required.", "Yes, you must attend all classes."],
    "a_persien": ["بله، اجباریه.", "بله، باید همه کلاس‌ها رو شرکت کنی."]
  },
  {
    "topic": "University",
    "role": "Professor",
    "q": "Do you have any questions?",
    "q_persien": "سوالی داری؟",
    "a": ["No, everything is clear.", "No questions, thank you."],
    "a_persien": ["نه، همه‌چیز واضحه.", "نه، ممنون سوالی ندارم."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "Where is the next class?",
    "q_persien": "کلاس بعدی کجاست؟",
    "a": ["Room 202, on the second floor.", "It's in room 202, second floor."],
    "a_persien": ["اتاق ۲۰۲، طبقه دوم.", "کلاس در اتاق ۲۰۲ طبقه دومه."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "When is the exam?",
    "q_persien": "امتحان چه زمانی برگزار میشه؟",
    "a": ["Next Monday at 10 AM.", "It's scheduled for next Monday, 10 AM."],
    "a_persien": ["دوشنبه آینده ساعت ۱۰.", "دوشنبه آینده ساعت ۱۰ صبحه."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "Can I get an extension for my assignment?",
    "q_persien": "میشه برای تکلیفم مهلت بگیرم؟",
    "a": ["Yes, I'll give you two more days.", "Yes, you have an extra two days."],
    "a_persien": ["بله، دو روز بیشتر وقت داری.", "بله، دو روز اضافه برات در نظر می‌گیرم."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "Is there a student discount at the cafeteria?",
    "q_persien": "سلف به دانشجوها تخفیف میده؟",
    "a": ["Yes, show your ID for a discount.", "Yes, just present your student ID."],
    "a_persien": ["بله، کارت دانشجویی نشون بده.", "بله، فقط کارت دانشجویی نشون بده."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "How can I join a club?",
    "q_persien": "چطور می‌تونم عضو انجمن بشم؟",
    "a": ["Sign up at the club fair.", "Register online through the student portal."],
    "a_persien": ["تو نمایشگاه انجمن‌ها ثبت‌نام کن.", "از طریق پورتال دانشجویی ثبت‌نام کن."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "Where can I print documents?",
    "q_persien": "کجا میشه پرینت گرفت؟",
    "a": ["At the library, there's a printer.", "You can print at the library."],
    "a_persien": ["توی کتابخانه چاپگر هست.", "کتابخانه امکان پرینت داره."]
  },
  {
    "topic": "University",
    "role": "Professor",
    "q": "Are you interested in research projects?",
    "q_persien": "علاقه به پروژه‌های تحقیقاتی داری؟",
    "a": ["Yes, I’d love to join.", "Yes, I am very interested."],
    "a_persien": ["بله، خیلی دوست دارم.", "بله، خیلی علاقه دارم."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "Is there a gym on campus?",
    "q_persien": "دانشگاه باشگاه ورزشی داره؟",
    "a": ["Yes, next to the dorms.", "Yes, the gym is near the dormitories."],
    "a_persien": ["بله، کنار خوابگاه‌هاست.", "بله، باشگاه کنار خوابگاهه."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "How do I get a parking permit?",
    "q_persien": "چطور مجوز پارکینگ بگیرم؟",
    "a": ["Apply online or at campus security.", "Get the form at the security office."],
    "a_persien": ["آنلاین یا حضوری اقدام کن.", "فرم رو از دفتر حراست بگیر."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "Can I borrow books from the library?",
    "q_persien": "میشه از کتابخونه کتاب امانت گرفت؟",
    "a": ["Yes, just use your student ID.", "Yes, bring your student card to the counter."],
    "a_persien": ["بله، فقط کارت دانشجویی نیاز داری.", "بله، کارت دانشجویی رو به متصدی نشون بده."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "Is there counseling available?",
    "q_persien": "مشاوره دانشجویی دارید؟",
    "a": ["Yes, make an appointment at student services.", "Yes, book a session through the website."],
    "a_persien": ["بله، از خدمات دانشجویی وقت بگیر.", "بله، از سایت وقت رزرو کن."]
  },
  {
    "topic": "University",
    "role": "Student",
    "q": "How do I access online classes?",
    "q_persien": "چطور وارد کلاس آنلاین بشم؟",
    "a": ["Log in with your student account.", "Use the link on the portal to join."],
    "a_persien": ["با اکانت دانشجویی وارد شو.", "از طریق لینک پورتال وارد شو."]
  },
    {
    "topic": "Bank",
    "role": "Customer",
    "q": "How do I open a new account?",
    "q_persien": "چطور حساب جدید باز کنم؟",
    "a": ["Bring your ID and fill out a form.", "Visit the counter with your ID and we'll help you."],
    "a_persien": ["کارت شناسایی بیار و فرم پر کن.", "با کارت شناسایی به باجه بیا تا راهنماییت کنم."]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "What documents are required for a loan?",
    "q_persien": "چه مدارکی برای وام لازمه؟",
    "a": ["ID, proof of income, and address.", "You need your ID, income proof, and address."],
    "a_persien": ["کارت شناسایی، گواهی درآمد و آدرس.", "کارت شناسایی، مدرک درآمد و آدرس لازم داری."]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "Can I get my statement printed?",
    "q_persien": "می‌تونم صورت‌حسابم رو پرینت بگیرم؟",
    "a": ["Yes, I'll print it for you.", "Certainly, I'll print your statement now."],
    "a_persien": ["بله، برات پرینت می‌گیرم.", "حتماً، همین الان پرینت می‌کنم."]
  },
  {
    "topic": "Bank",
    "role": "Teller",
    "q": "Would you like to withdraw or deposit?",
    "q_persien": "برداشت یا واریز دارید؟",
    "a": ["I'd like to deposit, please.", "I would like to make a deposit."],
    "a_persien": ["می‌خوام واریز کنم.", "می‌خوام پول واریز کنم."]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "Is online banking available?",
    "q_persien": "بانکداری آنلاین دارید؟",
    "a": ["Yes, you can sign up online.", "Yes, our online banking is very easy to use."],
    "a_persien": ["بله، می‌تونید آنلاین ثبت‌نام کنید.", "بله، بانکداری آنلاین ما خیلی راحت استفاده میشه."]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "What's the interest rate for savings?",
    "q_persien": "سود حساب پس‌انداز چقدره؟",
    "a": ["Currently it's 3% per year.", "Right now, it's 3% annual interest."],
    "a_persien": ["فعلاً سه درصد در ساله.", "الان سود سالانه سه درصده."]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "Can I get a credit card?",
    "q_persien": "می‌تونم کارت اعتباری بگیرم؟",
    "a": ["Yes, you can apply today.", "Yes, please fill out this application."],
    "a_persien": ["بله، امروز می‌تونید درخواست بدید.", "بله، لطفاً این فرم رو پر کنید."]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "Where is the ATM?",
    "q_persien": "دستگاه خودپرداز کجاست؟",
    "a": ["It's just outside the bank.", "You'll find the ATM by the entrance."],
    "a_persien": ["بیرون بانک قرار داره.", "کنار ورودی بانک هست."]
  },
  {
    "topic": "Bank",
    "role": "Teller",
    "q": "How would you like your cash?",
    "q_persien": "پول نقد رو چطور می‌خواید؟",
    "a": ["In tens and twenties, please.", "May I have it in $10 and $20 bills?"],
    "a_persien": ["ده و بیست دلاری لطفاً.", "میشه ده و بیست دلاری بدید؟"]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "How do I reset my PIN?",
    "q_persien": "چطور رمز کارتم رو عوض کنم؟",
    "a": ["Visit the ATM or use the app.", "You can reset it at an ATM or via our app."],
    "a_persien": ["از طریق خودپرداز یا اپلیکیشن.", "تو خودپرداز یا اپ می‌تونید رمز رو عوض کنید."]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "Is there a fee for international transfers?",
    "q_persien": "برای انتقال بین‌المللی کارمزد دارید؟",
    "a": ["Yes, there is a $20 fee.", "Yes, the fee is $20 per transfer."],
    "a_persien": ["بله، بیست دلار کارمزد داره.", "بله، هر انتقال ۲۰ دلار کارمزد داره."]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "Can I open a joint account?",
    "q_persien": "می‌تونم حساب مشترک باز کنم؟",
    "a": ["Yes, just bring both IDs.", "Yes, both account holders must be present."],
    "a_persien": ["بله، کارت شناسایی هر دو رو بیارید.", "بله، هر دو باید حضور داشته باشید."]
  },
  {
    "topic": "Bank",
    "role": "Teller",
    "q": "Do you need a checkbook?",
    "q_persien": "چک‌بوک لازم دارید؟",
    "a": ["Yes, please order one for me.", "Yes, could you please order a checkbook?"],
    "a_persien": ["بله، برام سفارش بدید لطفاً.", "بله، میشه لطفاً چک‌بوک سفارش بدید؟"]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "Can I speak with the manager?",
    "q_persien": "می‌تونم با مدیر بانک صحبت کنم؟",
    "a": ["Yes, let me call the manager.", "Certainly, I'll get the manager for you."],
    "a_persien": ["بله، مدیر رو صدا می‌کنم.", "حتماً، مدیر رو خبر می‌کنم."]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "How long does a transfer take?",
    "q_persien": "انتقال پول چقدر طول می‌کشه؟",
    "a": ["Usually 1-2 business days.", "It takes 1 to 2 business days."],
    "a_persien": ["معمولاً یک تا دو روز کاری.", "یک تا دو روز کاری طول می‌کشه."]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "Can I get my balance?",
    "q_persien": "می‌تونم موجودی حسابم رو بگیرم؟",
    "a": ["Sure, I'll print your balance.", "Of course, here is your account balance."],
    "a_persien": ["حتماً، موجودی رو پرینت می‌گیرم.", "حتماً، این موجودی حساب شماست."]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "What are your working hours?",
    "q_persien": "ساعات کاری بانک چیه؟",
    "a": ["9 AM to 5 PM, Monday to Friday.", "We are open from 9 to 5, weekdays."],
    "a_persien": ["۹ صبح تا ۵ عصر، دوشنبه تا جمعه.", "ما هر روز کاری از ۹ تا ۵ بازیم."]
  },
  {
    "topic": "Bank",
    "role": "Teller",
    "q": "Do you want to set up mobile banking?",
    "q_persien": "می‌خواید بانکداری موبایل رو فعال کنید؟",
    "a": ["Yes, please.", "Yes, I would like to activate it."],
    "a_persien": ["بله، لطفاً فعال کنید.", "بله، می‌خوام فعال بشه."]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "Is there a notary service here?",
    "q_persien": "اینجا خدمات دفتر اسناد رسمی دارید؟",
    "a": ["Yes, in the next room.", "Yes, just next door."],
    "a_persien": ["بله، اتاق کناریه.", "بله، درست کنار اینجاست."]
  },
  {
    "topic": "Bank",
    "role": "Customer",
    "q": "How do I close my account?",
    "q_persien": "چطور حسابم رو ببندم؟",
    "a": ["Fill out a closure form.", "You need to complete a closure request."],
    "a_persien": ["فرم بستن حساب رو پر کن.", "باید درخواست بستن حساب رو تکمیل کنی."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "Do you have this in a larger size?",
    "q_persien": "این رو سایز بزرگ‌تر دارید؟",
    "a": ["Let me check for you.", "Yes, we have larger sizes available."],
    "a_persien": ["اجازه بدید چک کنم.", "بله، سایز بزرگ‌تر داریم."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "How much is this item?",
    "q_persien": "قیمت این چنده؟",
    "a": ["It's $29.99.", "The price is $29.99."],
    "a_persien": ["۲۹.۹۹ دلاره.", "قیمتش ۲۹.۹۹ دلاره."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "Can I return this if it doesn't fit?",
    "q_persien": "اگه اندازم نشد می‌تونم پس بدم؟",
    "a": ["Yes, within 30 days with receipt.", "Yes, you can return it within 30 days."],
    "a_persien": ["بله، تا ۳۰ روز با فاکتور.", "بله، تا سی روز می‌تونید برگردونید."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "Is there a discount on this?",
    "q_persien": "این تخفیف داره؟",
    "a": ["Yes, it's 10% off today.", "Yes, there is a 10% discount now."],
    "a_persien": ["بله، امروز ده درصد تخفیف داره.", "بله، الان ده درصد تخفیف داره."]
  },
  {
    "topic": "Store",
    "role": "Clerk",
    "q": "Would you like a bag?",
    "q_persien": "کیسه می‌خواید؟",
    "a": ["Yes, please.", "Yes, I'd like a bag, please."],
    "a_persien": ["بله، لطفاً.", "بله، لطفاً یک کیسه."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "Can I pay with my phone?",
    "q_persien": "می‌تونم با گوشی پرداخت کنم؟",
    "a": ["Yes, we accept mobile payments.", "Yes, you can use Apple Pay or Google Pay."],
    "a_persien": ["بله، پرداخت با موبایل داریم.", "بله، می‌تونید با Apple Pay یا Google Pay پرداخت کنید."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "Where is the fitting room?",
    "q_persien": "اتاق پرو کجاست؟",
    "a": ["At the back of the store.", "It's at the end of the aisle on the left."],
    "a_persien": ["ته فروشگاهه.", "انتهای راهرو سمت چپ."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "Are these shoes on sale?",
    "q_persien": "این کفش‌ها حراج هستند؟",
    "a": ["Yes, they're 20% off.", "Yes, they're on sale for 20% off."],
    "a_persien": ["بله، بیست درصد تخفیف دارند.", "بله، با بیست درصد تخفیف به فروش می‌رسند."]
  },
  {
    "topic": "Store",
    "role": "Clerk",
    "q": "Do you need help finding anything?",
    "q_persien": "کمک برای پیدا کردن چیزی لازم دارید؟",
    "a": ["No, I'm just looking, thanks.", "No, thank you. I'm just browsing."],
    "a_persien": ["نه، فقط دارم نگاه می‌کنم.", "نه، مرسی. فقط دارم می‌گردم."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "Is this available in another color?",
    "q_persien": "این رو رنگ دیگه دارید؟",
    "a": ["Yes, it comes in blue and green.", "Yes, we have it in several colors."],
    "a_persien": ["بله، آبی و سبزش هم هست.", "بله، چند رنگ مختلف داریم."]
  },
  {
    "topic": "Store",
    "role": "Clerk",
    "q": "Would you like to sign up for our loyalty program?",
    "q_persien": "دوست دارید عضو باشگاه مشتریان بشید؟",
    "a": ["Yes, sounds good.", "Yes, I'd like to sign up."],
    "a_persien": ["بله، خوبه.", "بله، دوست دارم ثبت‌نام کنم."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "Do you gift wrap?",
    "q_persien": "کادوپیچ می‌کنید؟",
    "a": ["Yes, gift wrapping is free.", "Yes, we offer complimentary gift wrapping."],
    "a_persien": ["بله، کادوپیچ رایگانه.", "بله، کادوپیچی رایگان داریم."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "What are your opening hours?",
    "q_persien": "ساعات کاری فروشگاه چیه؟",
    "a": ["10 AM to 9 PM daily.", "We're open from 10 to 9 every day."],
    "a_persien": ["هر روز ۱۰ صبح تا ۹ شب.", "هر روز از ۱۰ تا ۹ بازیم."]
  },
  {
    "topic": "Store",
    "role": "Clerk",
    "q": "Would you like a receipt?",
    "q_persien": "رسید می‌خواید؟",
    "a": ["Yes, please.", "Yes, I need a receipt, please."],
    "a_persien": ["بله، لطفاً.", "بله، رسید لطفاً."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "Is parking free?",
    "q_persien": "پارکینگ رایگانه؟",
    "a": ["Yes, parking is free for customers.", "Yes, we offer free parking."],
    "a_persien": ["بله، برای مشتری‌ها رایگانه.", "بله، پارکینگ رایگان داریم."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "Can I order this online?",
    "q_persien": "می‌تونم این رو آنلاین سفارش بدم؟",
    "a": ["Yes, it's available on our website.", "Yes, you can order it online easily."],
    "a_persien": ["بله، تو سایت‌مون هست.", "بله، راحت می‌تونید آنلاین سفارش بدید."]
  },
  {
    "topic": "Store",
    "role": "Clerk",
    "q": "Do you want to join our mailing list?",
    "q_persien": "می‌خواید عضو خبرنامه بشید؟",
    "a": ["Yes, sure.", "Yes, please add me to the list."],
    "a_persien": ["بله، حتماً.", "بله، لطفاً من رو اضافه کنید."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "Can I exchange this item?",
    "q_persien": "می‌تونم این رو تعویض کنم؟",
    "a": ["Yes, within 14 days with receipt.", "Yes, exchange is possible within 14 days."],
    "a_persien": ["بله، تا ۱۴ روز با فاکتور.", "بله، تا دو هفته امکان تعویض هست."]
  },
  {
    "topic": "Store",
    "role": "Customer",
    "q": "Do you have a fitting mirror?",
    "q_persien": "آینه پرو دارید؟",
    "a": ["Yes, it's in the fitting room.", "Yes, you'll find one in the fitting area."],
    "a_persien": ["بله، تو اتاق پرو هست.", "بله، تو بخش پرو هست."]
  },
  {
    "topic": "Store",
    "role": "Clerk",
    "q": "Can I help you with anything else?",
    "q_persien": "کمک دیگه‌ای لازم دارید؟",
    "a": ["No, that's all. Thank you!", "No, thank you. That’s everything."],
    "a_persien": ["نه، همین. ممنون!", "نه، ممنون. همه‌چیز اوکیه."]
  },
    {
    "topic": "Hotel",
    "role": "Guest",
    "q": "Do you have any rooms available?",
    "q_persien": "اتاق خالی دارید؟",
    "a": ["Yes, we have a few rooms left.", "Yes, we have availability for tonight."],
    "a_persien": ["بله، چند تا اتاق خالی داریم.", "بله، برای امشب اتاق خالی داریم."]
  },
  {
    "topic": "Hotel",
    "role": "Receptionist",
    "q": "Would you like a single or double room?",
    "q_persien": "اتاق یک‌نفره یا دونفره می‌خواهید؟",
    "a": ["A double, please.", "I'd like a double room, please."],
    "a_persien": ["دونفره لطفاً.", "اتاق دونفره می‌خوام لطفاً."]
  },
  {
    "topic": "Hotel",
    "role": "Guest",
    "q": "Is breakfast included?",
    "q_persien": "صبحانه شامل میشه؟",
    "a": ["Yes, breakfast is included.", "Yes, complimentary breakfast is provided."],
    "a_persien": ["بله، صبحانه جزوش هست.", "بله، صبحانه رایگان ارائه می‌شه."]
  },
  {
    "topic": "Hotel",
    "role": "Receptionist",
    "q": "Can I have your ID and a credit card?",
    "q_persien": "کارت شناسایی و کارت اعتباری لطفاً.",
    "a": ["Here you go.", "Certainly, here are my cards."],
    "a_persien": ["بفرمایید.", "حتماً، این هم کارت‌ها."]
  },
  {
    "topic": "Hotel",
    "role": "Guest",
    "q": "What time is check-out?",
    "q_persien": "زمان تخلیه اتاق چه ساعتیه؟",
    "a": ["By noon, please.", "Check-out is at 12 PM."],
    "a_persien": ["لطفاً تا ظهر.", "تخلیه اتاق ساعت ۱۲ هست."]
  },
  {
    "topic": "Hotel",
    "role": "Guest",
    "q": "Is there Wi-Fi in the rooms?",
    "q_persien": "در اتاق‌ها وای‌فای هست؟",
    "a": ["Yes, Wi-Fi is free for all guests.", "Yes, you’ll find the password in your room."],
    "a_persien": ["بله، وای‌فای برای همه مهمانان رایگانه.", "بله، رمز عبور توی اتاق قرار داده شده."]
  },
  {
    "topic": "Hotel",
    "role": "Guest",
    "q": "Can I get a wake-up call?",
    "q_persien": "می‌تونم درخواست بیدارباش بدم؟",
    "a": ["Of course! What time?", "Certainly, what time would you like the call?"],
    "a_persien": ["حتماً! چه ساعتی؟", "حتماً، چه ساعتی بیدارباش می‌خواید؟"]
  },
  {
    "topic": "Hotel",
    "role": "Guest",
    "q": "Is there a gym or pool?",
    "q_persien": "باشگاه یا استخر دارید؟",
    "a": ["Yes, both are on the second floor.", "Yes, you have access to both."],
    "a_persien": ["بله، هر دو در طبقه دوم هستند.", "بله، به هر دو دسترسی دارید."]
  },
  {
    "topic": "Hotel",
    "role": "Guest",
    "q": "Can you arrange an airport transfer?",
    "q_persien": "می‌تونید ترانسفر فرودگاهی هماهنگ کنید؟",
    "a": ["Yes, I'll book a taxi for you.", "Certainly, I can arrange airport pickup."],
    "a_persien": ["بله، براتون تاکسی می‌گیرم.", "حتماً، ترانسفر فرودگاهی هماهنگ می‌کنم."]
  },
  {
    "topic": "Hotel",
    "role": "Receptionist",
    "q": "Would you like help with your luggage?",
    "q_persien": "کمک برای حمل چمدون می‌خواید؟",
    "a": ["Yes, thank you!", "Yes, I'd appreciate that."],
    "a_persien": ["بله، ممنون!", "بله، لطف می‌کنید."]
  },
  {
    "topic": "Hotel",
    "role": "Guest",
    "q": "Is there room service?",
    "q_persien": "سرویس اتاق دارید؟",
    "a": ["Yes, 24-hour room service is available.", "Yes, you can order anytime."],
    "a_persien": ["بله، سرویس ۲۴ ساعته داریم.", "بله، هر زمانی می‌تونید سفارش بدید."]
  },
  {
    "topic": "Hotel",
    "role": "Guest",
    "q": "Can I get extra towels?",
    "q_persien": "می‌تونم حوله اضافه داشته باشم؟",
    "a": ["Sure, I’ll send some up.", "Certainly, extra towels will be delivered."],
    "a_persien": ["حتماً، براتون می‌فرستم.", "حتماً، حوله اضافه براتون می‌فرستیم."]
  },
  {
    "topic": "Hotel",
    "role": "Receptionist",
    "q": "How was your stay?",
    "q_persien": "اقامتتون چطور بود؟",
    "a": ["It was great, thank you.", "Very comfortable, thanks for asking."],
    "a_persien": ["عالی بود، ممنون.", "خیلی راحت بود، ممنون."]
  },
  {
    "topic": "Hotel",
    "role": "Guest",
    "q": "Can I extend my stay?",
    "q_persien": "می‌تونم اقامتم رو تمدید کنم؟",
    "a": ["Yes, let me check availability.", "Certainly, I’ll check for you."],
    "a_persien": ["بله، اجازه بدید بررسی کنم.", "حتماً، بررسی می‌کنم."]
  },
  {
    "topic": "Hotel",
    "role": "Receptionist",
    "q": "Do you need a taxi?",
    "q_persien": "تاکسی نیاز دارید؟",
    "a": ["Yes, please call one for me.", "Yes, could you arrange a taxi?"],
    "a_persien": ["بله، لطفاً زنگ بزنید.", "بله، لطفاً تاکسی هماهنگ کنید."]
  },
  {
    "topic": "Hotel",
    "role": "Guest",
    "q": "Can I get late check-out?",
    "q_persien": "می‌تونم دیرتر اتاق رو تحویل بدم؟",
    "a": ["Let me see if that's possible.", "I'll check if late check-out is available."],
    "a_persien": ["بذارید ببینم امکانش هست.", "بررسی می‌کنم امکانش هست یا نه."]
  },
  {
    "topic": "Hotel",
    "role": "Guest",
    "q": "Where can I park my car?",
    "q_persien": "کجا می‌تونم ماشینم رو پارک کنم؟",
    "a": ["We have free parking behind the hotel.", "Parking is available behind the building."],
    "a_persien": ["پارکینگ رایگان پشت هتل داریم.", "پارکینگ پشت ساختمان هست."]
  },
  {
    "topic": "Hotel",
    "role": "Receptionist",
    "q": "Do you want a wake-up call tomorrow?",
    "q_persien": "برای فردا بیدارباش می‌خواید؟",
    "a": ["Yes, at 7 AM, please.", "Yes, please set it for 7 AM."],
    "a_persien": ["بله، ساعت ۷ صبح لطفاً.", "بله، ساعت ۷ صبح لطفاً."]
  },
  {
    "topic": "Hotel",
    "role": "Guest",
    "q": "Is there an elevator?",
    "q_persien": "آسانسور دارید؟",
    "a": ["Yes, next to the lobby.", "Yes, it's right by the lobby."],
    "a_persien": ["بله، کنار لابی هست.", "بله، کنار لابی قرار داره."]
  },
  {
    "topic": "Hotel",
    "role": "Guest",
    "q": "Can I store my luggage after check-out?",
    "q_persien": "می‌تونم بعد تخلیه، چمدونم رو بذارم اینجا؟",
    "a": ["Yes, we offer luggage storage.", "Yes, you can leave your bags at the front desk."],
    "a_persien": ["بله، امکان نگهداری چمدان داریم.", "بله، می‌تونید چمدون رو به پذیرش بسپارید."]
  }
  ,
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "Do I need a prescription for this medicine?",
    "q_persien": "برای این دارو نسخه لازمه؟",
    "a": ["Yes, you need a prescription.", "Yes, this medication requires a prescription."],
    "a_persien": ["بله، نسخه لازمه.", "بله، این دارو نسخه می‌خواد."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "Is this available over the counter?",
    "q_persien": "این دارو بدون نسخه هم هست؟",
    "a": ["Yes, it's available over the counter.", "Yes, you can get it without a prescription."],
    "a_persien": ["بله، بدون نسخه هم میشه خرید.", "بله، بدون نسخه هم موجوده."]
  },
  {
    "topic": "Pharmacy",
    "role": "Pharmacist",
    "q": "Do you have any allergies?",
    "q_persien": "آلرژی به دارو خاصی دارید؟",
    "a": ["No, I don’t.", "No, I have no known allergies."],
    "a_persien": ["نه، ندارم.", "نه، آلرژی خاصی ندارم."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "How often should I take this?",
    "q_persien": "این دارو رو هر چند وقت یکبار باید مصرف کنم؟",
    "a": ["Twice a day after meals.", "Take it twice daily after food."],
    "a_persien": ["دو بار در روز بعد غذا.", "روزی دو بار بعد از غذا مصرف کن."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "Is there a generic alternative?",
    "q_persien": "جایگزین ژنریک داره؟",
    "a": ["Yes, we have a generic version.", "Yes, a generic option is available."],
    "a_persien": ["بله، ژنریکش موجوده.", "بله، جایگزین ژنریک داریم."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "How much does this cost?",
    "q_persien": "قیمت این دارو چقدره؟",
    "a": ["It's $15.", "This medication costs $15."],
    "a_persien": ["۱۵ دلاره.", "قیمتش ۱۵ دلاره."]
  },
  {
    "topic": "Pharmacy",
    "role": "Pharmacist",
    "q": "Would you like me to explain how to use this?",
    "q_persien": "دوست دارید روش مصرفش رو توضیح بدم؟",
    "a": ["Yes, please.", "Yes, I’d appreciate that."],
    "a_persien": ["بله، لطفاً.", "بله، لطف می‌کنید."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "Do you have painkillers?",
    "q_persien": "داروی مسکن دارید؟",
    "a": ["Yes, we have several types.", "Yes, we have a variety of painkillers."],
    "a_persien": ["بله، چند نوع داریم.", "بله، انواع مسکن موجوده."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "How long does it take to be ready?",
    "q_persien": "چقدر طول می‌کشه آماده بشه؟",
    "a": ["About 10 minutes.", "Your prescription will be ready in 10 minutes."],
    "a_persien": ["حدود ۱۰ دقیقه.", "نسخه‌تون تا ۱۰ دقیقه آماده میشه."]
  },
  {
    "topic": "Pharmacy",
    "role": "Pharmacist",
    "q": "Would you like to speak with the pharmacist?",
    "q_persien": "می‌خواید با داروساز صحبت کنید؟",
    "a": ["Yes, I have some questions.", "Yes, I’d like to ask a few things."],
    "a_persien": ["بله، چند تا سوال دارم.", "بله، می‌خوام چند سوال بپرسم."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "Can I use my insurance here?",
    "q_persien": "اینجا بیمه قبول می‌کنید؟",
    "a": ["Yes, we accept most insurance.", "Yes, please show your insurance card."],
    "a_persien": ["بله، بیشتر بیمه‌ها رو قبول داریم.", "بله، لطفاً کارت بیمه‌تون رو نشون بدید."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "Is this safe during pregnancy?",
    "q_persien": "این دارو تو بارداری مشکلی نداره؟",
    "a": ["Let me check for you.", "Please consult your doctor before use."],
    "a_persien": ["اجازه بدید چک کنم.", "لطفاً قبل مصرف با پزشک مشورت کنید."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "Do you have vitamins?",
    "q_persien": "ویتامین دارید؟",
    "a": ["Yes, on aisle 3.", "Yes, you'll find them on aisle three."],
    "a_persien": ["بله، راهروی ۳.", "بله، تو راهروی ۳ پیدا می‌کنید."]
  },
  {
    "topic": "Pharmacy",
    "role": "Pharmacist",
    "q": "Do you need help finding anything?",
    "q_persien": "کمک برای پیدا کردن چیزی لازم دارید؟",
    "a": ["Yes, I’m looking for cough syrup.", "Yes, I need cough syrup."],
    "a_persien": ["بله، شربت سرفه می‌خوام.", "بله، شربت سرفه لازم دارم."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "Can I get a flu shot here?",
    "q_persien": "اینجا واکسن آنفلوآنزا می‌زنید؟",
    "a": ["Yes, no appointment needed.", "Yes, you can get it anytime during opening hours."],
    "a_persien": ["بله، نیاز به وقت قبلی نیست.", "بله، هر زمان که باز باشیم می‌تونید بیاید."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "How do I store this medicine?",
    "q_persien": "این دارو رو چطور نگهداری کنم؟",
    "a": ["Keep it in a cool, dry place.", "Store at room temperature away from sunlight."],
    "a_persien": ["در جای خشک و خنک نگه دارید.", "دور از نور آفتاب در دمای اتاق نگهداری کنید."]
  },
  {
    "topic": "Pharmacy",
    "role": "Pharmacist",
    "q": "Do you want your receipt?",
    "q_persien": "رسید می‌خواید؟",
    "a": ["Yes, please.", "Yes, I’d like the receipt."],
    "a_persien": ["بله، لطفاً.", "بله، رسید لطفاً."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "Is there a consultation room?",
    "q_persien": "اتاق مشاوره دارید؟",
    "a": ["Yes, it's at the back.", "Yes, you can use the room at the back."],
    "a_persien": ["بله، انتهای داروخانه هست.", "بله، می‌تونید از اتاق انتهایی استفاده کنید."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "Can I return unused medicine?",
    "q_persien": "می‌تونم داروی استفاده‌نشده رو پس بدم؟",
    "a": ["Yes, with the receipt.", "Yes, you can return it with your receipt."],
    "a_persien": ["بله، با رسید میشه.", "بله، با رسید قابل پس دادن هست."]
  },
  {
    "topic": "Pharmacy",
    "role": "Customer",
    "q": "Is this medicine safe for children?",
    "q_persien": "این دارو برای کودکان امنه؟",
    "a": ["Yes, it's safe for children.", "Yes, but follow the pediatric dosage."],
    "a_persien": ["بله، برای کودکان امنه.", "بله، ولی دوز کودکان رو رعایت کنید."]
  }
  ,
  {
    "topic": "Hospital",
    "role": "Patient",
    "q": "Where is the emergency room?",
    "q_persien": "اورژانس کجاست؟",
    "a": ["It's on the ground floor.", "You’ll find it on the first floor, follow the signs."],
    "a_persien": ["طبقه همکفه.", "طبقه اول رو دنبال تابلوها برید."]
  },
  {
    "topic": "Hospital",
    "role": "Patient",
    "q": "How do I check in for my appointment?",
    "q_persien": "چطور برای ویزیت پذیرش بشم؟",
    "a": ["Go to the reception desk.", "Check in at the main reception."],
    "a_persien": ["به پذیرش مراجعه کنید.", "در پذیرش اصلی ثبت‌نام کنید."]
  },
  {
    "topic": "Hospital",
    "role": "Nurse",
    "q": "Do you have any allergies?",
    "q_persien": "آلرژی به دارو یا ماده خاصی دارید؟",
    "a": ["No, none.", "No, I don’t have any allergies."],
    "a_persien": ["نه، هیچ‌کدوم.", "نه، آلرژی ندارم."]
  },
  {
    "topic": "Hospital",
    "role": "Patient",
    "q": "How long will I have to wait?",
    "q_persien": "چقدر باید منتظر بمونم؟",
    "a": ["About 20 minutes.", "There’s about a 20-minute wait."],
    "a_persien": ["حدود بیست دقیقه.", "حدود بیست دقیقه باید منتظر باشید."]
  },
  {
    "topic": "Hospital",
    "role": "Patient",
    "q": "Can I see a specialist today?",
    "q_persien": "امروز می‌تونم متخصص ببینم؟",
    "a": ["Let me check the schedule.", "I'll see if a specialist is available today."],
    "a_persien": ["اجازه بدید برنامه رو چک کنم.", "می‌پرسم امروز متخصص داریم یا نه."]
  },
  {
    "topic": "Hospital",
    "role": "Nurse",
    "q": "Can I take your temperature?",
    "q_persien": "می‌تونم دمای بدنتون رو اندازه بگیرم؟",
    "a": ["Yes, go ahead.", "Yes, please."],
    "a_persien": ["بله، بفرمایید.", "بله، لطفاً."]
  },
  {
    "topic": "Hospital",
    "role": "Doctor",
    "q": "What brings you in today?",
    "q_persien": "امروز برای چه مشکلی مراجعه کردید؟",
    "a": ["I have a stomach ache.", "I’m here because of stomach pain."],
    "a_persien": ["دلم درد می‌کنه.", "به خاطر درد معده اومدم."]
  },
  {
    "topic": "Hospital",
    "role": "Patient",
    "q": "Is my insurance accepted here?",
    "q_persien": "اینجا بیمه من رو قبول دارید؟",
    "a": ["Yes, we accept your insurance.", "Yes, your insurance is valid here."],
    "a_persien": ["بله، بیمه شما قبول میشه.", "بله، بیمه شما معتبره."]
  },
  {
    "topic": "Hospital",
    "role": "Doctor",
    "q": "Are you currently on any medication?",
    "q_persien": "الان دارویی مصرف می‌کنید؟",
    "a": ["Yes, blood pressure meds.", "Yes, I take medicine for blood pressure."],
    "a_persien": ["بله، داروی فشار خون مصرف می‌کنم.", "بله، داروی فشار خون می‌خورم."]
  },
  {
    "topic": "Hospital",
    "role": "Patient",
    "q": "Can someone visit me here?",
    "q_persien": "می‌تونم ملاقات داشته باشم؟",
    "a": ["Yes, visiting hours are 4 to 8 PM.", "Yes, visitors are allowed between 4 and 8 PM."],
    "a_persien": ["بله، ساعت ملاقات ۴ تا ۸ بعدظهر.", "بله، ملاقات‌کننده از ۴ تا ۸ می‌تونه بیاد."]
  },
  {
    "topic": "Hospital",
    "role": "Nurse",
    "q": "Do you need a wheelchair?",
    "q_persien": "ویلچر نیاز دارید؟",
    "a": ["Yes, please.", "Yes, I’d appreciate it."],
    "a_persien": ["بله، لطفاً.", "بله، ممنون میشم."]
  },
  {
    "topic": "Hospital",
    "role": "Patient",
    "q": "Where is the pharmacy?",
    "q_persien": "داروخانه کجاست؟",
    "a": ["Next to the lobby.", "It’s just beside the main entrance."],
    "a_persien": ["کنار لابی هست.", "دقیقا کنار ورودی اصلی."]
  },
  {
    "topic": "Hospital",
    "role": "Patient",
    "q": "Is there Wi-Fi for patients?",
    "q_persien": "برای بیماران وای‌فای هست؟",
    "a": ["Yes, ask at reception for the password.", "Yes, reception will give you the Wi-Fi info."],
    "a_persien": ["بله، رمز رو از پذیرش بگیرید.", "بله، پذیرش اطلاعات وای‌فای رو میده."]
  },
  {
    "topic": "Hospital",
    "role": "Doctor",
    "q": "Do you have any family history of illness?",
    "q_persien": "سابقه بیماری خانوادگی دارید؟",
    "a": ["Yes, heart disease.", "Yes, there’s a history of heart disease."],
    "a_persien": ["بله، بیماری قلبی.", "بله، سابقه بیماری قلبی داریم."]
  },
  {
    "topic": "Hospital",
    "role": "Patient",
    "q": "Can I have my own room?",
    "q_persien": "می‌تونم اتاق خصوصی بگیرم؟",
    "a": ["Let me see if one is available.", "I'll check for available private rooms."],
    "a_persien": ["بذارید ببینم اتاق خالی داریم.", "بررسی می‌کنم اتاق خصوصی هست یا نه."]
  },
  {
    "topic": "Hospital",
    "role": "Nurse",
    "q": "Are you comfortable?",
    "q_persien": "راحت هستید؟",
    "a": ["Yes, thank you.", "Yes, I’m comfortable."],
    "a_persien": ["بله، ممنون.", "بله، راحتم."]
  },
  {
    "topic": "Hospital",
    "role": "Doctor",
    "q": "Do you need any pain relief?",
    "q_persien": "مسکن نیاز دارید؟",
    "a": ["Yes, I’d like something for the pain.", "Yes, I need pain medication."],
    "a_persien": ["بله، یه چیزی برای درد می‌خوام.", "بله، مسکن لازم دارم."]
  },
  {
    "topic": "Hospital",
    "role": "Patient",
    "q": "How do I get test results?",
    "q_persien": "نتیجه آزمایش رو چطور بگیرم؟",
    "a": ["We will call you when they're ready.", "Results will be available at the reception."],
    "a_persien": ["وقتی آماده شد باهاتون تماس می‌گیریم.", "نتایج رو از پذیرش بگیرید."]
  },
  {
    "topic": "Hospital",
    "role": "Nurse",
    "q": "Do you have any questions about your treatment?",
    "q_persien": "در مورد درمان سوالی دارید؟",
    "a": ["No, everything is clear.", "No, thank you for explaining."],
    "a_persien": ["نه، همه‌چیز روشنه.", "نه، ممنون بابت توضیح."]
  },
  {
    "topic": "Hospital",
    "role": "Patient",
    "q": "Can I get a copy of my medical records?",
    "q_persien": "می‌تونم کپی پرونده پزشکیم رو بگیرم؟",
    "a": ["Yes, request it at the front desk.", "Yes, please fill out a request form."],
    "a_persien": ["بله، از پذیرش درخواست کنید.", "بله، فرم درخواست رو پر کنید."]
  }
  ,
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "Is this laptop available in stock?",
    "q_persien": "این لپ‌تاپ موجود هست؟",
    "a": ["Yes, it’s in stock.", "Yes, we have it available right now."],
    "a_persien": ["بله، موجوده.", "بله، همین الان موجود داریم."]
  },
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "Do you sell phone accessories?",
    "q_persien": "لوازم جانبی موبایل می‌فروشید؟",
    "a": ["Yes, we have a large selection.", "Yes, you’ll find them in aisle 2."],
    "a_persien": ["بله، تنوع زیادی داریم.", "بله، تو راهروی ۲ پیدا می‌کنید."]
  },
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "Can I try the headphones before buying?",
    "q_persien": "می‌تونم هدفون رو قبل خرید امتحان کنم؟",
    "a": ["Yes, we have demo units.", "Yes, a sample is available for testing."],
    "a_persien": ["بله، نمونه تست داریم.", "بله، برای تست هدفون نمونه هست."]
  },
  {
    "topic": "Digital Store",
    "role": "Clerk",
    "q": "Do you need help choosing a phone?",
    "q_persien": "کمک برای انتخاب گوشی می‌خواید؟",
    "a": ["Yes, I’m not sure which to buy.", "Yes, I need some advice."],
    "a_persien": ["بله، نمی‌دونم چی بخرم.", "بله، راهنمایی می‌خوام."]
  },
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "Do you have this model in another color?",
    "q_persien": "این مدل رو رنگ دیگه دارید؟",
    "a": ["Yes, it comes in black and silver.", "Yes, other colors are available."],
    "a_persien": ["بله، مشکی و نقره‌ای هم هست.", "بله، رنگ‌های دیگه هم موجوده."]
  },
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "How long is the warranty?",
    "q_persien": "گارانتی چقدر هست؟",
    "a": ["One year standard warranty.", "It comes with a one-year warranty."],
    "a_persien": ["یک سال گارانتی داره.", "با گارانتی یک ساله ارائه میشه."]
  },
  {
    "topic": "Digital Store",
    "role": "Clerk",
    "q": "Would you like to buy an extended warranty?",
    "q_persien": "گارانتی بیشتر می‌خواید؟",
    "a": ["Yes, please add it.", "Yes, I’d like the extended warranty."],
    "a_persien": ["بله، اضافه کنید.", "بله، گارانتی بیشتر می‌خوام."]
  },
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "Can I return this product?",
    "q_persien": "می‌تونم این محصول رو پس بدم؟",
    "a": ["Yes, within 14 days.", "Yes, you have 14 days to return."],
    "a_persien": ["بله، تا ۱۴ روز می‌تونید برگردونید.", "بله، تا دو هفته امکان مرجوعی هست."]
  },
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "Is home delivery available?",
    "q_persien": "امکان ارسال به منزل دارید؟",
    "a": ["Yes, we offer home delivery.", "Yes, delivery is available for all products."],
    "a_persien": ["بله، ارسال به منزل داریم.", "بله، همه محصولات رو ارسال می‌کنیم."]
  },
  {
    "topic": "Digital Store",
    "role": "Clerk",
    "q": "Would you like to pay in installments?",
    "q_persien": "می‌خواید قسطی پرداخت کنید؟",
    "a": ["Yes, please explain the terms.", "Yes, can you tell me about the plans?"],
    "a_persien": ["بله، شرایطش رو توضیح بدید.", "بله، در مورد اقساط توضیح بدید."]
  },
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "How much is this tablet?",
    "q_persien": "قیمت این تبلت چقدره؟",
    "a": ["It's $249.", "The price is $249."],
    "a_persien": ["۲۴۹ دلاره.", "قیمتش ۲۴۹ دلاره."]
  },
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "Do you repair phones?",
    "q_persien": "تعمیر موبایل انجام می‌دید؟",
    "a": ["Yes, we have a repair service.", "Yes, our technician can help you."],
    "a_persien": ["بله، خدمات تعمیر داریم.", "بله، تکنسین ما می‌تونه کمک کنه."]
  },
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "Is there a student discount?",
    "q_persien": "تخفیف دانشجویی دارید؟",
    "a": ["Yes, show your student ID.", "Yes, student ID is required for discount."],
    "a_persien": ["بله، کارت دانشجویی نشون بدید.", "بله، با ارائه کارت دانشجویی."]
  },
  {
    "topic": "Digital Store",
    "role": "Clerk",
    "q": "Do you want insurance for your device?",
    "q_persien": "بیمه برای دستگاه می‌خواید؟",
    "a": ["No, thanks.", "No, I don’t need insurance."],
    "a_persien": ["نه، ممنون.", "نه، بیمه لازم ندارم."]
  },
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "Is technical support available?",
    "q_persien": "پشتیبانی فنی دارید؟",
    "a": ["Yes, our staff can help.", "Yes, we have in-store technical support."],
    "a_persien": ["بله، پرسنل راهنمایی می‌کنند.", "بله، پشتیبانی فنی حضوری داریم."]
  },
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "Where can I find chargers?",
    "q_persien": "کجا می‌تونم شارژر پیدا کنم؟",
    "a": ["In aisle 5.", "Chargers are in aisle 5."],
    "a_persien": ["راهروی ۵.", "شارژرها راهروی ۵ هستند."]
  },
  {
    "topic": "Digital Store",
    "role": "Clerk",
    "q": "Would you like headphones with your purchase?",
    "q_persien": "هدفون هم با خریدتون می‌خواید؟",
    "a": ["Yes, please add headphones.", "Yes, I’d like to buy headphones too."],
    "a_persien": ["بله، لطفاً هدفون اضافه کنید.", "بله، هدفون هم می‌خوام."]
  },
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "Can I get a tax-free invoice?",
    "q_persien": "فاکتور بدون مالیات می‌تونم بگیرم؟",
    "a": ["Yes, with your passport.", "Yes, show your passport at checkout."],
    "a_persien": ["بله، با پاسپورت امکان‌پذیره.", "بله، موقع پرداخت پاسپورت نشون بدید."]
  },
  {
    "topic": "Digital Store",
    "role": "Customer",
    "q": "Is there a warranty on accessories?",
    "q_persien": "لوازم جانبی هم گارانتی دارند؟",
    "a": ["Yes, 6 months warranty.", "Yes, accessories have a 6-month warranty."],
    "a_persien": ["بله، شش ماه گارانتی داره.", "بله، گارانتی ۶ ماهه دارند."]
  },
  {
    "topic": "Digital Store",
    "role": "Clerk",
    "q": "Can I help you find anything else?",
    "q_persien": "کمک دیگه‌ای لازم دارید؟",
    "a": ["No, that’s all. Thanks!", "No, I found everything I need."],
    "a_persien": ["نه، همین کافیه. ممنون!", "نه، همه چی پیدا کردم."]
  }
]
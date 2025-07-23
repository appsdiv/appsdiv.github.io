function goToStep(step) {
    // Hide all steps first
    document.querySelectorAll('.form-step').forEach(stepDiv => {
        stepDiv.classList.add('hidden');
    });

    // Handle step 3 separately based on selected product
    if (step === 3) {
        const selectedProduct = document.getElementById('product-type').value;

        if (selectedProduct === 'alloy_ingot') {
            const alloyStep = document.getElementById('step-3-alloy');
            if (alloyStep) {
                alloyStep.classList.remove('hidden');
            } else {
                console.error('Alloy step element not found!');
            }
        } else if (selectedProduct === 'granule') {
            const granuleStep = document.getElementById('step-3-granule');
            if (granuleStep) {
                granuleStep.classList.remove('hidden');
            } else {
                console.error('Granule step element not found!');
            }
        } else if (selectedProduct === 'wire') {
            const wireStep = document.getElementById('step-3-wire');
            if (wireStep) {
                wireStep.classList.remove('hidden');
            } else {
                console.error('Wire step element not found!');
            }
        } else if (selectedProduct === 'aaac_conductor') {
            const aaacStep = document.getElementById('step-3-aaac');
            if (aaacStep) {
                aaacStep.classList.remove('hidden');
            } else {
                console.error('AAAC step element not found!');
            }
        } else if (selectedProduct === 'aac_conductor') {
            const aacStep = document.getElementById('step-3-aac');
            if (aacStep) {
                aacStep.classList.remove('hidden');
            } else {
                console.error('AAC step element not found!');
            }
        } else if (selectedProduct === 'acsr_conductor') {
            const acsrStep = document.getElementById('step-3-acsr');
            if (acsrStep) {
                acsrStep.classList.remove('hidden');
            } else {
                console.error('ACSR step element not found!');
            }
        } else if (selectedProduct === 'rod') {
            const rodStep = document.getElementById('step-3-rod');
            if (rodStep) {
                rodStep.classList.remove('hidden');
            } else {
                console.error('Rod step element not found!');
            }
        } else if (selectedProduct === 'abc_conductor') {
            const abcStep = document.getElementById('step-3-abc');
            if (abcStep) {
                abcStep.classList.remove('hidden');
            } else {
                console.error('ABC step element not found!');
            }
        } else if (selectedProduct === 'aluminum_tray') { // Added new product condition
            const aluminumTrayStep = document.getElementById('step-3-aluminum-tray');
            if (aluminumTrayStep) {
                aluminumTrayStep.classList.remove('hidden');
            } else {
                console.error('Aluminum Tray step element not found!');
            }
        } else {
            alert('Please select a valid product to proceed to the next step.');
            goToStep(2); // Return to step 2 if an invalid product is selected
        }
    } else {
        // Get the element for the step to show
        const stepElement = document.getElementById('step-' + step);

        // Check if the element for the step exists
        if (stepElement) {
            stepElement.classList.remove('hidden');
        } else {
            console.error('Step element not found for step:', step);
        }
    }
}

$(document).ready(function () {
    // Handle product card selection
    const productInput = document.getElementById('product-type');
    const productCards = document.querySelectorAll('.product-card');

    if (productCards && productInput) {
        productCards.forEach(card => {
            card.addEventListener('click', function() {
                // Remove selected style from all cards
                productCards.forEach(c => c.classList.remove('selected-card'));
                // Add selected style to clicked card
                this.classList.add('selected-card');
                // Update hidden input value
                productInput.value = this.getAttribute('data-value');
                console.log('Selected product:', productInput.value); // For debugging
            });
        });
    } else {
        console.error('Product input or product cards not found!');
    }

    // --- Wire Calculations ---
    // Show relevant input fields based on order-by selection for Wire
    $('input[name="wire_order_by"]').on('change', function () {
        if (this.value === 'weight') {
            $('#wire-weight-input').removeClass('hidden');
            $('#wire-tiraj-input').addClass('hidden');
            // Clear previous values
            $('#wire-calculated-tiraj').val('');
        } else if (this.value === 'tiraj') {
            $('#wire-tiraj-input').removeClass('hidden');
            $('#wire-weight-input').addClass('hidden');
            // Clear previous values
            $('#wire-calculated-weight').val('');
        }
    });
    // Calculate Tiraj based on Weight for Wire
    $('#wire-weight').on('input', function () {
        var weight = parseFloat($(this).val());
        var crossSection = parseFloat($('#wire-cross_section').val());

        if (!isNaN(weight) && !isNaN(crossSection) && crossSection > 0) {
            var tiraj = (weight * 1000) / (Math.pow(crossSection / 2, 2) * Math.PI * 1000 * 2705 / 1000000);
            $('#wire-calculated-tiraj').val(tiraj.toFixed(2)); // Display the calculated tiraj (meter)
        } else {
            $('#wire-calculated-tiraj').val(''); // Clear if inputs are invalid
        }
    });
    // Calculate Weight based on Tiraj for Wire
    $('#wire-tiraj').on('input', function () {
        var tiraj = parseFloat($(this).val());
        var crossSection = parseFloat($('#wire-cross_section').val());

        if (!isNaN(tiraj) && !isNaN(crossSection) && crossSection > 0) {
            var weight = tiraj * (Math.pow(crossSection / 2, 2) * Math.PI * 1000 * 2705 / 1000000) / 1000;
            $('#wire-calculated-weight').val(weight.toFixed(2)); // Display the calculated weight (kg)
        } else {
            $('#wire-calculated-weight').val(''); // Clear if inputs are invalid
        }
    });
    // --- End Wire Calculations ---

    // --- AAAC Calculations ---
    // Show relevant input fields based on order-by selection for AAAC
    $('input[name="aaac_order_by"]').on('change', function () {
        if (this.value === 'weight') {
            $('#aaac-weight-input').removeClass('hidden');
            $('#aaac-tiraj-input').addClass('hidden');
            $('#aaac-calculated-tiraj').val('');
        } else if (this.value === 'tiraj') {
            $('#aaac-tiraj-input').removeClass('hidden');
            $('#aaac-weight-input').addClass('hidden');
            $('#aaac-calculated-weight').val('');
        }
    });
    // Updated weight per meter values based on the provided table
    const aaacWeightsPerMeter = {
        '16': 0.042,
        '25': 0.067,
        '35': 0.093,
        '50': 0.126,
        '70': 0.182,
        '95': 0.251,
        '120': 0.316,
        '185': 0.496
    };
    // Calculate Tiraj based on Weight for AAAC
    $('#aaac-weight').on('input', function () {
        var weight = parseFloat($(this).val());
        var crossSection = $('#aaac-cross_section').val();

        if (!isNaN(weight) && aaacWeightsPerMeter[crossSection]) {
            var tiraj = weight / aaacWeightsPerMeter[crossSection];
            $('#aaac-calculated-tiraj').val(tiraj.toFixed(2)); // Display the calculated length in meters
        } else {
            $('#aaac-calculated-tiraj').val(''); // Clear if inputs are invalid
        }
    });
    // Calculate Weight based on Tiraj for AAAC
    $('#aaac-tiraj').on('input', function () {
        var tiraj = parseFloat($(this).val());
        var crossSection = $('#aaac-cross_section').val();

        if (!isNaN(tiraj) && aaacWeightsPerMeter[crossSection]) {
            var weight = tiraj * aaacWeightsPerMeter[crossSection];
            $('#aaac-calculated-weight').val(weight.toFixed(2)); // Display the calculated weight in kilograms
        } else {
            $('#aaac-calculated-weight').val(''); // Clear if inputs are invalid
        }
    });
    // --- End AAAC Calculations ---

    // --- AAC Calculations ---
    // Show relevant input fields based on order-by selection for AAC
    $('input[name="aac_order_by"]').on('change', function () {
        if (this.value === 'weight') {
            $('#aac-weight-input').removeClass('hidden');
            $('#aac-tiraj-input').addClass('hidden');
            $('#aac-calculated-tiraj').val('');  // Clear the calculated tiraj if switching to weight
        } else if (this.value === 'tiraj') {
            $('#aac-tiraj-input').removeClass('hidden');
            $('#aac-weight-input').addClass('hidden');
            $('#aac-calculated-weight').val('');  // Clear the calculated weight if switching to tiraj
        }
    });
    // AAC Weight per meter values
    const aacWeightsPerMeter = {
        '16': 0.040,  // Replace these values with actual AAC weight per meter data
        '25': 0.063,
        '35': 0.088,
        '50': 0.118,
        '70': 0.165,
        '95': 0.230,
        '120': 0.289,
        '185': 0.456
    };
    // Calculate Tiraj based on Weight for AAC
    $('#aac-weight').on('input', function () {
        var weight = parseFloat($(this).val());
        var crossSection = $('#aac-cross_section').val();

        if (!isNaN(weight) && aacWeightsPerMeter[crossSection]) {
            var tiraj = weight / aacWeightsPerMeter[crossSection];
            $('#aac-calculated-tiraj').val(tiraj.toFixed(2)); // Display the calculated length in meters
        } else {
            $('#aac-calculated-tiraj').val(''); // Clear if inputs are invalid
        }
    });
    // Calculate Weight based on Tiraj for AAC
    $('#aac-tiraj').on('input', function () {
        var tiraj = parseFloat($(this).val());
        var crossSection = $('#aac-cross_section').val();

        if (!isNaN(tiraj) && aacWeightsPerMeter[crossSection]) {
            var weight = tiraj * aacWeightsPerMeter[crossSection];
            $('#aac-calculated-weight').val(weight.toFixed(2)); // Display the calculated weight in kilograms
        } else {
            $('#aac-calculated-weight').val(''); // Clear if inputs are invalid
        }
    });
    // --- End AAC Calculations ---

    // --- ACSR Calculations ---
    // Show relevant input fields based on order-by selection for ACSR
    $('input[name="acsr_order_by"]').on('change', function () {
        if (this.value === 'weight') {
            $('#acsr-weight-input').removeClass('hidden');
            $('#acsr-tiraj-input').addClass('hidden');
            $('#acsr-calculated-tiraj').val('');  // Clear the calculated tiraj if switching to weight
        } else if (this.value === 'tiraj') {
            $('#acsr-tiraj-input').removeClass('hidden');
            $('#acsr-weight-input').addClass('hidden');
            $('#acsr-calculated-weight').val('');  // Clear the calculated weight if switching to tiraj
        }
    });
    // ACSR Weight per meter values (These are example values, replace with correct ACSR data)
    const acsrWeightsPerMeter = {
        '16': 0.045,  // Replace these values with actual ACSR weight per meter data
        '25': 0.070,
        '35': 0.095,
        '50': 0.130,
        '70': 0.180,
        '95': 0.250,
        '120': 0.320,
        '185': 0.500
    };
    // Calculate Tiraj based on Weight for ACSR
    $('#acsr-weight').on('input', function () {
        var weight = parseFloat($(this).val());
        var crossSection = $('#acsr-cross_section').val();

        if (!isNaN(weight) && acsrWeightsPerMeter[crossSection]) {
            var tiraj = weight / acsrWeightsPerMeter[crossSection];
            $('#acsr-calculated-tiraj').val(tiraj.toFixed(2)); // Display the calculated length in meters
        } else {
            $('#acsr-calculated-tiraj').val(''); // Clear if inputs are invalid
        }
    });
    // Calculate Weight based on Tiraj for ACSR
    $('#acsr-tiraj').on('input', function () {
        var tiraj = parseFloat($(this).val());
        var crossSection = $('#acsr-cross_section').val();

        if (!isNaN(tiraj) && acsrWeightsPerMeter[crossSection]) {
            var weight = tiraj * acsrWeightsPerMeter[crossSection];
            $('#acsr-calculated-weight').val(weight.toFixed(2)); // Display the calculated weight in kilograms
        } else {
            $('#acsr-calculated-weight').val(''); // Clear if inputs are invalid
        }
    });
    // --- End ACSR Calculations ---

    // --- ABC Calculations ---
    // ABC Weight per meter values for different cross-sectional areas
    const abcWeightsPerMeter = {
        '16': { noCover: 0.042, withCover: 0.023, total: 0.065 },
        '25': { noCover: 0.067, withCover: 0.033, total: 0.100 },
        '35': { noCover: 0.093, withCover: 0.043, total: 0.136 },
        '50': { noCover: 0.126, withCover: 0.049, total: 0.175 },
        '70': { noCover: 0.182, withCover: 0.066, total: 0.248 },
        '95': { noCover: 0.251, withCover: 0.077, total: 0.328 },
        '120': { noCover: 0.316, withCover: 0.082, total: 0.398 }
    };
    // Show relevant input fields based on order-by selection for ABC
    $('input[name="abc_order_by"]').on('change', function () {
        if (this.value === 'weight') {
            $('#abc-weight-input').removeClass('hidden');
            $('#abc-tiraj-input').addClass('hidden');
            $('#abc-calculated-tiraj').val('');  // Clear the calculated tiraj if switching to weight
        } else if (this.value === 'tiraj') {
            $('#abc-tiraj-input').removeClass('hidden');
            $('#abc-weight-input').addClass('hidden');
            $('#abc-calculated-weight-no-cover').val('');
            $('#abc-calculated-weight-with-cover').val('');
            $('#abc-calculated-total-weight').val('');  // Clear the calculated weight if switching to tiraj
        }
    });
    // Calculate Tiraj based on Weight for ABC
    $('#abc-weight').on('input', function () {
        var weight = parseFloat($(this).val());
        var crossSection = $('#abc-cross_section').val();

        if (!isNaN(weight) && abcWeightsPerMeter[crossSection]) {
            var tiraj = weight / abcWeightsPerMeter[crossSection].total;
            $('#abc-calculated-tiraj').val(tiraj.toFixed(2)); // Display the calculated length in meters
        } else {
            $('#abc-calculated-tiraj').val(''); // Clear if inputs are invalid
        }
    });
    // Calculate Weight based on Tiraj for ABC
    $('#abc-tiraj').on('input', function () {
        var tiraj = parseFloat($(this).val());
        var crossSection = $('#abc-cross_section').val();

        if (!isNaN(tiraj) && abcWeightsPerMeter[crossSection]) {
            var weightNoCover = tiraj * abcWeightsPerMeter[crossSection].noCover;
            var weightWithCover = tiraj * abcWeightsPerMeter[crossSection].withCover;
            var totalWeight = tiraj * abcWeightsPerMeter[crossSection].total;

            $('#abc-calculated-weight-no-cover').val(weightNoCover.toFixed(2));
            $('#abc-calculated-weight-with-cover').val(weightWithCover.toFixed(2));
            $('#abc-calculated-total-weight').val(totalWeight.toFixed(2)); // Display the total weight
        } else {
            $('#abc-calculated-weight-no-cover').val('');
            $('#abc-calculated-weight-with-cover').val('');
            $('#abc-calculated-total-weight').val(''); // Clear if inputs are invalid
        }
    });
    // --- End ABC Calculations ---
    // --- Rod Calculations ---
    // Show relevant input fields based on order-by selection for Rod
    $('input[name="rod_order_by"]').on('change', function () {
        if (this.value === 'weight') {
            $('#rod-weight-input').removeClass('hidden');
            $('#rod-length-input').addClass('hidden');
        } else if (this.value === 'length') {
            $('#rod-length-input').removeClass('hidden');
            $('#rod-weight-input').addClass('hidden');
        }
    });
    // --- End Rod Calculations ---
    // --- Aluminum Tray Logic ---
    const trayDimensionsData = {
        '500': [
            { text: '200 × 115 mm (Code 30)', value: '200x115_30' },
            { text: '202 × 112 mm (Code 30/1)', value: '202x112_30-1' },
            { text: '215 × 149 mm (Code 105)', value: '215x149_105' }
        ],
        '800': [
            { text: '210 × 144 mm (Code 711)', value: '210x144_711' }
        ],
        '1000': [
            { text: '220 × 155 mm (Code 109)', value: '220x155_109' }
        ],
        '1300': [
            { text: '218 × 155 mm (Code 106)', value: '218x155_106' }
        ],
        '1500': [
            { text: '225 × 163 mm (Code 107)', value: '225x163_107' },
            { text: '230 × 182 mm (Code 222)', value: '230x182_222' },
            { text: '235 × 180 mm (Code 320)', value: '235x180_320' },
            { text: '250 × 166 mm (Code 114)', value: '250x166_114' }
        ],
        '2000': [
            { text: '312 × 164 mm (Code 240)', value: '312x164_240' }
        ],
        '2500': [
            { text: '325 × 177 mm (Code 250)', value: '325x177_250' }
        ],
        '4000': [
            { text: '361 × 210 mm (Code 118)', value: '361x210_118' }
        ]
    };

    $('#tray-capacity').on('change', function() {
        const selectedCapacity = $(this).val();
        const dimensionsDropdown = $('#tray-dimensions');
        dimensionsDropdown.empty(); // Clear existing options
        dimensionsDropdown.append('<option value="" disabled selected>انتخاب کنید</option>'); // Add default option

        if (selectedCapacity && trayDimensionsData[selectedCapacity]) {
            trayDimensionsData[selectedCapacity].forEach(dim => {
                dimensionsDropdown.append(new Option(dim.text, dim.value));
            });
            dimensionsDropdown.prop('disabled', false); // Enable the dimensions dropdown
        } else {
            dimensionsDropdown.prop('disabled', true); // Disable if no valid capacity selected
            dimensionsDropdown.append('<option value="" disabled selected>ابتدا حجم را انتخاب کنید</option>');
        }
    });
    // --- End Aluminum Tray Logic ---

    // Attach the submit event handler to the form
    // Handle form submission via AJAX
    $('#multi-step-form').on('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Show SweetAlert confirmation dialog
        Swal.fire({
            title: 'آیا از ثبت سفارش اطمینان دارید؟',
            text: 'پس از ثبت امکان ویرایش وجود ندارد!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'بله، ثبت کن',
            cancelButtonText: 'لغو'
        }).then((result) => {
            if (result.isConfirmed) {
                // Serialize form data
                const formData = $(this).serialize();

                // Send AJAX request
                $.ajax({
                    type: 'POST',
                    url: $(this).attr('action'),
                    data: formData,
                    success: function (response) {
                        // Show success toast
                        Toastify({
                            text: "سفارش با موفقیت ثبت شد",
                            duration: 3000,
                            gravity: "top",
                            position: "right",
                            backgroundColor: "#4CAF50",
                            stopOnFocus: true,
                        }).showToast();

                        // Reset the form
                        $('#multi-step-form')[0].reset();

                        // Remove selected-card class from product cards
                        $('.product-card').removeClass('selected-card');

                        // Navigate back to Step 1
                        goToStep(1);
                    },
                    error: function (xhr, status, error) {
                        // Handle errors here
                        Swal.fire({
                            title: 'خطا!',
                            text: 'در ثبت سفارش مشکلی رخ داده است. لطفاً مجدداً تلاش کنید.',
                            icon: 'error',
                            confirmButtonText: 'باشه'
                        });
                    }
                });
            }
        });
    });
});
document.getElementById('coupon').addEventListener('keyup', function (event) {
    const coupon = event.target.value;
    const apply_coupon = document.getElementById('apply_coupon');
    if (coupon === 'SELL200') {
        apply_coupon.removeAttribute('disabled')

    }
    else {
        apply_coupon.setAttribute('disabled', true);
    }
})
document.getElementById('apply_coupon').addEventListener('click', function () {
    const discount = document.getElementById('Discount');
    const total_price = parseFloat(document.getElementById('total-price').innerText);
    if (total_price >= 200) {
        const discounted_value = total_price * .2;
        document.getElementById('Discount').innerText = discounted_value.toFixed(2);
        const after_disocunt = total_price - discounted_value;
        document.getElementById("total").innerText = after_disocunt.toFixed(2);

    }
    else {
        alert('purchase upto 200 taka');

    }

})
document.getElementById('promo').addEventListener('click', function () {
    const promo_code = document.getElementById('promo').innerText;
    document.getElementById('apply_coupon').value = promo_code;
    const discount = document.getElementById('Discount');
    const total_price = parseFloat(document.getElementById('total-price').innerText);
    if (total_price >= 200) {
        const discounted_value = total_price * .2;
        document.getElementById('Discount').innerText = discounted_value.toFixed(2);
        const after_disocunt = total_price - discounted_value;
        document.getElementById("total").innerText = after_disocunt.toFixed(2);

    }
    else {
        alert('purchase upto 200 taka');

    }

})


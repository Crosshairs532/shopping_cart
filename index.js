// clicking each card

function addtocart1() {
    const price = parseFloat(document.getElementById('price1').innerText);
    const new_total_price = addition(price);
    document.getElementById('total-price').innerText = new_total_price;
    document.getElementById('total').innerText = new_total_price;
    AddList('kc');

}
function addtocart2() {
    const price = parseFloat(document.getElementById('price2').innerText);
    const new_total_price = addition(price);
    document.getElementById('total-price').innerText = new_total_price;
    document.getElementById('total').innerText = new_total_price;
    AddList('k_accesories');
}
function HomeCooker() {
    const price = parseFloat(document.getElementById('price3').innerText);
    const new_total_price = addition(parseFloat(document.getElementById('price3').innerText))
    document.getElementById('total-price').innerText = new_total_price;
    document.getElementById('total').innerText = new_total_price;
    AddList('Home_Cooker')
}
function addtocart4() {
    const price = parseFloat(document.getElementById('price4').innerText);
    const new_total_price = addition(price);
    document.getElementById('total-price').innerText = new_total_price;
    document.getElementById('total').innerText = new_total_price;
    AddList('sbc');
}
function addtocart5() {
    const price = parseFloat(document.getElementById('price5').innerText);
    const new_total_price = addition(price);
    document.getElementById('total-price').innerText = new_total_price;
    document.getElementById('total').innerText = new_total_price;
    AddList('fjs');
}
function addtocart6() {
    const price = parseFloat(document.getElementById('price6').innerText);
    const new_total_price = addition(price);
    document.getElementById('total-price').innerText = new_total_price;
    document.getElementById('total').innerText = new_total_price;
    AddList('sc');
}


function addition(price) {
    const total_price = parseFloat(document.getElementById('total-price').innerText);
    const new_total_price = price + total_price;


    if (new_total_price > 0) {

        document.getElementById('Purchase').removeAttribute('disabled');
    }
    else {
        document.getElementById('Purchase').setAttribute('disabled', true);
    }
    return new_total_price;

}
function AddList(id) {
    const p = document.createElement('p');
    console.log(p);
    const entry = document.getElementById('list');
    const text = document.getElementById(id).innerText;
    const count = entry.childElementCount;
    p.innerText = `${count + 1} ${text}`;
    entry.appendChild(p);

}
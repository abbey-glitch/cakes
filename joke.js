window.onload = function(){
    let savedDecors = localStorage.getItem('decor');
    if(savedDecors == null || savedDecors == undefined){
        document.head.style.background = 'linear-gradient(to right, pink, brown)';
        document.body.style.background = 'wheat';
    }else{
        savedDecors = JSON.parse(savedDecors);
        let background = savedDecors['background'];
        let color = savedDecors['color'];
        let borderColor= savedDecors['borderColor'];
        //let body = savedDecor['background'];
        //document.head.style.background = background;
        document.body.style.background = background;
        document.body.style.color = color;
        document.body.style.borderColor = borderColor;
    }
}
function backgroundSetting(reforms){
    if(reforms.value === 'red'){
        reformsRed();
    }else if(reforms.value === 'black'){
        reformsblack();
    }else if(reforms.value === 'random'){
        reformsRandom();
    }else if(reforms.value === 'normal'){
        reformsNormal();
    }
}
function reformsblack(){
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    document.body.style.borderColor = 'green';
    const decorObject = {
        'background' : 'black',
        'color' : 'white',
        'borderColor' : 'green'
    }
    let savedDecors = localStorage.getItem('decor')
    if(savedDecors == null || savedDecors == undefined){
        localStorage.setItem('decor', JSON.stringify(decorObject));
    }else{
        localStorage.setItem('decor', JSON.stringify(decorObject));
    }
}
function reformsRed(){
    document.body.style.background = 'red';
    document.body.style.color = 'grey';
    const decorObject = {
        'background' : 'red',
        'color' : 'grey'
    }
    let savedDecors = localStorage.getItem('decor')
    if(savedDecors == null || savedDecors == undefined){
        localStorage.setItem('decor', JSON.stringify(decorObject))
    }else{
        localStorage.setItem('decor', JSON.stringify(decorObject))
    }

}
function reformsNormal(){
    localStorage.removeItem('decor');
    location.reload();
}
//cart anmation
let product_overlay = document.getElementsByClassName('product');
for(let i=0; i<product_overlay.length; i++){
    if(product_overlay[i] == 0){
        //show the product
        //console.log(product_overlay[0])
    }
    //this is the product loop
    let add_to_cart = document.getElementsByClassName('Add_to_cart');
    for(let i=0; i<add_to_cart.length; i++){
        //console.log(add_to_cart)
        //this is the bag loop
    }
    product_overlay[i].setAttribute('onmouseover', 'product()');
    function product(){
        let cartBag = add_to_cart[i]
            console.log(cartBag)
        cartBag.style.display = 'inline';
        
    }
}

 
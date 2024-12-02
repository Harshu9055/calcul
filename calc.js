function inp(number) {
    let gum = document.querySelector('.inp');
    gum.value += number;
    
}

function clr(){  
    let gum = document.querySelector('.inp');
    gum.value = '';
}

function eva() {
    let gum = document.querySelector('.inp');
    gum.value = eval(gum.value);
}

function del() {
    let gum = document.querySelector('.inp');
    gum.value = gum.value.slice(0, -1);

}
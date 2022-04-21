let sizeFont = document.querySelector('.sizeFont');
function count(){
    let option = '';
    for (let i = 1; i <=80; i++) {
        option +=`<option value='${i}'>${i}</option>`
        sizeFont.innerHTML= option;
    }
}
count();

let SelectionOne = document.querySelector('.sel');
let SelectionTwo = document.querySelector('.fonts');
let p = document.getElementById('pp')
let btn = document.querySelector('.btn');

function store() {
    window.localStorage.setItem('color', SelectionOne.value);
    window.localStorage.setItem('font', SelectionTwo.value);
    window.localStorage.setItem('size',`${sizeFont.value}px`)
    window.localStorage.setItem('sizeNotpx',`${sizeFont.value}`)
    location.reload()
}
function getStyle() {
    pp.style.color = window.localStorage.getItem('color')
    pp.style.fontFamily = window.localStorage.getItem('font')
    pp.style.fontSize = window.localStorage.getItem('size')
    SelectionOne.value = window.localStorage.getItem('color');
    SelectionTwo.value = window.localStorage.getItem('font');
    sizeFont.value = window.localStorage.getItem('sizeNotpx');
}
getStyle();

btn.addEventListener('click', () => {
    store();
})


function OnColorChange(e){
let r=document.querySelector(':root');
r.style.setProperty('--'+e.id, e.value);
}

function changeFontColor(){
    let r=document.querySelector(':root');
    let el=document.querySelector('#toggle-font-color');
    let elStyle=getComputedStyle(el);
    let floatProp=elStyle.getPropertyValue('float');
    if(floatProp=='right'){
        el.style.setProperty('float','left');
        r.style.setProperty('--font-color', 'black'); 
    }
    else{
        el.style.setProperty('float','right');
        r.style.setProperty('--font-color', 'white');
    }
    
    
}

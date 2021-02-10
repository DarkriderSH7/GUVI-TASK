const button=document.querySelectorAll('select');
const input=document.querySelectorAll('input');
const url="https://api.exchangeratesapi.io/latest";
let html='';

async function currency(){
    const res=await fetch(url);
    const data=await res.json();
    
    const arrkey=Object.keys(data.rates)
    
    arrkey.map(item=>{
        return html+=`<option value=${item}>${item}</option>`;
    });
    for(let i=0;i<button.length;i++){
        button[i].innerHTML=html;
    };
    function convert(i,j){
          input[i].value=input[j].value*data.rates[button[i].value]/data.rates[button[j].value];
    }
    input[0].addEventListener('keyup',()=> convert(1,0))
     input[1].addEventListener('keyup',()=>convert(0,1))
      button[0].addEventListener('keyup',()=>convert(1,0))
          button[1].addEventListener('keyup',()=>convert(0,1))
    };

currency();

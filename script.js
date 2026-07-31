
const gifts=[
['udon.png','うどん脳','10'],
['nebaru.png','ねば〜る君','10'],
['love.png','愛してる','199']
];
const t=document.getElementById('track');
let html='';
for(let r=0;r<20;r++){
 for(const g of gifts){
  html+=`<div class="item"><img src="${g[0]}"><div class="name">${g[1]}</div><div class="price">🪙 ${g[2]}</div></div>`;
 }
}
t.innerHTML=html+html;

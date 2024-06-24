const dangerous=document.getElementById('dangerous');
const money=document.getElementById('money');
const lose=document.getElementById('lose');
const win=document.getElementById('win');
const winlose=document.getElementById('winlose');




lose.addEventListener('click',function(){
    let time=Math.random() * (2 - 0) + 0;
    console.log(time);
    if(parseInt(dangerous.value)>parseInt(money.innerHTML)){
        money.innerHTML='될줄알았니?'
        winlose.innerHTML='에휴 그러고 싶니?'
    }
    else if(time>1){
        money.innerHTML= parseInt(money.innerHTML)+parseInt(dangerous.value);
         winlose.innerHTML='이김'
         lose.src='one.png';
         lose.style.height='300px';
         setTimeout(() => {
            lose.src='card.png'
         }, 1000);
    }
    else{
        money.innerHTML= parseInt(money.innerHTML)-parseInt(dangerous.value);
         winlose.innerHTML='짐'
         lose.src='two.png';
         lose.style.height='300px';
         setTimeout(() => {
            lose.src='card.png'
         }, 1000);
    }
    if(parseInt(money.innerHTML)==0){
        document.write('<center>')
        document.write('<h1>고양이한테 지냐</h1>')
        document.write('<img src="catwin.jpg" alt="dancing cat">');
        document.write('<img src="catwin1.jpg" alt="dancing1 cat">');
        document.write('<img src="catwin2.jpg" alt="dancing2 cat">>');
        document.write('</center>')
    }
    if(parseInt(money.innerHTML)>=100000){
        document.write('<center>')
        document.write('<h1>당신은 동물학대로 잡혀갑니다.</h1>')
        document.write('<img src="you.jpg" alt="dancing cat"><br>');
        document.write('<img src="catlose.jpg" alt="dancing1 cat">');
        document.write('<img src="catlose1.jpg" alt="dancing2 cat">>');
        document.write('</center>')
    }
})

win.addEventListener('click',function(){
    let time=Math.random() * (2 - 0) + 0;
    console.log(time);
    if(parseInt(dangerous.value)>parseInt(money.innerHTML)){
        money.innerHTML='될줄알았니?'
        winlose.innerHTML='에휴 그러고 싶니?'
    }
    else if(time>1){
        money.innerHTML= parseInt(money.innerHTML)+parseInt(dangerous.value);
         winlose.innerHTML='이김'
            win.src='one.png';
         win.style.height='300px';
         setTimeout(() => {
            win.src='card.png'
         }, 1000);
    }
    else{
        money.innerHTML= parseInt(money.innerHTML)-parseInt(dangerous.value);
         winlose.innerHTML='짐'
         win.src='two.png';
         win.style.height='300px';
         setTimeout(() => {
            win.src='card.png'
         }, 1000);
    }
    if(parseInt(money.innerHTML)==0){
        document.write('<center>')
        document.write('<h1>고양이한테 지냐</h1>')
        document.write('<img src="catwin.jpg" alt="dancing cat">');
        document.write('<img src="catwin1.jpg" alt="dancing1 cat">');
        document.write('<img src="catwin2.jpg" alt="dancing2 cat">>');
        document.write('</center>')
    }
    if(parseInt(money.innerHTML)==10000){
        document.write('<center>')
        document.write('<h1>당신은 동물학대로 잡혀갑니다.</h1>')
        document.write('<img src="you.jpg" alt="dancing cat"><br>');
        document.write('<img src="catlose.jpg" alt="dancing1 cat">');
        document.write('<img src="catlose1.jpg" alt="dancing2 cat">>');
        document.write('</center>')
    }
})

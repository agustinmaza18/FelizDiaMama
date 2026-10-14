(function(){
  var heart=document.getElementById('heart'),fill=document.getElementById('fill'),say=document.getElementById('say'),count=document.getElementById('count');
  var msgs=['Sigue presionando…','Llenando el corazón de amor…','Más amor, ya casi…','Un toque más…','¡Muy bien Mamiii! 💖'];
  var taps=0;
  function petals(n){for(var i=0;i<n;i++){var p=document.createElement('span');p.className='petal';p.textContent=['🌸','💗','🌷'][i%3];p.style.left=Math.random()*100+'vw';p.style.animationDuration=(4+Math.random()*4)+'s';p.style.animationDelay=Math.random()*2+'s';document.body.appendChild(p);setTimeout(function(e){e.remove()},10000,p)}}
  heart.addEventListener('click',function(){
    if(taps>=5)return;taps++;
    fill.style.transform='translateY('+(100-taps*20)+'%)';
    heart.classList.remove('beat');void heart.offsetWidth;heart.classList.add('beat');
    say.textContent=msgs[taps-1];count.textContent=taps+' de 5';
    if(taps===5){petals(18);setTimeout(function(){document.getElementById('intro').classList.add('hide');document.getElementById('show').classList.remove('hide')},1400)}
  });
  var track=document.getElementById('track'),n=track.children.length,i=0,dots=document.getElementById('dots');
  for(var k=0;k<n;k++)dots.appendChild(document.createElement('i'));
  function go(x){i=Math.max(0,Math.min(n-1,x));track.style.transform='translateX(-'+i*100+'%)';
    [].forEach.call(dots.children,function(d,j){d.className=j===i?'on':''});
    if(i===n-1)petals(14)}
  document.getElementById('prev').onclick=function(){go(i-1)};
  document.getElementById('next').onclick=function(){go(i+1)};
  var sx=null,v=document.getElementById('view');
  v.addEventListener('pointerdown',function(e){sx=e.clientX});
  v.addEventListener('pointerup',function(e){if(sx===null)return;var d=e.clientX-sx;if(Math.abs(d)>40)go(i+(d<0?1:-1));sx=null});
  document.addEventListener('keydown',function(e){if(e.key==='ArrowRight')go(i+1);if(e.key==='ArrowLeft')go(i-1)});
  go(0);
})();

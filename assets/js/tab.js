const onepoll = document.querySelector('#onepoll');
const twopoll = document.querySelector('#twopoll');
const a = document.querySelector('#firstpoll');
const b = document.querySelector('#secondpoll');
const c = document.querySelector('#next');


onepoll.onclick = function(){
    a.style.display = 'block';
    b.style.display = 'none';
    c.style.display = 'none';
}

twopoll.onclick = function(){
    a.style.display = 'none';
    b.style.display = 'block';
    c.style.display = 'block';
}

let homebtn = document.querySelector('#home');
homebtn.addEventListener('click',function(){
    location.href = "index.html"
})
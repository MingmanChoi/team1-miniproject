const onepoll = document.querySelector('#onepoll');
const twopoll = document.querySelector('#twopoll');
const a = document.querySelector('#firstpoll');
const b = document.querySelector('#secondpoll');


onepoll.onclick = function(){
    a.style.display = 'block';
    b.style.display = 'none';
}

twopoll.onclick = function(){
    a.style.display = 'none';
    b.style.display = 'block';
}


// 배경은 바뀌는데 처음에 적용되던 불투명한 레이어가 사라짐. 일단 보류
window.onload = function(){
    var i=2;
    setInterval(() => {
        document.querySelector('#banner').style.backgroundImage = `url("../../images/front${i}.jpg")`;
        i += 1;
        if(i===4) i=1;
    }, 3000);
}
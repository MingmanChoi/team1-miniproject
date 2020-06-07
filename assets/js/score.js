// 버튼 누를때 소리나게 하기
var selectsound = document.querySelector('#selectsound');
var nextsound = document.querySelector('#nextsound');
document.querySelectorAll('input[type=radio]+label').forEach(function(t){
    t.addEventListener('click',function(){
        selectsound.play();
    })
})

// 음악 버튼
var bgmsound = document.querySelector('#bgmsound');
var playpause = document.querySelector('#playpause');
var stopm = document.querySelector('#stopm');
var i=0;
playpause.addEventListener('click',function(){
    playpause.classList.toggle('fa-play-circle');
    playpause.classList.toggle('fa-pause-circle');
    if(i===0) {
        bgmsound.pause();
        i++;
    }
    else{
        bgmsound.play();        
        i = 0;
    }
})
stopm.addEventListener('click',function(){
    bgmsound.pause();
    bgmsound.currentTime = 0;
})
// 점수 계산
document.querySelector('#next').onclick = function result(e) {
    e.preventDefault();
    let checkedNum = document.querySelectorAll('input[type=radio]:checked').length;
    console.log('checkedNum :',checkedNum)
    if(checkedNum < 10){
        alert("선택지를 빠짐없이 선택해주세요!");
    } else {
        let score1 = $('input:radio[name="meet"]:checked').val();
        let score2 = $('input:radio[name="call"]:checked').val();
        let score3 = $('input:radio[name="touch"]:checked').val();
        let score4 = $('input:radio[name="cost"]:checked').val();

        let add1 = $('input:radio[name="closeness"]:checked').val();
        let add2 = $('input:radio[name="group"]:checked').val();
        let add3 = $('input:radio[name="social"]:checked').val();
        let add4 = $('input:radio[name="personality"]:checked').val();
        let add5 = $('input:radio[name="friend"]:checked').val();
    
        result1 = Number(score1)+Number(add1)+Number(add2)+Number(add3)+Number(add4)+Number(add5);
        result2 = Number(score2)+Number(add1)+Number(add2)+Number(add3)+Number(add4)+Number(add5);
        result3 = Number(score3)+Number(add1)+Number(add2)+Number(add3)+Number(add4)+Number(add5);
        result4 = Number(score4)+Number(add1)+Number(add2)+Number(add3)+Number(add4)+Number(add5);

        let answer = Number(result1) + Number(result2) + Number(result3) + Number(result4);
        
        nextsound.play();
        // alert("당신의 연애 확률은"+answer+"% 입니다!")
        setTimeout(() => {
            location.href="result.html?"+answer;
        }, 2000);
    }
}



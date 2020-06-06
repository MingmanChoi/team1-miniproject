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
        
        alert("당신의 연애 확률은"+answer+"% 입니다!")
        location.href="result.html?"+answer;
    }
}



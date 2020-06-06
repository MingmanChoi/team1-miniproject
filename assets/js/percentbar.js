// percent = Number(document.getElementById('percentage'));
let url = decodeURI(location.href)
    temp=url.split("?")
    scores=temp[1]
    console.log('score:',scores)

let score = Number(scores);
function move(){
    var elem = document.getElementById('myBar');
    var width = 1;
    var id = setInterval(frame,10);
    function frame(){
        if (width>=score){
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
        elem.textContent = score + '%'
    }
}

let photo = function(){
    let photolevel = document.querySelector("img");
    if (score>=75) {
    photolevel.src = '/images/4.jpg'
    } else if(score>=50) {
        photolevel.src = '/images/3.jpg'
    } else if(score>=25){
        photolevel.src = '/images/2.jpg'
    } else {
        photolevel.src = '/images/1.jpg'
    }
    photolevel.style.display = 'none';
    $('img').fadeIn(1000);
}

let level = function(){
    let adviceshown = document.querySelector("h1");
    let resultsound = document.querySelector('#resultsound');
    if (score>=75) {
    adviceshown.innerHTML = "당신과 그분의 사이는 "+'<br>'+"4단계 '이미 연인' 단계입니다!"
    resultsound.src = 'audio/congrat.mp3';
    } else if(score>=50) {
        adviceshown.innerHTML = "당신과 그분의 사이는"+'<br>'+" 3단계 '확실한 썸' 단계입니다!"
        resultsound.src = 'audio/ssum.wav';
    } else if(score>=25){
        adviceshown.innerHTML = "당신과 그분의 사이는"+'<br>'+" 2단계 '호감' 단계입니다!"
        resultsound.src = 'audio/hogam.wav';
    } else {
        adviceshown.innerHTML = "당신과 그분의 사이는 "+'<br>'+"1단계 '생판 남' 단계입니다!"
        resultsound.src = 'audio/namnam.wav';
    }
    resultsound.play();
    adviceshown.style.display = 'none';
    $('h1').fadeIn(1000)
}


let advice = function(){
        let adviceshown = document.querySelector("h3");
    if (score>=75) { 
        adviceshown.innerHTML = "- 당신과 그분은 이미 연인 단계입니다. 눈치 싸움이 싫다면 화끈하게 먼저 고백하세요!"+'<br>'+'<br>'+"- 현재 연인이나 다름없는 관계를 이어오고 있는 당신. 누가 먼저 고백하더라도 답은 예스일겁니다!"+'<br>'+'<br>'+"- 강력 꿀팁! 고백을 할 때는 평소와는 다르게 멋지게 차려입고 데이트를 진행해보세요!"       
    } else if(score>=50) {
        adviceshown.innerHTML = "- 당신과 그분은 확실한 썸 단계입니다. 상대에게 부담을 주지 않으며 티나지 않게 잘해주세요!"+'<br>'+'<br>'+"- 그 순간에는 표가 나지 않지만, 나중에 돌이켜보면 일반적인 친구 사이에서 굳이 하지 않아도 될 호의적인 행동이었던 것이 설렘포인트가 될 수 있습니다."+'<br>'+'<br>'+"- 상대를 향한 마음이 크더라도 상대가 나한테 표현하는 정도를 웃도는 수준으로 표현해주는 것이 적절한 밀당효과를 가져올 수 있습니다. "+'<br>'+'<br>'+"강력 꿀팁!썸타는 관계가 설레서 너무 오래 끌어도 바람직하지 않음. 적정 시기가 지나고부터는 점차 '이성사람친구' 단계로 접어들 가능성이 농후합니다!"
    } else if(score>=25) {
        adviceshown.innerHTML = "- 당신과 그분은 호감 단계입니다. 상대방과 마주쳤을 때, 웃으며 먼저 인사해보세요!"+'<br>'+'<br>'+"-상대방에게 인사에서 나아가, 취미나 취향을 공유하며 편하게 말을 걸어보세요. 상대방의 관심사를 미리 알아놓았으면 대화를 이어나가는데 더 도움이 되겠죠?"+'<br>'+'<br>'+"- 강력 꿀팁! 상대방이 들어줄 수 있는 간단한 요구를 한 후, 고마움에 대한 호의로 전시회나 영화, 식사 약속을 잡아보세요!"
    } else {
        adviceshown.innerHTML = "- 당신과 그분은 생판 남입니다. 상대방과 마주쳤을 때, 웃으며 먼저 인사해보세요! "+'<br>'+'<br>'+"- 강력 꿀팁! 말을 걸기에 앞서, 상대방이 어떤 타입의 사람인지, 관심사가 무엇인지를 주변인에게 묻거나 SNS을 통해 파악해보세요"       
    }
    adviceshown.style.display = 'none';
    $('h3, #advforu').fadeIn(1000)
}

// level();
// advice();
// move();
// photo();

setTimeout(move, 0);
setTimeout(level,2000);
setTimeout(photo,2000);
setTimeout(advice,4000);
setTimeout(function(){
    $('#back2home').fadeIn(500);
    setInterval(() => {
        $('#back2home').effect("shake",{times:1,distance:5},300);
    }, 3000);
},6000)


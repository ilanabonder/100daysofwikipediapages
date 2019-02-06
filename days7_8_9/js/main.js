let mobileCheck = false;

  if(navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)){
   mobileCheck = true;
  }

if (mobileCheck === true){
  createHome();
}else{
          $("body").append("<p id='desktop-view'>this is a mobile experience only, to know more about the art of gogyōshi, please access to this webpage using your phone :) </p>");
}

function createHome(){
  // $("body").append("<h2>five lines poem</h2>");
  $("body").append("<img id='home-image' src='5lines20.png'>");
  // $("body").append("<h1>gogyoshi</h1>");
  $("body").append("<button id='btn1'>start</button>");
  $("#btn1").click(function(){
      $("img, #btn1").remove();
      createIntro();
    });
}

function createIntro(){
  $("body").append("<div id='mycontent'></div>")
  $("#mycontent").append("<h1>gogyōshi</h1><h2> Is the freest among other Japanese five-line poetic forms. It incorporates no syllabic or line-breaks and no rhyme scheme. One of the only rules is that it must have a title.</h2>");
  let clickity = 0;
  $(document).click(function (event) {
    console.log(clickity);
      clickity++;
      if (clickity === 2){
        console.log('hello from function');
        shakePage();
      }
  });
  setTimeout(shakePage, 7000);
}

// var i = 0;
// var txt = 'Is the freest among other Japanese five-line poetic forms. It incorporates no syllabic or line-breaks and no rhyme scheme. One of the only rules is that it must have a title. ';
// var speed = 80;
//
// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("intoText").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
//   if (i === 165){
//     setTimeout(shakePage, 3000);
//     once = true;
//   }
// }

function shakePage(){
  clickity = 3;
  $("h2, h1, img, h4").remove();
  $("body").css("background-color", "black");
  $("#mycontent").append("<img id='shake-img' src='shake.png' alt='shake your phone image'><h4 style='color: white; font-weight: 300;'>shake your phone to discover new  goyoshi poems</h4>")

  listenToShake();
}

let myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

function listenToShake(){
  console.log('i am listening to the shake!')
  myShakeEvent.start()
  window.addEventListener('shake', shakeEventDidOccur, false);
  // shakeEventDidOccur();
}

let myNumbers = [];

function shakeEventDidOccur () {
  $("body").css("background-color", "white");
  let url = '../poems.json';
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let number = Math.round(Math.random()*data.length);
    if(myNumbers.includes(number)){
      number = Math.round(Math.random()*data.length);
    }else if(myNumbers.length === data.length){
      myNumbers = [];
      number = Math.round(Math.random()*data.length);
    }else{
      $("img, h4, h1, h2, h3").remove();
      $("#mycontent").append("<h1>"+ data[number].title + "</h1><h2>"+data[number].text+"</h2><h3>"+data[number].author+"</h3>");
      myNumbers.push(number);
    }
  });
}

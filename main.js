let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let secondElement = document.querySelector(".second");


function restart(){
  setInterval(() => {
    let data = new Date();
    let second =data.getSeconds();

    secondElement.textContent=second;

    if(second >= 0 && second <= 25){
      red.style.opacity="1";
      yellow.style.opacity="0.2";
      green.style.opacity="0.2";

    }else if(second > 25 && second <= 35){
      red.style.opacity = "0.2";
      yellow.style.opacity = "1";
      green.style.opacity = "0.2";

    }else{
      red.style.opacity = "0.2";
      yellow.style.opacity = "0.2";
      green.style.opacity = "1";
    }
    
  }, 1000);
}
restart();

console.log("Rekenspel is gestart...");
const myAssignment = document.getElementById("myAssignment");

let sound1 = new Audio();
let sound2 = new Audio();

function makeSum(){
  console.log("makeSum initialized");
  var nummer1 = Math.floor(Math.random() * 9)+1;
  var nummer2 = Math.floor(Math.random() * 9)+1;
  var foutGoed;
  goedFoutImage.src = "feedback.png";
  foutGoed = " ";
  som = nummer1 + " x " + nummer2;
  rightAnswer = nummer1 * nummer2;
  myAssignment.innerHTML = som;
  myAnswer.focus()
}


function keyPressed(){
  console.log("keypressed");
  myAnswer.addEventListener('keydown' ,(evt)=>{
    console.log(evt.keyCode);
    if(evt.keyCode == 13){
      if (myAnswer.value == rightAnswer){
        console.log('goed');
        sound2.src = "good.wav";
        sound2.play();
        goedFoutImage.src = "feedbackgood.png";
        myAnswer.style.backgroundColor = "green";
      }
      else{
        console.log('fout');
        goedFoutImage.src = "feedbackwrong.png";
        sound1.src = "wrong.wav";
        sound1.play();
        myAnswer.style.backgroundColor = "red";
      }
    }
  })

}
function waiting(){

console.log('waiting');
myAnswer.value="";
makeSum();
}
myAnswer.addEventListener('keydown', keyPressed, false);
makeSum();

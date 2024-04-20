if (document.readyState=='loading()'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready()
}
function ready(){
  document.getElementsByClassName('submitbtn')[0].addEventListener('click',submitButtonClicked)
}
function submitButtonClicked(){
    alert("Your response has been submitted")
    console.log("SUBMITTED")
  }
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img"); //this will add class name to imgBox written in ("")
  }
  else{
    qrText.classList.add("error");
    // should not include a dot (.) in the class name when using classList.add and classList.remove
    
    setTimeout(()=>{
        qrText.classList.remove("error");
    },1000);
  }
}

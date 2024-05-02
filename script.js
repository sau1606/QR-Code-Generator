let imgBox = document.getElementById("imgBox");
let qrCode = document.getElementById("qrCode");
let qrText = document.getElementById("qrText");
let downloadBtn = document.getElementById("downloadBtn");

function genQR() {
  if (qrText.value.length > 0) {
    qrCode.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
    downloadBtn.style.display = "block";
  } else {
    qrText.classList.add("error");
    setTimeout(()=> {
        qrText.classList.remove("error");
    },1000);
    //alert("add some text");
  }
}
// downloadBtn.addEventListener("click", function() {
//     const link = document.createElement('a');
//     link.download = 'qr-code.png';
//     link.href = qrCode.src;
//     link.click();
// });

downloadBtn.addEventListener("click", function() {
    fetch(qrCode.src)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'qr-code.png';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        });
});


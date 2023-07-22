function generateQR() {
    var gapi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var myImg = document.getElementById("img");
    var mySize = document.getElementById("size").value;
    var myText = document.getElementById("qrtext").value;
var qrCodeImg = new Image();
    qrCodeImg.src = gapi + mySize + "x" + mySize + "chl=" + myText;
    

    if (myText !== "" && mySize === "100") {
      myImg.src = gapi + "100x100" + "&chl=" + myText;
    } else if (myText !== "" && mySize === "150") {
      myImg.src = gapi + "150x150" + "&chl=" + myText;
    } else if (myText !== "" && mySize === "200") {
      myImg.src = gapi + "200x200" + "&chl=" + myText;
    } else if (myText !== "" && mySize === "250") {
      myImg.src = gapi + "250x250" + "&chl=" + myText;
    } else if (myText !== "" && mySize === "300") {
      myImg.src = gapi + "300x300" + "&chl=" + myText;
    } else {
      alert("Please Enter Text");
    }


  }
  
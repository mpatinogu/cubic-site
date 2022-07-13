// Get the modal
var modal = document.getElementById("mc_embed_signup");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


var btnBuy = document.getElementById("buyBtn");
if(getCookie('magic') == 'a4c6af0cb6f02dff01ba174e4cf11f24f73d9ed16ca7a1e3c9d831c0139faa5c') {
    btnBuy.style.display = "block"
}
// When the user clicks on the button, open the modal

$(function(){
  $('.selectpicker').selectpicker();
});


function openWindow(option) {
    switch (option) {
        case 1:
            let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=600,height=800,left=100,top=100`;
            window.open('https://buy.stripe.com/4gw2b5fBOehU88w3ce', 'Pay window');
            break;
        case 2:
            window.open('https://opensea.io/collection/andywarholcubes', 'Pay window');
            break;
        case 3:
            window.open(" https://discord.gg/VEbyEQusYD");
            break;
    }
  }

//When the user clicks on <span> (x), close the modal
function hideModal() {
  let modal = document.getElementById("mc_embed_signup");
  modal.style.display = "none";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}






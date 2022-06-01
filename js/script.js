// Get the modal
var modal = document.getElementById("mc_embed_signup");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//var btn = document.getElementById("myBtn");
//var myBtnDiscord = document.getElementById("myBtnDiscord");

var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// When the user clicks on the button, open the modal

var myBtnDiscord1 = document.getElementById("myBtnDiscord1");
var myBtnDiscord2 = document.getElementById("myBtnDiscord2");
var myBtnDiscord3 = document.getElementById("myBtnDiscord3");


myBtnDiscord1.onclick = function() {
  window.open("https://discord.gg/cubic");
}

myBtnDiscord2.onclick = function() {
  window.open("https://discord.gg/cubic");
}

myBtnDiscord3.onclick = function() {
  window.open(" https://discord.gg/cubic");
}

btn1.onclick = function() {
  modal.style.display = "block";
}



btn2.onclick = function() {
  modal.style.display = "block";
}



btn3.onclick = function() {
  modal.style.display = "block";
}



//When the user clicks on <span> (x), close the modal
function hideModal() {
  let modal = document.getElementById("mc_embed_signup");
  modal.style.display = "none";
}






var count = 1;
var workCount = 1;

function _id(id) {
    return document.getElementById(id)
}

function after() {
    if (count < 5) {
        count = count + 1;
    }
    validateSlider(count)
}

function before() {
    if (count > 1) {
        count = count - 1;
    }
    validateSlider(count)
}

function neutroSlider(value) {
    count = value
    validateSlider(count)
}

function validateSlider(count) {
    if (count == 1) {
        _id('slider1').style.display = '';
        _id('slider2').style.display = 'none';
        _id('slider3').style.display = 'none';
        _id('slider4').style.display = 'none';
        _id('slider5').style.display = 'none';
        _id('slider1').setAttribute('class', 'container_content margin-top-10px dropdown4');
        setTimeout(function () {
            _id('slider1').setAttribute('class', 'container_content margin-top-10px');
        }, 10);


    } else if (count == 2) {
        _id('slider1').style.display = 'none';
        _id('slider2').style.display = '';
        _id('slider3').style.display = 'none';
        _id('slider4').style.display = 'none';
        _id('slider5').style.display = 'none';
        _id('slider2').setAttribute('class', 'container_content margin-top-10px dropdown4');
        setTimeout(function () {
            _id('slider2').setAttribute('class', 'container_content margin-top-10px');
        }, 10);


    } else if (count == 3) {
        _id('slider1').style.display = 'none';
        _id('slider2').style.display = 'none';
        _id('slider4').style.display = 'none';
        _id('slider5').style.display = 'none';
        _id('slider3').style.display = '';
        _id('slider3').setAttribute('class', 'container_content margin-top-10px dropdown4');
        setTimeout(function () {
            _id('slider3').setAttribute('class', 'container_content margin-top-10px');
        }, 10);


    } else if (count == 4) {
        _id('slider1').style.display = 'none';
        _id('slider2').style.display = 'none';
        _id('slider3').style.display = 'none';
        _id('slider5').style.display = 'none';
        _id('slider4').style.display = '';
        _id('slider4').setAttribute('class', 'container_content margin-top-10px dropdown4');
        setTimeout(function () {
            _id('slider4').setAttribute('class', 'container_content margin-top-10px');
        }, 10);



    } else if (count == 5) {
        _id('slider1').style.display = 'none';
        _id('slider2').style.display = 'none';
        _id('slider3').style.display = 'none';
        _id('slider4').style.display = 'none';
        _id('slider5').style.display = '';
        _id('slider5').setAttribute('class', 'container_content margin-top-10px dropdown4');
        setTimeout(function () {
            _id('slider5').setAttribute('class', 'container_content margin-top-10px');
        }, 10);

    }
}

function workAfter() {
    if (workCount < 3) {
        workCount = workCount + 1;
    }
    if(workCount == 1) {
        _id('works').src = 'img/Obra_Warhol.png'
    } else if(workCount == 2) {
        _id('works').src = 'img/Obra_2.jpg'
    } else if(workCount == 3) {
        _id('works').src = 'img/Obra_3.jpeg'
    }
}

function workBefore() {
    if (workCount > 1) {
        workCount = workCount - 1;
    }
    if(workCount == 1) {
        _id('works').src = 'img/Obra_Warhol.png'
    } else if(workCount == 2) {
        _id('works').src = 'img/Obra_2.jpg'
    } else if(workCount == 3) {
        _id('works').src = 'img/Obra_3.jpeg'
    }
}

//_id('element1').style.backgroundColor = '#ABB2B9';
//_id('element2').style.backgroundColor = '#000000';
//_id('element3').style.backgroundColor = '#000000';

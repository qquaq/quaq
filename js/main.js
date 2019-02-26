function openTab(evt, tabTitle) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabTitle).style.display = "block";
    evt.currentTarget.className += " active";
};
var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6", "mySlides7", "mySlides8", "mySlides9", "mySlides10"];
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);


function plusSlides(n, no) {
    $("iframe").each(function () {
        var src = $(this).attr('src');
        $(this).attr('src', src);
    });
    showSlides(slideIndex[no] += n, no);
};

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1
    }
    if (n < 1) {
        slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

var ft = document.querySelectorAll('.fromtop');
//wwwwwwwwwww
var nodeft = anime({
    targets: ft,
    translateY: [-1000, 0],
    duration: 4000,
    elasticity: 10,
    autoplay: false,
});

var fl = document.querySelectorAll('.fromleft');
//wwwwwwwwwww
var duckAnim = anime({
    targets: fl,
    translateX: [-1000, 0],
    duration: 3000,
    elasticity: 15,
    easing: 'easeInOutQuart',
    autoplay: false,
});

var fl2 = document.querySelectorAll('.fromleft2');

var textAnim1 = anime({
    targets: fl2,
    translateX: [-2000, 0],
    duration: 1000,
    elasticity: 5,
    easing: 'easeInOutQuart',
    autoplay: false,
});

var fl3 = document.querySelectorAll('.fromleft3');

var textAnim2 = anime({
    targets: fl3,
    translateX: [-2000, 0],
    duration: 2000,
    elasticity: 5,
    easing: 'easeInOutQuart',
    autoplay: false,
});

var seekProgressEl = document.querySelector('#seekAnim .progress');

if (seekProgressEl) {
    seekProgressEl.addEventListener('input', function () {
        duckAnim.seek(duckAnim.duration * (document.body.scrollTop / 10));
    });
}

var fb1 = document.querySelectorAll('.frombottom1');
//wwwwwww
var nodefb1 = anime({
    targets: fb1,
    translateY: [500, 0],
    duration: 1500,
    elasticity: 15,
    autoplay: false,
});

var fb2 = document.querySelectorAll('.frombottom2');
//wwwwwww
var nodefb2 = anime({
    targets: fb2,
    translateY: [500, 0],
    duration: 2500,
    elasticity: 15,
    autoplay: false,
});

var fb3 = document.querySelectorAll('.frombottom3');
//wwwwwwwww
var nodefb3 = anime({
    targets: fb3,
    translateY: [500, 0],
    duration: 3500,
    elasticity: 15,
    autoplay: false,
});

var fb4 = document.querySelectorAll('.frombottom4');

var nodeList4 = anime({
    targets: fb4,
    translateY: [1000, 0],
    duration: 1000,
    elasticity: 20,
    autoplay: false
});


$('.in1').waypoint(function () {
    textAnim1.play();
    textAnim2.play();
}, {
    offset: '100%'
});

$('.in2').waypoint(function () {
    nodeList4.play();
}, {
    offset: 50
});

window.onload = function () {
    document.getElementsByClassName('load')[0].style.display = 'none';
    
    nodeft.play();
    duckAnim.play();
    nodefb1.play();
    nodefb2.play();
    nodefb3.play();
}

/* Bootstrap tooltips */

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


/* Smooth scrolling on links*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/* Make menu vertical on small screen */
$(window).resize(function () {

    if ($(window).width() < 768) {
        $('#ext-links').removeClass('flex-column');
    } else {
        $('#ext-links').addClass('flex-column');
    }


    if ($(window).width() < 420) {
        $('#mainNavBar').removeClass('btn-group');
        $('#mainNavBar').addClass('btn-group-vertical');
    } else {
        $('#mainNavBar').addClass('btn-group');
        $('#mainNavBar').removeClass('btn-group-vertical');
    }

});


/* Img replacement */

async function getCorgi() {
    let response = await fetch(`https://dog.ceo/api/breed/corgi/cardigan/images/random`);
    let jsonCorgi = await response.json();
    return jsonCorgi.message;
}

async function replaceImg() {
    $('.img-fluid').each(async function () {
        let doggo = "await getCorgi()"
        $(this).attr(`src`, doggo)
    })
}

/* Vaporwave */

let vapor = false;

function makeVapor() {
    vapor = true;
    $(`#fiji`).off(`click`, makeVapor);
    $('#myface').attr(`src`, "/assets/img/ja-glitch.png")
    $("#brand").html("Ｍ． ＭＩＣＨＴ▲");
    $("body").addClass("body-alt");
    $("nav").toggleClass("bg-light nav-alt");
    $("a.nav-item").toggleClass("btn-outline-secondary btn-outline-primary ");
    $(".footer").toggleClass("bg-light footer-alt");
    $(`#fiji`).on(`click`, makeBoring);
    
}

function makeBoring() {
    vapor = false;
    $(`#fiji`).off(`click`, makeBoring);
    $('#myface').attr(`src`, "/assets/img/ja1.jpg")
    $("#brand").html("M. Michta");
    $("body").removeClass("body-alt");
    $("nav").toggleClass("bg-light nav-alt");
    $("a.nav-item").toggleClass("btn-outline-secondary btn-outline-primary ");
    $(".footer").toggleClass("bg-light footer-alt");
    $(`#fiji`).on(`click`, makeVapor);
   
}


//$(`#fiji`).on(`click`, replaceImg);
$(`#fiji`).on(`click`, makeVapor);
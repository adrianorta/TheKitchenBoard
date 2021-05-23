$( document ).ready(function() {
    scrollFunction(document.getElementById("navbar-brand"));
    addPhoneNumberCopyListenerToZelleElements("zelle-btn");
    addClickListenerToGalleryElements("gallery-two");
    window.onscroll = function() {scrollFunction(document.getElementById("navbar-brand"))};
    $(".newcarousel-container").height($(".newcarousel-img").height());
});

function scrollFunction(elem) {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    elem.style.height = "130px";
    $('nav').addClass('nav-shadow');
    $('nav').removeClass('bg-transparent');
  } else {
    elem.style.height = "200px";
    $('nav').removeClass('nav-shadow');
    $('nav').addClass('bg-transparent');
  }
}

function addPhoneNumberCopyListenerToZelleElements(zelleElementClassName){
    var zelleElements = document.getElementsByClassName(zelleElementClassName);
    for (let element of zelleElements) {
        element.addEventListener("click", function(event) {
            navigator.clipboard.writeText("(786)444-9416");
            event.preventDefault();
        }, false);
    }
}

function addClickListenerToGalleryElements(galleryElementClassName){
    var galleryElements = document.getElementsByClassName(galleryElementClassName);
    for (let element of galleryElements) {
        element.addEventListener("click", function() {
            $("#gallery-modal-img").attr("src", $(this).first().parent().find('img')[0].src.replace("-sm", "-lg"));
            $(".gallery-two").removeAttr("data-bs-toggle");
            $(this).attr("data-bs-toggle", "modal");
        }, false);
    }
}
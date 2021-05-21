$( document ).ready(function() {

    addPhoneNumberCopyListenerToZelleElements("zelle-btn");
    addClickListenerToGalleryElements("gallery-two");

    var quadimages = document.querySelectorAll("#quad figure");
    for(i=0; i<quadimages.length; i++) {
        quadimages[i].addEventListener('click', function(){ this.classList.toggle("expanded"); quad.classList.toggle("full") }); 
    }

    window.onscroll = function() {scrollFunction(document.getElementById("navbar-brand"))};

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});

function scrollFunction(elem) {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    elem.style.height = "130px";
  } else {
    elem.style.height = "200px";
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
        }, false);
    }
}
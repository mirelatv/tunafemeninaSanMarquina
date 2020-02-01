

/*FUNCION ANIMATION TITLE*/


$(document).ready(function () {


  'use strict';

  $(window).on('scroll', function () {

      if ($(this).scrollTop() >= 218) {
          $('nav').addClass('nav-fixed');
          $('.loguito').addClass('logazo')
         $('main').css('margin-top', '70px');
          
      } else {
          $('nav').removeClass('nav-fixed');
          $('main').css('margin-top', '0');
          $('.loguito').removeClass('logazo')
      }

  });
});

/*para integrantes*/

var snippet = [].slice.call(document.querySelectorAll('.hover'));
if (snippet.length) {
  snippet.forEach(function (snippet) {
    snippet.addEventListener('mouseout', function (event) {
      if (event.target.parentNode.tagName === 'figure') {
        event.target.parentNode.classList.remove('hover')
      } else {
        event.target.parentNode.classList.remove('hover')
      }
    });
  });
}
/* inicio de  Scroll- section menu se torne granate

$(window).scroll(function () {
  if ($("#menu").offset().top >10) {
    $("#menu").show("slow").addClass("black");
  } else {
    $("#menu").removeClass("black");
  }

}
)*/
/*funcion para que el hover  en fondo granate  sea blanco
$(window).scroll(function () {
  if ($("#caja") && $("#caja").offset().top > 160) {
    $("#caja").show("slow").addClass("caja");
  } else {
    $("#caja").removeClass("caja");
  }

}
) funcion para mostrar section oculta 

$(document).ready(function () {
  $("#more").on("click", function () {
    $('#display').show("slow"); //muestro mediante id
    $('.display').addClass("animation")
    $('.imagesImpacto').addClass('imagesEfect');
    $('#more').addClass('moreDisplay');

  });
  $("#hide").on("click", function () {
    $('#display').addClass("d-none").hide("slow"); //oculto mediante id
    $('#more').removeClass('moreDisplay');
  });
});*/


/*funicon de titulo impacto

var spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
  span.addEventListener('mouseover', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });

  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx + 1))
});*/

//Ahijadas hover//

/*Pagina Life*/

/*iNTEGRANTES*/


/*para galeria*/



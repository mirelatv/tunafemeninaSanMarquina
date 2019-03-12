

/*FUNCION ANIMATION TITLE*/


  
/* inicio de  Scroll- section menu se torne granate*/

$(window).scroll(function () {
  if ($("#menu").offset().top >10) {
    $("#menu").show("slow").addClass("black");
  } else {
    $("#menu").removeClass("black");
  }

}
)
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





$(document).ready(function () {

  // Smooth scrolling
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "" && !$(this).attr("data-toggle")) {
      event.preventDefault();
      var hash = this.hash;

      // Ajustar o deslocamento para considerar a altura da navbar
      var offset = $(hash).offset().top - $(".navbar").outerHeight();

      $("html, body").animate(
        {
          scrollTop: offset,
        },
        350,
        function () {
          // Atualizar o hash na URL sem causar scroll adicional
          if (history.pushState) {
            history.pushState(null, null, hash);
          } else {
            window.location.hash = hash;
          }
        }
      );

      // Collapse the navbar after clicking on an item (only on mobile view)
      if ($(".navbar-toggler").is(":visible")) {
        $(".navbar-collapse").collapse("hide");
      }
    }
  });

  // Show modal when clicking on the "Download" menu item
  $('a[href="#download"]').on("click", function (event) {
    event.preventDefault();
    $("#downloadModal").modal("show");
  });

  // Show gallery modal when clicking on the "Gallery" menu item
  $('a[href="#gallery"]').on("click", function (event) {
    event.preventDefault();
    $("#galleryModal").modal("show");
  });

  // Show versoes modal when clicking on the "Gallery" menu item
  $('a[href="#versoes"]').on("click", function (event) {
    event.preventDefault();
    $("#previousVersionsModal").modal("show");
  });

  // Activate scrollspy with correct offset
  $("body").scrollspy({ target: ".navbar", offset: $(".navbar").outerHeight() + 10 });

  // Prevent scrolling when clicking on tab links
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    // Check if the hash is present in the URL and remove it to prevent scroll
    if (history.pushState) {
      history.pushState(null, null, " ");
    } else {
      window.location.hash = "";
    }
  });

  // Mostrar botões flutuantes ao rolar para o fim da página
  $(window).on("scroll", function () {
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();

    if (
      scrollPosition <= 100 ||
      scrollPosition + windowHeight >= documentHeight - 100
    ) {
      $("#botao-inscricao").fadeIn();
      $("#botao-submissao").fadeIn();
      $("#botao-compartilhar").fadeIn();
    } else {
      $("#botao-inscricao").fadeOut();
      $("#botao-submissao").fadeOut();
      $("#botao-compartilhar").fadeOut();
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");

    navbarToggler.addEventListener("click", function () {
      this.classList.toggle("collapsed");
    });
  });


  // Collapse navbar when clicking on the brand link
  $('a.navbar-brand').on('click', function () {
    if ($(".navbar-collapse").hasClass("show")) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  // Script para alternar entre Expandir biografia e Retrair biografia 
  document.querySelectorAll('.toggle-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        // Verifica se o conteúdo está expandido ou colapsado
        var collapseElement = document.querySelector(this.getAttribute('href'));
        if (collapseElement.classList.contains('show')) {
            this.textContent = 'Expandir biografia';
        } else {
            this.textContent = 'Recolher biografia';
        }
    });
});

});

$(function () {
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      centerMode: true,
      centerPadding: '0',
      responsive: [
        {
          breakpoint: 1218, // Breakpoint at 768px screen width
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 767, // Breakpoint at 480px screen width
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
  });

  $(function () {
    $('.single-item').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 3,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      centerMode: true,
      centerPadding: '0',
    });
  });










  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
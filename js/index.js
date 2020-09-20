$(document).ready(function () {
  $(".portfolio-item").isotope(function () {
    itemSelector: ".item";
  });
  $(".portfolio-menu ul li").click(function () {
    $(".portfolio-menu ul li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    $(".portfolio-item").isotope({
      filter: selector,
    });
    return false;
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-50px";
  }
}

$(document).ready(function () {
  $("body").scrollspy({ target: ".navbar" });

  $(".nav-link").on("click", function () {
    var clickedItem = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(clickedItem).offset().top,
      },
      1500
    );
  });
});

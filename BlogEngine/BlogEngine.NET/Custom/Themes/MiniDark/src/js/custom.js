var links = document.getElementsByClassName("social-item");
for (i = 0; i < links.length; ++i) {
    link = links[i];
    if (link.href == "" || link.href == window.location.href) {
        link.style.display = "none";
    }
}

var loginLink = $(".login-link a").attr("href");
if (loginLink == "/admin/") {
    $(".logoff-link").css("display", "block");
}

//
$(".blog-nav-toggle .fa-search").click(function () {
    $(".blog-nav ul").hide();

    $(".blog-search").fadeToggle();
    $(".blog-search input").focus();
});

$(".blog-nav-toggle .fa-navicon").click(function () {
    $(".blog-search").hide();
    $(".blog-nav ul").fadeToggle();
});

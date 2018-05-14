// POPUP HIDE/CLOSE
(function () {

    let resbox = $('#resbox');
    let closingx = $('#closingx');

    $('#popup').hide(); //hiding popup by default 

    resbox.click(function () {
        $('#popup').fadeIn(400);
    })

    closingx.click(function (e) {
        e.stopPropagation();
        $('#popup').fadeOut(400);
    });
})();


// SEARCH INPUT
(function () {
    let searchbar = $('ul.navigationList li input');
    searchbar.hide();
    let searchIcon = $('i.ion-ios-search');
    searchIcon.click(function () {
        searchbar.toggle('slow');
    })
})();

//SCROLL TO TOP
(function () {
    let scrollDiv = $("a[href='#top']");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            scrollDiv.fadeIn();
        } else {
            scrollDiv.fadeOut();
        }
    });

    scrollDiv.click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });


})();
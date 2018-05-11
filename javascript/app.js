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
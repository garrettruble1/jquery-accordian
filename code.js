$(document).ready(function(){

    //Reset Drawers

    $('.accordion').find('.inner').hide();


    //Click Handlers

    $('.toggle').click(function(){

        let content = $(this).parent().next();
        let menuContent = $(this).parent().parent().find('.inner');
        let icon = $(this).find('.icon-span');

        if (content.is(':hidden') == true) {
            menuContent.slideUp();
        }

        content.slideToggle();

        icon.toggleClass('iconRotate');

        content.toggleClass('accordion__item--shadow');

    });
});
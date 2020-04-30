$(document).ready(function(){

    //Reset Drawers

    $('.accordion').find('.inner').slideUp();


    //Click Handlers

    $('#toggle1').click(function(){

            let content1 = $('#toggle1').parent().next();
            let allMenuContent = $('#toggle1').parent().parent().find('.inner');

            //Functionality

            $(allMenuContent).slideUp();

            $(content1).slideToggle();

            //Styling

            $('#toggle1').find('.icon-span').toggleClass('iconRotate');

            $(content1).toggleClass('accordion__item--shadow');

            });

    $('#toggle2').click(function(){

        let content1 = $('#toggle2').parent().next();
        let allMenuContent = $('#toggle2').parent().parent().find('.inner');

        $(allMenuContent).slideUp();

        $(content1).slideToggle();
        
        $('#toggle2').find('.icon-span').toggleClass('iconRotate');

        $(content1).toggleClass('accordion__item--shadow');

        });

    $('#toggle3').click(function(){

        let content1 = $('#toggle3').parent().next();
        let allMenuContent = $('#toggle3').parent().parent().find('.inner');

        $(allMenuContent).slideUp();

        $(content1).slideToggle();

        $('#toggle3').find('.icon-span').toggleClass('iconRotate');

        $(content1).toggleClass('accordion__item--shadow');

        });

    $('#toggle4').click(function(){

        let content1 = $('#toggle4').parent().next();
        let allMenuContent = $('#toggle4').parent().parent().find('.inner');

        $(allMenuContent).slideUp();

        $(content1).slideToggle();

        $('#toggle4').find('.icon-span').toggleClass('iconRotate');

        $(content1).toggleClass('accordion__item--shadow');

        });

});
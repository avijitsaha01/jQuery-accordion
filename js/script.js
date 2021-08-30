$(function(){
    $('.menu-heading').click(function(){
        if($(this).next('.menu-body').hasClass('active')){
            $(this).next('.menu-body').removeClass('active').slideUp(500);
            $(this).children('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
        else{
            $('.menu .menu-body').removeClass('active').slideUp(500);
            $('.menu .menu-heading i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            $(this).next('.menu-body').addClass('active').slideDown(500);
            $(this).children('i').removeClass('fa-chevron-down').addClass('fa-chevron-up')
        }
        // $(this).next('.menu-body').slideToggle();
    })
})
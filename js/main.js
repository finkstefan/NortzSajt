

$(window).scroll(function(e) {
    $('.bg_1').css({transform: 'translateZ(' + window.scrollY / 7  + 'px)'})
    $('.bg_2').css({transform: 'translateZ(' + window.scrollY / 2  + 'px)',filter: 'blur(' + window.scrollY / 100 + 'px)'})
    $('.bg_3').css({transform: 'translateZ(' + window.scrollY / 3 + 'px) translateY(' + window.scrollY / 8 + 'px)', filter: 'blur(' + window.scrollY / 400 + 'px)'})
    $('.bg_4').css({transform: 'translateZ(' + window.scrollY / 6 + 'px)'})
    $('.bg_5').css({transform: 'translateZ(' + window.scrollY / 4 + 'px)',filter: 'blur(' + window.scrollY / 800 + 'px)'})
    $('.bg_6').css({transform: 'translateZ(' + window.scrollY / 1 + 'px) translateX(' + window.scrollY / 2 + 'px)'})
    $('.bg_7').css({transform: 'translateZ(' + window.scrollY / 4 + 'px) translateX(' + -window.scrollY + 'px)'})
    $('.bg_8').css({transform: 'translateZ(' + window.scrollY / 1 + 'px) translateX(' + window.scrollY / 2 + 'px)'})
    $('.bg_9').css({transform: 'translateZ(' + window.scrollY + 'px) translateX(' + window.scrollY / 2 + 'px)'}) 
    $('.bg_10').css({transform: 'translateZ(' + window.scrollY / 4 + 'px) translateX(' + window.scrollY / 800+ 'px)'}) 
    $('.bg_11').css({transform: 'translateZ(' + window.scrollY / 3 + 'px) translateY(' + window.scrollY / 8 + 'px)'}) 
    $('.bg_13').css({transform: 'translateZ(' + window.scrollY + 'px) translateX(' + window.scrollY / 2 + 'px)'}) 
    $('.bg_14').css({transform: 'translateZ(' + window.scrollY / 4 + 'px) translateX(' + window.scrollY / 800+ 'px)'})
    $('.bg_15').css({transform: 'translateZ(' + window.scrollY / 3 + 'px) translateY(' + window.scrollY / 8 + 'px)'}) 
    $('.bg_20').css({transform: 'translateZ(' + window.scrollY / 3 + 'px) translateY(' + window.scrollY / 8 + 'px)'})  
   // $(".container").css("bottom", $(window).scrollTop() * -1);
  

    if (scrollY > 400) {
       
        $('h1').css({transform: 'translateY(' + -window.scrollY / 6 + 'px) translateX(-50%)'})
        $('.logodiv').css({transform: 'translateY(' + -window.scrollY / 5 + 'px) translateX(-50%)'})
        $("#kontaktbtn").css({transform: 'translateY(' + -window.scrollY / 6 + 'px) translateY(600%) '})
      
    }

})

var button = document.getElementById('projektiButton');
button.onclick = function() {
  location.assign('/projekti.html');
}

/*$(document).ready(function(){ 
  $(window).scroll(function(){
    $('.container').css('transform', 'translate3d(0,' + $(this).scrollTop()*2 + 'px, 0)'); 
 }).scroll();
});  */




import './../styles/main.scss';

//import { showMenu } from './menu';
//showMenu();

$('.no-border').click(function(){
  $('.no-border').css('border', 'none')
});



///---------------------------------------------------MASK TEXT FIELD

   jQuery(document).ready(function($){
       $('[name=date]').mask('99/99/9999',{placeholder:'ДД.ММ.ГГГГ'} );   
      });


//-=---------------------------------CHECKBOX BUTTONS

    jQuery(document).ready(function(){
      $('.Smoke').click(function () {
          $('.containerSmoke').toggleClass('containerChecked')});
      $('.Pets').click(function () {
          $('.containerPets').toggleClass('containerChecked')});
      $('.Guests').click(function () {
          $('.containerGuests').toggleClass('containerChecked');
      });
      });



      /////////-------------------------------RADIO BUTTONS

     

     
      


 ///------------------------- TOGGLE


        $('.cb-value').click(function() {
          var mainParent = $(this).parent('.toggle-btn');
          if($(mainParent).find('input.cb-value').is(':checked')) {
            $(mainParent).addClass('active');
            $(this).attr('checked', 'checked');
          } else {
            $(mainParent).removeClass('active');
            $(this).removeAttr('checked');
          }
        })

        
   
        

        
  ////--------------------LIKE BUTTONS

  
  jQuery(document).ready(function(){
    $('.dislike').click(function () {
        $('.dislike').toggleClass('like')});
    });

    jQuery(document).ready(function(){
        $('.dislikesecond').click(function () {
            $('.dislikesecond').toggleClass('like')});
        });
    



 $(document).ready(function() {
  $('.dislike').click(function() {
    let like = parseInt($('.count').html());
    if ($(this).hasClass("clicked")) {
      $(this).removeClass("clicked");
      like--;
    } else {
      $(this).addClass("clicked");
      like++;
    }
    $('.count').html(like)
  });
});


$(document).ready(function() {
    $('.dislikesecond').click(function() {
      let dislike = parseInt($('.countl').html());
      if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked");
        dislike--;
      } else {
        $(this).addClass("clicked");
        dislike++;
      }
      $('.countl').html(dislike)
    });
  });

// -------------------------------



 jQuery(document).ready(function(){
 var nonLinearSlider = document.getElementById('r-slider');

noUiSlider.create(nonLinearSlider, {
    connect: true,
    behaviour: 'tap',
    step:100,    
    start: [5000, 10000],
    range: {
        'min': [0],
        'max': [15000], },

    format: wNumb({
            decimals: 0,
            thousand: ' '
        })
    
})

var nodes = [
    document.getElementById('lower-value'), // 0
    document.getElementById('upper-value')  // 1
];

// Display the slider value and how far the handle moved
// from the left edge of the slider.
nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodes[handle].innerHTML = values[handle] + '&#8381';

});
});
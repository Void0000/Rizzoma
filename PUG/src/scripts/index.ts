import './../styles/main.scss';
import 'nouislider.min.js';
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

    $('.dislike').click(function(){
      $('.dislike').val(('.like')+1);
 });



// -------------------------------



 jQuery(document).ready(function(){
 var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
})
});
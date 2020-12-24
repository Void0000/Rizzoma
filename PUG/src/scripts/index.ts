import './../styles/main.scss';
//import { showMenu } from './menu';
//showMenu();


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

      jQuery(document).ready(function(){
        $('input[type=radio]').change(function () {
            $('input[type=radio]').not(this).prop('checked', false);
        })});

     
      
  
        

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
      let like = $(this).html();
      like = like + 1;
 });

 $('.no-border').click(function(){
  $('.no-border').css('border', 'none')
});


 
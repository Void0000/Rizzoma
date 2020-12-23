import './../styles/main.scss';
//import { showMenu } from './menu';
//showMenu();




   jQuery(document).ready(function($){
       $('[name=date]').mask('99/99/9999',{placeholder:'ДД.ММ.ГГГГ'} );   
      });

    jQuery(document).ready(function(){
      $('.Smoke').click(function () {
          $('.containerSmoke').toggleClass('containerChecked')});
      $('.Pets').click(function () {
          $('.containerPets').toggleClass('containerChecked')});
      $('.Guests').click(function () {
          $('.containerGuests').toggleClass('containerChecked');
      });
      });

      jQuery(document).ready(function(){
        $('.Man').click(function () {
            $('.containerRadio.M').toggleClass('containerRadioChecked')});
        $('.Women').click(function () {
            $('.containerRadio.Women').toggleClass('containerRadioChecked');
        });
        });
      



   
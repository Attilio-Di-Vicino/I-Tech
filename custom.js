// popup disclaimer
  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
// Effetti menu che prende colore
$(document).ready(function(){

    $('body').scrollspy({ target: '#navbar' });

    $(".navbar-collapse ul li a[href^='#'], .scroll-animate").on('click',function(e){

      target = this.hash;
      e.preventDefault();

      $('html,body').animate({
        scrollTop : $(this.hash).offset().top
      }, 600, function(){
        window.location.hash = target;
      });

      $(".navbar-collapse").collapse('hide');

    });

    var scroll = 0;
    $(document).scroll(function(){
      scroll = $(this).scrollTop();

      if(scroll > 800){
        $(".navbar").css({"background-color": "rgba(41, 40, 40, 0.589)", "margin-top" : "0px"});
      } else {
        $(".navbar").css({"background-color": "transparent", "margin-top" : "20px"});
      }

    });
  });
  // Typefrom popup
         (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement,
          gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/";
           if(!gi.call(d,id)){ 
              js=ce.call(d,"script");
              js.id=id; js.src=b+"embed.js";
              q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) }
         })()

////////////ExtraCurricular Slide Shows //////////////////////


//Society of Women Engineers//
            var sweSlideNumber = 0;
            var wopoSlideNumber = 0;

            sweAnnimation()
            wopoAnimation()
            
            function wopoAnnimation() {
              var i;
              var x = document.getElementsByClassName("sweSlides");
              for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
              }
              sweSlideNumber++;
              if (sweSlideNumber > x.length) {sweSlideNumber = 1}    
              x[sweSlideNumber-1].style.display = "block";  
              setTimeout(wopoAnnimation, 5000);    
            }

//Womens Water Polo//
            function sweAnnimation() {
              var i;
              var x = document.getElementsByClassName("wopoSlides");
              for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
              }
              wopoSlideNumber++;
              if (wopoSlideNumber > x.length) {wopoSlideNumber = 1}    
              x[wopoSlideNumber-1].style.display = "block";  
              setTimeout(sweAnnimation, 5000);    
            }
            
            
            
//////////////////////////////////////////////////////////////////






////////////Publication Slide Shows //////////////////////
              function plusDivs(n) {
                showDivs(slideNumber += n);
              }
              
              function currentDiv(n) {
                showDivs(slideNumber = n);
              }
              
              function showDivs(n) {
                var i;
                var x = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("demo");
                if (n > x.length) {slideNumber = 1}    
                if (n < 1) {slideNumber = x.length}
                for (i = 0; i < x.length; i++) {
                  x[i].style.display = "none";  
                }
                for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" w3-red", "");
                }
                x[slideNumber-1].style.display = "block";  
                dots[slideNumber-1].className += " w3-red";
              }
//////////////////////////////////////////////////////////////////









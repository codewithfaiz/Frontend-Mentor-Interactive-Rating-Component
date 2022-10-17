    
     /**********************************************************
     **********************************************************
     ***********************************************************/

    /*==================================================
    graping all necessary selectors from HTML document 
    =====================================================*/

    const end_container = document.querySelector('.rating_card_end');
    const submit = document.querySelector('.submit');
    const start_container = document.querySelector('.rating_card_start');
    const rating_btn = document.querySelectorAll('.btn');
    const score = document.querySelector('.score');

    /*=========================================================
    displaying rating state end on clicking the submit button
    ===========================================================*/

    submit.addEventListener('click', (e) => {
      end_container.style.display = 'block'
      start_container.style.display = 'none'
    })

    /*============================================================
    using for loop , to catch all ratings button
    on click and mouseover and  When we click on any rating button 
    then all previous button get activated  
    ==============================================================*/

    for (x = 0; x < rating_btn.length; x++) {
      rating_btn[x].rating_btnValue = (x + 1);
      ["click", "mouseover"].forEach(function (e) {
        rating_btn[x].addEventListener(e, showrating);
      })
    }

     /*===============================================================
    using showrating fuction for :
    ******To change the color of the button on click and mouseover.
    By using if statement
    ****** To show rating value in rating card (rating state end)
    =================================================================*/

    function showrating(e) {
      let type = e.type;
      let rating_btnValue = this.rating_btnValue;

      if (type === "click"){
         score.innerHTML = rating_btnValue;
      } 
      rating_btn.forEach(function (elem, ind) {
        if (type === "click") {
          if (ind < rating_btnValue) {
            elem.style.backgroundColor = "rgb(251,116,19)";
          } else {
            elem.style.backgroundColor = "";;
          }
        }
        if (type === "mouseover") {
          if (ind < rating_btnValue) {
            elem.style.backgroundColor = "rgb(149,158,172)";
          } else {
            elem.style.backgroundColor = "";
          }
        }

      })
    }
    /**********************************************************
     **********************************************************
     ***********************************************************/
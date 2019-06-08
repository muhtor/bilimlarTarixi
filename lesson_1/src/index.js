window.onload = function(){
    const aside = document.querySelector('#menu');
    aside.onmouseover = menuShow;
    aside.onmouseout = menuHide;
    function menuShow(){ aside.style.left = 0; }
    function menuHide(){ aside.style.left = '-230px'; }

    }

    


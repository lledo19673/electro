$(document).ready(function(){
   /* 
    $("#aInicio").click(function(){
        var x = $("#inicio").offset();
        alert("Top: " + x.top + " Left: " + x.left);
    });
*/
      
//transicion para moverse (#ancla)
    $(".logo").click(function(){
        var posicion = $("header").offset();
        $('html, body').animate({scrollTop:0}, 'slow');
    });

    $("#aInicio").click(function(){
        var posicion = $("#inicio").offset();
        $('html, body').animate({scrollTop:0}, 'slow');
    });

    $("#aServicios").click(function(){
        var posicion = $("#servicios").offset();
        $('html, body').animate({scrollTop:(posicion.top - 55)}, 'slow');
    });

    $("#aContacto").click(function(){
        var posicion = $("#contacto").offset();
        $('html, body').animate({scrollTop:(posicion.top - 55)}, 'slow');
    });


//Flecha arriba aparace al bajar
    $("#toTop").css("display", "none");

    $(window).scroll(function(){
        if($(window).scrollTop() > 500){
            $("#toTop").fadeIn("slow");
        }
        else {
            $("#toTop").fadeOut("slow");
        }
    });

    $("#toTop").click(function(){
        var posicion = $("header").offset();
        $('html, body').animate({scrollTop:0}, 'slow');
    });
});

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
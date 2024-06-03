function abrirventana(){
    var windhour = document.querySelector('.container_horario');
    var windhourbutton = document.querySelector('.button_horario')[0];

    if (windhour.style.display==="block"){
        windhour.style.display="none";
        windhourbutton.style.display="none";
    }
    else{
        windhour.style.display="block";
    }

}
function horario(){
    var fechahoy = new Date();
    var horaactual=fechahoy.getHours();
    var abierto=18;
    var cerrado= 23;
    var container = document.getElementById("time-table");    

    if(horaactual > abierto && horaactual < cerrado)
    {
        container.style.display = "none";
    }   
    else{
        container.style.visibility = "visible";
    }

}   
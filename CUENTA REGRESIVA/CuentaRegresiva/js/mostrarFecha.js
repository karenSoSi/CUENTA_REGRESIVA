function mostrarFecha(){

        var fecha = new Date();
        var diaSemana = fecha.getDay();
        var dia = fecha.getDate();
        var mes = fecha.getMonth() + 1;
        var anio = fecha.getFullYear();

        var horas = new Date(),
            hora = horas.getHours(),
            minutos = horas.getMinutes(),
            segundos = horas.getSeconds();
        
        var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]
        diaSemana = semana[diaSemana];

        
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        mes = meses[mes];

        alert('Hoy es ' + diaSemana + ' ' + dia + ' de ' + mes + ' de ' + anio + ' \n y son las ' + hora + ' horas ' + minutos + ' minutos con ' + segundos + ' segundos ');
    
} 


function cuentaRegresiva(){
    var regresiva = new Date('Jan 01 2021 00:00:00 GMT-0400').getTime();
    var fechaActual = new Date().getTime();
        var resta = regresiva - fechaActual;
        console.log(resta);

        var segundos = 1000,
            minutos = segundos * 60,
            horas = minutos * 60,
            dias = horas *24;
            
        var d = Math.floor(resta / (dias));
        var h = Math.floor((resta % (dias)) / (horas));
        var m = Math.floor((resta % (horas)) / (minutos));
        var s = Math.floor((resta % (minutos)) / (segundos));

        document.getElementById('dias').innerText = d;
        document.getElementById('horas').innerText = h;
        document.getElementById('minutos').innerText = m;
        document.getElementById('segundos').innerText = s;
    
    
    /*
    console.log("dias: " + d);
   console.log("horas: " + h);
   console.log("minutos: " + m);
   console.log("segundos: " + s)
    */
    
   

}

setInterval(function(){
    cuentaRegresiva();
},1000);




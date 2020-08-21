function mostrarFecha(){
    var fecha = new Date(),
        horas = fecha.getHours(),
        minutos = fecha.getMinutes(),
        segundos = fecha.getSeconds(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = year.getFullYear();

    var pHoras = document.getElementById('horas'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pDiaSemana = document.getElementById('diaSemana'),
        pDia = document.getElementById('dia'),
        pMes = document.getElementById('mes'),
        pYear = document.getElementById('year');

    //Arreglos

    var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
    pDiaSemana.textContent = semana[diaSemana];

    pDia.textContent = dia;

    var mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    pMes.textContent = mes[mes];

    pYear.textContent = year;
    pHoras.textContent = horas;
    
    //condicional para que los numeros menores a 10 aparescan con un 0 antes
    if (minutos <10 ){minutos = "0" + minutos};
    if (segundos <10 ){segundos = "0" + segundos};

    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;

};

    mostrarFecha();

    var segundero = setInterval(mostrarFecha, 1000);




    <div class="cajaFecha">
        <div class="fecha">
            <p>Hoy es: </p>
            <p id="diaSemana" class="diaSemana"></p>
            <p id="dia" class="dia"></p>
            <p>de </p>
            <p id="mes" class="mes"></p>
            <p>de </p>
            <p id="year" class="year"></p>
        </div>

        <div class="reloj">
            <p>Y son las: </p>
            <p id="horas" class="horas"></p>
            <p>horas, </p>
            <p id="minutos" class="minutos"></p>
            <p>minutos con, </p>
            <p id="segundos" class="segundos"></p>
        </div>
    </div>
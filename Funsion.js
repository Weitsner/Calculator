var numero1;
var numero2;
var operador;
function init(){
    //crear variables llamando cada boton por su id
    const confiuracioncolor = window.matchMedia("(modooscuro)");
    var pantalla = document.getElementById("V_actual");
    var pantalla2 = document.getElementById("V_anterior")
    var limpiar = document.getElementById("limpiar");
    var borrar = document.getElementById("borrar");
    var igual = document.getElementById("igual");
    var suma = document.getElementById("mas");
    var resta = document.getElementById("menos");
    var multiplicacion = document.getElementById("multiplicar");
    var divicion = document.getElementById("dividir");
    var punto = document.getElementById("punto");
    var negativo = document.getElementById("negativo");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    //Eventos
    uno.onclick = function(e){
        pantalla.value = pantalla.value + "1";
    }
    dos.onclick = function(e){
        pantalla.value = pantalla.value + "2";
    }
    tres.onclick = function(e){
        pantalla.value = pantalla.value + "3";
    }
    cuatro.onclick = function(e){
        pantalla.value = pantalla.value + "4";
    }
    cinco.onclick = function(e){
        pantalla.value = pantalla.value + "5";
    }
    seis.onclick = function(e){
        pantalla.value = pantalla.value + "6";     
    }
    siete.onclick = function(e){
        pantalla.value = pantalla.value + "7";
    }
    ocho.onclick = function(e){
        pantalla.value = pantalla.value + "8";
    }
    nueve.onclick = function(e){
        pantalla.value = pantalla.value + "9";
    }
    cero.onclick = function(e){
        pantalla.value = pantalla.value + "0";
    }
    limpiar.onclick = function(e){
        pantalla.value = "";
        pantalla2.value = "";
    }
    borrar.onclick = function (e){
        pantalla.value = pantalla.value.substring(0,pantalla.value.length-1);
    }
    //Condicionar punto y negativo
    punto.onclick = function(e){
        var condpunto = pantalla.value;
        if (condpunto.indexOf(".")>=0){
            pantalla.value = pantatalla.value;
        }else{
            pantalla.value = pantalla.value + ".";
        }
    }
    negativo.onclick = function(e){
            pantalla.value = pantalla.value * (-1);
    }
    //operadores 
    suma.onclick = function(e){
        numero1 = pantalla.value;
        operador = "+"
        if (pantalla.value == ""){
            pantalla2.value = pantalla2.value;
        }
        else{
            pantalla2.value = pantalla.value + " + ";
        }
        pantalla.value = "";      
    }

    resta.onclick = function(e){
        numero1 = pantalla.value;
        operador = "-"
        if (pantalla.value == ""){
            pantalla2.value = pantalla2.value;
        }
        else{
            pantalla2.value = pantalla.value + " - ";
        }
        pantalla.value = "";   
    }

    multiplicacion.onclick = function(e){
        numero1 = pantalla.value;
        operador = "*"
        if (pantalla.value == ""){
            pantalla2.value = pantalla2.value;
        }
        else{
            pantalla2.value = pantalla.value + " x ";
        }
        pantalla.value = "";   
    }

    divicion.onclick = function(e){
        numero1 = pantalla.value;
        operador = "/"
        if (pantalla.value == ""){
            pantalla2.value = pantalla2.value;
        }
        else{
            pantalla2.value = pantalla.value + " ÷ ";
        }
        pantalla.value = "";   
    }
    igual.onclick = function(e){
        numero2 = pantalla.value;
        pantalla2.value = pantalla2.value + numero2;
        operacion();
    }
    //operacion
    function operacion(){
        var resultado = 0;
        switch(operador){
            case "+":
                resultado = parseFloat(numero1) + parseFloat(numero2);
                break;
            case "-":
                resultado = parseFloat(numero1) - parseFloat(numero2);
                break;
            case "*":
                resultado = parseFloat(numero1) * parseFloat(numero2);
                break;
            case "/": if (numero2 == 0 ){
                        resultado = "ERROR";
                        pantalla2.value = "Entre 0 no se divide pendej@";
            }else{
                resultado = parseFloat(numero1) / parseFloat(numero2);
            }
                break;
        }
        pantalla.value = resultado;
    }  

    //CAMBIO DE COLOR DE CLARO A OSCURO

    const cambios = document.getElementById("cambiar");
    const body_oscuro = document.getElementById("body");
    const switchlimpiar = document.getElementById("limpiar");
    const btnoperadormenos = document.getElementById("menos");
    const btnoperadormas = document.getElementById("mas");
    const btnoperadormulti = document.getElementById("multiplicar");
    const btnoperadordiv = document.getElementById("dividir");
    const btnoperadorborrar = document.getElementById("borrar");
    const boton1 = document.getElementById("uno");
    const boton2 = document.getElementById("dos");
    const boton3 = document.getElementById("tres");
    const boton4 = document.getElementById("cuatro");
    const boton5 = document.getElementById("cinco");
    const boton6 = document.getElementById("seis");
    const boton7 = document.getElementById("siete");
    const boton8 = document.getElementById("ocho");
    const boton9 = document.getElementById("nueve");
    const boton0 = document.getElementById("cero");
    const botonpunto = document.getElementById("punto");
    const botonnegativo = document.getElementById("negativo");
    const botonigual = document.getElementById("igual")
    const switchpantalla = document.getElementById("pantalla");
    const cambio = document.getElementById("color");
    const cambiar = document.getElementById("cambiar");
    const V_anterior = document.getElementById("V_anterior");
    const V_actual = document.getElementById("V_actual");
    const calculator = document.getElementById("calculator");

    cambios.addEventListener("click" , () =>{       
        body_oscuro.classList.toggle("body_oscuro");
        btnoperadormenos.classList.toggle("btnoperador_oscuro");
        btnoperadormas.classList.toggle("btnoperador_oscuro");
        btnoperadormulti.classList.toggle("btnoperador_oscuro");
        btnoperadordiv.classList.toggle("btnoperador_oscuro");
        btnoperadorborrar.classList.toggle("btnoperador_oscuro");
        boton1.classList.toggle("boton_oscuro");
        boton2.classList.toggle("boton_oscuro");
        boton3.classList.toggle("boton_oscuro");
        boton4.classList.toggle("boton_oscuro");
        boton5.classList.toggle("boton_oscuro");
        boton6.classList.toggle("boton_oscuro");
        boton7.classList.toggle("boton_oscuro");
        boton8.classList.toggle("boton_oscuro");
        boton9.classList.toggle("boton_oscuro");   
        boton0.classList.toggle("boton_oscuro");
        botonnegativo.classList.toggle("boton_oscuro");
        botonpunto.classList.toggle("boton_oscuro");
        botonigual.classList.toggle("boton-igual_oscuro")
        switchpantalla.classList.toggle("pantalla_oscuro");
        V_anterior.classList.toggle("V_anterior_oscuro");
        V_actual.classList.toggle("V_actual_oscuro");
        cambiar.classList.toggle("cambiar_oscuro");
        calculator.classList.toggle("Calculator_oscuro");
        switchlimpiar.classList.toggle("limpiar_oscuro");
        cambio.classList.toggle("cambio_oscuro")
    })    
}
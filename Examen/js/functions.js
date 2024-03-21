const frmCm = document.getElementById("calculadora");
const centi = document.getElementById("cm");
const resultado1 = document.getElementById("result");

const EventoFor = (evento) => {
    evento.preventDefault();
    var convetCm = parseFloat(centi.value);
    var convertMili = 10;
    var convertPulgada = 0.393701;
    var convertKm = 0.00001;
    var convertMetro = 0.01;
    var convertPie = 0.01;
    var convertYarda = 0.0109361;

    resultado1.textContent = OperaciTDA(convetCm, convertMili, convertPulgada, convertKm, convertMetro, convertPie, convertYarda);
}
const OperaciTDA = (centimetro, milimetro, pulgada, kilometro, metro, pie, yarda) => {

    const ResMilimetro = centimetro * milimetro;
    const ResPulgada = centimetro * pulgada;
    const ResKilometro = centimetro * kilometro;
    const ResMetro = centimetro * metro;
    const ResPie = centimetro * pie;
    const ResYarda = centimetro * yarda;

    return "Milimetro: " + ResMilimetro + ", Pulgada: " + ResPulgada+ ", Kilometro: " + ResKilometro+ ", Metro: " + ResMetro + ", Pies: " + ResPie + ", Yarda: " + ResYarda
}
frmCm.addEventListener("submit", EventoFor);
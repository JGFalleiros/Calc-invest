//CÓDIGO FEITO POR JOÃO FALLEIROS
document.getElementById("calcular").onclick = function () {

    const inic = document.getElementById("inicial").value;
    const jur = document.getElementById("juros").value;
    const temp = document.getElementById("periodo").value;
    const apor = document.getElementById("aporte").value;

    const resultado = (parseFloat(inic) * ((1 + (parseFloat(jur) / 100)) ** parseInt(temp))) + (parseFloat(apor) * (((((1 + (parseFloat(jur) / 100))) ** parseInt(temp)) - 1) / (parseFloat(jur) / 100)));

    const result = document.getElementById("result");
    result.value = resultado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });


}
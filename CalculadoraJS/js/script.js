$(document).ready(function() {
    $('#btnCalcular').click(function() {
        let val1 = parseFloat($('#txtVal1').val());
        let val2 = parseFloat($('#txtVal2').val());
        let par = parseFloat($('#txtPar').val());
        let resultado;

        if ($('#rdbPar').is(':checked')) {
            if (!VerificarCampoVazio($('#txtPar').val())) {
                if (VerificarPar(par))
                    $('#lblResultado').text("O número " + par.toString() + " é par.")
                else
                    $('#lblResultado').text("O número " + par.toString() + " é ímpar.")
            } else {
                alert("O campo relacionado a verificação do número par não pode estar nulo.")
                return;
            }
        } else {
            if (!VerificarCampoVazio($('#txtVal1').val()) && !VerificarCampoVazio($('#txtVal2').val())) {
                if ($('#rdbSomar').is(':checked')) {
                    resultado = Somar(val1, val2);
                } else if ($('#rdbSubtrair').is(':checked')) {
                    resultado = Subtrair(val1, val2);
                } else if ($('#rdbMultiplicar').is(':checked')) {
                    resultado = Multiplicar(val1, val2);
                } else if ($('#rdbDividir').is(':checked')) {
                    resultado = Dividir(val1, val2);
                } else if ($('#rdbRetangulo').is(':checked')) {
                    resultado = CalcularAreaRetangulo(val1, val2);
                } else if ($('#rdbQuadrado').is(':checked')) {
                    resultado = CalcularAreaQuadrado(val1, val2);
                } else if ($('#rdbTriangulo').is(':checked')) {
                    resultado = CalcularAreaTriangulo(val1, val2);
                } else if ($('#rdbIMC').is(':checked')) {
                    resultado = CalcularIMC(val1, val2);
                }

                $('#lblResultado').text(resultado.toString());
            } else {
                alert("Os campos 'Valor 1' e 'Valor 2' não podem estar vazios.");
                return;
            }
        }
    })

    $('#btnLimpar').click(function() {
        LimparCampos();
    })
})

function Somar(val1, val2) {
    return val1 + val2;
}

function Subtrair(val1, val2) {
    return val1 - val2;
}

function Multiplicar(val1, val2) {
    return val1 * val2;
}

function Dividir(val1, val2) {
    return val1 / val2;
}

function CalcularAreaRetangulo(val1, val2) {
    return val1 * val2;
}

function CalcularAreaQuadrado(val1, val2) {
    return val1 * val2;
}

function CalcularAreaTriangulo(val1, val2) {
    return (val1 * val2) / 2;
}

function CalcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5)
        classificacao = 'Magreza';
    else if (imc >= 18.5 && imc < 25)
        classificacao = 'Normal';
    else if (imc >= 25 && imc < 30)
        classificacao = 'Sobrepeso';
    else if (imc >= 30 && imc < 40)
        classificacao = 'Obesidade';
    else
        classificacao = 'Obesidade Grave';

    return 'O IMC é de ' + imc + '. Que se encaixa na classificação de ' + classificacao;
}

function VerificarPar(val) {
    if (val % 2 == 0)
        return true;
    else
        return false;
}

function VerificarCampoVazio(campo) {
    if (campo == '')
        return true
    else
        return false
}

function LimparCampos() {
    $('#txtVal1').val('');
    $('#txtVal2').val('');
    $('#txtPar').val('');
    $('#rdbSomar').prop('checked', false);
    $('#rdbSubtrair').prop('checked', false);
    $('#rdbMultiplicar').prop('checked', false);
    $('#rdbDividir').prop('checked', false);
    $('#rdbRetangulo').prop('checked', false);
    $('#rdbQuadrado').prop('checked', false);
    $('#rdbTriangulo').prop('checked', false);
    $('#rdbPar').prop('checked', false);
    $('#rdbIMC').prop('checked', false);
}
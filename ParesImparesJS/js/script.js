$(document).ready(function(){
    $("#rdbPar").click(function(){
        $('#rdbImpar').prop('checked', false);
    });
    $("#rdbImpar").click(function(){
        $('#rdbPar').prop('checked', false);
    });

    $('#btnMostrar').click(function(){
        let inicio = parseFloat($('#txtInicio').val());
        let fim = parseFloat($('#txtFim').val());
        let resultado = '';

        if(!isNaN(inicio) && !isNaN(fim)){
            if(inicio >= 0 && fim >= fim){
                if(inicio <= fim){
                    if($('#rdbPar').is(':checked')){
                        for (let i = inicio; i <= fim; i++) {
                            if(i % 2 == 0){
                                if(i == inicio || i == inicio + 1){
                                    resultado = i;
                                }
                                else{
                                    resultado += ', ' + i;
                                }
                            }
                        }
                    }
                    else if($('#rdbImpar').is(':checked')){
                        for (let i = inicio; i <= fim; i++) {
                            if(i % 2 != 0){
                                if(i == inicio || i == inicio + 1){
                                    resultado = i;
                                }
                                else{
                                    resultado += ', ' + i;
                                }
                            }
                        }
                    }
                    else{
                        alert("Marque o campo Par ou Ímpar para exibir o resultado.");
                    }

                    $('#lblResultado').text(resultado);
                }
                else{
                    alert("O início precisa possuir um valor menor que o fim.");
                }
            }
            else{
                alert("Os valores devem ser positivos.");
            }
        }
        else{
            alert("Preencha os valores de início e fim com valores numéricos inteiros.");
            $('#txtInicio').val('');
            $('#txtFim').val('');
        }
    });

    $('#btnLimpar').click(function(){
        $('#txtInicio').val('');
        $('#txtFim').val('');
        $('#lblResultado').text('');
        $('#rdbPar').prop('checked', false);
        $('#rdbImpar').prop('checked', false);
    });
});
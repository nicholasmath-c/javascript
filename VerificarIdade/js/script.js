$(document).ready(function(){
    $('#btnVerificar').click(function(){
        let pedro = parseFloat($('#txtPedro').val());
        let paulo = parseFloat($('#txtPaulo').val());
        let jose = parseFloat($('#txtJose').val());
        let francisco = parseFloat($('#txtFrancisco').val());
        let roberto = parseFloat($('#txtRoberto').val());

        console.log(pedro, paulo, jose, francisco, roberto);
        let maior;
        let menor;
        
        //VERIFICAR MAIOR IDADE
        if((pedro >= paulo) && (pedro >= jose) && (pedro >= francisco) && (pedro >= roberto)){
            maior = 'Pedro';
        }
        
        if((paulo >= pedro) && (paulo >= jose) && (paulo >= francisco) && (paulo >= roberto)){
            if(maior != null){
                maior += ', Paulo';
            }
            else{
                maior = 'Paulo';
            }
        }

        if((jose >= pedro) && (jose >= paulo) && (jose >= francisco) && (jose >= roberto)){
            if(maior != null){
                maior += ', José';
            }
            else{
                maior = 'José';
            }
        }

        if((francisco >= pedro) && (francisco >= paulo) && (francisco >= jose) && (francisco >= roberto)){
            if(maior != null){
                maior += ', Francisco';
            }
            else{
                maior = 'Francisco';
            }
        }

        if((roberto >= pedro) && (roberto >= paulo) && (roberto >= jose) && (roberto >= francisco)){
            if(maior != null){
                maior += ', Roberto';
            }
            else{
                maior = 'Roberto';
            }
        }

        //VERIFICAR MENOR IDADE
        if((pedro <= paulo) && (pedro <= jose) && (pedro <= francisco) && (pedro <= roberto)){
            menor = 'Pedro';
        }
        
        if((paulo <= pedro) && (paulo <= jose) && (paulo <= francisco) && (paulo <= roberto)){
            if(menor != null){
                menor += ', Paulo';
            }
            else{
                menor = 'Paulo';
            }
        }
        
        if((jose <= pedro) && (jose <= paulo) && (jose <= francisco) && (jose <= roberto)){
            if(menor != null){
                menor += ', José';
            }
            else{
                menor = 'José';
            }
        }
        
        if((francisco <= pedro) && (francisco <= paulo) && (francisco <= jose) && (francisco <= roberto)){
            if(menor != null){
                menor += ', Francisco';
            }
            else{
                menor = 'Francisco';
            }
        }
        
        if((roberto <= pedro) && (roberto <= paulo) && (roberto <= jose) && (roberto <= francisco)){
            if(menor != null){
                menor += ', Roberto';
            }
            else{
                menor = 'Roberto';
            }
        }

        $('#lblIdadeMaior').text(maior);
        $('#lblIdadeMenor').text(menor);
    });
});
documento.addEventListener('DOMContentLoaded', função(){
    constante botaoDeAcessibilidade = documento.obterElementoPorId('botão-acessibilidade')
    constante opçõesDeAcessibilidade = documento.obterElementoPorId('opções-acessibilidade')
 
    botaoDeAcessibilidade.addEventListener('clique', função (){
     botaoDeAcessibilidade.lista de classes.alternar('rotação-botão');
     opçõesDeAcessibilidade.lista de classes.alternar('apresenta-lista')
 
     constante botaoSelecionado = botaoDeAcessibilidade.obterAtributo('ária-expandida') === 'verdadeiro';
     botaoDeAcessibilidade.definirAtributo('ária-expandida', !botaoSelecionado)
   
    })
 
     constante aumentaFonteBotão = documento.obterElementoPorId('aumentar-fonte');
     constante diminuirFonteBotão = documento.obterElementoPorId('diminuir-fonte');
     
     constante alternaContraste = documento.obterElementoPorId('alterna-contraste')
 
     deixar tamanhoAtualFonte = 1;
 
     aumentaFonteBotão.addEventListener('clique', função(){
         tamanhoAtualFonte += 0,1;
         documento.corpo.estilo.tamanho da fonte = `${tamanhoAtualFonte}rem`
 
     })
 
     diminuirFonteBotão.addEventListener('clique', função(){
         tamanhoAtualFonte -= 0,1;
         documento.corpo.estilo.tamanho da fonte = `${tamanhoAtualFonte}rem`
 
     })
 
     alternaContraste.addEventListener('clique', função(){
         documento.corpo.lista de classes.alternar('alto-contraste')
     })
 
 
 })
 
 Revelação de rolagem().revelar('#inicio', { atraso:500 });
 Revelação de rolagem().revelar('#tropicalia', { atraso:500 });
 Revelação de rolagem().revelar('#galeria', { atraso:500 });
 Revelação de rolagem().revelar('#contato', { atraso:500 });

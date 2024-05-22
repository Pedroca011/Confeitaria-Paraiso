let contador = 0
const idsItem = []
const idsValor = []

function NovoProduto(){
    contador++

     var novoContainer = document.createElement('div')
     novoContainer.className = 'novoContainer'
 
     // Cria a primeira coluna da nova linha
     var primeiraColuna = document.createElement('div');
     primeiraColuna.className = 'coluna1';
 
     // Cria a segunda coluna da nova linha
     var segundaColuna = document.createElement('div');
     segundaColuna.className = 'coluna';
 
     // Cria a label e input para a segunda coluna
     var label2 = document.createElement('label');
     label2.textContent = 'Item:';
     label2.className = 'lblItem' 

     var input2 = document.createElement('input');
     input2.type = 'text';
     input2.id = 'item-' + contador
     idsItem.push(input2.id)


     // Adiciona a label e input à segunda coluna

     segundaColuna.appendChild(label2);
     segundaColuna.appendChild(input2);

    var terceiraColuna = document.createElement('div')
    terceiraColuna.className = 'coluna3'

     var label3 = document.createElement('label');
     label3.textContent = 'Valor:';
     label3.className = 'lblValor'

     var input3 = document.createElement('input');
     input3.type = 'number';
     input3.className = 'item'
     input3.id = 'valor-' + contador
     idsValor.push(input3)
     
     var icon = document.createElement('i')
     icon.className = 'fa-solid fa-minus delete2'
     icon.onclick = function() {
        var index = idsValor.indexOf(input3);
        if (index !== -1) {
            idsValor.splice(index, 1);
        }
        novoContainer.remove();

  };

     // Adiciona a label e input à terceira coluna

     terceiraColuna.appendChild(label3);
     terceiraColuna.appendChild(input3);
     terceiraColuna.appendChild(icon);
 
     // Adiciona as colunas à nova linha
     novoContainer.appendChild(segundaColuna);
     novoContainer.appendChild(terceiraColuna);
 
     // Adiciona a nova linha ao container de produtos
     var produtosContainer = document.getElementById('containerItens1');
     produtosContainer.appendChild(novoContainer);
 }


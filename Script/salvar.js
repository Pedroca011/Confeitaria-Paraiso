var produtosContainer = document.getElementById('teste')


function Salvar() {
    let NomeProduto = $('#produto').val()
    NomeProduto = NomeProduto.slice(0,10)
    var Valor1 = $('#valor1').val()

    if ($('#produto').val().length > 20) {
        NomeProduto += '...';
    }
    if (NomeProduto.trim() !== '' || Valor1.trim() !== '') {
        Valor1 = parseFloat(Valor1)

        let somaArray = idsValor.reduce((acumulador, input) => acumulador + parseFloat(input.value || 0), 0);
        let soma = Valor1 + somaArray;


        produtosContainer.innerHTML = `<strong><p class="txt">Produto:</strong> ${NomeProduto}</p> <strong><p class="txt1">custo total:</strong> ${soma}</p>`

    } else {
        alert('Preencha corretamente os campos!')
    }
}


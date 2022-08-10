/*
Atividade 13
Adicione a resposta na linha abaixo de cada exercício
Coloque todo o código do arquivo em uma IIFE.
Em todos os retornos, use o console.log para imprimir o resultado.
Use métodos de array e use let e const para variáveis.
*/

/*
1 - Declare uma variável que contenha um array com 5 nomes de cidades em strings.
Imprima o tamanho desse array.
*/

(function () {
    function contarCidades() {
        const cidades = ['Rio de Janeiro', 'Petrópolis', 'Nova Iguaçu', 'Duque de Caxias', 'São Gonçalo']
        return console.log(cidades.length)
    };
    contarCidades();
    //5

    /*
    2 - Declare uma variável que contenha um array com 5 nomes de países em strings.
    Adicione um país no começo do array.
    Adicione um país no fim do array.
    Imprima esse array.
    */
    function nomearPaises() {
        const paises = ['Bélgica', 'França', 'Nova Zelândia', 'Moçambique', 'Tailândia']
        paises.unshift('Índia')
        paises.push('Argentina')
        return console.log(paises)
    };
    nomearPaises();
    //    [
    //        'Índia',
    //        'Bélgica',
    //        'França',
    //        'Nova Zelândia',
    //        'Moçambique',
    //        'Tailândia',
    //        'Argentina'
    //      ]

    /*
    3 - Declare uma variável que contenha um array com 5 nomes de livros em strings.
    Remova um item no começo do array.
    Remova um item no fim do array.
    Imprima esse array.
    */
    function removerLivros() {
        const livros = ['Jogos Vorazes', 'Battle Royale', 'O Pequeno Príncipe', 'Crepúsculo', 'A Droga da Obediência']
        livros.shift()
        livros.pop()
        return console.log(livros)
    };
    removerLivros();
    //    [ 'Battle Royale', 'O Pequeno Príncipe', 'Crepúsculo' ]

    /*
    4 - Declare uma variável que contenha um array com 5 números entre 10 e 99.
    Coloque em um novo array 3 desses números.
    Imprima esse novo array.
    */
    function selecionarNumeros() {
        const numeros = [11, 21, 31, 41, 51]
        let numerosSelecionados = numeros.slice(1, 4)
        return console.log(numerosSelecionados)
    };
    selecionarNumeros();
    // [ 21, 31, 41 ]

    /* 
    5 - Declare uma variável que contenha um array com 5 vogais em strings.
    Coloque esse array ao contrário e una todas essas letras em uma string.
    Imprima em um console.log.
    */
    function concatenarVogais() {
        const vogais = ['a', 'e', 'i', 'o', 'u']
        return console.log(vogais.reverse().join(''))
    };
    concatenarVogais();
    // tutotiteta
})();
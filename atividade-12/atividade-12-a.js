(function () {
    console.log(typeof "André")
    //string
    console.log(typeof 23)
    //number
    console.log(typeof true)
    //boolean

    function disciplinaDaEscola() {
        const escola = "Todas as Letras"
        let curso = "Curso de JavaScript"
        return console.log(`${curso} - ${escola}`)
    };
    disciplinaDaEscola();
    //Curso de JavaScript - Todas as Letras

    function consultarIdade() {
        let idade = 23
        return console.log(`Minha idade é ${idade}`)
    };
    consultarIdade();
    //Minha idade é 23
})();
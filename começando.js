let pessoa = {
    nome: "Victor",
    idade: 26,
    Profissao: "Programador",
    saudacao: function() {
        return "Olá, meu nome é " + this.nome + " tenho " + this.idade + " anos" + " e sou " + this.Profissao;
    }
    
};


console.log(pessoa.saudacao());

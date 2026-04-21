"use strict";
//Questão 1
class Pessoa {
    nome;
    cpf;
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    getNome() {
        return this.nome;
    }
    getCpf() {
        return this.cpf;
    }
}
//Questão 2
class Exemplar {
    isbn;
    titulo;
    autor;
    ano;
    constructor(isbn, titulo, autor, ano) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
}
//Questão 3
class Emprestimo {
    livro;
    usuario;
    dataEmprestimo;
    dataPrevistaDevolucao;
    constructor(li, ps) {
        this.livro = li;
        this.usuario = ps;
        this.dataEmprestimo = new Date();
        this.dataPrevistaDevolucao = new Date();
        this.dataPrevistaDevolucao.setDate(this.dataEmprestimo.getDate() + 15);
    }
    obterDataEmprestimo() {
        return this.dataEmprestimo.toLocaleDateString();
    }
    obterDataPrevistaDevolucao() {
        return this.dataPrevistaDevolucao.toLocaleDateString();
    }
    obterDados() {
        return `Livro: ${this.livro.getTitulo()} | Usuário: ${this.usuario.getNome()}`;
    }
}

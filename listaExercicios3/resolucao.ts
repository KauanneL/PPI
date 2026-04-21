//Questão 1

class Pessoa {
    private nome: string
    private cpf: string

    constructor(nome: string, cpf: string) {
        this.nome = nome
        this.cpf = cpf
    }

    getNome(): string {
        return this.nome
    }

    getCpf(): string {
        return this.cpf
    }
}

//Questão 2
class Exemplar{
    private isbn: string 
    private titulo: string
    private autor: string
    private ano: number

    constructor(isbn: string, titulo: string, autor: string, ano: number){
        this.isbn = isbn
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }

    getTitulo(): string {
        return this.titulo
    }

    getAutor(): string {
        return this.autor
    }
}

//Questão 3
class Emprestimo {
    private livro: Exemplar
    private usuario: Pessoa
    private dataEmprestimo: Date
    private dataPrevistaDevolucao: Date

    constructor(li: Exemplar, ps: Pessoa) {
        this.livro = li
        this.usuario = ps
        this.dataEmprestimo = new Date()
        this.dataPrevistaDevolucao = new Date()
        this.dataPrevistaDevolucao.setDate(
            this.dataEmprestimo.getDate() + 15
        )
    }

    obterDataEmprestimo(): string {
        return this.dataEmprestimo.toLocaleDateString()
    }

    obterDataPrevistaDevolucao(): string {
        return this.dataPrevistaDevolucao.toLocaleDateString()
    }

    obterDados(): string {
        return `Livro: ${this.livro.getTitulo()} | Usuário: ${this.usuario.getNome()}`
    }
}
// 1. Tipos Básicos

// Exercício 1: Crie variáveis usando os tipos básicos (string, number, boolean, array) e
// inicialize-as com valores apropriados. Crie uma função que receba esses tipos como
// argumentos e retorne uma string descrevendo seus valores.

let nome: string = "João";
let idade: number = 30;
let isEstudante: boolean = true;
let hobbies: string[] = ["leitura", "esportes", "música"];

function descreverPessoa(nome: string, idade: number, isEstudante: boolean, hobbies: string[]): string {
    return `Nome: ${nome}, Idade: ${idade}, Estudante: ${isEstudante ? "Sim" : "Não"}, Hobbies: ${hobbies.join(", ")}`;
}

console.log(descreverPessoa(nome, idade, isEstudante, hobbies));

// Exercício 2: Crie um objeto que represente um livro, com propriedades como título,
// autor, número de páginas, e se está disponível (boolean). Escreva uma função que
// receba esse objeto e retorne uma frase formatada sobre o livro.

interface Livro {
    titulo: string;
    autor: string;
    numeroPaginas: number;
    disponivel: boolean;
}

let livro: Livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    numeroPaginas: 1178,
    disponivel: true
};

function descreverLivro(livro: Livro): string {
    return `O livro "${livro.titulo}" foi escrito por ${livro.autor} e tem ${livro.numeroPaginas} páginas. Disponível: ${livro.disponivel ? "Sim" : "Não"}`;
}

console.log(descreverLivro(livro));

// 2. Funções e Parâmetros Opcionais/Default

// Exercício 3: Escreva uma função que calcule a área de um círculo, onde o raio é
// opcional e, se não for fornecido, deve assumir um valor padrão de 1. A função deve
// retornar a área.

function calcularAreaCirculo(raio: number = 1): number {
    return Math.PI * raio * raio;
}

console.log(calcularAreaCirculo()); // Área com raio padrão
console.log(calcularAreaCirculo(5)); // Área com raio 5

// Exercício 4: Crie uma função que receba dois parâmetros: uma string e um número. O
// número é opcional e, se fornecido, a função deve repetir a string esse número de
// vezes. Caso contrário, deve repetir a string duas vezes.

function repetirString(texto: string, vezes?: number): string {
    return texto.repeat(vezes ?? 2);
}

console.log(repetirString("Olá")); // Repetir duas vezes
console.log(repetirString("Olá", 3)); // Repetir três vezes

// 3. Interfaces

// Exercício 5: Defina uma interface Pessoa com as propriedades nome, idade, e
// profissao. Crie uma função que receba um objeto Pessoa e retorne uma frase
// descrevendo essa pessoa.

interface Pessoa {
    nome: string;
    idade: number;
    profissao: string;
}

function descreverPessoaInterface(pessoa: Pessoa): string {
    return `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Profissão: ${pessoa.profissao}`;
}

let pessoa: Pessoa = { nome: "Ana", idade: 28, profissao: "Engenheira" };
console.log(descreverPessoaInterface(pessoa));

// Exercício 6: Crie uma interface Produto com as propriedades nome, preco, e
// categoria. Crie uma função que receba um array de objetos Produto e retorne apenas
// os produtos de uma determinada categoria.

interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

function filtrarProdutosPorCategoria(produtos: Produto[], categoria: string): Produto[] {
    return produtos.filter(produto => produto.categoria === categoria);
}

let produtos: Produto[] = [
    { nome: "Notebook", preco: 3000, categoria: "Eletrônicos" },
    { nome: "Camisa", preco: 50, categoria: "Vestuário" },
    { nome: "Smartphone", preco: 2000, categoria: "Eletrônicos" }
];

console.log(filtrarProdutosPorCategoria(produtos, "Eletrônicos"));

// 4. Classes

// Exercício 7: Crie uma classe Carro com as propriedades marca, modelo, e ano.
// Adicione um método que retorne uma descrição do carro. Crie algumas instâncias da
// classe e chame o método para ver as descrições.

class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descrever(): string {
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

let carro1 = new Carro("Toyota", "Corolla", 2020);
let carro2 = new Carro("Honda", "Civic", 2019);

console.log(carro1.descrever());
console.log(carro2.descrever());

// Exercício 8: Adicione um método estático à classe Carro que conte quantos carros
// foram criados. Use essa função em um exemplo para contar quantos carros foram
// instanciados.

class CarroComContador {
    marca: string;
    modelo: string;
    ano: number;
    static contador: number = 0;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        CarroComContador.contador++;
    }

    descrever(): string {
        return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }

    static contarCarros(): number {
        return CarroComContador.contador;
    }
}

let carro3 = new CarroComContador("Ford", "Fusion", 2018);
let carro4 = new CarroComContador("Chevrolet", "Cruze", 2017);

console.log(CarroComContador.contarCarros()); // Total de carros criados

// 5. Herança e Polimorfismo

// Exercício 9: Crie uma classe Animal com um método som() que retorna uma string
// "O animal faz um som". Crie classes derivadas Cachorro e Gato que sobrescrevem o
// método som() para retornar sons específicos ("O cachorro late" e "O gato mia").
// Instancie os objetos e chame seus métodos.

class Animal {
    som(): string {
        return "O animal faz um som";
    }
}

class Cachorro extends Animal {
    som(): string {
        return "O cachorro late";
    }
}

class Gato extends Animal {
    som(): string {
        return "O gato mia";
    }
}

let cachorro = new Cachorro();
let gato = new Gato();

console.log(cachorro.som());
console.log(gato.som());

// Exercício 10: Crie uma classe base Funcionario com as propriedades nome e salario, e
// um método calcularSalario(). Crie subclasses FuncionarioHorista e
// FuncionarioAssalariado, cada uma com seu próprio método calcularSalario().
// Instancie os objetos e demonstre como o polimorfismo funciona.

class Funcionario {
    nome: string;
    salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario(): number {
        return this.salario;
    }
}

class FuncionarioHorista extends Funcionario {
    horasTrabalhadas: number;
    valorHora: number;

    constructor(nome: string, horasTrabalhadas: number, valorHora: number) {
        super(nome, horasTrabalhadas * valorHora);
        this.horasTrabalhadas = horasTrabalhadas;
        this.valorHora = valorHora;
    }

    calcularSalario(): number {
        return this.horasTrabalhadas * this.valorHora;
    }
}

class FuncionarioAssalariado extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }

    calcularSalario(): number {
        return this.salario;
    }
}

let horista = new FuncionarioHorista("Carlos", 160, 20);
let assalariado = new FuncionarioAssalariado("Maria", 3000);

console.log(horista.calcularSalario());
console.log(assalariado.calcularSalario());

// 6. Generics

// Exercício 11: Crie uma função genérica que receba um array de elementos e retorne o
// primeiro elemento. Teste a função com arrays de números, strings e objetos.

function primeiroElemento<T>(array: T[]): T {
    return array[0];
}

console.log(primeiroElemento([1, 2, 3])); // Número
console.log(primeiroElemento(["a", "b", "c"])); // String
console.log(primeiroElemento([{ nome: "João" }, { nome: "Maria" }])); // Objeto

// Exercício 12: Crie uma classe genérica Caixa que pode conter um valor de qualquer
// tipo. Adicione métodos para armazenar e recuperar o valor. Teste a classe com
// diferentes tipos, como números, strings e objetos.

class Caixa<T> {
    private valor: T;

    constructor(valor: T) {
        this.valor = valor;
    }

    getValor(): T {
        return this.valor;
    }

    setValor(valor: T): void {
        this.valor = valor;
    }
}

let caixaNumero = new Caixa<number>(123);
console.log(caixaNumero.getValor());

let caixaString = new Caixa<string>("Olá");
console.log(caixaString.getValor());

let caixaObjeto = new Caixa<{ nome: string }>({ nome: "João" });
console.log(caixaObjeto.getValor());

// 7. Tuplas e Enums

// Exercício 13: Crie uma tupla que represente um ponto no espaço 2D com coordenadas
// x e y. Escreva uma função que receba essa tupla e retorne a distância do ponto à
// origem (0, 0).

type Ponto2D = [number, number];

function calcularDistancia(ponto: Ponto2D): number {
    let [x, y] = ponto;
    return Math.sqrt(x * x + y * y);
}

console.log(calcularDistancia([3, 4])); // Distância até a origem

// Exercício 14: Defina um enum para representar os dias da semana. Crie uma função
// que receba um valor desse enum e retorne se o dia é um dia útil ou um fim de semana.

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

function verificarDiaUtil(dia: DiaDaSemana): string {
    if (dia === DiaDaSemana.Sabado || dia === DiaDaSemana.Domingo) {
        return "Fim de semana";
    } else {
        return "Dia útil";
    }
}

console.log(verificarDiaUtil(DiaDaSemana.Segunda)); // Dia útil
console.log(verificarDiaUtil(DiaDaSemana.Domingo)); // Fim de semana

// 8. Manipulação de Arrays e Objetos

// Exercício 15: Crie uma função que receba um array de números e retorne o maior e o
// menor número como uma tupla.

function encontrarMaiorEMenor(numeros: number[]): [number, number] {
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);
    return [maior, menor];
}

console.log(encontrarMaiorEMenor([1, 2, 3, 4, 5])); // [5, 1]

// Exercício 16: Dado um array de objetos representando produtos, crie uma função que
// filtre os produtos por preço e retorne um novo array apenas com os produtos que
// custam mais de um determinado valor.

function filtrarProdutosPorPreco(produtos: Produto[], precoMinimo: number): Produto[] {
    return produtos.filter(produto => produto.preco > precoMinimo);
}

console.log(filtrarProdutosPorPreco(produtos, 1000)); // Produtos com preço > 1000

// 9. Manipulação de Strings

// Exercício 17: Crie uma função que receba uma string e retorne a mesma string, mas
// com as palavras em ordem inversa.

function inverterPalavras(frase: string): string {
    return frase.split(" ").reverse().join(" ");
}

console.log(inverterPalavras("Olá mundo")); // "mundo Olá"

// Exercício 18: Escreva uma função que receba uma string e retorne a quantidade de
// vogais (a, e, i, o, u) nessa string.

function contarVogais(texto: string): number {
    let vogais = "aeiouAEIOU";
    return texto.split("").filter(letra => vogais.includes(letra)).length;
}

console.log(contarVogais("Olá mundo")); // 4

// 10. Promises e Assíncrono

// Exercício 19: Crie uma função assíncrona que simule uma operação de busca de
// dados em um banco de dados (use setTimeout para simular a demora). A função deve
// retornar os dados ou lançar um erro caso algo dê errado. Teste a função com
// async/await.

async function buscarDados(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sucesso = true; // Simular sucesso ou falha
            if (sucesso) {
                resolve("Dados encontrados");
            } else {
                reject("Erro ao buscar dados");
            }
        }, 2000);
    });
}

async function executarBusca() {
    try {
        let resultado = await buscarDados();
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    }
}

executarBusca();

// Exercício 20: Escreva uma função que faça duas chamadas assíncronas diferentes e,
// em seguida, combine os resultados em um único objeto. Use Promise.all para executar
// as chamadas em paralelo.

async function buscarDados1(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Dados 1"), 1000);
    });
}

async function buscarDados2(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Dados 2"), 1500);
    });
}

async function combinarDados() {
    try {
        let [dados1, dados2] = await Promise.all([buscarDados1(), buscarDados2()]);
        let resultado = { dados1, dados2 };
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    }
}

combinarDados();

// 11. Manipulação de DOM (se aplicável)

// Exercício 21: Crie uma função que manipule o DOM, adicionando um novo elemento
// <div> com texto dinâmico a um elemento <body> já existente. O texto deve ser
// passado como parâmetro.

function adicionarDivAoBody(texto: string): void {
    const div = document.createElement("div");
    div.textContent = texto;
    document.body.appendChild(div);
}

// Exercício 22: Crie uma função que adicione uma lista de itens (<li>) a uma <ul>
// existente no DOM. Os itens da lista devem ser passados como um array de strings.

function adicionarItensALista(itens: string[]): void {
    const ul = document.querySelector("ul");
    if (ul) {
        itens.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        });
    }
}

// 12. Tipos Avançados

// Exercício 25: Crie um tipo avançado que combine várias interfaces para representar
// um usuário com permissões específicas em um sistema. Crie instâncias desse tipo e
// demonstre o uso de cada propriedade.

interface Usuario {
    nome: string;
    email: string;
}

interface Permissoes {
    admin: boolean;
    editor: boolean;
}

type UsuarioComPermissoes = Usuario & Permissoes;

let usuario: UsuarioComPermissoes = {
    nome: "João",
    email: "joao@example.com",
    admin: true,
    editor: false
};

console.log(usuario);

// Exercício 26: Escreva uma função que receba um objeto e uma chave, e retorne o
// valor associado a essa chave. Use tipos condicionais para garantir que a chave exista
// no objeto.

function obterValor<T, K extends keyof T>(objeto: T, chave: K): T[K] {
    return objeto[chave];
}

let pessoa = { nome: "Ana", idade: 28 };
console.log(obterValor(pessoa, "nome")); // Ana

// 13. Type Guards e Type Assertions

// Exercício 27: Escreva uma função que receba um parâmetro que pode ser uma string
// ou um número. Use type guards (typeof) para determinar o tipo do parâmetro e
// retorne uma mensagem diferente para cada tipo.

function verificarTipo(param: string | number): string {
    if (typeof param === "string") {
        return `Você passou uma string: ${param}`;
    } else {
        return `Você passou um número: ${param}`;
    }
}

console.log(verificarTipo("Olá")); // Você passou uma string: Olá
console.log(verificarTipo(42)); // Você passou um número: 42

// Exercício 28: Crie uma função que receba um objeto Pessoa ou Empresa. Use
// instanceof para verificar o tipo do objeto e retornar informações específicas com base
// no tipo.

class Pessoa {
    constructor(public nome: string, public idade: number) {}
}

class Empresa {
    constructor(public nome: string, public cnpj: string) {}
}

function verificarEntidade(entidade: Pessoa | Empresa): string {
    if (entidade instanceof Pessoa) {
        return `Pessoa: ${entidade.nome}, Idade: ${entidade.idade}`;
    } else {
        return `Empresa: ${entidade.nome}, CNPJ: ${entidade.cnpj}`;
    }
}

let pessoaEntidade = new Pessoa("Carlos", 30);
let empresaEntidade = new Empresa("Tech Corp", "12345678000199");

console.log(verificarEntidade(pessoaEntidade)); // Pessoa: Carlos, Idade: 30
console.log(verificarEntidade(empresaEntidade)); // Empresa: Tech Corp, CNPJ: 12345678000199

// 14. Programação Funcional

// Exercício 29: Usando as funções de array filter, map e reduce, crie uma função que receba
// um array de produtos com preços e quantidades e retorne o valor total dos produtos no
// carrinho.

interface ProdutoCarrinho {
    nome: string;
    preco: number;
    quantidade: number;
}

function calcularValorTotalCarrinho(produtos: ProdutoCarrinho[]): number {
    return produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
}

let carrinho: ProdutoCarrinho[] = [
    { nome: "Notebook", preco: 3000, quantidade: 1 },
    { nome: "Mouse", preco: 100, quantidade: 2 },
    { nome: "Teclado", preco: 200, quantidade: 1 }
];

console.log(calcularValorTotalCarrinho(carrinho)); // 3400

// Exercício 30: Usando a função reduce crie uma função “procurarProdutosPorCategoria”
// que recebe um array de produtos e uma categoria no parâmetro e retorne uma nova
// lista filtrada.

interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

function procurarProdutosPorCategoria(produtos: Produto[], categoria: string): Produto[] {
    return produtos.reduce((result, produto) => {
        if (produto.categoria === categoria) {
            result.push(produto);
        }
        return result;
    }, [] as Produto[]);
}

let produtos: Produto[] = [
    { nome: "Notebook", preco: 3000, categoria: "Eletrônicos" },
    { nome: "Camisa", preco: 50, categoria: "Vestuário" },
    { nome: "Smartphone", preco: 2000, categoria: "Eletrônicos" }
];

console.log(procurarProdutosPorCategoria(produtos, "Eletrônicos")); // [{ nome: "Notebook", preco: 3000, categoria: "Eletrônicos" }, { nome: "Smartphone", preco: 2000, categoria: "Eletrônicos" }]



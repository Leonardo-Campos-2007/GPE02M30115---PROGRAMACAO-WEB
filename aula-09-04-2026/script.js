//Objetos
const pessoa = {
    nome: "Fulano",
    idade: 10,
    status: true
}; //objeto


console.log(pessoa);

//acessar as propriedados do objeto
console.log(pessoa.nome);

const veiculo = {};
veiculo.marca = "Fiat";
veiculo.ano = 2023;
console.log(veiculo);

veiculo.marca = "BYD";
console.log(veiculo);

//construtor -> criar diversas instâncias de um mesmo objeto
class Veiculo2 {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    };
};

const c1 = new Veiculo2("BYD", 2025);
const c2 = new Veiculo2("GWM", 2024);
console.log(c1);
console.log(c2.marca);

//modificadores de acesso
class ContaBancaria{
    #saldo =0; //# -- modificador de acesso privado
    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    };

    //metodo
    getSaldo(){
        return this.#saldo;
    };

};

const conta = new ContaBancaria(100);
//console.log(conta.#saldo); //erro, pois a propriedade é privada
console.log(conta.getSaldo());


const pessoa2 = ["Fulano", "Ciclano"]; //array
pessoa2[2] = "Beltrano";
console.log(pessoa2);

//metodos
pessoa2.push("Ana"); //adiciona ao final do array
console.log(pessoa2);

pessoa2.unshift("Maria"); //adiciona ao inicio do array
console.log(pessoa2);

pessoa2.splice(1,0,"João"); //adicionar em uma posição específica
console.log(pessoa2);

pessoa2.pop(); //remove o último elemento
console.log(pessoa2);

pessoa2.shift(); //remove o primeiro elemento
console.log(pessoa2);

pessoa2.splice(2,1); //remover na posição específica
console.log(pessoa2);
//

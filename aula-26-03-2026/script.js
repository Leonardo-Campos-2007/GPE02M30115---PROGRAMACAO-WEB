//criar os preços do combustível
const precoGasolina = 6.69;
const precoEtanol = 4.30;
const precoDiesel = 6.03;

//função (atualizarValor) - identificar o tipo de combustível
function atualizarValor(){
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);
    //escolha do combustivel
    let precoPorLitro;
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            console.log("Escolha uma opção");
            return;
    };
    console.log(precoPorLitro);
    let litros = parseFloat(document.getElementById("litros").value);
    calcularValorAbastecimento(precoPorLitro, litros);
};

let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizarValor);

//função = receber os dados do combustível (tipo e a qtde de litros)
function calcularValorAbastecimento(precoCombustivel, litros){
    //let valorTotal = precoCombustivel * litros;
    //document.getElementById("resultado").textContent = valorTotal;

    if(litros<=0 || isNaN(litros)){
        document.getElementById("resultado").textContent = "Insira valor válido";
        return;
    } else {
        let valorTotal = precoCombustivel * litros;
        document.getElementById("resultado").textContent = formatarMoeda(valorTotal);
    }
};

//função para formatar o valor
function formatarMoeda(valor){
    return "R$ " + valor.toLocaleString("pt-br", 
        {minimumFractionDigits: 2, maximumFractionDigits:2}
    );
};

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);

//evitar com que a página seja recarregada
litros.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        event.preventDefault();
        atualizarValor();
    };
});

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar(){
    window.open("https://globallabs.academy/");
    window.location.href = "https://globallabs.academy/";
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    // alert("trocar texto");
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

// function botao(){
//     alert("Obrigado por clicar!");
// }

// function soma(n1, n2){
//     return n1+n2;
// }

// function validaIdade(idade){
//     var validar;
//     if(idade >= 18){
//         validar = true;
//     } else {
//         validar = false;
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade");
// console.log(validaIdade(idade));
// alert(validaIdade(idade));

// alert(soma(2, 10));

// function setReplace(frase, nome, novo_nome){
//     return frase.replace(nome, novo_nome); // o replace troca a segunda string com a primeira
// }

// alert("Vai Japão", "Japão", "Brasil");

// var d = new Date();
// alert(d.getMonth()+1); // tem varios outros tipos de get

// var count;
// for (count=0; count <= 5; count++){
//     alert(count);
// }

// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     alert(count);
//     count++;
// }

// var idade = prompt("Qual a sua idade");
// if(idade >= 18) {
//     alert("maior de idade");
// } else {
//     alert("menor de idade");
// }

// var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
// console.log(frutas);
// alert(frutas[1].nome);

// var fruta = {nome:"maça", cor:"vermelha"}
// // console.log(fruta);
// console.log(fruta.nome);
// console.log(fruta.cor);
// alert(fruta.cor);

// var lista = ["maça", "pêra", "laranja"];
// lista.push("uva");
// lista.pop();
// console.log(lista.length);
// alert(lista);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista[0]);
// console.log(lista.toString()[0]);
// console.log(lista.join(" - "));

// var nome = "Luana Caroliny";
// var idade = 19;
// var idade2 = 10;
// var frase = "Japão é o melhor time do mundo";
//alert(nome+ " tem " +idade+" anos");
// alert(idade + idade2);
// console.log(nome);
// console.log(idade);
// console.log(frase.replace("Japão", "Brasil"));
// alert(frase.replace("Japão", "Brasil"));
// console.log(frase.toLocaleUpperCase());
// console.log(frase.toLowerCase());
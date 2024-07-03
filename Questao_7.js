//Vincular código JavaScript a um botão no html, antetando-se para o comando "document.querySelector('ID DO BOTÃO')",
//incluindo add.EventListner('click', function(){}); Considerar a criação da variável(btn1) e sua classe (btn1).
const btn1 = document.querySelector('#Exercicio7');

btn1.addEventListener('click', function(){
  //Lendo as notas. Observação: fora informado como const apenas para aumentar a prática da utilização do tipo
//de variável de entrada a ser informado. Comando "parseFloat" encadeado com o comando "prompt", faz com que na tela
//seja possível receber o dado e exibir a mensagem para o uusário.
  nota1 = parseFloat(prompt("Digite a primeira nota: "));
  nota2 = parseFloat(prompt("Digite a segunda nota: "));
  nota3 = parseFloat(prompt("Digite a terceira nota: "));

  //Tratar valores que sejam inclusos diferentes de 0.00 a 10.00
  while (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    alert("Digite Valores Válidos para as Notas, Contidos Entre Zero a Dez! Sendo NÃO Nulos ou em Branco!");
    return;    
  }
   
// A nota a ser utilizada serão apenas as duas miores, então precisamos descartar uma nota, para isso as estruturas
// de decisão podem nos ajudar, em questão foi implementado com if e else, se e senão (senão se), a fim de praticar 
//essa estrutura de condição, é possível ser feito por outras estruturas a depender da lógica que for aplicada pelo
//desenvolvedo.
if (nota1 >= nota2 && nota1 >= nota3) {
    maiorNota1 = nota1;
    if (nota2 >= nota3) {
      maiorNota2 = nota2;
    } else {
      maiorNota2 = nota3;
    }
  } else if (nota2 >= nota1 && nota2 >= nota3) {
    maiorNota1 = nota2;
    if (nota1 >= nota3) {
      maiorNota2 = nota1;
    } else {
      maiorNota2 = nota3;
    }
  } else {
    maiorNota1 = nota3;
    if (nota1 >= nota2) {
      maiorNota2 = nota1;
    } else {
      maiorNota2 = nota2;
    }
  }
 
  // Calcule a média das duas maiores notas
   media = (maiorNota1 + maiorNota2) / 2;
  
  //Condições para exibir o resultado da média.
  if (media >= 7.0) {
    alert(`Aprovado! Média: `+ media);
  } else if (media >= 3.0 && media < 7.0) {
    alert(`Prova final! Média ` + media);
  } else {
    alert(`Reprovado! Média ` + media);
  }

});






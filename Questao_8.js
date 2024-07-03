//Vincular código JavaScript a um botão no html, antetando-se para o comando "document.querySelector('ID DO BOTÃO')",
//incluindo add.EventListner('click', function(){}); Considerar a criação da variável(btn2) e sua classe (btn2).
const btn2 = document.querySelector('#Exercicio8');

btn2.addEventListener('click', function(){

//Leitura do valor de salário a ser recebido para processamento.E declaração de variáveis constantes para o percental
//por faixas de valores para aumento salarial.    
const salarios = parseFloat(prompt("Digite o Salário Atual: " ));
const percentual1 = 20;
const percentual2 = 15;
const percentual3 = 10;
const percentual4 = 5;

//Tratamento de valores que não são condizentes com a entrada de dados no valor do salário, Variavel salarios.
while (isNaN(salarios) || salarios <= 0) {
      alert("Digite um valor numérico válido para o salário!");
      return;
    }  
//Aplicação do processamento dos aumentos salariais conforme condições preestabelecidas para o processamento.
if (salarios <= 280.00){
    novoSalario = ((salarios * percentual1)/100) + salarios;
    alert("O Valor do Percentual Aplicado foi de: " + (percentual1 + '%'));
    alert("O Valor do Aumento foi de: " + (novoSalario - salarios));
    alert("O Novo Salário, Após o Aumento será: " + (novoSalario));
} else if (salarios > 280.00 && salarios <= 700.00){
    novoSalario = ((salarios * percentual2)/100) + salarios;
    alert("O Valor do Percentual Aplicado foi de: " + (percentual2 + '%'));
    alert("O Valor do Aumento foi de: " + (novoSalario - salarios));
    alert("O Novo Salário, Após o Aumento será: " + (novoSalario));
} else if (salarios > 700.00 && salarios <= 1500.00){
    novoSalario = ((salarios * percentual3)/100) + salarios;
    alert("O Valor do Percentual Aplicado foi de: " + (percentual3 + '%'));
    alert("O Valor do Aumento foi de: " + (novoSalario - salarios));
    alert("O Novo Salário, Após o Aumento será: " + (novoSalario));
} else {
    novoSalario = ((salarios * percentual4)/100) + salarios;
    alert("O Valor do Percentual Aplicado foi de: " + (percentual4 + '%'));
    alert("O Valor do Aumento foi de: " + (novoSalario - salarios));
    alert("O Novo Salário, Após o Aumento será de: " + (novoSalario));
}
});



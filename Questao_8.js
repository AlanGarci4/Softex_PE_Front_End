const btn2 = document.querySelector('#Exercicio8');

btn2.addEventListener('click', function(){

const salarios = parseFloat(prompt("Digite o Salário Atual: " ));
const percentual1 = 20;
const percentual2 = 15;
const percentual3 = 10;
const percentual4 = 5;

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



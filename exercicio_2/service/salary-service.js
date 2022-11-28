import * as imposto from './tax-service.js';
import * as previdencia from './pension-service.js';


export function netSalary(employee){
    let salarioBruto = employee.grossSalary;
    let name = employee.name;
    console.log(salarioBruto)
    console.log(name)
    let tax = imposto.tax(salarioBruto)
    let pension = previdencia.discount(salarioBruto);
    let salarioLiquido = salarioBruto - tax - pension;
    return console.log(`O funcionario ${name} tem o salário líquido de ${salarioLiquido}`); 
}
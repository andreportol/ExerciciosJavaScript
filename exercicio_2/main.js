import Employee from './models/employee.js'
import * as salary from './service/salary-service.js'


function ex(){
  let fun_1 = new Employee('Andre', 1000);
  salary.netSalary(fun_1)
  
}

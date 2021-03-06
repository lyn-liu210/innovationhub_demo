var express = require('express');
var router = express.Router();
import { Employee } from "src/entity/employee";
import { EmployeeService } from "src/service/employeeservice";
const employeeService: EmployeeService = new EmployeeService();
router.post('/', (req, res) => {
  console.log(req.body);
  const body = req.body
  const employee = new Employee()
  employee.email = body.email
  employee.password = body.password
  employeeService.createEmployee(employee).then(returvalue => {
    if (returvalue) {
      res.send(returvalue)
    } else {
      res.send("error")
    }
  })
});

router.get('/', (req, res) => {
     employeeService.getEmployee().then(employees => {
       if(employees){
         res.send(employees)
       }else {
        res.send("error")
       }
     })
});
module.exports = router

const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 ,special :'Java'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, special: 'C' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, special: 'Javascript' },
    { id: 4, name: 'Prithivi Rajan', age: 22, department: 'R & D', salary: 10000, spacial: 'Python' }
  ];

  function displayEmployees() {
    let employeelist = ''
    employees.forEach((employee) =>{
        employeelist += `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`;
    });
    document.getElementById('employeesDetails').innerHTML = employeelist;
  }

  function calculateTotalSalaries() {
    const totalsal = employees.reduce((total,employee) => total + employee.salary , 0)
    alert(`Total salary is ${totalsal}`);
  }

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
  
  function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
  }
  function findEmployeeBySpecial(empSpecial) {
    const output = employees.find(employee => employee.special === 'Javascript')
     if (output) {
    document.getElementById('employeesDetails').innerHTML =`<p>${output.id}: ${output.name}: ${output.name} - ${output.department} - $${output.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
  }
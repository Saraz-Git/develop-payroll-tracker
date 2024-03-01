// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let employeesArray=[];
  let keepAdding= true;
  while(keepAdding){   
    let firstName = window.prompt("Enter first name:");
    let lastName = window.prompt("Enter last name:");
    let salary = window.prompt("Enter salary:");
    let employee={
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    employeesArray.push(employee);
    keepAdding = window.confirm("Do you want to add another employee?");
  };  

  window.alert(`${employeesArray[0].firstName}
  ${employeesArray[0].lastName}
  ${employeesArray[0].salary}

  ${employeesArray[1].firstName}
  ${employeesArray[1].lastName}
  ${employeesArray[1].salary}`);
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let tot;
  for(let i=0; i< employeesArray.length; i++){
    tot += parseInt(employeesArray[i].salary);
  }
  let averageSalary = tot/employeesArray.length;
  window.alert(`${averageSalary}`);
  console.log(`${averageSalary}`);
  // TODO: Calculate and display the average salary
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const index = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[index];

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

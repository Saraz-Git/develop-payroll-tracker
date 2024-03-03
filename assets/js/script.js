// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {

  let employeesArray = [];
  let keepAdding = true;
  let tries = 0;

  while (keepAdding) {
    let employee = {
      firstName: window.prompt("Enter first name:"),
      lastName: window.prompt("Enter last name:"),
      salary: window.prompt("Enter salary:"),
    };
    //if user input is empty in either column, alert will display reminder
    if (employee.firstName === "" || employee.lastName === "" || employee.salary === "") {
      window.alert("You must not leave any input blank");
      tries++;
      keepAdding = true;
      if (tries == 3) { keepAdding = false;};
    } else {
        employeesArray.push(employee);
        keepAdding = window.confirm("Do you want to add another employee?");
      };
    };
  return employeesArray;

  };
 
  // Display the average salary
  const displayAverageSalary = function (employeesArray) {

    let num = employeesArray.length;
    let tot = 0;
    for (let i = 0; i < num; i++) {
      tot += parseFloat(employeesArray[i].salary);
    };
    if (num !== 0) {
      let averageSalary = tot / num;
      console.log(`The average employee salary between our ${num} employee(s) is $${averageSalary}.`);
    } else {
      console.log("Employee number must be more than 0.")
    };
  };

  // Select a random employee
  const getRandomEmployee = function (employeesArray) {

    if (employeesArray.length === 0) {
      console.log("We won't be able to pick from 0 employee.");
    } else {
      const index = Math.floor(Math.random() * employeesArray.length);
      let randomEmployee = employeesArray[index];
      console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random draw winner!`);
    };
  };

  /*
    ====================
    STARTER CODE
    Do not modify any of the code below this line:
  */

  // Display employee data in an HTML table
  const displayEmployees = function (employeesArray) {
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
      salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });

      newTableRow.append(salaryCell);

      employeeTable.append(newTableRow);
    };
  }


  const trackEmployeeData = function () {
    const employees = collectEmployees();

    console.table(employees);

    displayAverageSalary(employees);

    console.log('==============================');

    getRandomEmployee(employees);

    employees.sort(function (a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });

    displayEmployees(employees);
  };

  // Add event listener to 'Add Employees' button
  addEmployeesBtn.addEventListener('click', trackEmployeeData);

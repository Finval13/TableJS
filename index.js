"use strict";

// class Marker {
//   constructor(color, volume) {
//     this.color = color;
//     this.volume = volume;
//   }

//   print(str) {
//     const printText = str.slice(0, Math.floor(this.volume / 2));
//     document.write(`<p style = "color:${this.color}">${printText}</p>`);
//     this.volume -= printText.length * 2;
//   }
// }

// class RefillMarker extends Marker {
//   constructor(color, volume, maxvolume) {
//     super(color, volume);
//     this.maxvolume = this.volume;
//   }
//   refill() {
//     this.volume = this.maxvolume;
//   }
// }

// const m1 = new Marker("red", 100);
// m1.print("Длинный рядок и бла бла бла бла бла бла бла бла");
// const refillMarker = new RefillMarker("red", 100);
// refillMarker.print("бла бла бла бла");
// refillMarker.refill();
// refillMarker.print("бла бла бла бла");

// console.dir(m1);

// друге

// class ExtendedDate extends Date {
//   constructor() {
//     super();
//   }

//   formatDate() {
//     const months = [
//       "січня",
//       "лютого",
//       "березня",
//       "квітня",
//       "травня",
//       "червня",
//       "липня",
//       "серпня",
//       "вересня",
//       "жовтня",
//       "листопада",
//       "грудня",
//     ];

//     const day = this.getDate();
//     const month = months[this.getMonth()];
//     return `${day} ${month}`;
//   }
//   isPast() {
//     const now = new Date();
//     return this < now;
//   }

//   isFutureOrPresent() {
//     const now = new Date();
//     return this >= now;
//   }
//   isVisocYear() {
//     const year = this.getFullYear();
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//   }
// }
// const currentDate = new ExtendedDate();
// console.log(currentDate.formatDate());
// console.log(currentDate.isPast());
// console.log(currentDate.isFutureOrPresent());
// console.log(currentDate.isVisocYear());

class Employee {
  constructor(id, name, position, salary) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let tableHtml = '<table border = "1">';
    tableHtml += "<tr><th>ID</th><th>Ім'я</th><th>Посада</th><th>Зарплата</th></tr>";
    for (let employee of this.employees) {
      tableHtml += `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>`;
    }
    tableHtml += "</table>";
    return tableHtml;
  }
}

const employee1 = new Employee(1, "Василь Степанович", "Працівник", 10000);
const employee2 = new Employee(2, "Василь Степанович", "Працівник", 10000);
const employee3 = new Employee(3, "Василь Степанович", "Працівник", 10000);

const employees = [employee1, employee2, employee3];

const empTable = new EmpTable(employees);
const htmlCode = empTable.getHtml();

document.write(htmlCode);

class StyledEmpTable extends EmpTable {
  constructor(employees) {
    super(employees);
  }

  getStyles() {
    return `<style>
  table {
      border-collapse: collapse;
      width: 100%;
  }
  th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
  }
  th {
      background-color: #f2f2f2;
  }
</style>`;
  }

  getHtml() {
    const styles = this.getStyles();
    const tableHtml = super.getHtml();
    return `${styles}${tableHtml}`;
  }
}

const employee4 = new Employee(1, "Василь Степанович", "Працівник", 10000);
const employee5 = new Employee(2, "Василь Степанович", "Працівник", 10000);
const employee6 = new Employee(3, "Василь Степанович", "Працівник", 10000);

const employees2 = [employee4, employee5, employee6];

const styledEmpTable = new StyledEmpTable(employees2);
const htmlCode2 = styledEmpTable.getHtml();

document.write(htmlCode2);

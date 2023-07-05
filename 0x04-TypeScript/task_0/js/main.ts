interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  { firstName: "Ebenezer", lastName: "Smith", age: 30, location: "Nigeria" },
  { firstName: "Emma", lastName: "Johnson", age: 23, location: "United States" }
];

const table = document.createElement("table");
const thead = table.createTHead();
const tbody = table.createTBody();

const headerRow = thead.insertRow();
headerRow.innerHTML = "<th>First Name</th><th>Location</th>";

studentsList.forEach(({ firstName, location }) => {
  const row = tbody.insertRow();
  row.innerHTML = `<td>${firstName}</td><td>${location}</td>`;
});

document.body.appendChild(table);

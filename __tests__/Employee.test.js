const Employee = require("../lib/Employee");

it("Can create a new Employee", () =>{
    const employeeTest = new Employee();
    expect(typeof(employeeTest) === "object");
});
it("Can get the object's name", () =>{
    const nameTest = "name1";
    const employeeTest = new Employee(nameTest);
    expect(employeeTest.getName() === nameTest);
});
it("Can get the object's id", () =>{
    const id = 1;
    const employeeTest = new Employee("", id);
    expect(employeeTest.getId() === id);
});
it("Can get the object's email", () =>{
    const email = "dylan@strouds.net"
    const employeeTest = new Employee("", 1,email);
    expect(employeeTest.getEmail() === email);
});
it("Can create a new Employee", () =>{
    const employeeTest = new Employee();
    expect(employeeTest.getRole() === "Employee");
});
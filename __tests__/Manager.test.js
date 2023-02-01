const Manager = require("../lib/Manager");

it("Can create a new Manager", () =>{
    const ManagerTest = new Manager();
    expect(typeof(ManagerTest) === "object");
});
it("Can get the object's name", () =>{
    const nameTest = "name1";
    const ManagerTest = new Manager(nameTest);
    expect(ManagerTest.getName() === nameTest);
});
it("Can get the object's id", () =>{
    const id = 1;
    const ManagerTest = new Manager("", id);
    expect(ManagerTest.getId() === id);
});
it("Can get the object's email", () =>{
    const email = "dylan@strouds.net"
    const ManagerTest = new Manager("", 1,email);
    expect(ManagerTest.getEmail() === email);
});
it("Can get the object's officeNumber", () =>{
    const officeNumber = 123
    const ManagerTest = new Manager("", 1,"",officeNumber);
    expect(ManagerTest.officeNumber === officeNumber);
});
it("Can return the object's role", () =>{
    const ManagerTest = new Manager();
    expect(ManagerTest.getRole() === "Manager");
});

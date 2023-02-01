const Engineer = require("../lib/Engineer");

it("Can create a new Employee", () =>{
    const engineerTest = new Engineer();
    expect(typeof(engineerTest) === "object");
});
it("Can return the Engineer's Github", () =>{
    const github = "Dylan-Stroud";
    const engineerTest = new Engineer("", 1,"",github);
    expect(engineerTest.getGithub() === github);
});
it("Can return the object's role", () =>{
    const engineerTest = new Engineer();
    expect(engineerTest.getRole() === "Engineer");
});
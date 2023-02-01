const Intern = require("../lib/Intern");

it("Can create a new Intern", () =>{
    const InternTest = new Intern();
    expect(typeof(InternTest) === "object");
});
it("Can return the intern's school", () =>{
    const school = "UniMelb"
    const InternTest = new Intern("", 1,"",school);
    expect(InternTest.getSchool() === school);
});
it("Can return the object's role", () =>{
    const InternTest = new Intern();
    expect(InternTest.getRole() === "Intern");
});
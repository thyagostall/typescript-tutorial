function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Thyago", lastName: "Stall" };
document.body.innerHTML = greeter(user);

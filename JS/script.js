var person = {
  firstname: "Shubham",
  lastname: "Nigam",
  rollno: "RVCE20MCA086",
  domain: "Javabackend Development",
  nickname: "daadestroyer",
};

console.log(person.firstname);
console.log(person.lastname);
console.log(person.rollno);
console.log(person.nickname);

var d = new Date();
console.log("Month : " + d.getMonth());
console.log("FullYear : " + d.getFullYear());

document.addEventListener("click", () => {
  document.getElementById("para").innerHTML = "daadestroyer_14";
});

//Exercise 1
console.log("Exercise 1")
console.log("//------------------------------")
//------------------------------

function getFullname(firstname, surname, useFormalname) {
  if (firstname === "" || surname === "") {
    return `Please enter your name and surname`;
  } else if (useFormalname) {
    return `Lord ${firstname} ${surname}`;
  } else {
    return `${firstname} ${surname}`;
  }
}
const fullname1 = getFullname("Benjamin", "Hughes", true);
console.log(fullname1);
const fullname2 = getFullname("Benjamin", "Hughes", false);
console.log(fullname2);

console.log("//------------------------------")
console.log("Exercise 2")
//------------------------------

//Exercise 2

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function getEventWeekday(day) {
  const date = new Date();
  const today = date.getDate();
  const eventDay = (day + today) % 7;
  return "the event will be held on a " + weekdays[eventDay];
}
console.log(getEventWeekday(17));

//Exercise 3
console.log("//------------------------------")
console.log("Exercise 3")
//------------------------------

function whatToWear(temperature) {
  if (temperature < 0) {
    return "Dress as much as you can";
  } else if (temperature <= 10) {
    return "Put on light jacket";
  } else if (temperature <= 17) {
    return "Put on long sleeve ";
  } else if (temperature <= 30) {
    return "you can dress like a king";
  } else if (temperature <= 36) {
    return "Bikini :)";
  }
  return "Naked otherwise you will die ";
}
const suitableClothes = whatToWear(90);
console.log(suitableClothes);

//Exercise 4
console.log("//------------------------------")
console.log("Exercise 4")
//------------------------------
const class07Students = [];

function addStudentToClass(studentName) {

  if (class07Students.length <= 6 || studentName === "Queen") {
    return class07Students.push(studentName);
  } else if (class07Students.length < 6) {
    return "Please Enter more students"
  } else if (class07Students.length === 6 && studentName !== "Queen") {
    return "No more students can be added to class 07"
  } else if (class07Students.includes(studentName)) {
    return "student ${studentName} exists already"
  }
}

addStudentToClass("Alaa");
addStudentToClass("Maher");
addStudentToClass("Anoos");
addStudentToClass("Kim");
addStudentToClass("Dennis");
addStudentToClass("Rasmus");
addStudentToClass("Queen");

console.log(class07Students);
console.log(class07Students.length);

console.log("//------------------------------")
console.log("End Of HomeWork")
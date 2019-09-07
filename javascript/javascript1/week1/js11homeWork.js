//Exersice 1
let yearOfBirth = 1986;
let yearFuture = 2045;
let age = yearFuture - yearOfBirth;
console.log("You will be ", age, " years old in 2027");
// Exersice 2
let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = dogYear * 7;
console.log("Your dog will be ", shouldShowResultInDogYears, "dog years old in 2027")
// Exersice 3
let volumeInMetersPeter = 8 * 10 * 10;
let gardenSizeInM2Peter = 100;
let paymentPeter = 2500000;
let housePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2Peter * 300;
if (paymentPeter > housePricePeter) {
  console.log("Peter payed too much");
} else {
  console.log("Peter payed too little");
}
let volumeInMetersJulia = 5 * 11 * 8;
let gardenSizeInM2Julia = 70;
let paymentJulia = 1000000;
let housePriceJulia = volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2Julia * 300;
if (paymentJulia > housePriceJulia) {
  console.log("Julia payed too much");
} else {
  console.log("Julia payed too little");
}
// Exersice 4
let firstWords = ["Swedish", "English", "French", "Arabic", "Danish", "Dutch", "Latin", "Hindi", "Urdu", "Zulu"]
let secondWords = ["JS", "HTML", "C++", "C#", "CSS", "Paython", "PHP", "SQL", "A++", "KRYPTON"]
let randomNumber = Math.floor(Math.random() * 10) + 0
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log("The Startup \"", startupName, "\" contains ", startupName.length, "characters");
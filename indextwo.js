// 
const userInput = prompt("Enter to check consumer-based categories.\n 1.Herbivous\n 2.Canivores\n 3.Omnivores.");

if (userInput === "1") {
    alert(`Correct! Herbivous eats plants`);
} else if (userInput === "2") {
    alert(`Correct! Carnivorous ats animals`);
} else if (userInput === "3") {
    alert(`Correct! Omivorous eats both plants and animals`);
} else {
    alert(`Incorrect. ${userInput} does not exist`);
}
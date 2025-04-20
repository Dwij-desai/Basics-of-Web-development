String.prototype.findCountOfVowels = function () {
  // Convert the input string to lowercase
  Input = this.toLowerCase();

  const Vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < this.length; i++) {
    if (Vowels.includes(Input[i])) {
      count++;
    }
  }

  console.log(`Number of Vowels in string in ${this} is ${count}`);
};

let Input = "Pan Pineapple apple pan";
Input.findCountOfVowels();

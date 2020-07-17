const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i = 0;

// write a while loop that prints out the contents of ingredients:
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

// Write a for loop that prints out the contents of ingredients:
for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i])
}

// write a loop that prints out the ingredients in reverse:
for (i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i])
};
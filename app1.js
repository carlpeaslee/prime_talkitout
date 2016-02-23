var value = 52;

if (value >= 2) {
  value += 8;
} else {
  value -= 47;
};

console.log("after step 2:", value);

value = value + "52";

console.log("after step 3:",  value);

var purpleArray = [];

for (i = 0; i < value.length; i++ ) {
  purpleArray.push(value.charAt(i)); // ---> matt's way
  //purpleArray[i] = value.charAt(i);  ---> carl's way
};

console.log("purpleArray:", purpleArray);

console.log("purple shift", purpleArray.shift());
console.log("purple pop", purpleArray.pop());

var purple = "";

for (i = purpleArray.length - 1; i >= 0; i--) {
  purple += purpleArray[i];
};

console.log("after 6: ", purple);

value = parseInt(value);
purple = parseInt(purple);

console.log("value :", value);
console.log("purple : ", purple);

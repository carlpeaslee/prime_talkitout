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

// Switching over to Matt

value = value + purple;

console.log("Step 8:", value);

if (value > 7352) {
	value = 4;
} else if (value == 6102) {
	value = 54;
} else {
	value = 28;
};

console.log("Step 9:", value);

var counter = 5;

while (counter > 0) {
	value++;
	counter--;
};

console.log("Step 10:", value);

function purpleFun(val) {
	val = val.toString();
	if (val.length == 1) {
		value = val;
		return val;

	} else {
		val = val.slice(1);
		value = val;
		return val;
	};


};

purpleFun(value);

//console.log("Steps 11 and 12:", value);
console.log(value);
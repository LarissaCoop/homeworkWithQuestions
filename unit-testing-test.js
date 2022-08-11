// This is an example of the greet() function covering requirements layed out in the Unit Testing Practice activity

export default function greet(name) {
  //First, Write a function called Greet(name) that takes an argument called name, and returns a simple greeting message. For example, if the name is “Elizabeth” the function should return “Hello, Elizabeth”.
  if (name === null || name === undefined) return "Hello there!";
  //Next, handle null values by introducing a default. For example, when the name parameter is null, then the method should return the string “Hello there!”.
  if (typeof name === typeof []) {
    if (name.length > 0 && name.Length < 3) {
      let names = "";
      name.forEach((elm) => {
        names += ", " + elm;
      });
      return "Hello" + names;
      /*Next, Handle two names as input. If the name parameter is an array containing two names, then both names should be greeted. For example, if the input parameter is [‘Jose’,’Pep’], the method should return the string: “Hello, Jose, Pep”.
      I do not see where the input is limited, so added the && statement to check for the length of the array. */
    }
    return "Hello there!";
  }
  if (name === name.toUpperCase()) {
    return "HELLO " + name + "!";
    //Next, add shouting. When “name” is all uppercase, then the method should shout back to the user. For example, when the name is "JOSE" then the method should return the string "HELLO JOSE!".
  }

  return "Hello, " + name;
  //part of the first step
}
/* I keep getting an error that says "Cannot find module 'unit-testing-test' from 'unit-testing-test.js'". I am not sure what I am doing wrong. I have tried to import the function into the test file, but I am not sure if that is the correct way to do it. */

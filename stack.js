// Stack
// LIFO (Last In First Out)
// kinda like a stack of pringles

function createStack() {
  const stack = [];

  return {
    push(item) {
      stack.push(item);
    },
    pop(item) {
      return stack.pop(item);
    },
    peek() {
      return stack[stack.length - 1];
    },
    get length() {
      return stack.length;
    },
    isEmpty() {
      return stack.length === 0;
    }
  }
}

// Usage examples
const pringles = createStack();
pringles.push('BBQ chip');
pringles.push('Cheese chip');
pringles.push('Sour cream onion chip');
console.log(pringles.pop()); //Sour cream onion chip

/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {
  data: number[] = []
  
  push(n: number) {
    const action = this.data.push(n)
    return action
  }
  pop() {
    const action = this.data.pop()
    return action
  }

  peek() {
    const action = this.data[this.data.length -1]
    return action
  }
}

export { Stack };

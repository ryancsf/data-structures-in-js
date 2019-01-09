// Queues
// Collection of items that obeys the principles of FIFO (first in, first out)

function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      // add to the beginning
      queue.unshift(item);
    },
    dequeue() {
      // return from the end of the array
      return queue.pop();
    },
    peek() {
      // peek from the back (end of array)
      return queue[queue.length - 1];
    },
    /**
     *  if we use length: queue.length instead, it will always be zero
     *  The reason is because it will never update and reads the new queue again.
     *  That's why we need to use getter function
     * */
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length == 0;
    }
  };
}

// Usage example
const q = createQueue();
console.log(q.isEmpty()); // true

// Test Enqueue
q.enqueue("Task 1");
q.enqueue("Task 2");
q.enqueue("Task 3");

// queue looks like this now ['Task 3', 'Task 2', 'Task 1']
console.log(q.peek()); // ['Task 1']

q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.isEmpty()); // true

// Priority Queues
function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();

  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority ? highPriorityQueue.enqueue(item) : lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      // dequeue from highPriorityQueue first.
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }

      return lowPriorityQueue.dequeue();
    },
    // peek from high priority queue first
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }

      return lowPriorityQueue.peek();
    },
    length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
    }
  };
}

const priorityQ = createPriorityQueue();

priorityQ.enqueue("Task 1");
priorityQ.enqueue("Task 2");
priorityQ.enqueue("Task 3");

priorityQ.dequeue();
priorityQ.enqueue("Emergency task!", true);
console.log(priorityQ.dequeue()); // Emergency task
console.log(priorityQ.peek()); // Tasm 2

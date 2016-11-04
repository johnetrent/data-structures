/* eslint-disable no-magic-numbers */
import Queue from './index';
import test from 'ava';

test('accepts both a list and array of arguments', t => {
  const q1 = new Queue([1, 2, 3]);
  const q2 = new Queue(1, 2, 3);
  t.deepEqual(q1, q2);
  t.is(q1.size(), 3);
  t.is(q1.peek(), 1);
  t.is(q2.size(), 3);
  t.is(q2.peek(), 1);
});

test('enqueue(value) adds a value to the end of the queue', t => {
  const q = new Queue();
  t.is(q.size(), 0);
  q.enqueue('dragon');
  t.is(q.size(), 1);
  t.is(q.peek(), 'dragon');
});

test('dequeue() removes the value at the beginning of the queue', t => {
  const q = new Queue('cow', 'chicken', 'horse', 'duck');
  t.is(q.size(), 4);
  const removedItem = q.dequeue();
  t.is(removedItem, 'cow');
  t.is(q.size(), 3);
  t.is(q.peek(), 'chicken');
});

test('peek() returns the value at the beginning of the queue without removing it', t => {
  const q = new Queue('red', 'green', 'yellow', 'blue');
  t.is(q.size(), 4);
  t.is(q.peek(), 'red');
  t.is(q.size(), 4);
});

test('isEmpty() returns true/false if the queue is empty', t => {
  const q = new Queue();
  t.is(q.isEmpty(), true);
  q.enqueue('wizard');
  t.is(q.isEmpty(), false);
});

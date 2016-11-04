/* eslint-disable no-magic-numbers */

import Stack from './index';
import test from 'ava';

test('accepts both a list and array of arguments', t => {
  t.deepEqual(new Stack(1, 2, 3), new Stack(1, 2, 3));
});

test('push(value) pushes a value to the top of the stack', t => {
  const stack = new Stack(1, 2, 3);
  t.is(stack.size, 3);
  stack.push(4);
  t.is(stack.peek(), 4);
  t.is(stack.size, 4);
});

test('pop() removes the value at the top of the stack', t => {
  const stack = new Stack(1, 2, 3);
  const removedItem = stack.pop();
  t.is(removedItem, 3);
  t.is(stack.size, 2);
});

test('peek() returns the item at the top of the stack', t => {
  const stack = new Stack(1, 2, 3);
  t.is(stack.peek(), 3);
});

test('isEmpty() returns a true/false if the list is empty', t => {
  const stack = new Stack();
  t.is(stack.isEmpty(), true);
  stack.push(1);
  t.is(stack.isEmpty(), false);
  stack.pop();
  t.is(stack.isEmpty(), true);
});

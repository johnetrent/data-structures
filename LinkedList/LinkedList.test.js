/* eslint-disable no-magic-numbers */

import test from 'ava';
import LinkedList from './index';

test('accepts both a list and array of arguments', t => {
  t.deepEqual(new LinkedList(1, 2, 3, 4), new LinkedList([1, 2, 3, 4]));
});

test('add(value) adds an item to the end of the list', t => {
  const linkedList = new LinkedList(1, 2, 3, 4);
  t.is(linkedList.length, 4);
  linkedList.add(5);
  t.is(linkedList.length, 5);
  t.is(linkedList.get(5).data, 5);
});

test('remove(position) removes the item at the given position', t => {
  const linkedList = new LinkedList(1, 2, 3, 4);
  t.is(linkedList.length, 4);
  const removedItem = linkedList.remove(3);
  t.is(removedItem.data, 3);
  t.is(linkedList.length, 3);
  t.is(linkedList.get(3).data, 4);
});

test('get(position) returns the item at the given position', t => {
  const linkedList = new LinkedList(1, 2, 3, 4);
  t.is(linkedList.get(2).data, 2);
});

test('toArray() returns an array', t => {
  const linkedList = new LinkedList(1, 2, 3, 4);
  const array = linkedList.toArray();
  t.is(Array.isArray(array), true);
  t.deepEqual(array, [1, 2, 3, 4]);
});

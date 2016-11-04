import test from 'ava';
import mockTree from './mock';

test('traverseBF and traverseDF traverse in the correct order', t => {
  const breadthFirst = [];
  const depthFirst = [];
  mockTree.traverseBF(node => breadthFirst.push(node.data));
  mockTree.traverseDF(node => depthFirst.push(node.data));
  t.deepEqual(breadthFirst, [
    'kingdom',
    'king',
    'queen',
    'dragon',
    'knight',
    'prince',
    'princess',
    'treasure',
    'magic',
    'horse',
  ]);
  t.deepEqual(depthFirst, [
    'horse',
    'knight',
    'king',
    'prince',
    'princess',
    'queen',
    'treasure',
    'magic',
    'dragon',
    'kingdom',
  ]);
});

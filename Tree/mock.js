import Tree from './index';

const tree = new Tree('kingdom');
tree.add('king', 'kingdom', tree.traverseBF);
tree.add('queen', 'kingdom', tree.traverseBF);
tree.add('prince', 'queen', tree.traverseBF);
tree.add('princess', 'queen', tree.traverseBF);
tree.add('knight', 'king', tree.traverseBF);
tree.add('horse', 'knight', tree.traverseBF);
tree.add('dragon', 'kingdom', tree.traverseBF);
tree.add('treasure', 'dragon', tree.traverseBF);
tree.add('magic', 'dragon', tree.traverseBF);

export default tree;

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// list = [1, 4, 7]
function oneToSeven() {
  // manually create the BST
  // then return the root node
  const left = new Node(1);
  const right = new Node(7);
  const root = new Node(4, left, right);
  return root;
}

// list = [10, 40, 45, 46, 50]
function tenToFifty() {
  const left = new Node(10, null, new Node(40));
  const right = new Node(50, new Node(46));
  const root = new Node(45, left, right);
  return root;
}

// list = [-20, -19, -17, -15, 0, 1, 2, 10]
function negativeToPositive() {
  const left = new Node(-15, new Node(-19, new Node(-20), new Node(-17)));
  const right = new Node(2, new Node(1), new Node(10));
  const root = new Node(0, left, right);
  return root;
}

if (require.main === module) {
  // add your own tests in here if you want
}

module.exports = {
  Node,
  oneToSeven,
  tenToFifty,
  negativeToPositive,
};

// Please add your pseudocode to this file
// And a written explanation of your solution

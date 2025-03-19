type TNode<T> = {
  value: T;
  left: TNode<T> | null;
  right: TNode<T> | null;
};

function insert<T>(node: TNode<T> | null, value: T): TNode<T> {
  if (!node)
    return {
      value,
      left: null,
      right: null,
    };

  if (node.value < value) {
    node.right = insert(node.right, value);
  }

  if (node.value >= value) {
    node.left = insert(node.left, value);
  }

  return node;
}

function search<T>(node: TNode<T> | null, value: T): boolean {
  if (!node) return false;

  if (node.value === value) return true;

  if (node.value < value) {
    return search(node.right, value);
  }
  if (node.value > value) {
    return search(node.left, value);
  }

  return false;
}

function deleteNode<T>(node: TNode<T> | null, parent: TNode<T>, value: T, direction: 'left' | 'right'): void {
  if (!node) return;

  if (node.value < value) {
    return deleteNode(node.right, node, value, 'right');
  }

  if (node.value > value) {
    return deleteNode(node.left, node, value, 'left');
  }

  // node === value;

  // case 1. there are no children
  if (!node.left && !node.right) {
    parent[direction] = null;
    return;
  }

  // case 2. I have one child.
  if (!node.left || !node.right) {
    parent[direction] = node[direction]; // I delete the current
  }

  // case 3 I have 2 children
  if (node.left && node.right) {
    const leftTreeHeight = getTreeHeight(node.left);
    const rightTreeHeight = getTreeHeight(node.right);

    if (leftTreeHeight > rightTreeHeight) {
      const largetValue = findLargestValue(node.left);

      node.value = largetValue;
      deleteNode(node.left, node, largetValue, 'left'); // parent should be the current node, in case the larget value is the left child.
    } else {
      const smallestValue = findSmalestValue(node.right);

      node.value = smallestValue;
      deleteNode(node.left, node, smallestValue, 'right'); // parent should be the current node, in case the larget value is the left child.
    }

    return;
  }
}

function findLargestValue<T>(node: TNode<T>): T {
  return node.right ? findLargestValue(node.right) : node.value;
}

function findSmalestValue<T>(node: TNode<T>): T {
  return node.left ? findSmalestValue(node.left) : node.value;
}

function getTreeHeight<T>(node: TNode<T> | null, height = 0): number {
  if (!node) return height;

  height += 1;

  const leftHeight = getTreeHeight(node.left, height);
  const rightHeight = getTreeHeight(node.right, height);

  return leftHeight > rightHeight ? leftHeight : rightHeight;
}

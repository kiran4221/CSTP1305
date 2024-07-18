class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// Parent Node
let parentNode = new BinaryTreeNode(1);
let child1 = new BinaryTreeNode(2);
let child2 = new BinaryTreeNode(3);
let subChild1 = new BinaryTreeNode(4);
let subChild2 = new BinaryTreeNode(5);

parentNode.left = child1;
parentNode.right = child2;
child1.left = subChild1;
child1.right = subChild2;


function preOrderTraversal(rootNode) {
    if (!rootNode) {
        return;
    }

    // Explore the Root
    console.log(rootNode.value);
    // Explore the Left
    preOrderTraversal(rootNode.left);
    // Explore the Right
    preOrderTraversal(rootNode.right);
}


function inOrderTraversal(rootNode) {
    if (!rootNode) {
        return;
    }
 
    // Explore the left
    inOrderTraversal(rootNode.left);
    // Explore the Root
    console.log(rootNode.value);

    // Explore the Right
    inOrderTraversal(rootNode.right);

}

function postOrderTraversal(rootNode) {

    if (!rootNode) {
        return;
    }
 
    // Explore the left subtree
    postOrderTraversal(rootNode.left);
    // Explore the right subtree
    postOrderTraversal(rootNode.right);
    // Explore the root node
    console.log(rootNode.value);
}

postOrderTraversal(parentNode);

function levelOrderTraversal(rootNode){
    // we will use queue to solve this

    if (!rootNode) {
        return;
    }

    const queue = [rootNode];

    while(queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode.value);

        if(currentNode.left) {
            queue.push(currentNode.right);
        }

        if(currentNode.right) {
            queue.push(currentNode.right);
        }
    }
}

function searchANode(target) {
    if (!rootNode) {
        return false;
    }

    // Explore the Root
    if(rootNode === target) {
        return true;
    }

    // Explore the Left and right
    searchANode(rootNode.left);
    
}
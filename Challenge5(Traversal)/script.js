//Challenge 1 Code (PreOrder)

var preorderTraversal = function(root) {
    let array1 = [];

    function pOTraversal(rootnode) {
        if (rootnode === null) {
            return;
        }

        array1.push(rootnode.val);

        pOTraversal(rootnode.left);
        pOTraversal(rootnode.right);
    }

    pOTraversal(root);

    return array1;
};

// Challenge 2 Code (InOrder)

var inorderTraversal = function(root) {
    let tempArray = [];

    function inOrTraversal(rootnode) {
        if(rootnode === null) {
            return;
        }

        inOrTraversal(rootnode.left);

        tempArray.push(rootnode.val);

        inOrTraversal(rootnode.right);
    }

    inOrTraversal(root);

    return tempArray;
};

// Challenge 3 Code (PostOrder) 

var postorderTraversal = function(root) {
    let tempArray = [];

    function postOTraversal(rootnode) {
        if(rootnode === null) {
            return;
        }

        postOTraversal(rootnode.left);

        postOTraversal(rootnode.right);

        tempArray.push(rootnode.val);


    }

    postOTraversal(root);

    return tempArray;
};
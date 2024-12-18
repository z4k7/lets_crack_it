/* 
TREE TRAVERSAL

=> Tree traversal means visiting every node in the tree.
=> A hierarchical data structure like a tree can be traversed in different ways
1. Depth First Search (DFS)
2. Breadth First Search (BFS)


DEPTH FIRST SEARCH

=> The DFS algorithm starts at the root node and explores as far as possible along each
   branch before backtracking
=> Visit the root node, visit all the nodes in the left subtree and visit all the nodes
   in the right subtree.
=> Depending on the order in which we do this, there can be three types of DFS traversals.
1. Preorder
2. Inorder
3. Postorder

PREORDER TRAVERSAL
1. Read the data of the node
2. Visit the left subtree
3. Visit the right subtree

INORDER TRAVERSAL
1. Visit the left subtree
2. Read the data of the node
3. Visit the right subtree

POSTORDER TRAVERSAL
1. Visit the left subtree
2. Visit the right subtree
3. Read the data of the node

BREADTH FIRST SEARCH

Explore all nodes at the present depth prior to moving on to the nodes at the next depth level
1. Create a queue
2. Enqueue the root node
3. As long as a node exists in the queue
    a.Dequeue the node from the front
    b.Read the node's value
    c.Enqueue the node's left child if it exists
    d.Enqueue the node's right child if it exists


*/

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)

        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left == null){
                root.left = newNode

            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(root.right == null){
                root.right = newNode
            

            }else{
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value ===value ){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        //  use the optimised queue implementation
        const queue = []
        queue.push(this.root)

        while(queue.length){
            let current = queue.shift()
            console.log(current.value)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
    }


    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    getHeight(root){
        if(!root){
           return 0
        }else{
           const leftHeight = this.getHeight(root.left)
           
           const rightHeight = this.getHeight(root.right)
         
           return Math.max(leftHeight,rightHeight) + 1
       }
       }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root === null){
            return root
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else  if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    
   isBst(root,min,max){
    if(!root){
        return true
    }
    if(root.value < min || root.value > max){
        return false
    }
    return(
        this.isBst(root.left,min,root.vale) &&
        this.isBst(root.right,root.value,max)
    )
   }

   isBalanced(root){
    if(!root){
        return true
    }
    const leftHeight = this.getHeight(root.left)
    const rightHeight = this.getHeight(root.right)
    if(Math.abs(leftHeight - rightHeight >1)){
        return false
    }
}


}

const bst = new BinarySearchTree()
console.log("Tree is empty?", bst.isEmpty())
bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(3)


// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,15))
// console.log(bst.search(bst.root,5 ))
// console.log(bst.search(bst.root,52 ))
// console.log(bst.root)
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

// bst.delete(10)
bst.levelOrder()

console.log("Height",bst.getHeight(bst.root))
console.log(bst.isBst(bst.root,bst.min,bst.max));

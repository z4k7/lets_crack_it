/* 
TREE

=> A tree is a hierarchical data structure that consists of nodes connected by edges.

=> A tree is a non-linear data structure, compared to arrays, linked lists, stacks and
   queues which are linear data structures.
   
=> In linear data structures, the time required to search is proportional to the size of
   the data set.

=> Trees however, owing to the non-linear nature allow quicker and easier access to the data.

=> A tree will not contain any loops or cycles.

APPLICATIONS

=> File systems for directory structure

=> A family tree

=> An organisation tree

=> DOM

=> Chat Bots
 
=> Abstract syntax trees


BINARY SEARCH TREE

=> The value of each left node must be smaller than the parent node.

=> The value of each right node must be greater than the parent node.

=> Each node has at most two children.

APPLICATIONS

=> Searching

=> Sorting

=> To implement abstract data types such as lookup and priority queues.

*/



class Node{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(data){
        const newNode = new Node(data)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.data < root.data){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.data
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!this.right){
            return root.right
        }else{
            return this.max(root.right)
        }
    }

    delete(data){
        this.root = this.deleteNode(this.root,data)
    }

    deleteNode(root,data){
        if(root == null){
            return root
        }
        if(data < root.data){
            root.left = this.deleteNode(root.left,data)
        }else if(data > root.data){
            root.right = this.deleteNode(root.right,data)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
               return root.left
            }
            root.data = this.min(root.right)
            root.right = this.deleteNode(root.right,root.data)
        }
        return root
    }

    isBst(root,min,max){
        if(!root){
            return true
        }
        if(root.data < min || root.data > max ){
            return false
        }
        return(
            this.isBst(root.left,min,root.data) &&
            this.isBst(root.right,root.data,max)
        )
    }
}
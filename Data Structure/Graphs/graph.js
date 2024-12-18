/* 
GRAPH

=> A graph is a non-linear data structure that consists of a finite number of vertices(also called nodes)
   connected by edges
=> Trees are a specific type of graph data structure. 

TYPES OF GRAPH
1.Directed Graph
2.Undirected Graph

DIRECTED GRAPH
=> A graph in which the edges have a direction
=> Edges are usually represented by arrows pointing in the direction the graph can be traversed

UNDIRECTED GRAPH
=> A graph in which the edges are bidirectional
=> The graph can be traversed in either direction
=> The absence of an arrow tells us that the graph is undirected

APPLICATIONS
=>Google Maps
=> Social Media Sites


ADJACENCY MATRIX VS ADJACENCY LIST
=> With an adjacency list, we only need to store the values for the edges that exist.
   With adjacenc matrix, you store values irrespective of whether an edge exists or not.
   Storage wise, an adjacency list is way more efficient.

=> With adjacency list, inserting and finding adjacent nodes is constand time complexity
   whereas with adjacency matrix, it is linear time complexity.  

=> An adjacency list allows you to store additional values with an edge such as weight of 
   the edge. With adhacency matrix, such information would have to be stored externally.    


*/

// class Graph {
//   constructor() {
//     this.adjacencyList = {};
//   }

//   addVertex(vertex) {
//     if (!this.adjacencyList[vertex]) {
//       this.adjacencyList[vertex] = new Set();
//     }
//   }

//   addEdge(vertex1, vertex2) {
//     if (!this.adjacencyList[vertex1]) {
//       this.addVertex(vertex1);
//     }
//     if (!this.adjacencyList[vertex2]) {
//       this.addVertex(vertex2);
//     }
//     this.adjacencyList[vertex1].add(vertex2);
//     this.adjacencyList[vertex2].add(vertex1);
//   }

//   removeEdge(vertex1, vertex2) {
//     this.adjacencyList[vertex1].delete(vertex2);
//     this.adjacencyList[vertex2].delete(vertex1);
//   }

//   removeVertex(vertex) {
//     if (!this.adjacencyList[vertex]) {
//       return;
//     }
//     for (let adjacentVertex of this.adjacencyList[vertex]) {
//       this.removeEdge(vertex, adjacentVertex);
//     }
//     delete this.adjacencyList[vertex];
//   }

//   hasEdge(vertex1, vertex2) {
//     return (
//       this.adjacencyList[vertex1].has(vertex2) &&
//       this.adjacencyList[vertex2].has(vertex1)
//     );
//   }

//   display() {
//     for (let vertex in this.adjacencyList) {
//       console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
//     }
//   }

  
// }

// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addEdge("A", "B");
// graph.addEdge("B", "C");

// graph.display();
// console.log(graph.hasEdge("A", "B"));
// console.log(graph.hasEdge("A", "C"));

// console.log("Is cyclic:", graph.isCyclic());

// graph.removeVertex("B");
// graph.display();
// console.log("Is cyclic:", graph.isCyclic());
// _______________________________________________________________________________________________________________________________________________

class Graph{
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex]= new Set()
    }
  }

  addEdge(vertex1,vertex2){
    if(!this.adjacencyList[vertex1]){
      this.addVertex(vertex1)
    }

    if(!this.adjacencyList[vertex2]){
      this.addVertex(vertex2)
    }

    this.adjacencyList[vertex1].add(vertex2) 
    this.adjacencyList[vertex2].add(vertex1)
  }

  removeEdge(vertex1,vertex2){
    this.adjacencyList[vertex1].delete(vertex2)
    this.adjacencyList[vertex2].delete(vertex1)
  }

  removeVertex(vertex){
    if(!this.adjacencyList[vertex]){
      return
    }
    for(let adjacentVertex of this.adjacencyList[vertex]){
      this.removeEdge(vertex,adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }

 hasEdge(vertex1,vertex2){
  return (
    this.adjacencyList[vertex1].has(vertex2) &&
    this.adjacencyList[vertex2].has(vertex1)
  )
 }

display(){
  for(let vertex in this.adjacencyList){
    console.log(vertex + "->" + [...this.adjacencyList[vertex]])
  }
}

hasCycle(){
  const visited = new Set()
  const stack = new Set()

  const dfs = (node,parent)=>{
    visited.add(node)
    stack.add(node)

    for(const neighbor of this.adjacencyList[node]){
      if(!visited.has(neighbor)){
        if(dfs(neighbor,node)){
          return true
        }
      }else if(stack.has(neighbor) && neighbor !== parent){
        return true
      }
    }

    stack.delete(node)
    return false
  }

  for(const node in this.adjacencyList){
    if(!visited.has(node)){
      if(dfs(node,null)){
        return true
      }
    }
  }
  return false
}

}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("A", "C");

graph.display();
console.log(graph.hasEdge("A", "B"));
console.log(graph.hasEdge("A", "C"));

console.log("Is cyclic:", graph.hasCycle());

graph.removeVertex("B");
graph.display();
console.log("Is cyclic:", graph.hasCycle());


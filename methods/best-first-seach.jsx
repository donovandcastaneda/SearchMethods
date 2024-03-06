// Function for adding edges to graph
function addedge(x, y, cost)
{
    graph[x].push([cost, y]);
    graph[y].push([cost, x]);
}
 
// Function For Implementing Best First Search
// Gives output path having lowest cost
function best_first_search(actual_Src, target, n)
{
    let visited = new Array(n).fill(false);
     
    // MIN HEAP priority queue
    let pq = [];
 
    // sorting in pq gets done by first value of pair
    pq.push([0, actual_Src]);
    let s = actual_Src;
    visited[s] = true;
    while (pq.length > 0) { 
        let x = pq[0][1];
        // Displaying the path having lowest cost
        document.write(x + " ");
        pq.shift();
        if (x == target) break;
 
        for (let i = 0; i < graph[x].length; i++) {
            if (visited[graph[x][i][1]] == 0) {
                visited[graph[x][i][1]] = true;
                pq.push([graph[x][i][0],graph[x][i][1]]);
                pq.sort((a, b)=>{
                    if(a[0] != b[0]){
                        return a[0]-b[0];
                    }
                    return a[1]-b[1];
                });
            }
        }
    }
}
 
// Driver code to test above methods
 
// No. of Nodes
let v = 14;
let graph = new Array(v);
for(let i = 0; i < v; i++){
    graph[i] = new Array(0);
}
 
// The nodes shown in above example(by alphabets) are
// implemented using integers addedge(x,y,cost);
addedge(0, 1, 3);
addedge(0, 2, 6);
addedge(0, 3, 5);
addedge(1, 4, 9);
addedge(1, 5, 8);
addedge(2, 6, 12);
addedge(2, 7, 14);
addedge(3, 8, 7);
addedge(8, 9, 5);
addedge(8, 10, 6);
addedge(9, 11, 1);
addedge(9, 12, 10);
addedge(9, 13, 2);
 
let source = 0;
let target = 9;
 
// Function call
best_first_search(source, target, v);
function topoSort(graph,n,indegree){
    let queue = [];
    let visited = new Set();
    for(let i = 0; i < n; i++){
        if(indegree[i] == 0){
            queue.push(i);
            visited.add(i);
        }
    }
    let count = 0;
    while(!(queue.length == 0)){
        let node = queue.shift();
        count++;
        for(const neighbour of graph[node]){
            indegree[neighbour]--;
            if(indegree[neighbour] == 0){
                queue.push(neighbour);
                visited.add(neighbour);
            }
        }
    }
    return count === n;
}
var canFinish = function(numCourses, prerequisites){
    let graph = new Array(numCourses);
    for(let i = 0; i < numCourses; i++){
        graph[i] = new Array();
    }
    let indegree = new Array(numCourses).fill(0);
    for(let i = 0; i < prerequisites.length; i++){
        let curr = prerequisites[i];
        let a = curr[0];
        let b = curr[1];
        graph[b].push(a);// a is dependent on b
        indegree[a]++; // we increase the indegree of a
    }
    return topoSort(graph,numCourses,indegree);
}
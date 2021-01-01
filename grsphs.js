function createGraph(V,E){

    let adjecency_list = [];

    for(let i=0;i<V;i++){
        adjecency_list.push([]);
    }

    for(let i= 0;i<E.length;i++){
        adjecency_list[E[i][0] - 1].push([E[i][1]-1,E[i][2]]);
        adjecency_list[E[i][1] - 1].push([E[i][0] - 1, E[i][2]]);
    }
    return adjecency_list;
}

const V =5;
const Edges = [[1,2,3],[1,4,2],[3,5,1],[3,4,3]];

let graph = createGraph(V,Edges);
console.log(graph);
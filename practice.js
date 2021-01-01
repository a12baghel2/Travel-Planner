onload = function(){
    const container = document.getElementById('container');
    const getNew = document.getElementById("generate-graph");

    const options = {
        edges: {
            labelHighlightBold : true,
            font: {
                size: 20
            }
        },
        nodes : {
            font : '12px arial red',
            scaling : {
                label: true
            },
            shape: 'icon',
            icon : {
                face: 'FontAwesome',
                code: '\uf015',
                size: 40,
                color: '#991133',
            }
        }
    };
    const network = new vis.Network(container);
    network.setOptions(options);

    function createData(){
        const cities =["Delhi","Mumbai","Gujrat","Goa","Kanpur","Jammu","Banglore","Gangtok","Hyderabad","Meghalaya"];

        const V = Math.floor(Math.random() * cities.length) + 3;
        let vertices = [];
        for(let i=0;i<V;i++){
            vertices.push({ id: i, label: cities[i - 1] });
        }
        let edges = [];
        for(let i=1;i<V;i++){
            let heigh = Math.floor(Math.random()*i);
            edges.push({from: i, to : heigh, color: 'orange',label: String(Math.floor(Math.random()*70)+30)})
        }
        const data = {
            nodes :  vertices,
            edges: edges
        }
        return data;
    }

    getNew.onclick = function () {
        let data = createData();
        network.setData(data);
    };
    getNew.click();
}
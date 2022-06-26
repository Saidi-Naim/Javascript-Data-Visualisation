
let trs = document.querySelectorAll("#table1 tbody tr");
let trs2 = document.querySelectorAll("#table2 tbody tr");
let listGlobal = [];
let listGlobal2 = [];

let canva2 = document.createElement("canvas");
canva2.setAttribute("id", "graph2");
canva2.setAttribute("width", "400");
canva2.setAttribute("height", "auto");
let div2 = document.getElementById("mw-content-text");
div2.insertBefore(canva2, table2);

let canva = document.createElement("canvas");
canva.setAttribute("id", "graph1");
canva.setAttribute("width", "400");
canva.setAttribute("height", "auto");
let div = document.getElementById("mw-content-text");
div.insertBefore(canva, table1);


let ths = document.querySelectorAll("#table1 tbody tr")[0].querySelectorAll("th");
let years = [];
ths.forEach(th => {
    if(th.innerText != ""){
    years.push(th.innerText);
    }
})


trs.forEach( tr => {
    let miniList = []

    tr.querySelectorAll('td').forEach(td => {
        if (!isNaN(td.innerText[0])){
            miniList.push(parseFloat((td.innerText).replace(",", ".")));
        }else{
            miniList.push(td.innerText);
        }
    });

    listGlobal.push(miniList);
});
const ctx = document.getElementById('graph1').getContext('2d');

    const btnContainer = document.createElement('div');
    btnContainer.setAttribute('id', 'btns');
    document.getElementById('graph1').after(btnContainer);
    btnContainer.style.display = 'flex';
    btnContainer.style.flexWrap = 'wrap';
    btnContainer.style.paddingBottom = '100px';
    btnContainer.style.backgroundColor = 'white';
    btnContainer.style.textAlign = 'center';

    var myChart=null;

    for(let i = 0; i < listGlobal.length; i++){
        let btn = document.createElement('button');
        if(i != 0){
        btn.innerText = listGlobal[i][0];
        btnContainer.appendChild(btn);
        btn.setAttribute('index', i);
        
        listGlobal[parseFloat(btn.getAttribute('index'))].shift();
        btn.style.borderColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        btn.style.backgroundColor = "#fff";
        btn.style.margin = "3px";

        btn.onclick= (() => {
            if(myChart != null){
                myChart.destroy();
            }

        myChart = new Chart(ctx, {
               type: 'bar',
               data: {
                   labels: years,
                   datasets: [{
                       label: 'Numbers Of Crimes',
                       data: listGlobal[parseFloat(btn.getAttribute('index'))],
                       backgroundColor: [
                           'rgba(255, 99, 132, 0.2)',
                           'rgba(54, 162, 235, 0.2)',
                           'rgba(255, 206, 86, 0.2)',
                           'rgba(75, 192, 192, 0.2)',
                           'rgba(153, 102, 255, 0.2)',
                           'rgba(255, 159, 64, 0.2)'
                       ],
                       borderColor: [
                           'rgba(255, 99, 132, 1)',
                           'rgba(54, 162, 235, 1)',
                           'rgba(255, 206, 86, 1)',
                           'rgba(75, 192, 192, 1)',
                           'rgba(153, 102, 255, 1)',
                           'rgba(255, 159, 64, 1)'
                       ],
                       borderWidth: 1
                   }]
               },
               options: {
                   scales: {
                       y: {
                           beginAtZero: true
                       }
                   }
               }
           });
        
    })
}
}

////////////////////////////////////////////////// Second Graph //////////////////////////////////////////////////////////////////
let ths2 = document.querySelectorAll("#table2 thead tr")[0].querySelectorAll("th");
let years2 = [];
ths2.forEach((th , i) => {
    if(i > 1){
    years2.push(th.innerText);
    }
})


trs2.forEach( tr => {
    let miniList2 = [];

    tr.querySelectorAll('td').forEach(td => {
        if (!isNaN(td.innerText[0])){

            miniList2.push(parseFloat((td.innerText).replace(",", ".")));

        }else{
            miniList2.push(td.innerText);
        }
    })

    listGlobal2.push(miniList2);
});

const ctx2 = document.getElementById('graph2').getContext('2d');
    let button = document.querySelector('button');
    const btnContainer2 = document.createElement('div');
    btnContainer2.setAttribute('id', 'btns2');
    document.getElementById('graph2').after(btnContainer2);
    btnContainer2.style.display = 'flex';
    btnContainer2.style.flexWrap = 'wrap';
    btnContainer2.style.backgroundColor = 'white';
    btnContainer2.style.textAlign = 'center';

    var myChart2=null;

    for(let j = 0; j < listGlobal2.length; j++){
        let btn2 = document.createElement('button');
        if(j >= 0){
        btn2.innerText = listGlobal2[j][0];
        btnContainer2.appendChild(btn2);
        btn2.setAttribute('index', j);

        listGlobal2[parseFloat(btn2.getAttribute('index'))].shift();
        btn2.style.borderColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        btn2.style.backgroundColor = "#fff";
        btn2.style.margin = "3px";

        btn2.onclick= (() => {
            if(myChart2 != null){
                myChart2.destroy();
            }

        myChart2 = new Chart(ctx2, {
               type: 'bar',
               data: {
                   labels: years2,
                   datasets: [{
                       label: 'Homicide',
                       data: listGlobal2[parseFloat(btn2.getAttribute('index'))],
                       backgroundColor: [
                           'rgba(255, 99, 132, 0.2)',
                           'rgba(54, 162, 235, 0.2)',
                           'rgba(255, 206, 86, 0.2)',
                           'rgba(75, 192, 192, 0.2)',
                           'rgba(153, 102, 255, 0.2)',
                           'rgba(255, 159, 64, 0.2)'
                       ],
                       borderColor: [
                           'rgba(255, 99, 132, 1)',
                           'rgba(54, 162, 235, 1)',
                           'rgba(255, 206, 86, 1)',
                           'rgba(75, 192, 192, 1)',
                           'rgba(153, 102, 255, 1)',
                           'rgba(255, 159, 64, 1)'
                       ],
                       borderWidth: 1
                   }]
               },
               options: {
                   scales: {
                       y: {
                           beginAtZero: true
                       }
                   }
               }
           });
        
    })
}
}

//////////////////////////////////////////////// API Graph /////////////////////////////////////////////////////////////////

let bodyContent = document.getElementById("bodyContent");
let canva3 = document.createElement("canvas");
canva3.setAttribute("id", "graph3");
canva3.setAttribute("width", "400");
canva3.setAttribute("height", "auto");
let divGraph3 = document.getElementById("content");
divGraph3.insertBefore(canva3, bodyContent);

let graph3 = document.getElementById("graph3").getContext("2d");
let counter = 0;
let xDataArray = [];

function updateChart() {
  let api_url = `https://canvasjs.com/services/data/datapoints.php?cache=${
    Math.random() * 20000000
  }`;
  async function fetchData() {
    const response = await fetch(api_url);
    const dataPoints = await response.json();
    return dataPoints;
  }
  fetchData().then((dataPoints) => {
    const xData = dataPoints.map(function (index) {
      return counter * dataPoints.length + index[0]; 
    });
    counter++;
    
    let coordonnee = [];

    for (let i in dataPoints) {
        let v1 = [xData[i], dataPoints[i][1]];
          coordonnee.push(v1)    
      }
    addData(myChart3, xData, coordonnee);
  });
  setTimeout(updateChart, 1000);
}
updateChart();
function addData(myChart3, xData, coordonnee) {
  for (let i in xData) {
    myChart3.config.data.labels.push(xData[i]);
  }
  for (let j in coordonnee) {
    myChart3.config.data.datasets.forEach((dataset) => {
      dataset.data.push(coordonnee[j]);
    });
  }
  myChart3.update();
}
const data = {
  labels: [],
  datasets: [
    { 
      label: "Live Data",
      data: [],
      backgroundColor: ["rgba(9, 124, 27, 0.8)"],
      borderColor: ["rgba(9, 124, 27, 0.8)"],
      borderWidth: 2,
      pointRadius: 0,
    },
  ],
};
const config = {
  type: "line",
  data: data,
};
const myChart3 = new Chart(graph3, config);
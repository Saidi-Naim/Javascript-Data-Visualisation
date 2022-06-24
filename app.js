
let trs = document.querySelectorAll("#table1 tbody tr");
let trs2 = document.querySelectorAll("#table2 tbody tr");
let listGlobal = [];
let listGlobal2 = [];


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

            miniList.push(parseInt(td.innerText))

        }else{
            miniList.push(td.innerText)
        }
    })

    listGlobal.push(miniList)
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
        let btn = document.createElement('button')
        if(i != 0){
        btn.innerText = listGlobal[i][0]
        btnContainer.appendChild(btn)
        btn.setAttribute('index', i)
        
        listGlobal[parseInt(btn.getAttribute('index'))].shift()
        btn.style.borderColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        btn.style.backgroundColor = "#fff";
        btn.style.margin = "3px";

        btn.onclick= (() => {
            if(myChart != null){
                myChart.destroy()
            }

        myChart = new Chart(ctx, {
               type: 'bar',
               data: {
                   labels: years,
                   datasets: [{
                       label: 'Numbers Of Crimes',
                       data: listGlobal[parseInt(btn.getAttribute('index'))],
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
    let miniList2 = []

    tr.querySelectorAll('td').forEach(td => {
        if (!isNaN(td.innerText[0])){

            miniList2.push(parseInt(td.innerText))

        }else{
            miniList2.push(td.innerText)
        }
    })

    listGlobal2.push(miniList2)
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
        let btn2 = document.createElement('button')
        if(j >= 0){
        btn2.innerText = listGlobal2[j][0]
        btnContainer2.appendChild(btn2)
        btn2.setAttribute('index', j)

        listGlobal2[parseInt(btn2.getAttribute('index'))].shift()
        btn2.style.borderColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        btn2.style.backgroundColor = "#fff";
        btn2.style.margin = "3px";

        btn2.onclick= (() => {
            if(myChart2 != null){
                myChart2.destroy()
            }

        myChart2 = new Chart(ctx2, {
               type: 'bar',
               data: {
                   labels: years2,
                   datasets: [{
                       label: 'Homicide',
                       data: listGlobal2[parseInt(btn2.getAttribute('index'))],
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

    
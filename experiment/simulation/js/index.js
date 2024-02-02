const charts = {};
const DATA_UPDATE_ANIMATION_DELAY = 400;

const steelData = [
  [10600, 496],
  [15600, 491],
  [16100, 479],
  [22200, 473],
  [25000, 463],
  [37800, 454],
  [55400, 434],
  [72200, 424],
  [109000, 415],
  [109000, 399],
  [185000, 390],
  [190000, 375],
  [354000, 365],
  [461000, 343],
  [831000, 332],
  [936000, 330],
  [1420000, 327],
  [1690000, 314],
  [2710000, 313],
  [3640000, 321],
  [5200000, 325],
  [8840000, 314],
  [15500000, 314],
  [29700000, 316],
  [66000000, 308],
  [97200000, 327],
  [191000000, 308],
  [357000000, 322],
  [465000000, 309],
  [769000000, 318],
  [1350000000, 314],
  [3000000000, 311],
  [3380000000, 330],
  [5260000000, 317],
  [7720000000, 312],
];

const alData = [
  [6740, 381],
  [9870, 354],
  [11500, 380],
  [20600, 338],
  [21200, 321],
  [45700, 304],
  [57700, 284],
  [98200, 278],
  [148000, 255],
  [292000, 242],
  [482000, 226],
  [752000, 229],
  [1200000, 204],
  [1990000, 196],
  [2910000, 184],
  [4680000, 184],
  [7270000, 162],
  [10400000, 162],
  [18700000, 148],
  [26700000, 162],
  [42700000, 135],
  [72800000, 134],
  [120000000, 116],
  [187000000, 120],
  [338000000, 108],
  [542000000, 111],
  [895000000, 95],
  [1710000000, 94],
  [2750000000, 80],
  [3590000000, 86],
  [5920000000, 73],
  [8430000000, 61],
];

const steelDataX = steelData.map((x) => x[0]);
const steelDataY = steelData.map((x) => x[1]);

const alDataX = alData.map((x) => x[0]);
const alDataY = alData.map((x) => x[1]);

var currPos = 0;
var currentStepProgress = 1;
var sampleLength = 0;
var sampleDiameter = 0;
var sampleFinalLength = 0;
var sampleFinalDiameter = 0;

document.getElementById("step1").classList.remove("disabled");
window.refresh();

function handle() {
  eval(`handleStep${currentStepProgress}()`);
  window.refresh();
}

function handleStep1() {
  let pane = document.getElementById("step1");
  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step2");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 2;
}

function handleStep2() {
  let pane = document.getElementById("step2");

  if (!mit.isSampleLoaded()) {
    alert("Please load the sample on the machine first!");
    return;
  }

  pane.classList.add("done");
  pane.classList.remove("active");

  //plot blank graph init graphs
  plotGraph(
    document.getElementById("outputGraphA").getContext("2d"),
    {
      labels: steelDataX,
      datasets: [
        {
          data: [],
          borderColor: "#3e95cd",
          fill: false,
        },
      ],
    },
    "No. of cycles (x10^6)",
    "Amplitude Stress (MPa)"
  );

  //plot blank graph init graphs
  plotGraph(
    document.getElementById("outputGraphB").getContext("2d"),
    {
      labels: alDataX,
      datasets: [
        {
          data: [],
          borderColor: "red",
          fill: false,
        },
      ],
    },
    "No. of cycles (x10^6)",
    "Amplitude Stress (MPa)"
  );

  document.getElementById("btnNext").disabled = true;

  let mode = "";
  let subStepCnt = 0;
  const btnReset = document.getElementById("btnReset");
  // const resultTable = document.getElementById("impactTestResult");

  btnReset.addEventListener("click", (e) => {
    btnReset.disabled = true;
    document.getElementById("startTest").disabled = false;
    document.getElementById("startTest").innerHTML = "Perform Test " + (subStepCnt + 1);
  });

  document.getElementById("startTest").addEventListener("click", (e) => {
    document.getElementById("startTest").disabled = true;
    let tableBody1 = document.getElementById("testData");
    let tableBody2 = document.getElementById("testData2");
    // e.currentTarget.disabled = true;
    // document.getElementById("btnNext").disabled = true;
    // e.currentTarget.innerHTML = "Running...";

    mit.setConfig({
      yield_point: 0.3,
      breaking_point: 0.25,
      finish_point: 0.2,
    });

    setTimeout(() => {
      mit.start();
    }, 500);

    let intr = setInterval(() => {
      const totalSteps = subStepCnt === 0 ? steelData.length : alData.length;
      if (currPos >= totalSteps) {
        clearInterval(intr);
        document.getElementById("startTest").disabled = true;
        mit.stop();

        if (subStepCnt == 1) {
          document.getElementById("btnNext").disabled = false;
          document.getElementById("startTest").innerHTML = "Done";
          return;
        }

        btnReset.disabled = false;
        subStepCnt++;
        currPos = 0;
        return;
      }

      if (subStepCnt == 0) {
        tableBody1.innerHTML += `
              <tr>
                <td>${steelData[currPos][0]}</td>
                <td>${steelData[currPos][1]}</td>
              </tr>
            `;
        let progress1 = (steelDataY.length / totalSteps) * (currPos + 1);

        plotGraph(
          document.getElementById("outputGraphA").getContext("2d"),
          {
            labels: steelDataX,
            datasets: [
              {
                yAxisID: "A",
                data: steelDataY.slice(0, progress1),
                borderColor: "#3e95cd",
                fill: false,
              },
            ],
          },
          "No. of cycles (x10^6)",
          "Amplitude Stress (MPa)"
        );
      } else {
        tableBody2.innerHTML += `
              <tr>
                <td>${alData[currPos][0]}</td>
                <td>${alData[currPos][1]}</td>
              </tr> `;

        let progress1 = (alDataY.length / totalSteps) * (currPos + 1);
        plotGraph(
          document.getElementById("outputGraphB").getContext("2d"),
          {
            labels: alDataX,
            datasets: [
              {
                yAxisID: "A",
                data: alDataY.slice(0, progress1),
                borderColor: "red",
                fill: false,
              },
            ],
          },
          "No. of cycles (x10^6)",
          "Amplitude Stress (MPa)"
        );
      }

      currPos++;
    }, DATA_UPDATE_ANIMATION_DELAY);
  });

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step3");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 3;
}

function handleStep3() {
  let pane = document.getElementById("step3");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step4");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 4;
}

function handleStep4() {
  let pane = document.getElementById("step4");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step5");
  next.classList.add("active");
  next.classList.remove("disabled");

  
  modal = new Modal({
    title: "Can you answer the questions?",
    body: [
      {
        page: 1,
        title: "What is the stress ratio for completely reversed cycle fatigue?",
        options: ["0", "1", "-1", "∞"],
        correct: 2,
      },
      {
        page: 2,
        title: "R-R Moore type fatigue testing machine is based on:",
        options: ["Four-point bending", "Three-point bending", "Two-point bending", "Tensile loading"],
        correct: 0,
      },
      {
        page: 3,
        title: "In high cycle fatigue, the components usually endure higher than:",
        options: ["106 cycles", "105 cycles", "107 cycles", "104 cycles"],
        correct: 3,
      },
      {
        page: 4,
        title: "If the maximum and minimum stresses in a cycle is 200 MPa and  ̶ 100 MPa, the stress range is:",
        options: ["100", "150", "300", "50"],
        correct: 2,
      },
      {
        page: 5,
        title:
          "Consider R. R. Moore type machine. If the load is 100 N, arm length (or length of the sample) is 100 mm, and diameter is 4 mm, then peak stress (σa) is:",
        options: ["398 MPa", "796 MPa", "1592 MPa", "1194 MPa"],
        correct: 1,
      },
      {
        page: 6,
        title: "If the maximum and minimum stresses are 100 MPa and 0 MPa, then the R-ratio is:",
        options: [" ̶ 1", "100", "0", "1"],
        correct: 2,
      },
      {
        page: 7,
        title: "Fatigue is a degradation of mechanical properties under",
        options: ["Tensile loading", "Cyclic loading", "Impact loading", "Constant loading"],
        correct: 1,
      },
      {
        page: 8,
        title: "In low cycle fatigue, the components usually endure less than:",
        options: ["104 cycles", "105 cycles", "106 cycles", "107 cycles"],
        correct: 0,
      },
      {
        page: 9,
        title: "The mean stress for completely reversed cycle is:",
        options: [" ̶ 1", "Cannot be comprehended.", "0", "1"],
        correct: 2,
      },
      {
        page: 10,
        title:
          "Consider vertical machine for fatigue testing (like tensile testing). If the cross-sectional area of the sample is 10 mm2, maximum load is 1000 N and minimum load is 100 N, then the stress amplitude is:",
        options: ["90 MPa", "45 MPa", "55 MPa", "100 MPa"],
        correct: 1,
      },
      {
        page: 11,
        title: "Fatigue strength is the stress level corresponding to the number of cycles of:",
        options: ["106 cycles", "105 cycles", "109 cycles", "107 cycles"],
        correct: 3,
      },
    ],
    onClose: handleStep5,
  });
  modal.show();

  currentStepProgress = 5;
}

function handleStep5() {
  let pane = document.getElementById("step5");

  pane.classList.add("done");
  pane.classList.remove("active");

  // let next = document.getElementById("step6");
  // next.classList.add("active");
  // next.classList.remove("disabled");

  document.getElementById("btnNext").disabled = true;
  document.getElementById("btnNext").innerText = "Done";
  // currentStepProgress = 6;
}

function plotGraph(graphCtx, data, labelX, labelY) {
  let chartObj = charts[graphCtx.canvas.id];
  if (chartObj) {
    chartObj.config.data.labels = data.labels;
    chartObj.config.data.datasets = data.datasets;
    chartObj.update();
  } else {
    charts[graphCtx.canvas.id] = new Chart(graphCtx, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        animation: false,
        scaleOverride: true,
        legend: { display: false },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: labelX,
              },
              ticks: {
                beginAtZero: true,
                steps: 20,
                stepValue: 10,
                callback: function (value, index, values) {
                  return parseFloat(value / 1000000).toLocaleString("en");
                },
                // max: Math.max(...temperature),
              },
              // stacked: true,
            },
          ],
          yAxes: [
            {
              display: true,
              position: "left",
              id: "A",
              scaleLabel: {
                display: true,
                labelString: labelY,
              },
              ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                // max: Math.max(...Impact_Energy),
                //max: 2000,
              },
            },
            // {
            //   display: true,
            //   position: "right",
            //   id: "B",
            //   scaleLabel: {
            //     display: true,
            //     labelString: "Force in mN",
            //   },
            //   ticks: {
            //     beginAtZero: true,
            //     steps: 10,
            //     stepValue: 5,
            //     // max: Math.max(... Impact_Energy),
            //     max: 2000,
            //   },
            // },
          ],
        },
      },
    });
  }
}

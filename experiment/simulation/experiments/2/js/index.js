const charts = {};
const schema = ["loadKN", "dialReading"];
const readingData = [
  [0, 0],
  [2.5, 6],
  [5, 14],
  [7.5, 20],
  [10, 29],
  [12.5, 35],
  [15, 43],
  [17.5, 52],
  [20, 60],
  [22.5, 68],
  [25, 78],
  [27.5, 85],
  [30, 94],
  [32.5, 102],
  [35, 112],
  [37.5, 122],
  [40, 132],
  [42.5, 140],
  [45, 150],
  [47.5, 161],
  [50, 174],
  [52.5, 186],
  [55, 198],
  [57.5, 212],
  [60, 230],
  [62.5, 244],
  [65, 262],
  [67.5, 286],
  [70, 324],
  [72.5, 367],
  [75, 405],
];

// x axis
const dialReading = [
  0, 6, 12, 16, 22, 28, 34, 40, 47, 52, 58, 65, 73, 80, 87, 94, 102, 110, 118, 126, 135, 144, 155, 165, 176, 189, 201,
  216, 232, 248, 268, 284,
];
// y axis
const loadKN = [
  0, 2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 27.5, 30, 32.5, 35, 37.5, 40, 42.5, 45, 46.5, 48, 49.5, 52.1, 53.5,
  54, 55, 56.8, 57.5, 60, 62, 64.2, 65.5,
];

var currPos = 0;

var currentStepProgress = 1;
var sampleLength = 0;
var sampleDiameter = 0;
var sampleFinalLength = 0;
var sampleFinalDiameter = 0;

document.getElementById("step1").classList.remove("disabled");
window.refresh();

window.addEventListener("load", function () {
  setTimeout(() => {
    if (vc) vc.init();
    if (sample1) sample1.init();
  }, 1500);
});

function handle() {
  eval(`handleStep${currentStepProgress}()`);
  window.refresh();
}

function handleStep1() {
  let pane = document.getElementById("step1");
  let len = document.getElementById("step1Length").value;
  if (!len) {
    alert("Please enter the length in step 1.");
    return;
  }

  if (len < 42 || len > 45) {
    alert("Wrong readings! Please take your reading correctly via venier caliper. (Range must be in b/w 42 to 45 mm)");
    return;
  }

  sampleLength = len;

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step2");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 2;
}

function handleStep2() {
  let pane = document.getElementById("step2");
  let len = document.getElementById("step2Dia").value;
  if (!len) {
    alert("Please enter the diameter in step 2.");
    return;
  }

  if (len < 8 || len > 10) {
    alert("Wrong readings! Please take your reading correctly via venier caliper. (Range must be in b/w 8 to 10 mm)");
    return;
  }

  sampleDiameter = len;

  if (vc) vc.destory();
  if (utm) utm.init();
  if (sample1) sample1.init();

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step3");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 3;
}

function handleStep3() {
  let pane = document.getElementById("step3");

  if (!utm || !utm.isActive()) {
    alert("Please take UTM machine from menu first!");
    return;
  }

  if (!utm.isSampleLoaded()) {
    alert("Please load the sample on the UTM machine first!");
    return;
  }

  //plot blank graph
  plotGraph(
    document.getElementById("outputGraphA").getContext("2d"),
    {
      labels: dialReading,
      datasets: [
        {
          data: [],
          borderColor: "#3e95cd",
          fill: false,
        },
      ],
    },
    "Displacement in mm",
    "Load in kN"
  );

  document.getElementById("btnNext").disabled = true;
  // document.getElementById("arrowNext").classList.add("disabled");

  document.getElementById("startTest").addEventListener("click", function testHandler(e) {
    let tableBody = document.getElementById("testData");
    e.currentTarget.disabled = true;
    document.getElementById("btnNext").disabled = true;
    // document.getElementById("arrowNext").classList.add("disabled");
    e.currentTarget.innerHTML = "Running...";

    utm.setConfig({
      yield_point: 10, // no yield point
      breaking_point: 0.65,
      finish_point: 0.7,
    });

    setTimeout(() => {
      utm.start(0.015, 1);
    }, 4000);

    let intr = setInterval(() => {
      if (currPos >= readingData.length) {
        clearInterval(intr);
        document.getElementById("startTest").disabled = false;
        document.getElementById("startTest").innerHTML = "Done";
        document.getElementById("showGraphBtn").disabled = false;
        utm.stop();
        document.getElementById("btnNext").disabled = false;
        // document.getElementById("arrowNext").classList.remove("disabled");
        return;
      }

      tableBody.innerHTML += `
          <tr>
            <td>${readingData[currPos][0]}</td>
            <td>${readingData[currPos][1]}</td>
          </tr>
        `;
      currPos++;

      let progress1 = (loadKN.length / readingData.length) * currPos;
      plotGraph(
        document.getElementById("outputGraphA").getContext("2d"),
        {
          labels: dialReading,
          datasets: [
            {
              data: loadKN.slice(0, progress1),
              borderColor: "#3e95cd",
              fill: false,
            },
          ],
        },
        "Displacement in mm",
        "Load in kN"
      );

      document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
    }, 600);
  });

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

  currentStepProgress = 5;

  modal = new Modal({
    title: "Can you answer the questions?",
    body: [
      {
        page: 1,
        title: "What does point A indicates in the graph?",
        image: "images/stress-strain-curve2.jpg",
        options: ["Yield Strength", "Tensile Strength", "Plastic Strength", "Ultimate Tensile Strength"],
        correct: 0,
      },
      {
        page: 2,
        title: "What does point U indicates in the graph?",
        image: "images/stress-strain-curve2.jpg",
        options: ["Tensile Strength", "Yield Strength", "Ultimate Tensile Strength", "Plastic Strength"],
        correct: 2,
      },
      {
        page: 3,
        title: "What does point F indicates in the graph?",
        image: "images/stress-strain-curve2.jpg",
        options: ["Tensile Strength", "Facture Point", "Ultimate Tensile Strength", "Plastic Strength"],
        correct: 1,
      },
      {
        page: 4,
        title: "For which of the following stress-strain curve is linear till fracture?",
        options: ["Metal", "Ceramic", "Thermoplastic polymer", "All of the above"],
        correct: 1,
      },
    ],
    onClose: handleStep5,
  });
  modal.show();
}

function handleStep5() {
  let pane = document.getElementById("step5");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step6");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 6;

  if (vc) vc.init();
  if (utm) utm.destory();
  if (sample1) sample1.init();
}

function handleStep6() {
  let pane = document.getElementById("step6");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step7");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 7;
}

function handleStep7() {
  let pane = document.getElementById("step7");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step8");
  next.classList.add("active");
  next.classList.remove("disabled");

  //last
  document.getElementById("btnNext").disabled = true;
  // document.getElementById("arrowNext").classList.add("disabled");
  document.querySelector("#step8 .content").innerHTML = `
    <table>
      <tr>
        <td>Initial Length</td>
        <td>${sampleLength} mm</td>
      </tr>
      <tr>
        <td>Initial Diameter</td>
        <td>${sampleDiameter} mm</td>
      </tr>
      <tr>
        <td>Final Length</td>
        <td>~${sampleLength} mm</td>
      </tr>
      <tr>
        <td>Final Diameter</td>
        <td>~${sampleDiameter} mm</td>
      </tr>
    </table>
  `;
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
                max: Math.max(...dialReading),
              },
              // stacked: true,
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: labelY,
              },
              ticks: {
                beginAtZero: true,
                steps: 10,
                stepValue: 5,
                max: Math.max(...loadKN),
              },
            },
          ],
        },
      },
    });
  }
}

function showGraph() {
  graphModal = new Modal({
    title: "Stree Strain Curve",
    body: [
      {
        page: 1,
        title: "Stress Strain Curve",
        image: "images/stress-strain-curve2.jpg",
      },
    ],
  });
  graphModal.show();
}

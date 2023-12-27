/*const charts = {};
const schema = ["hardness", "time"];
const readingData1 = [
 [0, 79],
 [0.5, 128],
 [1, 122],
 [1.5, 126],
 [2.5, 131],
 [5, 158],
 [16,169],
 [24, 177],
 [42, 168],
 [96, 171],
 [144,172],
 [476, 169],



];*/

/*const readingData2 = [
  [0.01, 0.41],
  //[2.71, 0.45],
  [4.94, 0.50],
  //[7.13, 0.54],
  [10.16, 0.57],
  //[13.16, 0.60],
  [16.27, 0.61],
//[19.12, 0.63],
  [22.09, 0.65],
  //[25.07, 0.67],
  [28.05, 0.68],
  //[31.02, 0.70],
  [34.00, 0.71],
//[36.97, 0.73],
  [39.90, 0.75],
  //[42.93, 0.78],
  [45.84, 0.79],
  //[48.88, 0.81],
  [51.86, 0.83],
  //[54.93, 0.84],
  [57.81, 0.86],
  //[60.79, 0.88],
  [63.76, 0.90],
  //[66.93, 0.92],
  [69.65, 0.94],
  //[72.69, 0.96],
  [75.73, 0.98],
  //[78.78, 1.01],
  [81.45, 1.03],
  //[84.60, 1.06],
  [87.18, 1.10],
  //[89.71, 1.14],
  [89.89, 1.10],
  //[92.54, 1.16],
  [94.78, 1.21],
  //[95.52, 1.18],
  [97.62, 1.24],
  //[97.83, 1.19],
  [99.99, 1.28],
  //[101.29, 1.32],
  [102.70, 1.38],
  //[104.03, 1.45],
  
  




];
const readingData3 = [
   [0.01, 0.87],
   [0.02, 0.78],
   [0.03, 0.75],
   [1.12, 0.92],
   [1.3, 0.83],
   [1.61, 1.01],
   [1.52, 0.97],
   [3.57, 1.06],
   [5.39, 1.11],
   [7.21, 1.15],
   [9.16, 1.19],
   [10.70, 1.23],
   [12.48, 1.31],
   [12.17, 1.27],
   [13.91, 1.36],
   [15.08, 1.45],
   [14.55, 1.40],
   [15.80, 1.53],
   [14.82, 1.49],
   [16.13, 1.59],


];*/

// x axis
/*const time = [
  0, 0.5 , 1, 1.5, 2.5, 5, 16, 24, 42, 96, 144, 476,
    
];
// y axis
const hardness = [
  79, 128, 122, 126, 131, 158, 169, 177, 168, 171, 172, 169,  
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
    // if (vc) vc.init();
    // if (sample1) sample1.init();
    //if (furnace) furnace.init();
  }, 1500);
});

function handle() {
  eval(`handleStep${currentStepProgress}()`);
  window.refresh();
}

function handleStep1() {
  let pane = document.getElementById("step1");
  //let len = document.getElementById("step1Length").value;
  /*if (!len) {
    alert("Please enter the length in step 1.");
    return;
  }

  if (len < 42 || len > 45) {
    alert("Wrong readings! Please take your reading correctly via vernier caliper. (Range must be in b/w 42 to 45 mm)");
    return;
  }

  sampleLength = len;*/
  
  /*pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step3");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 2;*/


//function handleStep2() {
  //let pane = document.getElementById("step2");
  /*let len = document.getElementById("step2Dia").value;
  if (!len) {
    alert("Please enter the diameter in step 2.");
    return;
  }

  if (len < 8 || len > 10) {
    alert("Wrong readings! Please take your reading correctly via vernier caliper. (Range must be in b/w 8 to 10 mm)");
    return;
  }

  sampleDiameter = len;

  //if (vc) vc.destory();
  if (furnace) furnace.init();
  if (sample1) sample1.init();
  

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step2");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 2;
}

function handleStep2() {
  let pane = document.getElementById("step2");
  if (furnace) furnace.init();
    if(sample1) sample1.init();
  if (!furnace || !furnace.isActive()) {
    alert("Please take Furnace from menu first!");
    return;
  }

  if (!furnace.isSampleLoaded()) {
    alert("Please load the sample on the Furnace machine first!");
    return;
    
  }
  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step3");
  next.classList.add("active");
  next.classList.remove("disabled");
   //if (furnace) furnace.destory();
   if (sample1) sample1.destory();
  currentStepProgress = 3;
  vickers.init();
}

  //plot blank graph
  /*plotGraph(
    document.getElementById("outputGraphA").getContext("2d"),
    {
      labels: time1,
      datasets: [
        {
          data: [],
          borderColor: "#3e95cd",
          fill: false,
        },
      ],
    },
    "Time in hrs",
    "Strain"
  );
  
function handleStep3() {
  let pane = document.getElementById("step3");
  //if (utm) utm.destory();
  if (vickers) vickers.init();
    if(sample1) sample1.init();
  if (!vickers || !vickers.isActive()) {
    alert("Please take Vickers Tester from menu first!");
    return;
  }

  if (!vickers.isSampleLoaded()) {
    alert("Please load the sample on the Vickers Tester first!");
    return;
    
  }

  pane.classList.add("done");
  pane.classList.remove("active");

   const images = [
    { time: " Time - 0h", url: "images/result/0h-1.png" },
    { time: "Time - 0.5h", url: "images/result/0.5h-1.png" },
    { time: "Time - 1h", url: "images/result/1h.png" },
    { time: "Time - 1.5h", url: "images/result/1.5h-1.png" },
    { time: "Time - 2.5h", url: "images/result/2.5h.png" },
    { time: "Time - 5h", url: "images/result/5h-1.png" },
    { time: "Time - 16h", url: "images/result/16h.png" },
    { time: "Time - 24h", url: "images/result/24h-1.png" },
    { time: "Time - 42h", url: "images/result/42h-1.png" },
    { time: "Time - 96h", url: "images/result/96h.png" },
    { time: "Time - 144h", url: "images/result/144h.png" },
    { time: "Time - 476h", url: "images/result/476h-1.png" },
    // Add more images as needed
  ];

  // Find the table element where the images will be displayed
  let imageTable = document.getElementById("imageTable");

  // Loop through the images array and create rows in the table
  images.forEach((image) => {
    let row = imageTable.insertRow(); // Create a new row

    // Create cells for name and image
    let timeCell = row.insertCell(0);
    let imageCell = row.insertCell(1);

    // Set the name in the first column
    timeCell.innerHTML = image.time;

    // Create an image element and set its attributes
    let img = document.createElement("img");
    img.src = image.url;
    img.width = 200; // Set image width (adjust as needed)
    img.height = 150; // Set image height (adjust as needed)

    // Append the image to the second column
    imageCell.appendChild(img);
  });
   
 let next = document.getElementById("step4");
 next.classList.add("active");
 next.classList.remove("disabled");
 if(sample1) sample1.destory();
 if(furnace) furnace.destory();
 currentStepProgress = 4;
}

function handleStep4() {
  let pane = document.getElementById("step4");

  pane.classList.add("done");
  pane.classList.remove("active"); 

  document.getElementById("btnNext").disabled = true;
  
  document.getElementById("startTest").addEventListener("click", function testHandler(e) {
    e.currentTarget.disabled = true;
    document.getElementById("btnNext").disabled = true;
    // document.getElementById("arrowNext").classList.add("disabled");
    e.currentTarget.innerHTML = "Running...";
  
    vickers.setConfig({
      yield_point: 10, // no yield point
      breaking_point: 0.65,
      finish_point: 0.7,
    });
  
    setTimeout(() => {
      vickers.start(0.015, 1);
    }, 4000);
  
    let intr = setInterval(() => {
      if (currPos >= readingData1.length) {
        clearInterval(intr);
        document.getElementById("startTest").disabled = false;
        document.getElementById("startTest").innerHTML = "Done";
        document.getElementById("showGraphBtn").disabled = false;
        furnace.stop();
        document.getElementById("btnNext").disabled = false;
        // document.getElementById("arrowNext").classList.remove("disabled");
        return;
      }
  
      const tableData1 = readingData1; // Change to the appropriate data array for Table 1 (readingData1, readingData2, or readingData3)
      //const tableData2 = readingData2; // Change to the appropriate data array for Table 2 (readingData1, readingData2, or readingData3)
      //const tableData3 = readingData3; // Change to the appropriate data array for Table 3 (readingData1, readingData2, or readingData3)
  
      const tableBody1 = document.getElementById("testData1"); // Change to the appropriate table body ID for Table 1 (testData1, testData2, or testData3)
      //const tableBody2 = document.getElementById("testData2"); // Change to the appropriate table body ID for Table 2 (testData1, testData2, or testData3)
      //const tableBody3 = document.getElementById("testData3"); // Change to the appropriate table body ID for Table 3 (testData1, testData2, or testData3)
  
      tableBody1.innerHTML += `
        <tr>
          <td>${tableData1[currPos][0]}</td>
          <td>${tableData1[currPos][1]}</td>
        </tr>
      `;
  
      /*tableBody2.innerHTML += `
        <tr>
          <td>${tableData2[currPos][0]}</td>
          <td>${tableData2[currPos][1]}</td>
        </tr>
      `;
  
      tableBody3.innerHTML += `
        <tr>
          <td>${tableData3[currPos][0]}</td>
          <td>${tableData3[currPos][1]}</td>
        </tr>
      `;
  
      currPos++;
  
      let progress1 = (hardness.length / tableData1.length) * currPos;
      
      const chart1Data = {
        labels: time,
        datasets: [
          {
            data: hardness,
            borderColor: "#3e95cd",
            fill: false,
          },
        ],
      };
      createChart("graph1", chart1Data, "Time in hrs", "Hardness (HV)");
  
      // Create the second chart
      const chart2Data = {
        labels: time2,
        datasets: [
          {
            data: elongation2,
            borderColor: "#ff5733", // Choose a different color
            fill: false,
          },
        ],
      };
      createChart("graph2", chart2Data, "Time in hrs", "Strain");
  
      // Create the third chart
      const chart3Data = {
        labels: time3,
        datasets: [
          {
            data: elongation3,
            borderColor: "#00ff00", // Choose a different color
            fill: false,
          },
        ],
      };
      createChart("graph3", chart3Data, "Time in hrs", "Strain");
  
      document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
    }, 600);
  });

  let next = document.getElementById("step5");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 5;
}

  function handleStep5() {
    let pane = document.getElementById("step5");
  
    pane.classList.add("done");
    pane.classList.remove("active");
   
    let next = document.getElementById("step6");
    next.classList.add("active");
    next.classList.remove("disabled");

   currentStepProgress = 6;
   vickers.destory();
    modal = new Modal({
    title: "Can you answer the questions?",
    body: [
      {
        page: 1,
        title: " The first step in the age-hardening treatment is ?",
        image: "images/hardness.png",
        options: [" Solution treatment", "Quenching", "Aging at higher temperature", "Recrystallization"],
        correct: 0,
      },
      {
        page: 2,
        title: "Choose the correct sequence for precipitation treatment of aluminium alloy?",
        image: "images/hardness.png",
        options: [" Solution Treatment-->Quenching-->Aging", "Aging-->Quenching-->Solution Treatment", " Solution Treatment-->Aging-->Quenching", "Quenching-->Solution Treatment-->Aging"],
        correct: 0,
      },
      {
        page: 3,
        title: "How does hardness profile vary with ageing time?",
        image: "images/hardness.png",
        options: ["linearly increases with ageing time", "first decreasing to lowest then increases", "first increasing to peak then decreases", "linearly decreases with ageing time"],
        correct: 2,
      },
      {
        page: 4,
        title: "Which of the following is incorrect?",
        image: "images/hardness.png",
        options: [" Hardness is affected by size of the precipitates", 
        "Hardness is not affected by the aging temperature",
         "Hardness is affected by the amount of solute in the solid solution",
          "Hardness is affected by the nature of the interface with the matrix"],
        correct: 1,
      },
      {
         page: 5,
         title: "Which test is typically used to obtain aging curve for aluminum alloys?",
         image: "images/hardness.png",
         options: ["Vickers hardness test", "Brinell hardness test", "Tensile test", "Impact test"],
         correct: 0,


      }
    ],
    onClose: handleStep6,
  });
  modal.show();
  
  
}

function handleStep6() {
  let pane = document.getElementById("step6");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step7");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 7;

  //if (vc) vc.init();
  if (furnace) furnace.destory();
  //if (sample1) sample1.init();


/*function handleStep6() {
  let pane = document.getElementById("step6");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step7");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 7;
}

/*function handleStep7() {
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
function handleStep7() {
  let pane = document.getElementById("step7");

  pane.classList.add("active");
  pane.classList.remove("disabled");

  let step7Content = document.querySelector("#step7 .content");
  step7Content.innerHTML = ''; // Clear existing content

  // Add PNG images to Step 6
  const pngImages = [
    "images/result/0h-1.png",
    "images/result/0.5h-1.png",
    "images/result/1h.png",
    "images/result/1.5h-1.png",
    "images/result/2.5h.png",
    "images/result/5h-1.png",
    "images/result/16h.png",
    "images/result/24h-1.png",
    "images/result/42h-1.png",
    "images/result/96h.png",
    "images/result/144h.png",
    "images/result/476h-1.png",
    // Add more image paths as needed
  ];

  pngImages.forEach((imagePath) => {
    const imgElement = document.createElement("img");
    imgElement.src = imagePath;
    imgElement.alt = "Step 7 Image";
    imgElement.width = 300; // Adjust width as needed
    step7Content.appendChild(imgElement);
  });

  currentStepProgress = 8;
}






/*function plotGraph(graphCtx, data, labelX, labelY) {
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
                max: Math.max(...time1),
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
                max: Math.max(...elongation1),
              },
            },
          ],
        },
      },
    });
  }
}
// Function to create a chart
function createChart(canvasId, data, labelX, labelY) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  return new Chart(ctx, {
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
              max: Math.max(...data.labels),
            },
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
              max: Math.max(...data.datasets[0].data),
            },
          },
        ],
      },
    },
  });
}

function showGraph() {
  graphModal = new Modal({
    title: "Age Hardening in Aluminium Alloy",
    body: [
      {
        page: 1,
        title: "Age Hardening in Aluminium Alloy",
        image: "images/hardness.png",
      },
    ],
  });
  graphModal.show();
}*/

const charts = {};
const schema = ["Engineering Stress", "Engineering Strain"];
const readingData1 = [
 [0.00, 0.03],
 //[0.89, 0.43],
 [0.01, 82.21],
 //[6.07, 0.48],
 [0.01, 96.61],
 //[12.17, 0.51],
 [0.02, 101.42],
 //[18.12, 0.53],
 [0.02, 105.92],
 //[24.08, 0.55],
 [0.03, 109.98],
 //[30.03, 0.57],
 [0.03, 116.71],
// [35.98, 0.58],
 [0.04, 123.10],
 //[41.94, 0.60],
 [0.04, 128.64],
// [47.89, 0.62],
 [0.05, 134.35],
 //[53.84, 0.63],
 [0.05, 139.41],
// [59.80, 0.64],
 [0.06, 144.44],
 //[65.75, 0.66], 
 [0.06, 148.66],
 //[71.70, 0.67],
 [0.07, 153.03],
 //[77.66, 0.68],
 [0.07, 156.62],
 //[83.61, 0.70],
 [0.08, 160.56],
 //[89.56, 0.71],
 [0.08, 163.84],
 //[95.52, 0.73],
 [0.09, 167.22],
 //[101.47, 0.74],
 [0.09, 170.11],
 //[107.42, 0.78],
 [0.10, 173.14],
 //[113.58, 0.83],
 [0.10, 175.52],
 //[118.50, 0.90],
 [0.11, 178.29],
 //[121.14, 0.94],
 [0.11, 180.52],
 //[123.84, 1.03],
 [0.12, 182.84],
 //[126.73, 1.10],
 [0.12, 184.70],
 //[127.40, 1.16],
 [0.13, 186.56], 
 [0.13 , 188.34],
 [0.14 , 190.46],
 [0.14 , 192.05],
 [0.15 , 193.97], 
 [0.15 , 195.40],
 [0.15 , 196.38],
];




const readingData2 = [
  [0.00, 0.00],
  //[2.71, 0.45],
  [0.01, 128.40],
  //[7.13, 0.54],
  [0.02, 142.48],
  //[13.16, 0.60],
  [0.03, 154.10],
//[19.12, 0.63],
  [0.04, 164.79],
  //[25.07, 0.67],
  [0.05, 174.03],
  //[31.02, 0.70],
  [0.06, 181.80],
//[36.97, 0.73],
  [0.07, 188.15],
  //[42.93, 0.78],
  [0.08, 194.41],
  //[48.88, 0.81],
  [0.09, 200.07],
  //[54.93, 0.84],
  [0.10, 205.02],
  //[60.79, 0.88],
  [0.11, 208.75],
  //[66.93, 0.92],
  [0.12, 212.70],
  //[72.69, 0.96],
  [0.13, 216.56],
  //[78.78, 1.01],
  [0.14, 219.95],
  //[84.60, 1.06],
  [0.15, 222.93],
  //[89.71, 1.14],
  [0.16, 225.61],
  //[92.54, 1.16],
  [0.17, 228.04],
  //[95.52, 1.18],
  [0.18, 230.21],
  //[97.83, 1.19],
  [0.19, 232.17],
  //[101.29, 1.32],
  [0.20, 233.90],
  //[104.03, 1.45],
  [0.21 , 235.58],
  [0.22 , 236.86],
  [0.23 , 238.07],
  [0.24 , 239.15],
  [0.25 , 240.03],
  [0.26 , 240.92],
  [0.27 , 241.64],
  [0.28 , 242.22],
  [0.29 , 242.66],
  [0.30 , 242.99],
  [0.31 , 242.69],
  
  




];
const readingData3 = [
   [0.00, 0.00],
   [0.01, 214.56],
   [0.02, 213.97],
   [0.03, 219.86],
   [0.04, 226.02],
   [0.05, 231.77],
   [0.06, 236.83],
   [0.07, 241.09],
   [0.08, 244.60],
   [0.09, 247.46],
   [0.10, 249.77],
   [0.11, 251.65],
   [0.12, 253.25],
   [0.13, 254.48],
   [0.14, 255.55],
   [0.15, 256.44],
   [0.16, 257.15],
   [0.17, 257.74],
   [0.18, 258.18],
   [0.19, 258.51],
   [0.20 , 258.71],
   [0.21 , 258.80],
   [0.22 , 258.79],
   [0.23 , 258.55],
   [0.24 , 257.99],
   [0.25 , 256.88],
   [0.26 , 254.18],
   [0.27 , 248.70],
   [0.28 , 239.96],
   [0.29 , 226.58],
   [0.30 , 201.90],
   [0.31 , 98.88],


];

// x axis
const engineering_strain1 = [
  0.00, 0.01, 0.01, 0.02, 0.02, 0.03, 0.03, 0.04, 0.04, 0.05, 0.05, 0.06, 0.06, 0.07, 0.07, 0.08, 0.08, 0.09, 0.09, 
  0.10, 0.10, 0.11, 0.11, 0.12, 0.12, 0.13, 0.13, 0.14, 0.14, 0.15, 0.15, 0.15,
    
];
// y axis
const engineering_stress1 = [
  0.03, 82.21, 96.61, 101.42, 105.92, 109.98, 116.71, 123.10, 128.64, 134.35, 139.41, 144.44, 148.66,  153.03, 
  156.62, 160.56, 163.84, 167.22, 170.11, 173.14, 175.52, 178.29, 180.52, 182.84, 184.70, 186.56, 188.34,
  190.46, 192.05, 193.97, 195.40, 196.38, 
   
];

const engineering_strain2 =[
  0.00, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 
  0.18, 0.19, 0.20, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.30, 0.31,
  
];

const engineering_stress2 =[
  0.00, 128.40, 142.48, 154.10, 164.79, 174.03, 181.80, 188.15, 194.41, 200.07, 205.02, 208.75, 212.70, 216.56, 219.95, 
  222.93, 225.61, 228.04, 230.21, 232.17, 233.90, 235.58, 236.86, 238.07, 239.15, 240.03, 240.92, 241.64,  242.22, 
  242.66, 242.99, 242.69,

];

const engineering_strain3 = [
  0.00, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 
  0.18, 0.19, 0.20, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28, 0.29, 0.30, 0.31,
];

const engineering_stress3 = [
  0.00, 214.56, 213.97, 219.86, 226.02, 231.77, 236.83, 241.09, 244.60, 247.46, 249.77, 251.65, 253.25, 254.48, 255.55, 
  256.44, 257.15, 257.74, 258.18, 258.51, 258.71, 258.80, 258.79, 258.55, 257.99, 256.88, 254.18, 248.70, 239.96, 
  226.58, 201.90, 98.88,
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
    // if (vc) vc.init();
    // if (sample1) sample1.init();
    if(utm) utm.init();
  }, 1500);
});
  
function handle() {
  eval(`handleStep${currentStepProgress}()`);
  window.refresh();
}
 
function handleStep1() {
  let pane = document.getElementById("step1");
  if(utm) utm.init();
  if(sample1) sample1.init();
  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step2");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 2;
}

/*function handleStep1() {
  let pane = document.getElementById("step1");
  let len = document.getElementById("step1Length").value;
  if (!len) {
    alert("Please enter the length in step 1.");
    return;
  }

  if (len < 42 || len > 45) {
    alert("Wrong readings! Please take your reading correctly via vernier caliper. (Range must be in b/w 42 to 45 mm)");
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
  /*let len = document.getElementById("step2Dia").value;
  if (!len) {
    alert("Please enter the diameter in step 2.");
    return;
  }

  if (len < 8 || len > 10) {
    alert("Wrong readings! Please take your reading correctly via vernier caliper. (Range must be in b/w 8 to 10 mm)");
    return;
  }

  sampleDiameter = len;

  //if (vc) vc.destory();
  if (utm) utm.init();
  if (sample1) sample1.init();

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step3");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 3;
}*/

function handleStep2() {
  let pane = document.getElementById("step2");
  if (utm) utm.init();
  if (sample1) sample1.init();


  if (!utm || !utm.isActive()) {
    alert("Please take UTM machine from menu first!");
    return;
  }

  if (!utm.isSampleLoaded()) {
    alert("Please load the sample on the UTM machine first!");
    return;
  }

  //plot blank graph
  /*plotGraph(
    document.getElementById("outputGraphA").getContext("2d"),
    {
      labels: time1,
      datasets: [
        {
          data: [],
          borderColor: "#3e95cd",
          fill: false,
        },
      ],
    },
    "Time in hrs",
    "Strain"
  );*/
  

  document.getElementById("btnNext").disabled = true;
  document.getElementById("startTest").addEventListener("click", function testHandler(e) {
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
      if (currPos >= readingData3.length) {
        clearInterval(intr);
        document.getElementById("startTest").disabled = false;
        document.getElementById("startTest").innerHTML = "Done";
        document.getElementById("showGraphBtn").disabled = false;
        utm.stop();
        document.getElementById("btnNext").disabled = false;
        // document.getElementById("arrowNext").classList.remove("disabled");
        return;
      }
  
      const tableData1 = readingData1; // Change to the appropriate data array for Table 1 (readingData1, readingData2, or readingData3)
      const tableData2 = readingData2; // Change to the appropriate data array for Table 2 (readingData1, readingData2, or readingData3)
      const tableData3 = readingData3; // Change to the appropriate data array for Table 3 (readingData1, readingData2, or readingData3)
  
      const tableBody1 = document.getElementById("testData1"); // Change to the appropriate table body ID for Table 1 (testData1, testData2, or testData3)
      const tableBody2 = document.getElementById("testData2"); // Change to the appropriate table body ID for Table 2 (testData1, testData2, or testData3)
      const tableBody3 = document.getElementById("testData3"); // Change to the appropriate table body ID for Table 3 (testData1, testData2, or testData3)
  
      tableBody1.innerHTML += `
        <tr>
          <td>${tableData1[currPos][0]}</td>
          <td>${tableData1[currPos][1]}</td>
        </tr>
      `;
  
      tableBody2.innerHTML += `
        <tr>
          <td>${tableData2[currPos][0]}</td>
          <td>${tableData2[currPos][1]}</td>
        </tr>
      `;
  
      tableBody3.innerHTML += `
        <tr>
          <td>${tableData3[currPos][0]}</td>
          <td>${tableData3[currPos][1]}</td>
        </tr>
      `;
  
      currPos++;
  
      let progress1 = (engineering_stress1.length / tableData1.length) * currPos;
      
      const chart1Data = {
        labels: engineering_strain1,
        datasets: [
          {
            data: engineering_stress1,
            borderColor: "#3e95cd",
            fill: false,
          },
        ],
      };
      createChart("graph1", chart1Data, "Engineering Strain1", "Engineering Stress1");
  
      // Create the second chart
      const chart2Data = {
        labels: engineering_strain2,
        datasets: [
          {
            data: engineering_stress2,
            borderColor: "#ff5733", // Choose a different color
            fill: false,
          },
        ],
      };
      createChart("graph2", chart2Data, "Engineering Strain2", "Engineering Stress2");
  
      // Create the third chart
      const chart3Data = {
        labels: engineering_strain3,
        datasets: [
          {
            data: engineering_stress3,
            borderColor: "#00ff00", // Choose a different color
            fill: false,
          },
        ],
      };
      createChart("graph3", chart3Data, "Engineering Strain3", "Engineering Stress3");
  
      document.querySelector(".menu").scrollTo(0, document.querySelector(".menu").scrollHeight);
    }, 600);
  });
  
  
pane.classList.add("done");
pane.classList.remove("active");

let next = document.getElementById("step3");
next.classList.add("active");
next.classList.remove("disabled");
sample1.destory();

currentStepProgress = 3;
}
function handleStep3() {
  let pane = document.getElementById("step3");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step4");
  next.classList.add("active");
  next.classList.remove("disabled");
  utm.destory();
  currentStepProgress = 4;

  modal = new Modal({
    title: "Can you answer the questions?",
    body: [
      {
        page: 1,
        title: "Yield point is the point ______ at which transition from elastic to plastic happens?",
        //image: "images/creep test curve.png",
        options: ["Stress", "Strain"],
        correct: 0,
      },
      {
        page: 2,
        title: " Which material shows yield point phenomenon?",
        //image: "images/creep test curve.png",
        options: ["Aluminium", "Copper", "Low carbon steel", "Glass"],
        correct: 2,
      },
      {
        page: 3,
        title: "What term is used for the load at which a sudden drop occurs in a conventional tensile curve?",
        //image: "images/creep test curve.png",
        options: ["Plastic Instability", "Upper yield point", "Lower yield point", "Static load"],
        correct: 1,
      },
      {
        page: 4,
        title: "Which of the following term will be seen in the plastic zone?",
        options: ["Yield point", 
        "Fracture point",
         "Proportional limit",
          "Elastic limit"],
        correct: 1,
      },
    ],
    onClose: handleStep4,
  });
  modal.show();
}

function handleStep4() {
  let pane = document.getElementById("step4");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step5");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 5;

  //if (vc) vc.init();
  if (utm) utm.destory();
  //if (sample1) sample1.init();
}

/*function handleStep6() {
  let pane = document.getElementById("step6");

  pane.classList.add("done");
  pane.classList.remove("active");

  let next = document.getElementById("step7");
  next.classList.add("active");
  next.classList.remove("disabled");

  currentStepProgress = 7;
}*/

/*function handleStep7() {
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
}*/
function handleStep5() {
  let pane = document.getElementById("step5");

  pane.classList.add("active");
  pane.classList.remove("disabled");

  let step7Image = document.getElementById("step5Image");
  step7Image.src = "images/result/result_exp_3.png";
  currentStepProgress = 6;
}

/*function plotGraph(graphCtx, data, labelX, labelY) {
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
                max: Math.max(...time1),
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
                max: Math.max(...elongation1),
              },
            },
          ],
        },
      },
    });
  }
}*/
// Function to create a chart
function createChart(canvasId, data, labelX, labelY) {
  const ctx = document.getElementById(canvasId).getContext("2d");
  return new Chart(ctx, {
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
              max: Math.max(...data.labels),
            },
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
              max: Math.max(...data.datasets[0].data),
            },
          },
        ],
      },
    },
  });
}

function showGraph() {
  graphModal = new Modal({
    title: "Strain Aging and Yield Point Phenomenon in Steel",
    body: [
      {
        page: 1,
        title: "Engineering Stress vs Engineering Strain Curve",
        image: "images/result/result_exp_3.png",
      },
    ],
  });
  graphModal.show();
}










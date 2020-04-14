// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function fpb_kpk(num1, num2) {
  let fpb = 0;
  let kpk = 0;
  const fpb_string = "";
  const kpk_string = "";
  for (let i = 1; i < num1; i++) {
    if (num1 % i === 0) {
      fpb = i;
      fpb_string = `FPB ${num1} & ${num2} = ${fpb}`;
    }
    kpk = (num1 * num2) / fpb;
    kpk_string = `KPK ${num1} & ${num2} = ${kpk} `;
  }
  console.log(fpb_string);
  console.log(kpk_string);
}

fpb_kpk(100, 150);

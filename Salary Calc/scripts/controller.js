import { allowances } from "./model.js";
window.addEventListener("load", bindEvents);

function bindEvents() {
  document.getElementById("compute").addEventListener("click", computeIt);
}

// Validation
function validation() {
  let bs = document.getElementById("basicSalary").value;
  if (bs.length == 0) {
    document.getElementById("error").innerText = `Invalid Input`;
    return false;
  } else if (isNaN(parseInt(bs))) {
    document.getElementById("error").innerText = `Invalid Input`;
    return false;
  }
  document.getElementById("error").innerText = "";
  return true;
}

function computeIt() {
  let bs = document.getElementById("basicSalary").value;
  if (!validation()) {
    return; //exit from function
  }
  allowances.basicSalary = parseInt(bs);
  // Object Traverse using for in loop
  let fieldset = document.querySelector("fieldset");
  fieldset.innerHTML = "";
  for (let key in allowances) {
    if (typeof allowances[key] === "function") {
      let pTag = document.createElement("p");
      pTag.innerHTML = `${key.toUpperCase()} is :-  &#36;${allowances[
        key
      ]().toLocaleString("hi-IN")}`;
      fieldset.appendChild(pTag);
    }
  }
  // Computing by calling span tag

  // let spans = document.getElementsByTagName("span");
  // for (var i = 0; i < spans.length; i++) {
  //     spans[i].innerHTML = allowances[spans[i].id]();
  // }
  // console.log(fieldset);

  // Avoiding DRY Principle

  // document.getElementById("hra").innerText = allowances.hra();
  // document.getElementById("da").innerText = allowances.da();
  // document.getElementById("ta").innerText = allowances.ta();
  // document.getElementById("ma").innerText = allowances.ma();
  // document.getElementById("pf").innerText = allowances.pf();
  // document.getElementById("gs").innerText = allowances.gs();
  // document.getElementById("ns").innerText = allowances.ns();
}

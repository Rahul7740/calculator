let nums = document.querySelectorAll(".number");

let print = document.querySelector(".calculations");
let operators = document.querySelectorAll(".oprators");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let del = document.querySelector(".del");

for (let i of nums) {
  i.addEventListener("click", () => {
    print.value += i.innerHTML;
  });
  document.addEventListener("keypress", (event) => {
    let m = i.innerHTML;
    if (event.key == m) {
      print.value += m;
    }
  });
}

for (let o of operators) {
  document.addEventListener("keypress", (event) => {
    let m = o.innerHTML;
    if (event.key == m) {
      print.value += m;
    }
  });
  o.addEventListener("click", () => {
    printValue = print.value;

    if (printValue == "-") {
      print.value = "-";
    } else if (
      printValue.endsWith("/") ||
      printValue.endsWith("+") ||
      printValue.endsWith("*") ||
      printValue.endsWith("-") ||
      printValue.endsWith("%")
    ) {
      let slice = printValue.slice(0, printValue.length - 1);
      print.value = slice;
      print.value += o.innerHTML;
    } else if (printValue == "") {
      oInner = o.innerHTML;
      if (oInner == "-") {
        print.value = oInner;
      } else {
        let slice = printValue.slice(0, printValue.length - 1);
        print.value = slice;
      }
    } else {
      print.value += o.innerHTML;
    }
  });
}
//-----------------------------------------------------------------
del.addEventListener("click", () => {
  deel();
});
document.addEventListener("keydown", (event) => {
  if (event.key == "Backspace" || event.key == "Delete") {
    deel();
  }
});
//-----------------------------------------------------------------
equal.addEventListener("click", () => {
  eq();
});
document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    eq();
  }
});
//-----------------------------------------------------------------
clear.addEventListener("click", () => {
  print.setAttribute("placeholder", "0");
  print.value = "";
});

function deel() {
  let printValue = print.value;
  let slice = printValue.slice(0, printValue.length - 1);
  print.value = slice;
}

function eq() {
  // print.setAttribute("placeholder", eval(print.value));
  let abc = eval(print.value);
  print.value = abc;
}
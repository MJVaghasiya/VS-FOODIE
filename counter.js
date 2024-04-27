let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");

let a_value = 980;
let b_value = 210;
let c_value = 7;



let counter = 0;

let ain = setInterval(()=> {
  if (counter == a_value) {
    clearInterval(ain);
  }else{
    counter += 10;
    a.innerHTML = counter + "+";
  }
}, 0.1);



let bcounter = 0;
let bin = setInterval(()=> {
    if (bcounter == b_value) {
      clearInterval(bin);
    }else{
        bcounter += 5;
      b.innerHTML = bcounter + "+";
    }
  }, 20);

let ccounter = 0;
let cin =setInterval(()=> {
    if (ccounter == c_value) {
      clearInterval();
    }else{
        ccounter += 1;
      c.innerHTML = ccounter + "k+";
    }
  }, 20);
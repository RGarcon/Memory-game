//variables

const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');
const btn5 = document.getElementById('button5');
const btn6 = document.getElementById('button6');
const btn7 = document.getElementById('button7');
const btn8 = document.getElementById('button8');
const btn9 = document.getElementById('button9');
const btn10 = document.getElementById('button10');
const btn11 = document.getElementById('button11');
const btn12 = document.getElementById('button12');
const btn13 = document.getElementById('button13');
const btn14 = document.getElementById('button14');
const btn15 = document.getElementById('button15');
const btn16 = document.getElementById('button16');
const bordertable = document.getElementById('bordertable');
const time = document.getElementById('time');
const tries = document.getElementById('tries');
const minstexts = document.getElementById('mins');
const secstexts = document.getElementById('seconds');

var bt1status = 0;
var bt2status = 0;
var bt3status = 0;
var bt4status = 0;
var bt5status = 0;
var bt6status = 0;
var bt7status = 0;
var bt8status = 0;
var bt9status = 0;
var bt10status = 0;
var bt11status = 0;
var bt12status = 0;
var bt13status = 0;
var bt14status = 0;
var bt15status = 0;
var bt16status = 0;

var bt1endstatus = 0;
var bt2endstatus = 0;
var bt3endstatus = 0;
var bt4endstatus = 0;
var bt5endstatus = 0;
var bt6endstatus = 0;
var bt7endstatus = 0;
var bt8endstatus = 0;
var bt9endstatus = 0;
var bt10endstatus = 0;
var bt11endstatus = 0;
var bt12endstatus = 0;
var bt13endstatus = 0;
var bt14endstatus = 0;
var bt15endstatus = 0;
var bt16endstatus = 0;

var choix1 = document.getElementById('choix1');
var choix2 = document.getElementById('choix2');

var premierchoix = 0
var secondchoix = 0

var characters = ["$", "$", "&", "&", "§", "§", "<", "<", ">", ">", "é", "é", "@", "@", "£", "£"]

var buttonvalues = []
var arrayresult = []

var mins = 0;
var seconds = 0;

var countoftries = 0;

//functions


function startTimer() {

  timex = setTimeout(function() {
    seconds++;
    if (seconds > 59) {
      seconds = 0;
      mins++;

      if (mins < 10) {
        minstexts.innerHTML = '0' + mins + ':';
      } else minstexts.innerHTML = mins + ':';
    }
    if (seconds < 10) {
      secstexts.innerHTML = '0' + seconds;
    } else {
      secstexts.innerHTML = seconds;
    }


    startTimer();
  }, 1000);

}


function associatecharactertobuttons() {

  for (var i = 0; i < 16; i++) {
    console.log(characters)
    var rand = Math.floor(Math.random() * characters.length);
    var rValue = characters[rand];
    var rankrValue = characters.indexOf(rValue)

    console.log('Button ' + (i + 1) + ' : ' + rValue)

    buttonvalues[i] = rValue
    characters.splice(rankrValue, 1)
  }
  console.log(buttonvalues)
}



function clickbutton() {


  btn1.addEventListener('click', function() {

    if (bt1status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[0]
        btn1.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[0]
        btn1.disabled = true

      }
      bt1status = 1
    }
  })


  btn2.addEventListener('click', function() {

    if (bt2status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[1]
        btn2.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[1]
        btn2.disabled = true

      }
      bt2status = 1
    }
  })

  btn3.addEventListener('click', function() {

    if (bt3status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[2]
        btn3.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[2]
        btn3.disabled = true

      }
      bt3status = 1
    }
  })

  btn4.addEventListener('click', function() {

    if (bt4status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[3]
        btn4.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[3]
        btn4.disabled = true

      }
      bt4status = 1
    }
  })

  btn5.addEventListener('click', function() {

    if (bt5status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[4]
        btn5.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[4]
        btn5.disabled = true

      }
      bt5status = 1
    }
  })

  btn6.addEventListener('click', function() {

    if (bt6status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[5]
        btn6.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[5]
        btn6.disabled = true

      }
      bt6status = 1
    }
  })

  btn7.addEventListener('click', function() {

    if (bt7status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[6]
        btn7.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[6]
        btn7.disabled = true

      }
      bt7status = 1
    }
  })

  btn8.addEventListener('click', function() {

    if (bt8status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[7]
        btn8.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[7]
        btn8.disabled = true

      }
      bt8status = 1
    }
  })

  btn9.addEventListener('click', function() {

    if (bt9status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[8]
        btn9.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[8]
        btn9.disabled = true

      }
      bt9status = 1
    }
  })

  btn10.addEventListener('click', function() {

    if (bt10status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[9]
        btn10.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[9]
        btn10.disabled = true

      }
      bt10status = 1
    }
  })

  btn11.addEventListener('click', function() {

    if (bt11status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[10]
        btn11.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[10]
        btn11.disabled = true

      }
      bt11status = 1
    }
  })

  btn12.addEventListener('click', function() {

    if (bt12status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[11]
        btn12.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[11]
        btn12.disabled = true

      }
      bt12status = 1
    }
  })

  btn13.addEventListener('click', function() {

    if (bt13status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[12]
        btn13.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[12]
        btn13.disabled = true

      }
      bt13status = 1
    }
  })

  btn14.addEventListener('click', function() {

    if (bt14status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[13]
        btn14.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[13]
        btn14.disabled = true

      }
      bt14status = 1
    }
  })

  btn15.addEventListener('click', function() {

    if (bt15status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[14]
        btn15.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[14]
        btn15.disabled = true

      }
      bt15status = 1
    }
  })

  btn16.addEventListener('click', function() {

    if (bt16status == 0) {

      if (arrayresult[0] != null) {
        arrayresult[1] = buttonvalues[15]
        btn16.disabled = true

      }
      if (arrayresult[0] == null) {
        arrayresult[0] = buttonvalues[15]
        btn16.disabled = true

      }
      bt16status = 1
    }
  })


}


function displaychoicesv2() {

  if (bt1status == 1) {
    btn1.innerHTML = buttonvalues[0]
  } else {
    btn1.innerHTML = ""
  }
  if (bt2status == 1) {
    btn2.innerHTML = buttonvalues[1]
  } else {
    btn2.innerHTML = ""
  }
  if (bt3status == 1) {
    btn3.innerHTML = buttonvalues[2]
  } else {
    btn3.innerHTML = ""
  }
  if (bt4status == 1) {
    btn4.innerHTML = buttonvalues[3]
  } else {
    btn4.innerHTML = ""
  }
  if (bt5status == 1) {
    btn5.innerHTML = buttonvalues[4]
  } else {
    btn5.innerHTML = ""
  }
  if (bt6status == 1) {
    btn6.innerHTML = buttonvalues[5]
  } else {
    btn6.innerHTML = ""
  }
  if (bt7status == 1) {
    btn7.innerHTML = buttonvalues[6]
  } else {
    btn7.innerHTML = ""
  }
  if (bt8status == 1) {
    btn8.innerHTML = buttonvalues[7]
  } else {
    btn8.innerHTML = ""
  }
  if (bt9status == 1) {
    btn9.innerHTML = buttonvalues[8]
  } else {
    btn9.innerHTML = ""
  }
  if (bt10status == 1) {
    btn10.innerHTML = buttonvalues[9]
  } else {
    btn10.innerHTML = ""
  }
  if (bt11status == 1) {
    btn11.innerHTML = buttonvalues[10]
  } else {
    btn11.innerHTML = ""
  }
  if (bt12status == 1) {
    btn12.innerHTML = buttonvalues[11]
  } else {
    btn12.innerHTML = ""
  }
  if (bt13status == 1) {
    btn13.innerHTML = buttonvalues[12]
  } else {
    btn13.innerHTML = ""
  }
  if (bt14status == 1) {
    btn14.innerHTML = buttonvalues[13]
  } else {
    btn14.innerHTML = ""
  }
  if (bt15status == 1) {
    btn15.innerHTML = buttonvalues[14]
  } else {
    btn15.innerHTML = ""
  }
  if (bt16status == 1) {
    btn16.innerHTML = buttonvalues[15]
  } else {
    btn16.innerHTML = ""
  }

}


function ableallbuttonsifmatch() {

  if (bt1status == 1) {
    btn1.disabled = true
    bt1endstatus = 1
  }

  if (bt2status == 1) {
    btn2.disabled = true
    bt2endstatus = 1
  }

  if (bt3status == 1) {
    btn3.disabled = true
    bt3endstatus = 1
  }
  if (bt4status == 1) {
    btn4.disabled = true
    bt4endstatus = 1
  }
  if (bt5status == 1) {
    btn5.disabled = true
    bt5endstatus = 1
  }
  if (bt6status == 1) {
    btn6.disabled = true
    bt6endstatus = 1
  }
  if (bt7status == 1) {
    btn7.disabled = true
    bt7endstatus = 1
  }
  if (bt8status == 1) {
    btn8.disabled = true
    bt8endstatus = 1
  }
  if (bt9status == 1) {
    btn9.disabled = true
    bt9endstatus = 1
  }
  if (bt10status == 1) {
    btn10.disabled = true
    bt10endstatus = 1
  }
  if (bt11status == 1) {
    btn11.disabled = true
    bt11endstatus = 1
  }
  if (bt12status == 1) {
    btn12.disabled = true
    bt12endstatus = 1
  }
  if (bt13status == 1) {
    btn13.disabled = true
    bt13endstatus = 1
  }
  if (bt14status == 1) {
    btn14.disabled = true
    bt14endstatus = 1
  }
  if (bt15status == 1) {
    btn15.disabled = true
    bt15endstatus = 1
  }
  if (bt16status == 1) {
    btn16.disabled = true
    bt16endstatus = 1
  }

}

function ableallbuttonsifnotmatch() {

  if (bt1endstatus == 0) {
    btn1.disabled = false
    bt1status = 0
  }

  if (bt2endstatus == 0) {
    btn2.disabled = false
    bt2status = 0
  }
  if (bt3endstatus == 0) {
    btn3.disabled = false
    bt3status = 0
  }
  if (bt4endstatus == 0) {
    btn4.disabled = false
    bt4status = 0
  }
  if (bt5endstatus == 0) {
    btn5.disabled = false
    bt5status = 0
  }
  if (bt6endstatus == 0) {
    btn6.disabled = false
    bt6status = 0
  }
  if (bt7endstatus == 0) {
    btn7.disabled = false
    bt7status = 0
  }
  if (bt8endstatus == 0) {
    btn8.disabled = false
    bt8status = 0
  }
  if (bt9endstatus == 0) {
    btn9.disabled = false
    bt9status = 0
  }
  if (bt10endstatus == 0) {
    btn10.disabled = false
    bt10status = 0
  }
  if (bt11endstatus == 0) {
    btn11.disabled = false
    bt11status = 0
  }
  if (bt12endstatus == 0) {
    btn12.disabled = false
    bt12status = 0
  }
  if (bt13endstatus == 0) {
    btn13.disabled = false
    bt13status = 0
  }
  if (bt14endstatus == 0) {
    btn14.disabled = false
    bt14status = 0
  }
  if (bt15endstatus == 0) {
    btn15.disabled = false
    bt15status = 0
  }
  if (bt16endstatus == 0) {
    btn16.disabled = false
    bt16status = 0
  }

}



function checkcharacetrs() {

  bordertable.style.borderColor = '#000000';

  if (arrayresult[0] != null && arrayresult[1] != null) {
  
  countoftries = countoftries + 1


    if (arrayresult[0] == arrayresult[1]) {

      ableallbuttonsifmatch()
      bordertable.style.borderColor = '#23eb05';

    }

    if (arrayresult[0] != arrayresult[1]) {

      ableallbuttonsifnotmatch()
      bordertable.style.borderColor = '#FB0000';

    }
    arrayresult.splice(0, 2)
  }
}


function displaytries() {
tries.innerHTML = countoftries

}


function endgame() {

if (bt1status == 1 && bt2status == 1 && bt3status == 1 && bt4status == 1 && bt5status == 1 && bt6status == 1 && bt7status == 1 && bt8status == 1 && bt9status == 1 && bt10status == 1 && bt11status == 1 && bt12status == 1 && bt13status == 1 && bt14status == 1 && bt15status == 1 && bt16status == 1) {

  clearTimeout(timex);
	tries.style.backgroundColor  = '#23eb05';
  time.style.backgroundColor  = '#23eb05';
}
}

function main() {

  clickbutton()
  displaytries()
  displaychoicesv2()
  checkcharacetrs()
	endgame()


}



//execution
associatecharactertobuttons()
startTimer()
var interval = setInterval(main, 500)


//nextsteps
// timer

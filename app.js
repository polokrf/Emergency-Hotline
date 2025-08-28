let countCall = [];


// * display block
document.getElementById('call-history').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('history').style.display = 'block';
  document.getElementById('back-history').style.display = 'block';
  document.getElementById('call-history').style.display = 'none';
});

// * clear
document.getElementById('back-history')
  .addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('history').style.display = 'none';
    document.getElementById('back-history').style.display = 'none';
    document.getElementById('call-history').style.display = 'block';
  });





// * heart click count 1++;


let counting = 0;

let displayInnerText = document.getElementById('love');

let counts = document.getElementsByClassName('heart');

for (let count of counts) {
  count.addEventListener('click', function () {
    counting++
    displayInnerText.innerText = counting;
  })
}

// * call back function;
function getValueText(id) {
  
  let text = document.getElementById(id);
  let coinCut = parseInt(text.innerText);
  return coinCut;
}
function getValueTexts(id) {
  
  let text = document.getElementById(id);
  
  return text;
}


// * set value in inner text

// * coin cut if do you calling;

document.getElementById('call-button1').addEventListener('click',function() {
  
  let coinGet = getValueText('coin');
  let subtitleText = document.getElementById('subtitle1').innerText;
  let numberOfServes = document.getElementById('number1').innerText;

 
  let amount = 20;
  if (coinGet === 0) {
    alert('আপনার পর্যাপ্ত কয়েন নেই!  কল করতে কমপক্ষে ২০ কয়েন লাগবে');
    return;
  } else {
    alert(`Calling ${subtitleText} ${numberOfServes}`);
  }
  
  let minsNumber = coinGet - amount;
  document.getElementById('coin').innerText = minsNumber;

  let obj = {
    name: 'জাতীয় জরুরি সেবা',
    number: 999,
    date: new Date().toLocaleTimeString()
  };

  countCall.push(obj)

})





// * 2nd coin function
document.getElementById('call-button2').addEventListener('click',function() {
  
  let coinGet = getValueText('coin');
  let subtitleText = document.getElementById('subtitle2').innerText;
  let numberOfServes = document.getElementById('number2').innerText;
 
  let amount = 20;
  if (coinGet === 0) {
    alert('আপনার পর্যাপ্ত কয়েন নেই!  কল করতে কমপক্ষে ২০ কয়েন লাগবে');
    return;
  } else {
    alert(`Calling ${subtitleText} ${numberOfServes}`);
  }
  
  let minsNumber = coinGet - amount;
  document.getElementById('coin').innerText = minsNumber;

  let obj = {
    name: 'পুলিশ',
    number: 999,
    date: new Date().toLocaleTimeString()
  };

  countCall.push(obj)


})
// * 3nd coin function
document.getElementById('call-button3').addEventListener('click',function() {
  
  let coinGet = getValueText('coin');
  let subtitleText = document.getElementById('subtitle3').innerText;
  let numberOfServes = document.getElementById('number3').innerText;
 
  let amount = 20;
  if (coinGet === 0) {
    alert('আপনার পর্যাপ্ত কয়েন নেই!  কল করতে কমপক্ষে ২০ কয়েন লাগবে');
    return;
  } else {
    alert(`Calling ${subtitleText} ${numberOfServes}`);
  }
  
  let minsNumber = coinGet - amount;
 document.getElementById('coin').innerText = minsNumber;

})


// * 4nd coin function
document.getElementById('call-button4').addEventListener('click',function() {
  
  let coinGet = getValueText('coin');
  let subtitleText = document.getElementById('subtitle4').innerText;
  let numberOfServes = document.getElementById('number4').innerText;
 
  let amount = 20;
  if (coinGet === 0) {
    alert('আপনার পর্যাপ্ত কয়েন নেই!  কল করতে কমপক্ষে ২০ কয়েন লাগবে');
    return;
  } else {
    alert(`Calling ${subtitleText} ${numberOfServes}`);
  }
  
  let minsNumber = coinGet - amount;
 document.getElementById('coin').innerText = minsNumber;

})





// * 5nd coin function
document.getElementById('call-button5').addEventListener('click',function() {
  
  let coinGet = getValueText('coin');
  let subtitleText = document.getElementById('subtitle5').innerText;
  let numberOfServes = document.getElementById('number5').innerText;
 
  let amount = 20;
  if (coinGet === 0) {
    alert('আপনার পর্যাপ্ত কয়েন নেই!  কল করতে কমপক্ষে ২০ কয়েন লাগবে');
    return;
  } else {
    alert(`Calling ${subtitleText} ${numberOfServes}`);
  }
  
  let minsNumber = coinGet - amount;
 document.getElementById('coin').innerText = minsNumber;

})





// * 6nd coin function
document.getElementById('call-button6').addEventListener('click',function() {
  
  let coinGet = getValueText('coin');
  let subtitleText = document.getElementById('subtitle6').innerText;
  let numberOfServes = document.getElementById('number6').innerText;
 
  let amount = 20;
  if (coinGet === 0) {
    alert('আপনার পর্যাপ্ত কয়েন নেই!  কল করতে কমপক্ষে ২০ কয়েন লাগবে');
    return;
  } else {
    alert(`Calling ${subtitleText} ${numberOfServes}`);
  }
  
  let minsNumber = coinGet - amount;
 document.getElementById('coin').innerText = minsNumber;

})





// * 7nd coin function
document.getElementById('call-button7').addEventListener('click',function() {
  
  let coinGet = getValueText('coin');
  let subtitleText = document.getElementById('subtitle7').innerText;
  let numberOfServes = document.getElementById('number7').innerText;
 
  let amount = 20;
  if (coinGet === 0) {
    alert('আপনার পর্যাপ্ত কয়েন নেই!  কল করতে কমপক্ষে ২০ কয়েন লাগবে');
    return;
  } else {
    alert(`Calling ${subtitleText} ${numberOfServes}`);
  }
  
  let minsNumber = coinGet - amount;
 document.getElementById('coin').innerText = minsNumber;

})






// * 8nd coin function
document.getElementById('call-button8').addEventListener('click',function() {
  
  let coinGet = getValueText('coin');
  let subtitleText = document.getElementById('subtitle8').innerText;
  let numberOfServes = document.getElementById('number8').innerText;
 
  let amount = 20;
  if (coinGet === 0) {
    alert('আপনার পর্যাপ্ত কয়েন নেই!  কল করতে কমপক্ষে ২০ কয়েন লাগবে');
    return;
  } else {
    alert(`Calling ${subtitleText} ${numberOfServes}`);
  }
  
  let minsNumber = coinGet - amount;
 document.getElementById('coin').innerText = minsNumber;

})






// * 9nd coin function
document.getElementById('call-button9').addEventListener('click',function() {
  
  let coinGet = getValueText('coin');
  let subtitleText = document.getElementById('subtitle9').innerText;
  let numberOfServes = document.getElementById('number9').innerText;
 
  let amount = 20;
  if (coinGet === 0) {
    alert('আপনার পর্যাপ্ত কয়েন নেই!  কল করতে কমপক্ষে ২০ কয়েন লাগবে');
    return;
  } else {
    alert(`Calling ${subtitleText} ${numberOfServes}`);
  }
  
  let minsNumber = coinGet - amount;
 document.getElementById('coin').innerText = minsNumber;

})






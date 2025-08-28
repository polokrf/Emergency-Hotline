let countCall = [];


// * display block
document.getElementById('call-history').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('card-main').style.display='none';
  document.getElementById('history').style.display = 'block';
  document.getElementById('history').style.height = '100%';
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
    document.getElementById('card-main').style.display = 'block';
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


// * coin add function

document.getElementById('card-main').addEventListener('click', function (e) {
  if (e.target.className.includes('coin-button')) {
    let button = e.target
    let subTitle = button.parentNode.parentNode.children[1].children[1].innerText;
    let helpNumber = button.parentNode.parentNode.children[2].innerText;
    let mainTitle = button.parentNode.parentNode.children[1].children[0].innerText;
    let date = new Date().toLocaleTimeString();
    
    let setHistory = document.getElementById('mains');

    let coinMins = parseInt(document.getElementById('coin').innerText);

    if (coinMins === 0) {
      alert('আপনার পর্যাপ্ত কয়েন নেই!  কল করতে কমপক্ষে ২০ কয়েন লাগবে');
      return;
    } else {
      alert(`Calling ${subTitle} ${helpNumber}`)
    }

    let createDiv = document.createElement('div');
    createDiv.innerHTML = `<div  class=" flex justify-between items-center p-[15px] my-[25px] bg-[#FAFAFA] rounded-md shadow-md">
            <div>
              <h2 class="text-[20px] font-bold">${mainTitle}</h2>
              <p class="font-bold text-[#5C5C5C]">${helpNumber}</p>
            </div>
            <div>
              <p>${date}</p>
            </div>
           </div> 
`;
    
    setHistory.append(createDiv);

    
    
    let count = coinMins - 20;
    let minsBalance = 0;
    document.getElementById('coin').innerText = count;
  }
});


// * clear button

document.getElementById('clear-button').addEventListener('click', function () {
  let setHistory = document.getElementById('mains');
  let clears = setHistory.innerHTML = '';
  
});


// * copy past and count

document.getElementById('card-main').addEventListener('click', function (e) {
  if (e.target.className.includes('copy')) {
     let button = e.target;
    let helpNumber = button.parentNode.parentNode.children[2].innerText;
    alert('নাম্বার কপি হয়েছে : ' + helpNumber);

    navigator.clipboard.writeText(helpNumber);
   

    let copyCount = parseInt(document.getElementById('copy-button').innerText);
    let copyNumber = copyCount + 1;
    document.getElementById('copy-button').innerText = copyNumber;

  }
});
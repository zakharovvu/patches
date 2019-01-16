let tableKubs = document.querySelector('#tableKubs');
createElementsInTable(tableKubs.childNodes[1]);
setBackground();

tableKubs.addEventListener('click', chengeKub);

function chengeKub() {
  cool.style.color = 'white';
  if (event.target.tagName === 'TD') {
    let arrTd = tableKubs.querySelectorAll('td');
    let thisTd = Number(event.target.dataset.numberblock);
    try {
      if (arrTd[thisTd - 1].innerHTML === '0') {
        arrTd[thisTd - 1].innerHTML = event.target.innerHTML;
        event.target.innerHTML = '0';
      }
    } catch(e) {console.log('not: thisTd - 1');}
    try {
      if (arrTd[thisTd - 4].innerHTML === '0') {
        arrTd[thisTd - 4].innerHTML = event.target.innerHTML;
        event.target.innerHTML = '0';
      }
    } catch(e) {console.log('not: thisTd - 4');}
    try {
      if (arrTd[thisTd + 1].innerHTML === '0') {
        arrTd[thisTd + 1].innerHTML = event.target.innerHTML;
        event.target.innerHTML = '0';
      }
    } catch(e) {console.log('not: thisTd + 1');}
    try {
      if (arrTd[thisTd + 4].innerHTML === '0') {
        arrTd[thisTd + 4].innerHTML = event.target.innerHTML;
        event.target.innerHTML = '0';
      }
    } catch(e) {console.log('not: thisTd + 4');}
    setBackground(); 
    checkAndGame();
  }
}

function setBackground() {
  let arrTd = tableKubs.querySelectorAll('td');
  for (let i = 0; i < arrTd.length; i++) {
      if (arrTd[i].innerHTML === '0') {
      arrTd[i].style.background = 'black';
    } else {
      arrTd[i].style.background = 'rgb(233, 156, 68)';
    }
  }
}

function createElementsInTable(tr) {  
  let count = -1;
  for (let i = 0; i < 4; i++) {
    tr.insertAdjacentHTML('beforeend', `<tr>
                                           <td data-numberBlock="${++count}">${count}</td>
                                           <td data-numberBlock="${++count}">${count}</td>
                                           <td data-numberBlock="${++count}">${count}</td>
                                           <td data-numberBlock="${++count}">${count}</td>
                                        </tr>`);
  }
}

function checkAndGame() {
  let arrTd = tableKubs.querySelectorAll('td');
  let str = '';
  for (let i = 0; i < arrTd.length; i++) {
    str += arrTd[i].innerHTML; 
  }
  if (/123456789101112131415/.test(str)) {
    cool.style.color = 'black';
    
  } 
}

function blockRandom(arr) {
  
  let arrTd = tableKubs.querySelectorAll('td');
  for (let i = 0; i < arr.length; i++) {
    arrTd[i].innerHTML = arr[i];
  }
  function cRandom(a, b) {
    return Math.random() - 0.5;
  }
  arr.sort(cRandom);
  arrTd[0].innerHTML = '0';
  for (let i = 1; i < arrTd.length; i++) {
    arrTd[i].innerHTML = arr[i - 1];
  }
  cool.style.color = 'white';
  setBackground(); 
}








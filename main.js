console.log('Temperture Converter');
let temp = document.getElementById('temp');

const toCelsius = (temp) => {
  let adjustment = temp - 32 * (5 / 9);
  converted = Math.round(adjustment);
  document.getElementById('tempResult').innerHTML = converted;
  if (converted > 32) {
    document.getElementById('tempResult').className = "hot";
  } else if (converted < 0) {
    document.getElementById('tempResult').className = "cold";
  } else {
    document.getElementById('tempResult').className = "mild";
  }    
};

const toFahrenheit = (temp) => {
  let adjustment = temp * (9 / 5) + 32;
  converted = Math.round(adjustment);
  document.getElementById('tempResult').innerHTML = converted;
  if (converted > 90) {
    document.getElementById('tempResult').className = "hot";
  } else if (converted < 32) {
    document.getElementById('tempResult').className = "cold";
  } else {
    document.getElementById('tempResult').className = "mild";
  }    
};

const convert = (temp) => {
  let f = document.getElementById('F').checked;
  let c = document.getElementById('C').checked;
  if (f) {
    toFahrenheit(temp);
  } else if (c) {
    toCelsius(temp);
  }
};

const init = () => {
  document.getElementById('convertBtn').addEventListener('click', () => {
    convert(temp.value)
  });
  document.getElementById('convertBtn').addEventListener('keyup', e => {
    if (e.keyCode == 13) {
      event.preventDefault();
      convert(temp.value);
    }
  });
  document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('tempResult').innerHTML = "";
    document.getElementById('temp').value = "";
  });
};

init();

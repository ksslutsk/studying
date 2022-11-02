//https://www.codewars.com/kata/5777fe3f355edbf0a5000d11/train/javascript
function xMarksTheSpot(input) {
    let flag = false;
    let count = 0;
    let coord = [];
    input.map((row, index) => {
        count += row.filter(el => el == 'x').length;
        if (count!=0 && !flag) {
            flag = true;
            coord = [index, row.findIndex(el => el == 'x')];
        }
    });
    return count === 1 ? coord : [];
}

const xMarksTheSpot = input => input.reduce((acc, v, i) => {
    if(v.includes('x')) acc = [...acc, i, v.indexOf('x')]
    if(acc.length > 2) acc = [];
    
    return acc;
  }, []);
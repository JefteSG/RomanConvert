const res = document.getElementById('result')
const integerNumber = document.getElementById('integerNumber')
const romanNumber = document.getElementById('romanNumber')
const obj={'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,} 
let num=0;
function ConvertForRoman(){
    num = 0
    let r = romanNumber.value.toUpperCase()
    for(let i=0;i<r.length;i++){
        let current= obj[r[i]]
        let next= obj[r[i+1]]
    if(current<next){
        num-=current
    }else{ num+=current }
    } 
    res.textContent = num
    integerNumber.value = num
}
function convertForInteger() {
  let num = parseInt(integerNumber.value)
  let rom = ''
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ]

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      rom += romanNumerals[i].symbol
      num -= romanNumerals[i].value
    }
  }
  romanNumber.value = rom
  res.textContent = rom
}
const convertButtonRoman = document.getElementById('convertToInteger')
convertButtonRoman.addEventListener('click', ConvertForRoman)
const convertButtonInteger = document.getElementById('convertToRoman')
convertButtonInteger.addEventListener('click', convertForInteger)
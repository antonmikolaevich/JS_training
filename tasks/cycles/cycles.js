/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount;

  if (redemption <= 350){
    discount = 0;
} else if (redemption > 351 && redemption <= 1350) {
    discount = 15;
} else if (redemption > 1350 && redemption <= 2700){
    discount = 30;
} else if (redemption > 2700 && redemption <= 6500){
    discont = 45;
} else {
    console.log('You have no discount')
}

  return discount;
}

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
 const i =10; //10! = 3628800
 let result = 1;
  
  for(let a = 1; a <= 10; a ++){
    result = result * a;
    console.log(result); 
  }
  
}

{
var result = 1;
let i = 0;

  while(i < 10){
    i = i + 1;
    result = result * i;
    console.log(result);
  }
}

{
  var result = 1;
  let i = 0;

  do {
    i = i + 1;
    result = result * i;
    console.log(result)
  }
  while(i < 10);

}

/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
  let sum = ''

  for (let x in substr){
  sum = sum + substr[x];  
  }

  console.log(sum);

}

/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };

  let a = 0;

  for (let t in personIncomes){
    a = a + personIncomes[t];
  }

  console.log(a);

}

module.exports = calculateDiscount;
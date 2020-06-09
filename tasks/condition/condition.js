//conditional

/** TODO
 * Task - rewrite IF..ELSE to ternary operator
 */
{
  const a = 3,
        b = 2;

console.log(a + b < 4 ? "wrong " : "too much");

}

/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y in case both of them less than 10 or multiplication in case of greater or equal than 10
 * Task 1 - if else
 * Task 2 - ternary operator
 */
{
    const x = 3;
    const y = 7;
// Task 1
if (x && y < 10) {
  console.log(x + y);
} else {
  console.log(x * y);
}
// Task 2
x && y < 10 ? console.log(x+y) : console.log(x * y);

}

/** TODO
 * The system receives 3 params - x, y, operator.
 * Operator can pass 4 possible values - "add", "subtract", "multiply", "divide".
 * Implement the logic when the system does appropriate operation based on passed operator param.
 */

{
    const x = 3;
    const y = 7;
    const operator = "add";

    switch (operator){
      case "add":
        console.log(x + y);
      break;
      case "subtract":
        console.log(x - y);
      break;
      case "multiply":
        console.log(x * y);
        break;
      case "divide":
        console.log(x / y);
        break;
        default:
          console.log('Another action') 
          break; 
    }
}
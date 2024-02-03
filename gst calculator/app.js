
const readline = require('readline');
const calculateGST = require('./gstcalculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function processProduct(totalAmount) {
  rl.question('Enter Product Price (or type "exit" to finish): ', (productPrice) => {
    if (productPrice === 'exit') { 
      rl.close();
      return;
    }

    rl.question('Enter GST Rate: ', (gstRate) => {
      const price = parseFloat(productPrice);
      const rate = parseFloat(gstRate);

      if (isNaN(price) || isNaN(rate)) {
        console.log('Invalid input. Please enter valid numbers.');
        processProduct(totalAmount);
      } else {
        const gstAmount = calculateGST(price, rate);
        const productTotal = price + gstAmount;

        console.log(`\nGST Details for Product:`);
        console.log(`Product Price: $${price.toFixed(2)}`);
        console.log(`GST Rate: ${rate}%`);
        console.log(`GST Amount: $${gstAmount.toFixed(2)}`);
        console.log(`Product Total (including GST): $${productTotal.toFixed(2)}`);

        totalAmount += productTotal;
        console.log(`\nTotal Amount (including GST) so far: $${totalAmount.toFixed(2)}`);
        processProduct(totalAmount); 
      }
    });
  });
}


processProduct(0); 

rl.on('close', () => {
  process.exit(0);
});

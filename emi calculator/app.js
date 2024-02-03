const readline = require('readline');
const { calculateEMI, getInterestRate } = require('./emicalculator');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter Loan Amount: ', (loanAmount) => {
  rl.question('Enter Loan Tenure (in years): ', (tenure) => {
    rl.question('Enter Customer Credit Score: ', (creditScore) => {

      const principal = parseFloat(loanAmount);
      const tenureInYears = parseFloat(tenure);
      const creditScoreValue = parseInt(creditScore);

      const interestRate = getInterestRate(creditScoreValue);
      const emi = calculateEMI(principal, interestRate, tenureInYears);

      console.log('\nLoan Details:');
      console.log(`Loan Amount: $${principal.toFixed(2)}`);
      console.log(`Loan Tenure: ${tenureInYears} years`);
      console.log(`Interest Rate: ${interestRate}%`);
      console.log(`EMI: $${emi.toFixed(2)} per month`);

      rl.close();
    });
  });
});

rl.on('close', () => {
  process.exit(0);
});

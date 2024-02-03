
function calculateEMI(principal, rateOfInterest, tenure) {
    const monthlyInterestRate = rateOfInterest / (12 * 100);
    const numberOfPayments = tenure * 12;
  
    const emi = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  
    return emi;
  }
  
  function getInterestRate(creditScore) {
   
    
    if (creditScore >= 800) {
      return 5; 
    } else if (creditScore >= 700) {
      return 8; 
    } else {
      return 12; 
    }
  }
  
  module.exports = { calculateEMI, getInterestRate };
  
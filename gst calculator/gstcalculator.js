function calculateGST(productPrice, gstRate) {
    const gstAmount = (productPrice * gstRate) / 100;
    return gstAmount;
  }
  
  module.exports = calculateGST;
  
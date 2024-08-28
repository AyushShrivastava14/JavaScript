// The filter Method
// Filter() method gives 3 arguments sequentially i.e. element, idx and whole array over which we are iterating.

const deposits = movements.filter(function (mov, i, arr) {
    return mov > 0;
  });
  console.log(movements);
  console.log(deposits);
  
  const depositsFor = [];
  for (const mov of movements) if (mov > 0) depositsFor.push(mov);
  console.log(depositsFor);
  
  const withdrawals = movements.filter(mov => mov < 0);
  console.log(withdrawals);
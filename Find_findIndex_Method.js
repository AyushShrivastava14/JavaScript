// The find() Method 
// Returns the first negative value or we can say returns the first value which satisfies the condition
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const accounts = ['Ayush', 'Aryan', 'Piyush', 'Harsh'];
console.log(accounts);
const account = accounts.find(acc => acc === 'Piyush');
console.log(account);

// findIndex() Method
console.log(movements.findIndex(mov => mov == 70));
class Account{

   static userId = 1;
   

   static identifyAccounts(user1,user2){
         return user1.id === user2.id
   }

   constructor (name, balance) {
       if (typeof name != "string")  throw Error("Incorrect name, please enter a string");
       this.name = name;
       this._balance = balance;
       this.id = Account.userId++;
    }

   set balance(num) {
     if(typeof num !== "number") throw Error ("Incorrect amount for balance")
     return this._balance = num
    }

   get balance() {
     return this._balance 
    }

   credit(sum) {
     if(sum <= this._balance) return this._balance = this._balance - sum;
     else console.log("There is not enough money on your balance")
   }

   debit(sum) {
      return this._balance = this._balance + sum
    }

   transferTo (transferToWhom, amount) {
      this.balance = this._balance - amount;
      transferToWhom.balance = transferToWhom.balance + amount;

   }

   submitBalance() {
       return this._balance
   }



 
}


const saving = new Account("saving", 1000);
console.log(saving);
console.log(Account);
const current = new Account("current", 8000);
console.log(current);
console.log(saving.credit(5000));
console.log(saving.debit(1000));
console.log(saving.debit(2000));
console.log(saving.transferTo(current, 1000));
console.log(saving.balance);
console.log(current.balance);
const res = Account.identifyAccounts(current, saving)
console.log(res)
console.log(saving.balance);
// console.log(saving.balance = "hello");
console.log(saving.balance);
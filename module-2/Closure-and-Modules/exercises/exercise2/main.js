const BankModule = function(){
    let _money = 500;

    const depositCash = function(cash){
        _money += cash;
    }

    const showBalance = function(){
        console.log(_money);
    }

    return {
        deposit: depositCash,
        showBalance: showBalance
    };
}

const bank = BankModule()
bank.deposit(200)
bank.deposit(250)
bank.showBalance()
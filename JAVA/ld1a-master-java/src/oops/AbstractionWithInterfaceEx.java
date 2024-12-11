package oops;

class AbstractionWithInterfaceEx {
    public static void main(String[] args) {
        SavingsAccount1 savingsAccount = new SavingsAccount1();
        savingsAccount.displayAccountInfo();
        savingsAccount.transferAmount();
        savingsAccount.checkAccountBalance();
        savingsAccount.withdraw();


        //Dynmaic polymorphism
        DebitCard1 debitCard1 = new SavingsAccount1();
        debitCard1.checkAccountBalance();
        debitCard1.withdraw();
        // debitCard1.displayAccountInfo();
        // debitCard1.transferAmount();

        System.out.println("*************************");
        NetBanking netBanking = new SavingsAccount1();
        netBanking.displayAccountInfo();
        netBanking.transferAmount();
        netBanking.checkAccountBalance();
        // netBanking.withdraw();
    }
}
interface NetBanking {
    // Interfaces Technical summary
    // Interface is a collection of abstract methods
    public abstract void displayAccountInfo();
    // abstract void displayAccountInfo();
    //  void displayAccountInfo();
    void transferAmount();
    void checkAccountBalance();
}

interface DebitCard1 {
    public void checkAccountBalance();
    public void withdraw();
}

class SavingsAccount1 implements NetBanking, DebitCard1 {

    @Override
    public void displayAccountInfo() {
        System.out.println("Displaying Savings Account Information");
    }

    @Override
    public void transferAmount() {
        System.out.println("Transfering amount from Savings Account");
    }

    @Override
    public void checkAccountBalance() {
        System.out.println("Checking Savings Account Balance");
    }

    @Override
    public void withdraw() {
     System.out.println("Withdrawing amount from Savings Account");
    }
}
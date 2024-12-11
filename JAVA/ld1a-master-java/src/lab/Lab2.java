package lab;

public class Lab2 {
    public static void main(String[] args) {
        Multiplication multiplication=new Multiplication();
        multiplication.table(2);
    }
}

class Multiplication{
    //method using for loop
    // public void table(int n){
    //     for(int i=1;i<11;i++){
    //         System.out.println(n+"x"+i+"="+n*i);
            
    //     }
    // }

    //method using while loop
    // public void table(int n){
    //     int i=1;
    //     while(i<11){
    //         System.out.println(n+"x"+i+"="+n*i);
    //         i++;
    //     }
    // }

    //metho using do while loop
    public void table(int n){
        int i=1;
        do{
            System.out.println(n+"x"+i+"="+n*i);
                    i++;   
        }
        while(i<11);
    }
}

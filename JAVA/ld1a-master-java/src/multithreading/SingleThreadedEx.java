package multithreading;

public class SingleThreadedEx {
    public static void main(String[] args) {
        System.out.println(Thread.currentThread().getName());
    }
}

class Compute{
    /**
     * Computes the odd numbers.
     */
    public void odd(){
        for(int i=1;i<=50;i+=2){
            System.out.println("ODD:" +i);
        }
    }
    public void even(){
        for(int i=1;i<=50;i+=2){
            System.out.println("Even:" +i);
        }
    }
}

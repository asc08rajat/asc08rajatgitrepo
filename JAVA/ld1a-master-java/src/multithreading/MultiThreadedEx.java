package multithreading;

public class MultiThreadedEx {
    public static void main(String[] args) {
        Thread.currentThread().setName("harsh");
        System.out.println(Thread.currentThread().getName()+"is starting the game");
        PlayerThread playerThread=new PlayerThread();
        PlayerThread1 playerThread1=new PlayerThread1();
        playerThread.start();
        playerThread1.start();


    }
}
class Compute1{
    /**
     * Computes the odd numbers.
     */
    public void odd(){
        for(int i=1;i<=500;i+=2){
            // Thread.currentThread().setName("aayush");
            // System.out.println(Thread.currentThread().getName()+i);
            System.out.println("ODD" +i);
        }
    }
    public void even(){
        for(int i=1;i<=500;i+=2){
            System.out.println("Even:" +i);
        }
    }
}

class PlayerThread extends Thread{
    public void run(){
        Compute1 compute1=new Compute1();
        compute1.odd();
    }
}

class PlayerThread1 extends Thread{
    public void run(){
        Compute1 compute1=new Compute1();
        compute1.even();
    }
}
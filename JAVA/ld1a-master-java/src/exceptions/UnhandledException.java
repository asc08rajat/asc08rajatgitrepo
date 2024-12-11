package exceptions;

public class UnhandledException {
    public static void main(String[] args) {
        String testString="welcome";
        String upperCase=testString.toUpperCase();
        System.out.println(upperCase);
        System.out.println("caller begin");
        called();
        System.out.println("back to caller");
    }
    private static  void called(){
        System.out.println("The calculator app");
        int num1=0,num2=200;
        int result=0;
        try{
             result=num2/num1;
        }catch (ArithmeticException e){
            System.out.println("ArithmeticException"+ e.getMessage());
        }
        System.out.println(result);
        System.out.println("shutting down calculator");

    }
}

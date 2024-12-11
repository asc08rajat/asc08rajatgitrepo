package exceptions;

import java.util.Scanner;

public class MultipleExceptionsEx {
    public static void main(String[] args) {
        int num1=0;
        int num2=10;

        int value[]={10,20,30};
        try(Scanner scanner=new Scanner(System.in)){
            String num1String= scanner.nextLine();
            num1=Integer.parseInt(num1String);
            System.out.println(num1/num2);
            System.out.println(value[3]);
        }
        catch(NumberFormatException numberFormatException){
            System.err.println("invalid value for number");
        }
        catch(ArithmeticException arithmeticException){
            System.out.println("cannot divide by zero");
        }
        catch(Throwable exception){
            System.out.println("all exception (which are not handled above)");
            System.out.println(exception);
        }
    }
}

package exceptions;
import java.util.*;

public class CustomExceptionEx {
    public static void main(String[] args) {
        int age=300;
        if(age<21||age>60){
            AgeInvalidException ageInvalidException=new AgeInvalidException("Invalid age,sorry you are not eligible to apply for the job");
            try{
                throw ageInvalidException;
            }catch(AgeInvalidException ageInvalidException1){
                System.out.println(ageInvalidException1.getMessage());
            }
        }
        else{
            System.out.println("you are eligible to apply for the job");
        }
        System.out.println("done");
    }
}
class AgeInvalidException extends RuntimeException{
    public AgeInvalidException(String message){
        super(message);
    }
}

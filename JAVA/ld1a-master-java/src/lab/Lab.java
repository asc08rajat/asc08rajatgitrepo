package lab;

public class Lab {
    public static void main(String[] args) {
        Overloading overloading=new Overloading();
        System.out.println(overloading.add((short)10,(short)20));
        System.out.println(overloading.add((float)10.5,20.1));
        System.out.println(overloading.add(10, 20, 30));
        System.out.println(overloading.add("Hello", 10));
    }
}

class Overloading{
    short add(short number1,short number2){
        return (short)(number1+number2);
    }
    double add(float number1,double number2){
        double result=number1+number2;
        return result;
    }
    int add(int number1,int number2,int number3){
         int result=number1+number2+number3;
        return result;
    }

    String add(String str, int number1){
        String result=str+" "+number1;
        return result;
    }
    
}
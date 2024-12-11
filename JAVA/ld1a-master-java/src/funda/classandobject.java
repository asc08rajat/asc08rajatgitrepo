package funda;

//create a class
class Car{
    //instance variable
    // String type="Gasoline";
    // int price=100000;
    

    String type;
    int price;
    Car(){
        type="Gasoline";
        price=10000;
    }
    void display(){
        System.out.println(type);
        System.out.println(price);
    }
    @Override //annotation
    public String toString(){
        String message= type+"+"+price;
        return message;
    }


}
public class classandobject {
    public static void main(String[] args) {
        Car car=null;
        car=new Car();
        car.display();
        System.out.println(car);
        String message=car.toString();
        System.out.println(message);
        System.out.println(car.toString());
        // System.out.println(car.type);
        // System.out.println(car.price);
    }
   

}

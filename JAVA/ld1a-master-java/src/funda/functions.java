package funda;

public class functions {
    public static void main(String[] args) {
             
        Addition addition=new Addition();
        System.out.println(addition.add(1,2));
        Printer printer=new Printer();
        printer.print("Hello World");
        }
}
class Addition{
    public int add(int a,int b){
        return a+b;
    }
}

class Printer{
    public void print(String str){
        System.out.println(str);
    }

}

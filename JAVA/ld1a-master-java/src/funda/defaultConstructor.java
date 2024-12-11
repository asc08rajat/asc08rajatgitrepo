package funda;

public class DefaultConstructor {
        String s1;
        String s2;
    DefaultConstructor(){
         s1="Rajat";
         s2="rajat";
    }
    // public void display(){
    //     System.out.println(s1);
    //     System.out.println(s2);
    // }
    public static void main(String[] args) {
        DefaultConstructor defaultobj=new DefaultConstructor();
        System.out.println(defaultobj.s1);
        System.out.println(defaultobj.s2);
        System.out.println(defaultobj.s1.charAt(2));
        System.out.println(defaultobj.s1.contains("R "));
        // defaultobj.display();
    }
} 

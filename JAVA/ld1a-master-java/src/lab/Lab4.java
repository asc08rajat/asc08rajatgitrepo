package lab;

public class Lab4 {

    public static void main(String[] args) {
        String str="Hello World";
        System.out.println(str.length());
        String str1="hello world";

        System.out.println(str.charAt(0));
        System.out.println(str.contains("Hello"));
        System.out.println(str.length());
        System.out.println(str.indexOf("World"));
        System.out.println(str.equals("Hello World"));
        System.out.println(str.equalsIgnoreCase("hello world"));
        System.out.println(String.join("--",str,str1));
        System.out.println(str.lastIndexOf("o"));
        System.out.println(str.substring(2,7));
        System.out.println(str.toLowerCase());
        System.out.println(str1.toUpperCase());
        System.out.println(str.trim().length());
    }
}


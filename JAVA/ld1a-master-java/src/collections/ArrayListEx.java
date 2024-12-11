/**
 * This class demonstrates the usage of the ArrayList data structure in Java.
 * It showcases how to create an ArrayList, add elements of different data types,
 * and use the generic version of ArrayList.
 */
package collections;
import java.util.*;

public class ArrayListEx {
    public static void main(String[] args) {
        ArrayList colors= new ArrayList();
        colors.add("Red");
        colors.add(1);
        int x=10;        
        ArrayListEx arrayListEx=new ArrayListEx();
        arrayListEx.usingGenerics();
        Integer xtoInteger=new Integer(x);
        colors.add(xtoInteger);
        colors.add(false);
        boolean b=true;
        Boolean bToBoolean=new Boolean(b);
        colors.add(bToBoolean);
        System.out.println(colors);
    }
    private static void usingGenerics(){
        ArrayList names=new ArrayList<>();
        names.add("raj");
        names.add("bodha");
        System.out.println(names);
        System.out.println(names.get(1));

    }
}

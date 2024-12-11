package collections;
import java.util.*;

public class SetEx {
    public static void main(String[] args){
        HashSet<String>colors=new HashSet<String>();
        colors.add("Red");
        colors.add("Yellow");
        colors.add("Green");
        colors.add("Blue");
        System.out.println(colors);   
        colors.add(null);
        colors.add("Blue");
        System.out.println(colors);
        System.out.println(colors.size());
        colors.remove("red");
        

    }   
}

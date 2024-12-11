package collections;

import java.util.HashMap;
import java.util.TreeMap;

public class HashMapEx {
    public static void main(String[] args) {
        // HashMap<String,Integer> countrycodes=new HashMap<String,Integer>();
        TreeMap<String,Integer> countrycodes=new TreeMap<String,Integer>();
        //purpose of TreeMap
        //TreeMap is a collection of key value pairs.
        //key is unique
        //value can be duplicate
        //key can be null
        //value can be null
        
        //TreeMap vs HashMap
        //TreeMap is sorted
        //HashMap is not sorted 
        //TreeMap is slow
        //HashMap is fast
        

    //what is HashMap?
    //HashMap is a collection of key value pairs.
    //key is unique
    //value can be duplicate
    //key can be null
    //value can be null
    //HashMap is not synchronized
    //HashMap is not thread safe

    //purpose of hashmap
    //HashMap is used to store the data in key value pair.



  

        System.err.println(countrycodes.isEmpty());
        countrycodes.put("America", 1);
        countrycodes.put("Singapore", 65);
        countrycodes.put("India", 91);
        countrycodes.put("japan", 81);
        countrycodes.put("japan".toUpperCase(),81);
        countrycodes.put("JapPPPPPPan", 81);
        countrycodes.put("japan", 81);
        // countrycodes.put("null", 000);
        // countrycodes.put(null, 111);
        // countrycodes.put("null", 111);
        // countrycodes.put(null, 222);
        System.out.println(countrycodes);
        System.err.println(countrycodes.isEmpty());
        System.out.println(countrycodes.size());

        //perform a search operation if singapore is present in the map and if 65 is found.
        if(countrycodes.containsKey("Singapore")){
            System.out.println("Singapore is present");
        }
        if(countrycodes.containsValue(65)){
            System.out.println("65 is present");
        }
    }
}

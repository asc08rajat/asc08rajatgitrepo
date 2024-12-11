package lab;

import java.util.Arrays;

public class Lab3 {
    public static void main(String[] args) {
        Wordcount wordcount=new Wordcount();
        System.out.println(wordcount.word("Sum of thew 12 and 20 is 32"));
        
    }
    
   
    
    
}
class Wordcount{
    int count=0;
    public int word(String str){
        String words[]=str.split(" ");
        System.out.println(Arrays.toString(words));
        for(int i=0;i<words.length;i++){
            if(words[i].matches("[a-zA-Z]+")){
                count++;
            }
            
        }
        return count;
    }
    
}

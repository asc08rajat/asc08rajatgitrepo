package lab;

import java.util.Arrays;

public class Lab5 {
    public static void main(String[] args) {
        ArrayStore arraystore = new ArrayStore();
        int arr[] = {1,30,3,4,0,6,4,8,9,10};
        arraystore.accept(arr);
        arraystore.display(arr);
        arraystore.sort(arr);
        System.out.println(arraystore.countint(arr, 4));
        arraystore.insertelement(arr,20,3);
        int arr1[]=arraystore.duplicate(arr);
        arraystore.display(arr1);
        
     
    }
}

class ArrayStore{
    public void accept(int arr[]){
        int newarr[]= new int[arr.length];
        for(int i=0;i<arr.length;i++){
            newarr[i]=arr[i];
            
        }

        System.out.println(Arrays.toString(newarr));
    }

    public void display(int arr[]){
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
    }

    public void sort(int arr[]){
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
    }

    public int countint(int arr[],int n){
        int count=0;
        for(int i=0;i<arr.length;i++){
            if(arr[i]==n){
                count++;
            }
           }
        return count;
    }

    public void insertelement(int arr[],int n,int k){
        
        int newarr[]=new int[arr.length+1];
        for(int i=0;i<k;i++){
            newarr[i]=arr[i];
        }
        newarr[k]=n;
        for(int i=k+1;i<newarr.length;i++){
            newarr[i]=arr[i-1];
        }
        System.out.println(Arrays.toString(newarr));
    }

    public int[]  duplicate(int arr[]){
        int newarr[]= new int[arr.length];
        Arrays.sort(arr);
        newarr[0]=arr[0];
        int j=1;
        for(int i=0;i<arr.length-1;i++)
        {
            if(arr[i]!=arr[i+1])
            {
                newarr[j]=arr[i+1];
                j++;
            }
        }
        int temp[]=new int[j];
        for(int i=0;i<j;i++){
            temp[i]=newarr[i];
        }
        return temp;
    }

}
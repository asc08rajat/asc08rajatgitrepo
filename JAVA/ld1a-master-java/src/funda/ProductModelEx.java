package funda;

 class ProductModel{
    private String productId="ISP001";
    private String productName="Laptop";
    private int productPrice=1000;

    @Override
    public String toString(){
        return "ProductModel [productId="+productId+",productName="+productName+"]";
    }

    //setter or mutator method
    public void setProductPrice(int productPrice){
        if(this.productPrice<0||this.productPrice>100000){
            System.out.println("invalid product price");
            return;
        }
        this.productPrice=productPrice;
    }
    //getter or accessor method
    public int getProductPrice(){
        return productPrice;
    }
  

}

class ProductModelEx{
    public static void main(String[] args) {
        ProductModel productModel=new ProductModel();
        System.out.println(productModel);
        productModel.setProductPrice(2000);
        System.out.println();
    }   
}

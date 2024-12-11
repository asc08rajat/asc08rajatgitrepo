package inheritance;

public class FinalExTest {
    public static void main(String[] args) {
        
        new Derived2().Derived2Method2();
    }
}

final class TestMe{}
// final class TestMe extends Test{}

class Base2{
    public void Base2Method1(){
        System.out.println("Base2Method1");
    }

    public final void Base2Method2(){
        System.out.println("Base2Method2");
    }
    

}

class Derived2 extends Base2{
    @Override
    public void Base2Method1(){
        super.Base2Method1();
        System.out.println("Base2Method1 overriden");
    }

    public final void Derived2Method2(){
        super.Base2Method1();
        super.Base2Method2();
        System.out.println("Base2Method2");
        super.Base2Method1();
        super.Base2Method2();
    }
}
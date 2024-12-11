package funda;

import java.util.Date;

class Issue{
    int Issue_id;
    String Title;
    String Description;
    String Priority[];
    String Status;
    String Assignee;
    Date date;

    Issue(){
        Issue_id=101;
        Title="Login details";
        Description="Username Error";
        Priority=new String[]{"high","low","medium"};
        Status="Inprogress";
        Assignee="rajat";
        date=new Date(2024,11,12);
        
    }
    void display()
    {
        System.out.println(Issue_id);
        System.out.println(Title);
        System.out.println(Description);
        for (int i=0;i<Priority.length;i++)
        {
            System.out.println(Priority[i]);
        }
        System.out.println(Status);
        System.out.println(Assignee);
        System.out.println(date);
    }
    @Override
    public String toString(){
        String output="Issue_id: "+Issue_id+"\nTitle: "+Title+"\nDescription: "+Description+"\nPriority: "+Priority[0]+"\nStatus: "+Status+"\nAssignee: "+Assignee+"\nDate: "+date;
        return output;
    }

}

public class issueObject {


    public static void displayIssuebyId(Issue[] issues, int searchId){
        for(Issue issue:issues){
            if(issue!=null && issue.Issue_id==searchId){
                issue.display();
                return;
            }
        }

    }
    public static void main(String[] args) {
        Issue[] issues=new Issue[3];
        for(int i=0;i<issues.length;i++){
             issues[i]=new Issue();
        }
        issues[0].display();
        // issue.display();
        // System.out.println(issue.toString());
    }
    
}

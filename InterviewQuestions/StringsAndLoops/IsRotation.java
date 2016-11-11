package InterviewQuestions.StringsAndLoops;

/**
 * Created by omergoldberg on 11/10/16.
 *
 * Hint: http://stackoverflow.com/questions/86780/how-to-check-if-a-string-contains-another-string-in-a-case-insensitive-manner-in
 */
public class IsRotation {
    public static void main(String[] args)
    {
        String s1 = "abcd";

        String s2 = "bcda";

        //Step 1

        if(s1.length() != s2.length())
        {
            System.out.println("s2 is not rotated version of s1");
        }
        else
        {
            //Step 2

            String s3 = s1 + s1;

            //Step 3

            if(s3.contains(s2))
            {
                System.out.println("s2 is a rotated version of s1");
            }
            else
            {
                System.out.println("s2 is not rotated version of s1");
            }
        }
    }
}

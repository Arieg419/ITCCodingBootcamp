package InterviewQuestions.StringsAndLoops;

/**
 * Created by omergoldberg on 11/10/16.
 */
public class StringReverseExample {
    public static void main(String args[]) {


        //one way to reverse String without using StringBuffer or StringBuilder is writing
        //own utility method
        String word = "Band";
        String reverse = reverse(word);
        System.out.printf(" original String : %s , reversed String %s %n", word, reverse);
    }


    public static String reverse(String source){
        if(source == null || source.isEmpty()){
            return source;
        }
        String reverse = "";
        for(int i = source.length() -1; i>=0; i--){
            reverse = reverse + source.charAt(i);
        }

        return reverse;
    }
}

package InterviewQuestions.ArrayandSorting;

/**
 * Created by omergoldberg on 11/17/16.
 */
public class IsUniqueChars {
    // Solution for ITC students. HINT: ASCII values
    public static boolean isUniqueChars2(String str) {
        boolean[] char_set = new boolean[256];
        for (int i = 0; i < str.length(); i++) {
            int val = str.charAt(i); // returns ASCII vals
            if (char_set[val]) return false;
            char_set[val] = true;
        }
        return true;
    }

    public static void main(String[] args) {
        String[] words = {"abcde", "hello", "apple", "kite", "padle"};
        for (String word : words) {
            System.out.println(word + ": " +  " " + isUniqueChars2(word));
        }
    }
}

package InterviewQuestions.ArrayandSorting;

/**
 * Created by omergoldberg on 11/17/16.
 */
public class RemoveDuplicates {
    public static String charArrayToString(char[] array) {
        StringBuilder buffer = new StringBuilder(array.length);
        for (char c : array) {
            if (c == 0) {
                break;
            }
            buffer.append(c);
        }
        return buffer.toString();
    }

    public static void removeDuplicatesEff(char[] str) {
        if (str == null) return;
        int len = str.length;
        if (len < 2) return;

        boolean[] hit = new boolean[256];
        for (int i = 0; i < 256; ++i) {
            hit[i] = false;
        }
        hit[str[0]] = true;

        int tail = 1;
        for (int i = 1; i < len; ++i) {
            if (!hit[str[i]]) {
                str[tail] = str[i];
                ++tail;
                hit[str[i]] = true;
            }
        }
        str[tail] = 0;
    }

    public static void main(String[] args) {
        String s = "helloiloveyou";
        char[] arr = s.toCharArray();
        removeDuplicatesEff(arr);
        System.out.print(charArrayToString(arr));
    }
}

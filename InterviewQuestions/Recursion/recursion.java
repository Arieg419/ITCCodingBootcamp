package com.company;

/**
 * Created by omergoldberg on 12/1/16.
 */
public class recursion {

    public static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n-1) + fibonacci(n-2);
    }

    public static int noahsCraft(int pairs) {
        if(pairs == 0) {
            return 0;
        }
        return 2 + noahsCraft(pairs -1);
    }

    public static int countingStars(int rows) {
        if (rows == 0) {
            return 0;
        }
        return rows + countingStars(rows - 1);
    }

    public static String searchAndReplace(String str) {

        if(str.length() == 0) {
            return str;
        }

        if(str.charAt(0) == 'b') {
            return "z" + searchAndReplace(str.substring(1));
        }
        return str.charAt(0) + searchAndReplace(str.substring(1));
    }





    public static void main(String[] args) {
        int res1 = fibonacci(0);
        int res2 = noahsCraft(6);
        int res3 = countingStars(3);
        String res4 = searchAndReplace("babababa");
        System.out.println(res4);

        return;
    }
}

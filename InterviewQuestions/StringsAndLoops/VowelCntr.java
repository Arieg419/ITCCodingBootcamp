package InterviewQuestions.StringsAndLoops;
import java.util.Scanner;

/**
 * Created by omergoldberg on 11/10/16.
 *
 * Java Program to count vowels in a String. It accept a String from command prompt * and count how many vowels it contains.
 * To revise, 5 letters a, e, i, o and u are * known as vowels in English.
 *
 * */


public class VowelCntr {
    public static void main(String args[]) {
        int aCounter = 0, eCounter = 0, iCounter = 0, oCounter = 0,  uCounter = 0;
        System.out.println("Please enter some text");
        Scanner reader = new Scanner(System.in);
        String str = reader.nextLine();
        int n = str.length();
        for (int i = 0; i < n; i++) {
            char c = str.charAt(i);
            switch(c) {
                case 'a':
                    aCounter++;
                    break;
                case 'e':
                    eCounter++;
                    break;
                case 'i':
                    iCounter++;
                    break;
                case 'o':
                    oCounter++;
                    break;
                case 'u':
                    uCounter++;
                    break;
                default:
                    break;
            }

        }
        System.out.println("aCounter is " + aCounter);
        System.out.println("eCounter is " + eCounter);
        System.out.println("iCounter is " + iCounter);
        System.out.println("oCounter is " + oCounter);
        System.out.println("uCounter is " + uCounter);
        // int count = 0;
    }
}

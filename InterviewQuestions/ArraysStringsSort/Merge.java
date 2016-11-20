/*
You are given two sorted arrays, A and B, and A has a large enough buffer at the
end to hold B Write a method to merge B into A in sorted order.

Explain to students importance of using the sorted traits of array, and understanding
what kind of useful data we get from that.
*/
public class Merge {

	public static String arrayToString(int[] array) {
		StringBuilder sb = new StringBuilder();
		for (int v : array) {
			sb.append(v + ", ");
		}
		return sb.toString();
	}


	/** Merges array
	 * @param a first array - is Sorted
	 * @param b second array - is Sorted
	 * @param n number of "real" elements in a
	 * @param m number of "real" elements in b
	 */
	 //merge(int[] a, int[] b, n. m)
	public static int[] merge(int[] a, int[] b) {

		int[] answer = new int[a.length + b.length];
		int i = 0, j = 0, k = 0;

		while (i < a.length && j < b.length)
		{
			if (a[i] < b[j])
				answer[k++] = a[i++];

			else
				answer[k++] = b[j++];
		}

		while (i < a.length)
			answer[k++] = a[i++];


		while (j < b.length)
			answer[k++] = b[j++];

		return answer;
	}

	public static void main(String[] args) {
		int[] a = {1, 3, 4, 5, 6, 8, 10}; // 0 is empty for exercise
		int[] b = {4, 7, 9, 10, 12};
		// merge(a, b, 7, 5);
		int[] newArr = merge(a,b);
		System.out.println(arrayToString(newArr));
	}

}

public class SolutionPangramChecker {
    public static void main(String[] args) {
        
        String input = "The quick brown fox jumps over the lazy dog";

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
       
        Set<Character> letterSet = new HashSet<>();

       
        for (char c : input.toLowerCase().toCharArray()) {
            if (Character.isLetter(c)) {
                letterSet.add(c);
            }
        }

        
        return letterSet.size() == 26;
    }
}
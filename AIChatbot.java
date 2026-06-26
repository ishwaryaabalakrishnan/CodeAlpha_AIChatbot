import java.util.Scanner;

public class AIChatbot {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("==================================");
        System.out.println("      AI CHATBOT");
        System.out.println("==================================");
        System.out.println("Bot: Hello! I am your AI Chatbot.");
        System.out.println("Bot: Type 'bye' to exit.");

        while (true) {

            System.out.print("\nYou: ");
            String message = sc.nextLine().toLowerCase();

            if (message.equals("hello") || message.equals("hi")) {
                System.out.println("Bot: Hello! Nice to meet you.");

            } else if (message.contains("how are you")) {
                System.out.println("Bot: I am doing great. Thank you!");

            } else if (message.contains("your name")) {
                System.out.println("Bot: My name is CodeAlpha AI Chatbot.");

            } else if (message.contains("java")) {
                System.out.println("Bot: Java is an object-oriented programming language.");

            } else if (message.contains("oop")) {
                System.out.println("Bot: OOP stands for Object-Oriented Programming.");

            } else if (message.contains("internship")) {
                System.out.println("Bot: This chatbot was created for the CodeAlpha Java Internship.");

            } else if (message.contains("thank")) {
                System.out.println("Bot: You're welcome!");

            } else if (message.equals("bye")) {
                System.out.println("Bot: Goodbye! Have a nice day.");
                break;

            } else {
                System.out.println("Bot: Sorry, I don't understand. Please try another question.");
            }
        }

        sc.close();
    }
}
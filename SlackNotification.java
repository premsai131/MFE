public class SlackNotification {
    static String deploymentUrl = "";
    static String testType = "";
    static String environment = "";
    static String timestamp = ""; 

    public static void main(String[] args) throws Exception {
        for (String arg : args) {
            if (arg.startsWith("Deployment URL: ")) {
                deploymentUrl = arg.replace("Deployment URL: ", "");
            } else if (arg.startsWith("Test Type: ")) {
                testType = arg.replace("Test Type: ", "");
            } else if (arg.startsWith("Environment: ")) {
                environment = arg.replace("Environment: ", "");
            } else if (arg.startsWith("Timestamp: ")) {
                timestamp = arg.replace("Timestamp: ", "");
            }
        }

        // Print the values to check if they are captured correctly
        System.out.println("Deployment URL: " + deploymentUrl);
        System.out.println("Test Type: " + testType);
        System.out.println("Environment: " + environment);
        System.out.println("Timestamp: " + timestamp);

        StringBuilder payload = new StringBuilder();
        payload.append("Deployment URL: ").append(deploymentUrl).append("\n");
        payload.append("Test Type: ").append(testType).append("\n");
        payload.append("Environment: ").append(environment).append("\n");
        payload.append("Timestamp: ").append(timestamp).append("\n");

    }
}

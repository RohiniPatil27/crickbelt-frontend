package in.sp.Crikbelt.service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import org.springframework.http.*;
import org.springframework.web.client.RestTemplate;

import java.util.*;

public class SmsService {

    private static final String API_KEY = "AHyK8O9YdVSiZoruQvLpUP35gDcR2xGBWC0FXzanjbJhTmNqtExKMgzYo2fLTtcjb4hm5F3eWdBSnXu6";

    public static boolean sendOtp(String phone, String otp) {
        try {
            String url = "https://www.fast2sms.com/dev/bulkV2";

            // Set headers
            HttpHeaders headers = new HttpHeaders();
            headers.set("authorization", API_KEY);
            headers.setContentType(MediaType.APPLICATION_JSON);

            // Set body
            Map<String, Object> body = new HashMap<>();
            body.put("route", "otp");
            body.put("message", "Your OTP is: " + otp);
            body.put("language", "english");
            body.put("flash", "0");
            body.put("numbers", phone);

            // Create request
            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

            // Send request
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);

            // Print response
            System.out.println("Fast2SMS Response: " + response.getBody());

            return response.getStatusCode() == HttpStatus.OK;

        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}

package in.sp.Crikbelt.controller;
import java.util.HashMap;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/otp")
@CrossOrigin(origins = "*")
public class OtpController {

	    private static Map<String, String> otpStore = new HashMap<>();

	    @PostMapping("/send-otp")
	    public ResponseEntity<String> sendOtp(@RequestBody Map<String, String> request) {
	        String phone = request.get("phone");
	        String otp = String.valueOf((int)(Math.random() * 900000) + 100000);

	        System.out.println("Generated OTP for " + phone + ": " + otp);

	        otpStore.put(phone, otp);

	        return ResponseEntity.ok("Mock OTP sent (Check backend log)");
	    }

	    @PostMapping("/verify-otp")
	    public ResponseEntity<String> verifyOtp(@RequestBody Map<String, String> request) {
	        String phone = request.get("phone");
	        String userOtp = request.get("otp");

	        String storedOtp = otpStore.get(phone);
	        if (storedOtp != null && storedOtp.equals(userOtp)) {
	            return ResponseEntity.ok("OTP verified successfully");
	        } else {
	            return ResponseEntity.status(400).body("Invalid OTP");
	        }
	    }
	

}

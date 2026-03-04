package in.sp.Crikbelt.controller;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import in.sp.Crikbelt.entity.User;
import in.sp.Crikbelt.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    
    @Autowired
    private UserRepository userRepo;

    // ✅ Register
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Map<String, String> request) {
        String phone = request.get("phone");
        String password = request.get("password");

        if (userRepo.findByMobileNumber(phone).isPresent()) {
            return ResponseEntity.status(409).body("User already exists");
        }

        User user = new User(phone, password);
        userRepo.save(user);

        return ResponseEntity.ok("User registered successfully");
    }
    
    
  
    
    

//    // ✅ Login
//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestBody Map<String, String> request) {
//        String phone = request.get("phone");
//        String password = request.get("password");
//
//        return userRepo.findByMobileNumber(phone)
//                .map(user -> {
//                    if (user.getPassword().equals(password)) {
//                        return ResponseEntity.ok("Login successful");
//                    } else {
//                        return ResponseEntity.status(401).body("Invalid password");
//                    }
//                })
//                .orElse(ResponseEntity.status(404).body("User not found"));
//    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> request) {
        String phone = request.get("phone");
        String password = request.get("password");

        return userRepo.findByMobileNumber(phone)
                .map(user -> {
                    if (user.getPassword().equals(password)) {
                        // ✅ Add this line for debugging
                       // System.out.println("Login successful for user ID: " + user.getId());

                        // ✅ Make sure 'id' is returned in the response
                        return ResponseEntity.ok(Map.of(
                            "message", "Login successful",
                            "id", user.getId(),             // This is important for your frontend
                            "phone", user.getMobileNumber()
                        ));
                    } else {
                        return ResponseEntity.status(401).body("Invalid password");
                    }
                })
                .orElse(ResponseEntity.status(404).body("User not found"));
    }
 

        @PostMapping("/verify-password")
        public ResponseEntity<String> verifyPassword(@RequestBody User loginData) {
            if (loginData.getId() == null || loginData.getPassword() == null) {
                return ResponseEntity.badRequest().body("User ID and password are required.");
            }

            User user = userRepo.findById(loginData.getId()).orElse(null);
            if (user == null) {
                return ResponseEntity.badRequest().body("User not found.");
            }

            if (user.getPassword().equals(loginData.getPassword())) {
                return ResponseEntity.ok("Password verified.");
            } else {
                return ResponseEntity.badRequest().body("Incorrect password.");
            }
        }
    

    

}



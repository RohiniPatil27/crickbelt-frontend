package in.sp.Crikbelt.controller;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import in.sp.Crikbelt.entity.Deposit;
import in.sp.Crikbelt.entity.User;
import in.sp.Crikbelt.repository.UserRepository;
import in.sp.Crikbelt.service.DepositService;

@RestController
@RequestMapping("/api/deposits")
@CrossOrigin(origins = "*") // adjust as needed
public class DepositController {

    @Autowired
    private DepositService depositService;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/submit")
    public ResponseEntity<String> submitDeposit(
            @RequestParam("utr") String utr,
            @RequestParam("amount") Double amount,
            @RequestParam("file") MultipartFile file,
            @RequestParam("userId") Long userId
    ) throws IOException {

        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }

        // Save file name only; use proper storage for file if needed
        String fileName = file.getOriginalFilename();

        Deposit deposit = new Deposit();
        deposit.setAmount(amount);
        deposit.setUtr(utr);
        deposit.setProofFilename(fileName);
        deposit.setUser(userOpt.get());

        depositService.saveDeposit(deposit, userId);

        return ResponseEntity.ok("Deposit submitted successfully.");
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUserDeposits(@PathVariable Long userId) {
        Optional<User> userOpt = userRepository.findById(userId);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }

        List<Deposit> deposits = depositService.getDepositsByUserId(userId);
        return ResponseEntity.ok(deposits);
    }

}


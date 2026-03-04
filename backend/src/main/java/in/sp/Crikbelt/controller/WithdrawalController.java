package in.sp.Crikbelt.controller;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.sp.Crikbelt.entity.User;
import in.sp.Crikbelt.entity.Withdrawal;
import in.sp.Crikbelt.repository.UserRepository;
import in.sp.Crikbelt.repository.WithdrawalRepository;

@RestController
@RequestMapping("/api/withdrawals")
@CrossOrigin(origins = "*")
public class WithdrawalController {

    @Autowired
    private WithdrawalRepository withdrawalRepo;

    @Autowired
    private UserRepository userRepo;


@PostMapping("/accounts")
public ResponseEntity<String> saveWithdrawalAccount(@RequestBody Withdrawal withdrawal) {
    if (withdrawal.getUser() == null || withdrawal.getUser().getId() == null) {
        return ResponseEntity.badRequest().body("User information is missing.");
    }

    User user = userRepo.findById(withdrawal.getUser().getId()).orElse(null);
    if (user == null) {
        return ResponseEntity.badRequest().body("Invalid user ID.");
    }

    withdrawal.setUser(user);
    withdrawal.setCreatedAt(LocalDateTime.now());
    withdrawalRepo.save(withdrawal);
    return ResponseEntity.ok("Account saved successfully.");
}

@GetMapping("/accounts/{userId}")
public ResponseEntity<List<Withdrawal>> getSavedAccounts(@PathVariable Long userId) {
    List<Withdrawal> accounts = withdrawalRepo.findSavedAccountsByUserId(userId);
    return ResponseEntity.ok(accounts);
}
}


package in.sp.Crikbelt.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.sp.Crikbelt.dto.TransactionDto;
import in.sp.Crikbelt.service.AccountStatementService;

@RestController
@RequestMapping("/api/account")
@CrossOrigin(origins = "*")
public class AccountStatementController {

    @Autowired
    private AccountStatementService accountStatementService;

    @GetMapping("/transactions/{userId}")
    public ResponseEntity<List<TransactionDto>> getUserTransactions(@PathVariable Long userId) {
        return ResponseEntity.ok(accountStatementService.getUserTransactions(userId));
    }
    
    @GetMapping("/balance/{userId}")
    public ResponseEntity<Double> getBalance(@PathVariable Long userId) {
    double balance = accountStatementService.getUserBalance(userId);
    return ResponseEntity.ok(balance);
    }
}


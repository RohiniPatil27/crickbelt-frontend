package in.sp.Crikbelt.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.sp.Crikbelt.dto.TransactionDto;
import in.sp.Crikbelt.entity.Deposit;
import in.sp.Crikbelt.entity.Withdrawal;
import in.sp.Crikbelt.repository.DepositRepository;
import in.sp.Crikbelt.repository.WithdrawalRepository;

@Service
public class AccountStatementService {

    @Autowired
    private DepositRepository depositRepo;

    @Autowired
    private WithdrawalRepository withdrawalRepository;

    public List<TransactionDto> getUserTransactions(Long userId) {
        List<Deposit> deposits = depositRepo.findByUser_Id(userId);
        List<Withdrawal> withdrawals = withdrawalRepository.findByUserId(userId);
     

        List<TransactionDto> transactions = new ArrayList<>();

        for (Deposit d : deposits) {
            transactions.add(new TransactionDto(
                d.getCreatedAt(), d.getAmount(), 0.0, "Deposit - UTR: " + d.getUtr()
            ));
        }

        for (Withdrawal w : withdrawals) {
            if (w.getAmount() == 0) continue; // ✅ skip saved accounts

            String type = "bank".equalsIgnoreCase(w.getAccountType()) ? "Bank" : "UPI";
            transactions.add(new TransactionDto(
                w.getCreatedAt(), 0.0, w.getAmount(), "Withdrawal - " + type
            ));
        }

        // Sort by date descending
        transactions.sort(Comparator.comparing(TransactionDto::getDate));

        return transactions;
    }


    public double getUserBalance(Long userId) {
        List<TransactionDto> txns = getUserTransactions(userId);
        return txns.stream().mapToDouble(t -> t.getCredit() - t.getDebit()).sum();
    }
    
}

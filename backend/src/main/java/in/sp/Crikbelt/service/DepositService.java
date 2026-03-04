package in.sp.Crikbelt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.sp.Crikbelt.entity.Deposit;
import in.sp.Crikbelt.entity.User;
import in.sp.Crikbelt.repository.DepositRepository;
import in.sp.Crikbelt.repository.UserRepository;

@Service
public class DepositService {

    @Autowired
    private DepositRepository depositRepo;

    @Autowired
    private UserRepository userRepo;

    public void saveDeposit(Deposit deposit, Long userId) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));

        deposit.setUser(user);  // Assuming Deposit has a User field
        depositRepo.save(deposit);
    }
    public List<Deposit> getDepositsByUserId(Long userId) {
        return depositRepo.findByUser_Id(userId);
    }

}


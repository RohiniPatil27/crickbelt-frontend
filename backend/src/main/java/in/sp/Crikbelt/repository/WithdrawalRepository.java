package in.sp.Crikbelt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import in.sp.Crikbelt.entity.Withdrawal;

public interface WithdrawalRepository extends JpaRepository<Withdrawal, Long> {
    List<Withdrawal> findByUserId(Long userId);
	// in WithdrawalRepository.java
	@Query("SELECT w FROM Withdrawal w WHERE w.user.id = :userId AND w.amount = 0")
	List<Withdrawal> findSavedAccountsByUserId(@Param("userId") Long userId);

}

package in.sp.Crikbelt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import in.sp.Crikbelt.entity.Deposit;

public interface DepositRepository extends JpaRepository<Deposit, Long> {
	
	List<Deposit> findByUser_Id(Long userId);
	
}


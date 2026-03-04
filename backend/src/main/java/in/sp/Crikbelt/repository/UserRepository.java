package in.sp.Crikbelt.repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import in.sp.Crikbelt.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
	  Optional<User> findByMobileNumber(String mobileNumber);
}


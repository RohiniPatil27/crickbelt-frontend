package in.sp.Crikbelt.dto;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class TransactionDto {

    private String date;       // formatted date string
    private double credit;     // for deposits
    private double debit;      // for withdrawals
    private String remark;     // description like "Deposit - UTR: xxx" or "Withdrawal - Bank"

    // Default constructor
    public TransactionDto() {}

    // Constructor used when creating from entity with LocalDateTime
    public TransactionDto(LocalDateTime date, double credit, double debit, String remark) {
        // Format date to ISO_LOCAL_DATE_TIME (e.g. 2025-07-16T14:25:30)
        this.date = date.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        this.credit = credit;
        this.debit = debit;
        this.remark = remark;
    }

    // Getters and Setters
    public String getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
    }

    public double getCredit() {
        return credit;
    }

    public void setCredit(double credit) {
        this.credit = credit;
    }

    public double getDebit() {
        return debit;
    }

    public void setDebit(double debit) {
        this.debit = debit;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}

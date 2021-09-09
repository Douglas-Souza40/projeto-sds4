package com.devsuerior.dsvendas.repositories;

import com.devsuerior.dsvendas.dto.SaleSuccessDTO;
import com.devsuerior.dsvendas.dto.SaleSumDTO;
import com.devsuerior.dsvendas.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Long> {

    @Query("SELECT new com.devsuerior.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount ))"
            + "FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSumDTO> amountGroupBySeller();

    @Query("SELECT new com.devsuerior.dsvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited ), SUM(obj.deals))"
            + "FROM Sale AS obj GROUP BY obj.seller")
    List<SaleSuccessDTO> successGroupBySeller();
}

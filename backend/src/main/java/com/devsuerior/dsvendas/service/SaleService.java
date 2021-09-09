package com.devsuerior.dsvendas.service;

import com.devsuerior.dsvendas.dto.SaleDTO;
import com.devsuerior.dsvendas.dto.SaleSuccessDTO;
import com.devsuerior.dsvendas.dto.SaleSumDTO;
import com.devsuerior.dsvendas.entities.Sale;
import com.devsuerior.dsvendas.repositories.SaleRepository;
import com.devsuerior.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SaleService {

    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAll(Pageable pageable){
         sellerRepository.findAll();
         Page<Sale> result = saleRepository.findAll(pageable);
         return result.map(x -> new SaleDTO(x));
    }

    @Transactional(readOnly = true)
    public List<SaleSumDTO> amountGroupBySeller(){
        return saleRepository.amountGroupBySeller();
    }

    @Transactional(readOnly = true)
    public List<SaleSuccessDTO> successGroupBySeller(){
        return saleRepository.successGroupBySeller();
    }
}

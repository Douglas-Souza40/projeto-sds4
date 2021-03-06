package com.devsuerior.dsvendas.service;

import com.devsuerior.dsvendas.dto.SellerDTO;
import com.devsuerior.dsvendas.entities.Seller;
import com.devsuerior.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    public List<SellerDTO> findAll(){
         List<Seller> result = sellerRepository.findAll();
         return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
    }
}

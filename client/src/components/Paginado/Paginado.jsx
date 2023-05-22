import React from 'react'
import styles from './Paginado.module.css';

export default function Paginado({countriesPerPage, allCountries, setCurrentPage}){//paginado
    
    const pageNumbers = [];
    for(let i=0; i<=Math.ceil(allCountries/countriesPerPage);i++){
    pageNumbers.push(i+1)}
    const paginado = (pageNumbers) =>{
        setCurrentPage(pageNumbers)
    }
    return(
        <nav>
            
            <ul className={styles.paginado}>
                { pageNumbers &&
                pageNumbers.map(number =>(
                    <li className='number' key={number}>
                        <a href="#" onClick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};
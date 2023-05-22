import React, {useState, useEffect, setQuery} from "react";
import {Link} from "react-router-dom";
import Sellercard from './SellerCard';
import styles from '../Sellercard.css';

 
 function AllSellers () {
    const [data, setData] = useState ([]);
 
    useEffect(() => {
        //Fetch data from the JSON server
        fetch('http://localhost:8080/sellers')
            .then(response => response.json())
            .then(data => setData(data));
    }, 
    []);
    return (
        <div>
            <div>
           <div className="allSellers">
            <main>
                <h2>Sellers List</h2>
                <div className="items-grid">
                    {data.map((item) => (
                        <Sellercard
                        title={item.title}
                        firstname={item.firstname}
                        surname={item.surname}
                        address={item.address}
                        postcode={item.postcode}
                        phone={item.phone}                 
                        />   
                        ))}
                </div>
            </main>
        </div>
            </div>
        </div>
        )
    }
     
    export default AllSellers;
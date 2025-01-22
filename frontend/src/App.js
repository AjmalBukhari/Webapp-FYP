import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('/api/items')
            .then(response => setItems(response.data.items))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Buy and Sell Pre-Owned Goods</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;

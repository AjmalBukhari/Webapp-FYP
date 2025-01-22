import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import CSS

const App = () => {

    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
                <Link to="/contact-us">Contact Us</Link>
            </nav>
            <div className="container">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <h1>Home</h1>
                                <p>Welcome to the Buy and Sell Pre-Owned Goods App!</p>
                                <ul>
                                    {items.length > 0 ? (
                                        items.map((item, index) => <li key={index}>{item}</li>)
                                    ) : (
                                        <p>No items available.</p>
                                    )}
                                </ul>
                            </div>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <div>
                                <h1>About</h1>
                                <p>
                                    This platform allows users to buy and sell pre-owned goods
                                    conveniently. We aim to connect buyers and sellers effortlessly.
                                </p>
                            </div>
                        }
                    />
                    <Route
                        path="/contact-us"
                        element={
                            <div>
                                <h1>Contact Us</h1>
                                <ul>
                                    <li>Email: support@preownedgoods.com</li>
                                    <li>Phone: +1234567890</li>
                                    <li>Address: 123 Market Street, Cityville</li>
                                </ul>
                            </div>
                        }
                    />
                </Routes>
            </div>
            <footer>
                <p>&copy; 2025 Buy and Sell Pre-Owned Goods. All rights reserved.</p>
            </footer>
        </Router>
    );
};

export default App;

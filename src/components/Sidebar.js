import React from 'react';
import './Layout.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>Dashboard</li>
                <li>Inventory</li>
                <li>Order</li>
                <li>Items</li>
                <li>Customers</li>
                <li>Shipping</li>
                <li>Channel</li>
                <li>Integrations</li>
                <li>Account</li>
            </ul>
        </div>
    );
};

export default Sidebar;

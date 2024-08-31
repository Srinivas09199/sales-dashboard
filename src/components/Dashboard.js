import React from 'react';
import SalesChart from './SalesChart';
import PortionChart from './PortionChart';
import './Layout.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-chart">
                <SalesChart />
            </div>
            <div className="dashboard-chart">
                <PortionChart />
            </div>
        </div>
    );
};

export default Dashboard;

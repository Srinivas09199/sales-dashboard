import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PortionChart = () => {
    const data = {
        labels: ['WooCommerce Store', 'Shopify Store'],
        datasets: [
            {
                data: [44.2, 55.8],
                backgroundColor: ['#2cded5', '#fa7e7e'],
                hoverBackgroundColor: ['#2cded5', '#fa7e7e'],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Portion of Sales',
            },
        },
    };

    return (
        <div className="chart-container">
            <Pie data={data} options={options} />
        </div>
    );
};

export default PortionChart;

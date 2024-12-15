import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const HomeCharts = () => {


    // const [monthlyEarnings, setMonthlyEarnings] = useState([]);
    // const [appDownloads, setAppDownloads] = useState([]);

    // useEffect(() => {
    //     // Fetch data from your backend or API here
    //     const fetchChartData = async () => {
    //         try {
    //             const monthlyEarningsResponse = await fetch('/api/monthly-earnings');
    //             const monthlyEarningsData = await monthlyEarningsResponse.json();
    //             setMonthlyEarnings(monthlyEarningsData);

    //             const appDownloadsResponse = await fetch('/api/app-downloads');
    //             const appDownloadsData = await appDownloadsResponse.json();
    //             setAppDownloads(appDownloadsData);
    //         } catch (error) {
    //             console.error('Error fetching chart data:', error);
    //         }
    //     };

    //     fetchChartData();
    // }, []);


    const monthlyEarnings = [1000, 1200, 1500, 1800, 2000, 1700, 2500, 3000, 2800, 2600, 2400, 2200];
    const appDownloads = 65;

    // const barChartData = {
    //     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    //     datasets: [
    //         {
    //             label: 'Monthly Earnings',
    //             data: monthlyEarnings,
    //             backgroundColor: 'rgba(54, 162, 235, 0.5)',
    //             borderColor: 'rgba(54, 162, 235, 1)',
    //             borderWidth: 1,
    //         },
    //     ],
    // };

    // const pieChartData = {
    //     labels: ['Total New Customers', 'Other'],
    //     datasets: [
    //         {
    //             data: [appDownloads, 100 - appDownloads], // Assuming appDownloads is percentage
    //             backgroundColor: ['orange', 'black'],
    //         },
    //     ],
    // };

    const barChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {

                label: 'Monthly Earnings',
                data: monthlyEarnings,
                backgroundColor: '#E5F2FF',
                borderColor: '#E5F2FF',
                borderWidth: 1,
            },
        ],
    };

    const pieChartData = {
        labels: [],
        datasets: [
            {
                data: [appDownloads, 100 - appDownloads, 89], // Assuming appDownloads is percentage
                backgroundColor: ['orange', 'black', '#E5F2FF'],
            },
        ],
    };


    return (
        <section className='homeChart'>
            <div className='homeChart__left'>
                <h2>Overview</h2>
                <p>Monthly Earning</p>
                <Bar data={barChartData} options={{ responsive: true }} />
            </div>

            <div className='homeChart__right'>
                <h2>Mobile App</h2>
                <p>Downloads this month</p>
                <Pie data={pieChartData} options={{ responsive: true, cutout: "60%" }} />
                <div className='homeChart__right__center'>
                    <h1>65%</h1>
                    <p>Total New Customers</p>
                </div>
            </div>

        </section>
    )
}

export default HomeCharts
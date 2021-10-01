import React from "react";
import { Bar } from 'react-chartjs-2';

export const ColumnChart = () => {
    return (
            <Bar 
            data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        label: "# of votes",
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132)',
                            'rgba(54, 162, 235)',
                            'rgba(255, 206, 86)',
                            'rgba(75, 192, 192)',
                            'rgba(153, 102, 255)',
                            'rgba(255, 159, 64)'
                        ],
                    }
                ]
            }}
	        options={{ maintainAspectRatio: false }}/>
    )
}
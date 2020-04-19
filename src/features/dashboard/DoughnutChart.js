import { Doughnut } from 'react-chartjs-2'
import React from 'react'

export default function DoughnutChart(){

    const style={
        padding: '20px',
        width: '500px'
    }

    const data = {
        labels: ['Boredum', 'Distraction', 
        'Interuptions through mobile'],
        datasets: [
        {
            label: 'Distraction Sources',
            data: [3, 5, 6],
            // fill: true,          // Don't fill area under the line
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
        }
        ]
    }

    return(
        <div style={style}>
            <h3>Distraction Sources</h3>
            <Doughnut data={data}/>
        </div>
    )
}

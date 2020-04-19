import { Line } from 'react-chartjs-2'
import React from 'react'

function LineChart(){

    const style = {
        padding: '10px',
        marginTop: '20px',
        width: '440px',
        marginLeft: '60px'
    }

    const data = {
        labels: ['11th April', '12th April', 
        '13th April', '14th April', 
        '15th April', '16th April', 
        '17th April'],
        datasets: [
        {
            label: 'Relative Productivity',
            data: [0, 5, 6, 5, 7, 8, 6, 8, 9, 8, 10],
            fill: false,          // Don't fill area under the line
            borderColor: 'green'  // Line color
        }
        ]
  }

    return(
        <div style={style}>
            <h3>Productivity History</h3>
            <Line data={data}/>
        </div>
    )
}

export default LineChart

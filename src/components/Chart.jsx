import React from 'react'
import {Line } from "react-chartjs-2"
import {Chart as ChartJS,LineElement,CategoryScale,LinearScale,PointElement,Tooltip,Legend} from "chart.js"

ChartJS.register(LineElement,CategoryScale,LinearScale,PointElement,Tooltip,Legend);
function Chart() {
    const data = {
        labels:["Jan","Feb","Mar","Apr","May"],
        datasets:[
            {
                label:"Revenue",
                data:[4000,5200,6100,7500,8000],
                borderColor:"#3b82f6",
                backgroundColor:"rgba(59,130,246,0.2)",
                fill:true,
                tension:0.4,

            },
        ],
    };
    const options = {
        responsive: true,
        plugins:{
            legend:{
                display:false,
            },
        },
    };
  return (
    <Line data={data} options={options}/>
  );
}

export default Chart
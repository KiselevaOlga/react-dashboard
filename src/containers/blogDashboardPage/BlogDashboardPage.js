import {React, useEffect, useState} from 'react';
import {ColumnChart} from "../../components/charts/ColumnChart";
import {PieChart} from "../../components/charts/PieChart";

export const BlogDashboardPage = ()=>{
    const [info, setInfo] = useState([])
    useEffect(()=>{
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid={apiKey}`)
        .then(response => {
            if (!response.ok){
                console.log('OOps')
            }
            
            return response.json()
        })
        .then(jsonResponse => {
            console.log('final',)
            setInfo(jsonResponse.main.temp)
        })
    }, [])
    return (
        <div >
            <div style={{width: "500px"}}>
                <ColumnChart />
            </div>
            <div style={{width: "350px"}}>
                <PieChart />
            </div>
            <div>
                {info}
            </div>
        </div>
    )
}
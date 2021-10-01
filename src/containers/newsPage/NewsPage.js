import {React, useEffect, useState} from 'react';
import {config} from "../../config";

export const NewsPage = ()=>{
    const [info, setInfo] = useState("");
    const [news, setNews] = useState("");
    useEffect(()=>{
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${config.MY_API_WEATHER}`)
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
   
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/everything?q=Apple&from=2021-10-01&sortBy=popularity&apiKey=${config.MY_API_NEWS}`)
        .then(response => {
            if (!response.ok){
                console.log('OOps')
            }
            
            return response.json()
        })
        .then(jsonResponse => {
            console.log('final',jsonResponse)
            setNews(jsonResponse.articles[0].description)
        })
    }, [])
    return (
        <div >
            <div>
                {info}
            </div>
            <div>
                {news}
            </div>
        </div>
    )
}
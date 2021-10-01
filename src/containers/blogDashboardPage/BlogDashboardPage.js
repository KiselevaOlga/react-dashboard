import {React} from 'react';
import {ColumnChart} from "../../components/charts/ColumnChart";
import {PieChart} from "../../components/charts/PieChart";

export const BlogDashboardPage = ()=>{
    return (
        <div >
            <div style={{width: "500px"}}>
                <ColumnChart />
            </div>
            <div style={{width: "350px"}}>
                <PieChart />
            </div>
        </div>
    )
}
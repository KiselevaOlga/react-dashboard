import {React} from 'react';
import './BlogDashboardPage.css';
import {ColumnChart} from "../../components/charts/ColumnChart";
import {PieChart} from "../../components/charts/PieChart";
import {SmallInfoBox} from "../../components/smallComponents/Boxes";

export const BlogDashboardPage = ()=>{
    return (
        <section>
            <article className="cards-holder">
                <SmallInfoBox>
                    <p>Posts</p>
                </SmallInfoBox>
                <SmallInfoBox>
                    <p>Pages</p>
                </SmallInfoBox>
                <SmallInfoBox>
                    <p>Comments</p>
                </SmallInfoBox>
                <SmallInfoBox>
                    <p>Subscribers</p>
                </SmallInfoBox>
            </article>
            <article className="charts-holder">
                <div style={{width: "45%", backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <ColumnChart />
                </div>
                <div style={{width: "45%", backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <PieChart />
                </div>
            </article>
        </section>
    )
}
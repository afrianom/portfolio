import React from "react";
import './portfolio.css'
// import calculator from "../../assets/work-calculator.jpg"
// import mokepon from "../../assets/work-mokepon.jpg"
// import mundologia from "../../assets/work-mundologia.jpg"
// import clubCampestre from "../../assets/work-club-campestre.jpg"
// import miniWebsite from '../../assets/work-mini-website.jpg';
// import percentages from '../../assets/work-percentages.jpg';
// import todoList from '../../assets/work-todo-list.jpg';
import portfolioInfo from "./portfolio_data";

const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio">
            <h1>Portfolio</h1>
            <div className="container-works">
                {portfolioInfo.map((work, index)=> {
                    return <div className="grid-elements">
                                <a href={work.w_url} target="_blank"><img key={index} src={work.w_img} width='100%'/></a>
                                <p>{work.w_name}</p>
                            </div>
                })}
                {/* <div className="grid-elements item-1"><img src={mundologia} alt="" width='250'/></div>
                <div className="grid-elements item-2"><img src={mokepon} alt="" width='250'/></div>
                <div className="grid-elements item-3"><img src={calculator} alt="" width='250'/></div>
                <div className="grid-elements item-4"><img src={clubCampestre} alt="" width='250'/></div>
                <div className="grid-elements item-4"><img src={miniWebsite} alt="" width='250'/></div>
                <div className="grid-elements item-4"><img src={percentages} alt="" width='250'/></div>
                <div className="grid-elements item-4"><img src={todoList} alt="" width='250'/></div> */}
            </div>
        </div>
    )
}

export default Portfolio
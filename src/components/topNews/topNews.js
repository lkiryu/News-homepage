import React from "react";
import retroPcs from '../../images/image-retro-pcs.jpg'
import topLaptops from '../../images/image-top-laptops.jpg'
import gamingGrowth from '../../images/image-gaming-growth.jpg'

const TopNews = () => {
    return (
        <div className="top-news">
            <div className="news">
                <img src={retroPcs} alt="retro pcs"></img>
                <div className="info">
                    <p className="top">01</p>
                    <a href="/" target="_blank">Reviving Retro PCs</a>
                    <p className="description">What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
            <div className="news">
                <img src={topLaptops} alt="top laptops"></img>
                <div className="info">
                    <p className="top">02</p>
                    <a href="/" target="_blank">Top 10 Laptops of 2022</a>
                    <p className="description">Our best picks for various needs and budgets.</p>
                </div>
            </div>
            <div className="news">
                <img src={gamingGrowth} alt="gaming growth"></img>
                <div className="info">
                    <p className="top">03</p>
                    <a href="/" target="_blank">The Growth of Gaming</a>
                    <p className="description">How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    )
}

export default TopNews
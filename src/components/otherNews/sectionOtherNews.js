import React from "react";

const OtherNews = () => {
    return(
        <div className="other-news">
            <h2 className="title">New</h2>
            <div className="news">
                <a href="/" target="_blank">Hydrogen VS Electric Cars</a>
                <p className="description">Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div className="news">
                <a href="/" target="_blank">The Downsides of AI Artistry</a>
                <p className="description">What are the possible adverse effects of on-demand AI image generation?</p>
            </div>
            <div className="news">
                <a href="/" target="_blank">Is VC Funding Drying Up?</a>
                <p className="description">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
        </div>
    )
}

export default OtherNews
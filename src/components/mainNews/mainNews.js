import React from "react";
import mainNewsImageDesktop from '../../images/image-web-3-desktop.jpg'
import mainNewsImageMobile from '../../images/image-web-3-mobile.jpg'

import './mainNews.css'

const MainNews = () => {
    return (
        <div className="main-news">
            <picture>
                <source srcSet={mainNewsImageDesktop} media="(min-width:800px)"></source>
                <img src={mainNewsImageMobile} alt="illustration main news"></img>
            </picture>
            <div className="info">
                <h2 className="title">The Bright Future of Web 3.0?</h2>
                <div>
                    <p className="description">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?</p>
                    <a href="/" target="_blank">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default MainNews
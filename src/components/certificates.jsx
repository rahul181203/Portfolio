import React from "react";
import web from '../image/Web development.jpg'
import ACM from '../image/ACM.png'
import DevFest from '../image/devfest_.jpg'

function Certificates(){
    return (
        <div className='container' id="certificates">
            <h1 className='title' style={{textAlign:"center"}}>My Certificates</h1>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={web} className="d-block w-100" alt="web"/>
            </div>
            <div className="carousel-item">
            <img src={ACM} className="d-block w-100" alt="acm"/>
            </div>
            <div className="carousel-item">
            <img src={DevFest} className="d-block w-100" alt="devfest"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
            <span className="carousel-control-prev-icon" style={{backgroundColor:"black"}} aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
            <span className="carousel-control-next-icon" style={{backgroundColor:"black"}} aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </button>
        </div>
        </div>
    )
}

export default Certificates
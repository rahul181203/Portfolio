import React from "react";
import img from '../image/about.png'

function about(){
    return (
        <div id="about">
            <div className="row">
                <div className='col-sm-12 col-md-12 col-lg-6'>
                    <img className='about-img' src={img} alt="about img" />
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6'>
                    <div className='box'>
                        <h1 className='title'>Let Me Introduce About Myself</h1>
                        <h5 className='about-desp'><b>I'M Rahul Sai </b>I am studying B.tech first year in 
                        Vellore Institute of Technology, Andhra Pradesh, India.
                        <br/>I am very Intrested in learning
                        new programming languages and new skills.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
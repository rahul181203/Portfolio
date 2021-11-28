import React from "react";

function home(){
    const d = new Date()
    const time = d.getHours()
    let message;
    if (time >= 0 && time <= 12){
        message = 'Good Morning'
    }else if (time >= 13 && time <= 17){
        message = 'Good Afternoon'
    }else{
        message = 'Good Evening'
    }
    return (
        <div className="container" id='home'>
            <div className="row">
                <div className='col-sm-12 col-lg-6'>
                    <h3 className='title-msg'>Hey, {message}</h3>
                    <h1 className='title-name'>I'M RAHUL SAI</h1>
                    <h4>a Programmer</h4>
                    <a href='#about' className='btn btn-outline-dark about-link'>About me</a>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <img className='home' src='https://st3.depositphotos.com/4216129/14148/v/600/depositphotos_141480456-stock-illustration-boy-programmer-coding-kid-doing.jpg' alt="Home pic" />
                </div>
            </div>
        </div>
    )
}

export default home
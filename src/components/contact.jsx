import React from "react";

function contact(){
    return (
        <div id="contact">
            <h1 className='title' style={{textAlign:"center"}}>Get In Touch</h1>
            <div className='container shadow-lg form'>
                <div>
                    <form action="mailto:rahulkanakam123@gmail.com" method="post">
                        <div className='form-group'>
                            <label htmlFor='name'>Name:</label>
                            <input type="text" className='form-control' name="name" placeholder='Your name' id="name" />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email:</label>
                            <input type="email" className='form-control' name='email' id='email' placeholder='Your Email' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="msg">Message:</label>
                            <textarea className='form-control' name="msg" id="msg" placeholder='Your Message' cols="10" rows="5"></textarea>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-success' type="submit">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default contact
import React from 'react'

function footer(){
    const d = new Date()
    const year = d.getUTCFullYear()
    return (
        <footer style={{backgroundColor:"rgb(135,167,166,0.97)"}}>
            <div className="container">
            <div className="row" style={{padding:"50px"}}>
                <div className="col-lg-8 col-md-10 mx-auto">
                <ul className="list-inline text-center">
                    <li className="list-inline-item">
                    <a href="https://twitter.com/RahulSa03005228" target="blank">
                        <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a href="https://www.facebook.com/profile.php?id=100009484953326" target="blank">
                        <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a href="https://www.instagram.com/kanakam_rahul_sai/" target="blank">
                        <span className="fa-stack fa-lg">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-instagram fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    </li>
                </ul>
                <p className="copyright" style={{color:"white"}}>Copyright &copy; Rahul Sai {year}</p>
                </div>
            </div>
            </div>
        </footer>
    )
}

export default footer
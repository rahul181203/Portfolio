import React from "react";
import Blog from '../image/blog.png'
import todolist from '../image/todolist.png'
import friendlist from '../image/friendlist.png'

function Projects(){
    return (
        <div className='container' id="projects">
        <h1 className="project-title" style={{textAlign:"center"}}>My Projects</h1>
        <div className='row'>
            <div className="card-deck">
                <div className="card col-lg-4 col-md-6 col-sm-12">
                    <img src={friendlist} className="card-img-top" alt="friendlist"/>
                    <div className="card-body">
                    <h5 className="card-title">Join Friend List</h5>
                    <p className="card-text">This is my first project in web development with javascript.</p>
                    <p className="card-text">This is a simple project as who fills the form will added to database.</p>
                    <p className='card-text'><a className="btn btn-outline-info" style={{marginTop:"45px"}} href="https://join-friend-list.herokuapp.com/" target="blank">project</a></p>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-6 col-sm-12">
                    <img src={todolist} className="card-img-top" alt="todo"/>
                    <div className="card-body">
                    <h5 className="card-title">To Do List</h5>
                    <p className="card-text">This project is also a website with javascript.</p>
                    <p className="card-text">This project consists todo list. It can recieve many lists and when we add any extra 
                    route the todo list title will be that name and when we add any new item will be added to that new route todolist</p>
                    <p className='card-text'><a className="btn btn-outline-info" href="https://to-do-list-1812.herokuapp.com/" target="blank">project</a></p>
                    </div>
                </div>
                <div className="card col-lg-4 col-md-6 col-sm-12">
                    <img src={Blog} className="card-img-top" alt="Blog"/>
                    <div className="card-body">
                    <h5 className="card-title">You'r Own Blog</h5>
                    <p className="card-text">This project is a website in backend with Flask associated with Python.</p>
                    <p className="card-text">This project name is your own blog which means any user can create their own blog and post here
                    and also they can read and comment other user Blogs also. </p>
                    <p className='card-text'><a className="btn btn-outline-info" href="https://yourownblog.herokuapp.com/" target="blank">project</a></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Projects
import React from "react";
import { Link} from "react-router-dom";
import SideBar from "../temps/SideBar";

export default function SinglePost() {

  return (
    <div className="wrapper">
        <div className="singlePost">
          <div className="singlePostWrapper">
            
              <img src="" alt="" className="singlePostimg" />
            <h1 className="singlePostTitle">ffff</h1>
            <div className="singlePostInfo">
              <span className="singlePostAuthor">
                Author:
              <Link to="">           
                <b>Username</b>
              </Link>
              </span>
              <span className="singlePostDate">{new Date.toDateString()}</span>
            </div>
            <p className="singlePostDesc">
              Description
            </p>
          </div>
        </div>
        <div className="side-bar">
              <SideBar />
        </div>
    </div>
  );
}

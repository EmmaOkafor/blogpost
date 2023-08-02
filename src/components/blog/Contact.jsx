import React from 'react';
import Header from "../temps/Header";
import Footer from "../temps/Footer";

function Contact(){
  return(
    <div>
      <Header />
        <div className="wrapper contact row">
            <form action="" method="post">
            <h5><strong>Contact Us</strong></h5>
            <div className="">              
              <div className="col-sm-12">
                <input class="form-control" type="text" name="username" value="" placeholder="Enter username" />
                <input class="form-control" type="email" name="username" value="" placeholder="Enter Email" />
                <textarea rows="5" col="20" className="form-control" placeholder="Compose your message" />
                
              </div>
            </div>
            <input type="submit" className="btn" name="Send" value="SEND MESSAGE" />
            </form>
        </div>
      <Footer />

    </div>
  )

}

export default Contact;

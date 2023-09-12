import React from 'react';

function Contact(){
  return(
    <div>
      <div className="wrapper contact row">
        <div className="col-sm-6">
            <form action="" method="post">
            <h5><strong>Contact Us</strong></h5>
            <div className="">                            
                <input class="form-control" type="text" name="username" value="" placeholder="Enter username" />
                <input class="form-control" type="email" name="username" value="" placeholder="Enter Email" />
                <textarea rows="5" col="20" className="form-control" placeholder="Compose your message" />   
            </div>
            <input type="submit" className="btn btn-primary" name="Send" value="SEND MESSAGE" />
            </form>
        </div>
      </div>

    </div>
  )

}

export default Contact;

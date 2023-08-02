import React from 'react';
import Header from '../temps/Header';
import Footer from '../temps/Footer';

function Register() {
  return (
    <div>
        <Header />
          <div className='wrapper register row '>
          <form class="" action="" method="post">
          <h5><strong>SIGNUP</strong></h5>
          <div class="">
            <div className="col-sm-12">
              <input class="form-control" type="text" name="username" value="" placeholder="Username" />
              <input class="form-control" type="text" name="email" value="" placeholder="Email" />
              <input class="form-control" type="password" name="pass" value="" placeholder="password" />
              <input class="form-control" type="password" name="conpass" value="" placeholder="confirm password" />
            </div>
          </div>
          <input type="submit" class="btn btn-bdy hover-grad" name="" value="SIGNUP" />
        </form>
        </div>
        <Footer />
    </div>
  )
}

export default Register
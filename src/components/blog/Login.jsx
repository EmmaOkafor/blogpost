import React from 'react'
import Header from '../temps/Header';
import Footer from '../temps/Footer';
function Login() {
  return (
    <div>
        <Header />
        <div className='wrapper login row'>
              <div className="col-sm-12">
                <form action="" method="post">
                <h5><strong>LOGIN</strong></h5>               
                  <input class="form-control" type="text" name="username" value="" placeholder="Enter username" />
                  <input class="form-control" type="password" name="password" value="" placeholder="Enter password" />
                  <input type="submit" className="btn btn-sld" name="login" value="LOGIN" />
                </form>
              </div>
        </div>
        <Footer />
    </div>
  )
}

export default Login
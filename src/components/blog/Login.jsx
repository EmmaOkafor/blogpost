import React from 'react'

function Login() {
  return (
    <div>
        <div className='wrapper login row margin-bottom-50'>
              <div className="col-sm-12">
                <form action="" method="post">
                <h5><strong>LOGIN</strong></h5>               
                  <input class="form-control" type="text" name="username" value="" placeholder="Enter username" />
                  <input class="form-control" type="password" name="password" value="" placeholder="Enter password" />
                  <input type="submit" className="btn btn-primary" name="login" value="LOGIN" />
                </form>
              </div>
        </div>
        <br /><br />
    </div>
  )
}

export default Login
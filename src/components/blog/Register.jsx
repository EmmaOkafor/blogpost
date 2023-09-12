import React from 'react';

function Register() {
  return (
    <div>
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
          <input type="submit" class="btn btn-primary" name="" value="SIGNUP" />
        </form>
        </div>
    </div>
  )
}

export default Register
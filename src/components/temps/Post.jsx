import React from 'react'

export default function Post(props) {
  return (
    <div>
        <div className='home-post '>
            <img src={props.img} className='' alt='profile' /> 
            <p>Tech</p>
            <h4 class="center padding-30">{props.title}</h4>
            <p>21-07-2023</p>
            <p class="justify">{props.content}</p> 
          </div>
    </div>
  )
}


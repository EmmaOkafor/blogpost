import React from 'react';
import SideBar from '../temps/SideBar';
import Post from '../temps/Post';

export default function Home() {
  return (
    <>
      <div className='row margin-top-30'>
        <div className='col-md-4'  >
          <Post 
            img="/images/bg.jpg"
            title="DEVELOP THE HABIT"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
                Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quam cumque exercitationem ducimus rem repudiandae officia 
                quas quia, praesentium doloremque molestias voluptates odit nulla aperiam. Expedita molestiae earum harum quaerat!"
          />
        </div>

        <div className='col-md-4 ' >
          <Post 
            img="/images/pic.jpg"
            title="BECOME THE BEST"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
                Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quam cumque exercitationem ducimus rem repudiandae officia 
                quas quia, praesentium doloremque molestias voluptates odit nulla aperiam. Expedita molestiae earum harum quaerat!"

          />
        </div>
        <div className='col-md-4 ' >
          <SideBar />
        </div>

      </div>

    </>
  )
}

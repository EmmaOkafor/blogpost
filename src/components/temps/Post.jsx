import React from 'react';

export default function Post(props) {
  // Generate the complete image path
  const imagePath = `${process.env.PUBLIC_URL}/images/${props.img}`;

  return (
    <div>
      <div className='home-post'>
        <img src={imagePath} className='' alt='profile' />
        <p className='padding-top-20'>{props.catName}</p>
        <h4 className="center padding-10">{props.title}</h4>
        <p>{props.postDate}</p>
        <p className="justify">{props.content}</p>
      </div>
    </div>
  );
}

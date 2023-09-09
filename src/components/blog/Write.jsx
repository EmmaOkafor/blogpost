import Post from "../temps/Post";
const today = new Date().toLocaleDateString();
function CreateArea(props) {
    
  return (
    <div>
      <div className="wrapper">
        <div className="row width-80 write">
          <div className="col-12">
              <Post 
                img="./images/bg.jpg"
                catName="Music"
                title="DEVELOP THE HABIT"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur, magni distinctio velit eius earum pariatur vero. 
                          Dolores ducimus consectetur quos et sapiente nobis voluptatum eum. Error nobis possimus perspiciatis."
                postDate={today}
              />
          </div>
          <div className="col-md-12">
          <form className="create-note">
        
        <div>
            <input type="file" value=""/>
            <input type="text" value=""/>
            <input type="text" value=""/>
            <textarea  cols={30} rows={5}></textarea>           
            <button type="submit">Upload</button>      
        </div>
    </form>
          </div>
        </div>
    </div>          
    </div>
  );
}

export default CreateArea;

import Banner from "../temps/Banner";

function CreateArea(props) {
    
  return (
    <div>
      <div className="wrapper">
        <div className="row write">
        <Banner img="images/pic.jpg" />
          <div className="col-md-6">
          <form className="create-note">
        
          <div>
              <input className="form-control" type="file" />
              <input className="form-control" type="text" placeholder="Title"/>
              <textarea className="form-control" cols={30} rows={5} placeholder="Content"></textarea>           
              <button className="btn btn-primary" type="submit">Upload</button>      
          </div>
    </form>
          </div>
        </div>
    </div>          
    </div>
  );
}

export default CreateArea;

import React from 'react';
import './AddForm.scss';


const AddForm =()=> {
    return (
      <form className="add-form">
              <div className="form-group">
                <div className="add-form_row">
                  <h4>
                    <label for="title">Title</label>
                  </h4>
                  <input
                    type="email"
                    className="form-control"
                    id="title"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="add-form_row">
                  <h4>
                    <label for="image">Image URL</label>
                  </h4>
                  <input
                    type="email"
                    className="form-control"
                    id="image"
                    placeholder="Enter image URL"
                  />
                </div>
                <div className="add-form_row">
                  <h4>
                    <label for="discription">Discription</label>
                  </h4>
                  <textarea rows="10" className="form-control" id="discription" placeholder="Enter discription" />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
    );
  }
  
  export default AddForm;
  
import React from 'react';
import { HeaderBlock, PostItem } from './components'
function App() {
  return (
    <div className="App">
      <HeaderBlock
        title="Заголовок сайта"
        discription="Описание"
        imageUrl="https://images.unsplash.com/photo-1590615216008-8921f03835d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
      />
      <div className="container">
        <div className="content">
          <button type="submit" className="btn btn-primary">
            Add Post
          </button>
          <div className="content">
            {/*<div className="post-items">
              <PostItem _id="1" title = "Загловок статьи" createdAt = {'' + new Date()} />
            </div>*/}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
{/* Это коментарий https://unsplash.com*/ } 
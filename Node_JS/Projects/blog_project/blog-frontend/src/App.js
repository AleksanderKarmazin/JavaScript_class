import React from 'react';
import { HeaderBlock } from './components'
function App() {
  return (
    <div className="App">
      <h1>Helow world!</h1>
      <HeaderBlock
        title="Заголовок сайта"
        discription="Описание"
        imageUrl="https://images.unsplash.com/photo-1590615216008-8921f03835d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
      />
      <div className="container">
        <div className="content">
          <button type="button" className="btn btn-primary">
            Add Post
          </button>
          <div className="content">
            <div className="post-items">
              <div className="post-ite">
                <a href="#"><h2>Post title</h2>
                </a>
                <p><i>Post on November 2, 2018</i>
                  <a href="#">Remove</a>
                  <a href="#">Edit</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
{/* Это коментарий https://unsplash.com*/ } 
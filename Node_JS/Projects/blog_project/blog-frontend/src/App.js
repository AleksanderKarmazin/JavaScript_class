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
            <div className="content5">
              <div className="content5">
                <div className="content5">
                </div>
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
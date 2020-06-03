import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import { HeaderBlock, PostItem, AddForm } from './components'
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
          {/*<button type="submit" className="btn btn-primary">
            Add Post
          </button>*/}
          <div className="content">
            <Router>
              <div className="post-items">
              <PostItem _id="1" title = "Загловок статьи" createdAt = {'' + new Date()} />
              </div>
              <div>
                <Switch>
                  {/*<Route path="/" component={PostsList} />*/}
                  {/*<Route path="/post/:id" component={FullPost} />*/}
                  {/*<Route path="/not-found" component={NotFound} />*/}
                </Switch>  
              </div>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
{/* Это коментарий https://unsplash.com*/ } 
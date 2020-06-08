import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import { HeaderBlock, PostsList, FullPost } from './components'
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
              <div>
                <Switch>
                  
                  <Route path="/"
                  exact 
                  component={() => (
                    
                   
                   <PostsList  posts = {[
                     {
                        _id:'1',
                        title:'Первая статья',
                        createdAt: ''+ new Date()
                     },
                     {
                        _id:'2',
                        title:'Вторая статья',
                        createdAt: ''+ new Date()
                     },
                     {
                        _id:'3',
                        title:'Третья статья',
                        createdAt: ''+ new Date()
                     },
                     ]} />
                   )}
                  />
                  <Route path="/post/:id" component={FullPost} />
                  
                  {/* <Route path="/post/:id" component={()=>(
                    <FullPost title="Заголовок статьи" createdAt={" "+ new Date()}/>
                  )} /> */}
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
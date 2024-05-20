import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { PostsList } from './features/posts/postsList'
import { AddForm } from './features/posts/AddPostForm'
import { Navbar } from './app/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <section>
                <React.Fragment>
                  <AddForm />
                  <PostsList />
                </React.Fragment>
              </section>
            )}
          />
          <Redirect to="/" />
        </Switch>

      </div>
    </Router>
  )
}

export default App

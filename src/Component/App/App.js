import React from 'react'
import './app.css'
import { HashRouter as Router, Route , Switch }
from 'react-router-dom'
import Home from '../Home/Home'
import ShowTopic from '../ShowTopic/ShowTopic'
import UserInfo from '../UserInfo/UserInfo'
import Header from '../Header/Header'
// import Footer from '../Footer/Footer'
import Create from '../Create/Create'
class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
        <Header />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/topic/create' component={Create} />
            <Route path='/topic/:id'  component={ShowTopic} />
            <Route path='/user/:loginname' component={UserInfo} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

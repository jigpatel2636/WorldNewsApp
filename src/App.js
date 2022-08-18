import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress:0
  }
  setProgress = () => {
    this.setState({progress : this.progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            height={10}
            progress={this.state.progress} 
          />
          <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" category="general"/>}> </Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" category="business"/>}> </Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" category="entertainment"/>}> </Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" category="general"/>}> </Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" category="health"/>}> </Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" category="science"/>}> </Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" category="sports"/>}> </Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" category="technology"/>}> </Route>
      </Routes>
        </Router>
      </div>
    )
  }
}


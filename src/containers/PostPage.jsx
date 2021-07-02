import React, { Component } from 'react'
import Search from '../components/controls/Search';
import Results from '../components/display/Results';
import { Request } from '../services/request-utils';

export default class PostPage extends Component {
    state = {
        url: '',
        method: 'GET',
        req:'',
        results: [],
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const results = await Request(this.state.method, this.state.url, this.state.req);
        this.setState({results})

 }
  handleUrlChange = async (e) => {
      this.setState({url: e.target.value})

 }
  handleMethod = async (e) => {
       this.setState({method: e.target.value})

 }
  handleJson = async (e) => {
       this.setState({req: e.target.value})

 }

    render() {
        const {url, method, req, results} =this.state;
        return (
            <div>
                <header>
                    <h1>Post-MAclone</h1>
                </header>
                <Search
                handleSubmit={this.handleSubmit} 
                handleUrlChange={this.handleUrlChange}
                handleMethod={this.handleMethod}
                handleJson={this.handleJson}
                url={url} 
                radioInput={method} 
                json={req}
                />
                <Results results={results}/>
                
            </div>
        )
    }
}


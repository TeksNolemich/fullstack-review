import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      method: "POST",
      url: "http://localhost:1128/repos",
      data: JSON.stringify({username: term}),
      contentType: "application/json",
      success: function(data) {
        console.log(data, ' sucessful post request to home server');
      },
      error: function(data) {
        console.log(data);
      }
    })
  }

  componentDidMount() {
    const context = this;
    $.ajax({
      method: "GET",
      url: "http://localhost:1128/repos",
      success: function(data) {
        console.log(data, ' sucessful post request to home server');
        context.setState({repos: data});

      },
      error: function(data) {
        console.log(data);
      }
    })
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <br></br>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
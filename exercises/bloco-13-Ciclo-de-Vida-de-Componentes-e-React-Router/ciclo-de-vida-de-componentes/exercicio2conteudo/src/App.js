import React from 'react';
import './App.css';
const fetch = require('node-fetch');
const api = ' https://api.randomuser.me/';

class App extends React.Component {
  constructor() {
    super();

    this.fetchApi = this.fetchApi.bind(this);
    this.getApi = this.getApi.bind(this);

    this.state = {
      loading: true,
      apiResults: '',
    };
  }

  componentDidMount() {
    this.fetchApi(api);
  }

  shouldComponentUpdate(_nextProps, {apiResults}) {
    return apiResults.dob.age <= 50;
  }

  fetchApi(url) {
    return new Promise((resolve, reject) => {
      if (url === api) {
        fetch(url).then((r) => r.json()).then((r) => {
          this.getApi(r);
          resolve(r.results);
        });
      } else {
        reject(new Error('api não encontrada'));
      }
    })
  }

  getApi(api) {
    const apiResponse = api.results[0];
    this.setState({ loading: false, apiResults: apiResponse });
  }

  render() {
    const { loading, apiResults } = this.state;
    if (loading === true) return <p>loading...</p>;
    const { name, email, dob } = apiResults;
    const { title, first, last } = name;
    const { age } = dob;
    return (
      <div>
        <p>{ `Nome: ${title} ${first} ${last}` }</p>
        <p>{ `Email: ${email}` }</p>
        <p>{ `Idade: ${age}` }</p>
      </div>
    );
  }
}

export default App;

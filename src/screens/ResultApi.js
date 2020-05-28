import React from 'react';

import axios from 'axios';

export default class ResultApi extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=20`)
      .then(res => {
        const persons = res.data.results;
        console.log("res", res.data.results)
        this.setState({ persons });
      })
  }

  render() {
      console.log(this.state.persons)
    return (
      <ul>
        {this.state.persons.map(el=> <li>{el.name.title}</li>)}
      </ul>
    )
  }
}
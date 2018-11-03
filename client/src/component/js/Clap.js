import React from 'react';
import ClapComponent from 'react-clap';

class Clap extends React.Component {
  constructor(props) {
      super(props)
      this.state = {applose: this.props.applose}
      this.MoreApplose = this.MoreApplose.bind(this);
    }

  componentDidMount() {
    console.log()
    fetch("https://api.mlab.com/api/1/databases/projects/collections/projects?apiKey=fF9iSxFIZA8zMgnrw9eNdbLGakDxQx1V")
    .then(res => res.json())
    .then(data => {
      console.log(data[0].apploseNb);
     
      this.setState({ applose: 0 })
    });
    }

  MoreApplose() {
    var newApplose = this.state.applose + 1
    this.setState({applose: newApplose})
    fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

    setInterval(function() {
      fetch('/clicks', {method: 'GET'})
      .then(function(response) {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
      })
      .then(function(data) {
        document.getElementById('counter').innerHTML = `Button was clicked ${data.length} times`;
      })
      .catch(function(error) {
        console.log(error);
      });
    }, 1000);
  }

    render() {
    return (
      <div className="btnClap" >
        <p> {this.state.applose} </p>
        <button onClick={this.MoreApplose}>
        <img src={require("../../img/y.png")} /> 
      </button>
      </div>
    );
  }
}

export default Clap;
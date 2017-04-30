import React, { Component } from 'react';
import axios from 'axios';




class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      campers: 'recent',
      list: []
    };
  }

componentDidMount() {
    let temp = [];
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/'+this.state.campers)
      .then(result=> {
        result.data.forEach((camper) => {
          temp.unshift(camper);
        });
        this.setState({ list: temp})
        this.setState(function() {
          return {
            loading: false
          }
        });
      })
    }


  render() {
    var loading = this.state.loading;
    if(loading) {
      return(
        <p>Loading</p>
      )
    }
    return (
      <div>
        <table>
        <tbody>
        <tr>
        <td>Navn</td>
        <td>Picture</td>
        <td>Last 30 days</td>
        <td>All Time</td>
        </tr>
          {this.state.list.map(camper =>
            <tr key={camper.username}>
            <td>{camper.username}</td>
            <td>{camper.img}</td>
            <td>{camper.recent}</td>
            <td>{camper.alltime}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}


export default Leaderboard;

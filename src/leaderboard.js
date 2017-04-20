import React, { Component } from 'react';
import axios from 'axios';




class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

componentDidMount() {
    let list = 'recent';
    let temp = [];
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/'+list)
      .then(result=> {
        result.data.forEach((camper) => {
          temp.unshift(camper);
          this.setState({ list: temp})
          console.log(temp);
        });
      })
    }


  render() {
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

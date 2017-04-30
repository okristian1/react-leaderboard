import React, { Component } from 'react';
import axios from 'axios';


class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      campers: false,
      list: []
    };
  }


updateCampers(campers) {
  let list;
  let temp = [];
  let id;
  if(campers)
    list='recent';
    else
    list = 'alltime';

  axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/'+list)
    .then(result=> {
      result.data.forEach((camper) => {
        temp.unshift(camper);
      });
      id = temp.length;
      temp.map(camper => {
        camper['id']=id;
        id--;
        return null;
      });
      this.setState({ list: temp.reverse()})
      this.setState(function() {
        return {
          loading: false
        }
      });
    })
  }

componentDidMount() {
  this.updateCampers(this.state.campers);
}

handleClick = () => {
  this.setState(prevState => ({
    campers: !prevState.campers
  }));
  this.updateCampers(this.state.campers)
  console.log(this.state.campers);
  console.log('clicked');
}



  render() {
    var loading = this.state.loading;
    if(loading) {
      return(
        <p>Loading</p>
      )
    }
    return (
      <div className="column">
      <button onClick={this.handleClick}>
      Switch list </button>
        <table>
        <tbody>
        <tr>
        <td>id</td>
        <td>Username</td>
        <td>Avatar</td>
        <td>Last 30 days</td>
        <td>All Time</td>
        </tr>
          {this.state.list.map(camper =>
            <tr key={camper.username}>
            <td className="id">{camper.id}</td>
            <td className="user">{camper.username}</td>
            <td>
              <img
                className="avatar"
                src={camper.img}
                alt={'Avatar for '+camper.username}
                />
              </td>
            <td className="score">{camper.recent}</td>
            <td className="score">{camper.alltime}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Leaderboard;

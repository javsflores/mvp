import React from 'react';
import $ from 'jquery';
import Posts from './Posts.jsx';
import styled from 'styled-components';

const Feed = styled.div`
  color: white;
  background-color: #061A40;
  max-width: 600px;
  height: 889px;
  margin: 0 auto;
  font-family: sans-serif;
`;

const Header = styled.div`
  color: #08a045;
  font-family: Comic Sans MS;
  font-size: 40px;
  max-width: 200px;
  margin: 0 auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Nevada",
      feed: [],
      newLocation: ""
    };
  }

  componentDidMount() {
    $.get('/api/nearByRestaurants', {
      location: this.state.location
    })
    .done((results) => {
      console.log('this is response:', results.rows)
      this.setState({feed: results.rows});
    });
  }

  handleChange(event) {
    this.setState({newLocation: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('it was submitted');
    $.get('/api/nearByRestaurants', {
      location: this.state.newLocation
    })
    .done((results) => {
      console.log('this is response:', results.rows)
      this.setState({feed: results.rows});
    });
  }

  render () {
    if (this.state.feed.length === 0) {
      let emptyFeed = [{
          postcomments: 0,
          postdate: "",
          postid: 0,
          postlikes: 0,
          postmessage: "No Posts",
          postpicture: "https://www.dailydot.com/wp-content/uploads/e52/31/87610fa1a0ae891d.png",
          restaurantid: 0,
          restaurantlocation: "No Locations",
          restaurantname: "No Restaurants",
          userid: 0,
          userimg: "https://tanzolymp.com/images/default-non-user-no-photo-1.jpg",
          username: "No Users"
        }]
      return (
        <Feed>
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
        <label>
          Location:
          <input type="text" value={this.state.newLocation} onChange={(event) => {this.handleChange(event)}} name={'Location'}/>
        </label>
        <input type="submit" value="Submit" />
        </form>
        <Header>Foodstagram</Header>
        <Posts feed={emptyFeed}/>
      </Feed>
      );
    }
    return (
      <Feed>
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
      <label>
          Location:
          <input type="text" value={this.state.newLocation} onChange={(event) => {this.handleChange(event)}} name={'Location'}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
        <Header>Foodstagram</Header>
        <Posts feed={this.state.feed}/>
      </Feed>

    );
  }
}

export default App;

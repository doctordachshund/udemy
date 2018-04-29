import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";
import Profile from "./Profile";
import Gallery from "./Gallery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      artist: null,
      tracks: []
    };
  }

  search() {
    console.log("this.state", this.state);
    const BASE_URL = "https://api.spotify.com/v1/search?";
    let FETCH_URL = BASE_URL + "q=" + this.state.query + "&type=artist&limit=1";
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
    var accessToken =
      "BQD_KdNN-7G5293UtkYYu03WKlpNFeBYulJkCwCWhfp5CioXMsW6Ck4PS_FnMNi7-X52VfNrWQetXd9ZK7AhhdJKhA0B8TBAnoy9HC14FnMiRRz9MqOzADHbeGMnnkM1HQTxixXfQwmtiVqLutkG0PzAl_CtvcTTW7kleg&refresh_token=AQAlZ9VIdldiQ8kPyHQW9KjDDSatsSbI523LokOAZosd_GE2SwDAvLnLuCBSZznzB0ZLiPsUkkWKD3gUNr0tAytBVEfKNw-j_H20HRH7Y9WpI-hW_Dd7RB3twxoyc1C5DyM";
    console.log("FETCH_URL", FETCH_URL);
    fetch(FETCH_URL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken
      },
      mode: "cors",
      cache: "default"
    })
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];
        console.log("artist", artist);
        this.setState({ artist });

        FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
        fetch(FETCH_URL, {
          method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
          console.log('artist\'s top tracks:', json);
          const {tracks} = json; //const { tracks } = json;
          this.setState({tracks})
        })
      });
  }
  //const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              value={this.state.query}
              onChange={event => {
                this.setState({ query: event.target.value });
              }}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {this.state.artist !== null ? 
          <div>
            <Profile artist={this.state.artist} />
            <Gallery
              tracks={this.state.tracks}
            />
          </div>
        : <div />
        }
      </div>
    );
  }
}

export default App;

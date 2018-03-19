import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {

  renderSongs() {
    return this.props.data.songs.map( ({title, id}) => {
      return (
        <li key={id} className="collection-item">
        {title}
        </li>
        )
    })
  }

  render () {
    if (this.props.data.loading) {
      return <div>loading...</div>
    }

  	return (
    <ul className="collection">
      {this.renderSongs()}
    </ul>
    )
  }
}

const query = gql`
{
  songs {
    title
    id
  }
}
`;




export default graphql(query)(SongList);
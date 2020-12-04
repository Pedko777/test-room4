import React, { lazy, Suspense, Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import styles from './TrackDetailsPage.module.scss';
import routes from '../../routes';
import api from '../../services/api';
import TrackDetails from '../../components/TrackDetails/TrackDetails';

const noImgUrl =
  'http://www.quickmeme.com/img/a8/a8022006b463b5ed9be5a62f1bdbac43b4f3dbd5c6b3bb44707fe5f5e26635b0.jpg';

class TrackDetailsPage extends Component {
  state = {
    artist: null,
  };

  componentDidMount() {
    api
      .getArtistkDetails(this.props.match.params.artistName)
      .then(res => this.setState({ artist: res.data.artist }))
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.artist);
    const { artist } = this.state;
    return (
      <div className={`container`}>
        <TrackDetails artist={artist} />
      </div>
    );
  }
}

export default TrackDetailsPage;

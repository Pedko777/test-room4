import React from 'react';
import styles from './TracksList.module.scss';
import { NavLink, withRouter } from 'react-router-dom';

const noImgUrl =
  'http://www.quickmeme.com/img/a8/a8022006b463b5ed9be5a62f1bdbac43b4f3dbd5c6b3bb44707fe5f5e26635b0.jpg';

const TracksList = ({ tracksList }) => {
  return (
    <ul className={styles.trackListBox}>
      {tracksList.length > 0 &&
        tracksList.map(track => {
          //   console.log(track.image[1]['#text']);
          return (
            <li key={track.name} className={styles.trackBox}>
              <div className={styles.imgWrapper}>
                <img
                  className={styles.moviesImg}
                  src={
                    track.image.length > 0
                      ? `${track.image[3]['#text']}`
                      : `${noImgUrl}`
                  }
                  alt="track img"
                  width={120}
                ></img>
              </div>
              <div className={styles.trackInfo}>
                <NavLink
                  className={styles.navLink}
                  to={{
                    pathname: `/${track.artist.name}`,
                  }}
                >
                  <p className={styles.trackArtistName}>{track.artist.name}</p>
                </NavLink>
                <h2 className={styles.trackTitle}>{track.name}</h2>

                <a target="_blank" href={track.url} className={styles.link}>
                  <p className={styles.linkText}>Last fm info</p>
                </a>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default withRouter(TracksList);

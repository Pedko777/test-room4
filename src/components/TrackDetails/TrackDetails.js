import React from 'react';
import moment from 'moment';
import styles from './TrackDetails.module.scss';

const noImgUrl =
  'http://www.quickmeme.com/img/a8/a8022006b463b5ed9be5a62f1bdbac43b4f3dbd5c6b3bb44707fe5f5e26635b0.jpg';

const TrackDetails = ({ artist }) => {
  const published = moment(artist?.bio && artist.bio.published).format(
    'DD MMMM YYYY',
  );
  const bio =
    artist?.bio &&
    artist.bio.summary
      .split(' ')
      .slice(0, artist.bio.summary.split(' ').length - 5)
      .join(' ');
  const link = artist?.bio && artist.bio.summary.split(' ').slice(-5).join(' ');
  console.log(link);
  //   const dd = artist?.bio && artist.bio.summary;
  console.log(artist);
  return (
    <div>
      {artist?.name && <h1 className={styles.artistName}>{artist.name}</h1>}
      <div className={styles.contentBox}>
        <div className={styles.imgWrapper}>
          {artist && (
            <img
              src={
                artist.image.length > 0
                  ? `${artist.image[3]['#text']}`
                  : `${noImgUrl}`
              }
              alt="track img"
              width={100}
            ></img>
          )}
        </div>
        <div>
          <div className={styles.genresBox}>
            <div>
              <h3 className={styles.boxTitle}>Ganres:</h3>
            </div>
            <ul className={styles.genresList}>
              {artist?.tags &&
                artist.tags.tag.map(res => (
                  <li key={res.name}>
                    <p className={styles.genresListItem}>{res.name}</p>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h3>
              Published:{' '}
              {artist?.bio && (
                <span className={styles.publishedDate}>{published}</span>
              )}
            </h3>
          </div>
        </div>
      </div>

      {artist?.bio && <p>{bio}</p>}
      {artist?.url && (
        <a href={artist.url} target="_blank">
          More info
        </a>
      )}
    </div>
  );
};

export default TrackDetails;

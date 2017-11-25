import PropTypes from 'prop-types';
import React from 'react';
import ReactPlayer from 'react-player';

import './Video.styl';

const Video = props => (
  <div className="Video">
    <ReactPlayer
      url={`https://www.youtube.com/embed/${props.youtubeId}?autoplay=0`}
      controls
      height="100%"
      width="100%"
    />
  </div>
);

Video.propTypes = {
  youtubeId: PropTypes.string.isRequired,
};

export default Video;

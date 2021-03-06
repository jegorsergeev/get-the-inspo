import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import appObject from "../index";
import { logserver_url } from "../App";


const Image = ({ index, onClick, onMouseOver, onMouseOut, image, margin, key, alt, id}) => {
  const imgStyle = { margin: margin, display: 'block' };
  const imgPointerStyle = { cursor: 'pointer' };

  const handleClick = event => {
    let data = {
        user_id: appObject.state.user_id,
        object_type: 'image',
        object_id: id,
        action_type: 'click',
        timestamp: + new Date()
    };

    axios.post(logserver_url + 'log/',
              data)
         .then(res => {
            // console.log('Click log have been sent');
         });

    if (onClick)
        onClick(event, { image, index });
  };

  const handleMouseOver = event => {
    let data = {
        user_id: appObject.state.user_id,
        object_type: 'image',
        object_id: id,
        action_type: 'mouseover',
        timestamp: + new Date()
    };

    axios.post(logserver_url + 'log/',
              data)
         .then(res => {
            // console.log('MouseOver log have been sent');
         });

    if (onMouseOver)
        onMouseOver(event, { image, index });
  };

  const handleMouseOut = event => {
    let data = {
        user_id: appObject.state.user_id,
        object_type: 'image',
        object_id: id,
        action_type: 'mouseout',
        timestamp: + new Date()
    };
    axios.post(logserver_url + 'log/',
              data)
         .then(res => {
            // console.log('MouseOut log have been sent');
         });

    if (onMouseOut)
        onMouseOut(event, { image, index });
  };

  return (
    <img
      key={key}
      style={onClick ? { ...imgStyle, ...imgPointerStyle } : imgStyle}
      alt={alt}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...image}
    />
  );
};

export const imagePropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  key: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
});

Image.propTypes = {
  index: PropTypes.number.isRequired,
  margin: PropTypes.number,
  onClick: PropTypes.func,
  image: imagePropType.isRequired,
};

export default Image;
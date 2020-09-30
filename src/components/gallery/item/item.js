import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ title, copy, image }) => (
  <figure
    style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}
  >
    <Img fixed={image ? image.childImageSharp.fixed : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;

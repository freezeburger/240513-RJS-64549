
import React from 'react';
import { LayoutResponsiveTileWrapper } from './LayoutResponsiveTile.styled';
import PropTypes from 'prop-types';

const LayoutResponsiveTile = ( props = {children:null, size:200 } ) => (
 <LayoutResponsiveTileWrapper size={props.size}>
    { props.children }
 </LayoutResponsiveTileWrapper>
);

LayoutResponsiveTile.propTypes = {
   children: PropTypes.oneOfType(
      [PropTypes.element, PropTypes.arrayOf(PropTypes.element)]
   ),
   size:PropTypes.number
};

export default LayoutResponsiveTile;

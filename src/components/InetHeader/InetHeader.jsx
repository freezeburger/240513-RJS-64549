import React from 'react';
import { InetHeaderWrapper } from './InetHeader.styled';

const InetHeader = (props = {}) => (
 <InetHeaderWrapper data-testid="InetHeader">
    <h1> Inetum </h1>
 </InetHeaderWrapper>
);

InetHeader.propTypes = {};


export default InetHeader;

import styled from 'styled-components';

export const InetHeaderWrapper = styled.div`
    background-color: #1891bd;
    color: white;
    padding: 10px;
    display: flex;
    width: 100%;
    height:75px;
    transition: height 0.5s ease;

    &:hover {
        height: 100px;
    }
    
    h1{
        margin:0;
        text-transform: uppercase;
    }

    @media screen and (max-width: 768px){
        height:50px;
    }
`;
InetHeaderWrapper.displayName = 'InetHeaderWrapper';

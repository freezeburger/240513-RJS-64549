
import styled from 'styled-components';

export const LayoutResponsiveTileWrapper = styled.div`
  --prop-size: ${ ({size}) => size }px;
  display: grid;
  padding: 10px;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(var(--prop-size), 1fr));
  grid-auto-rows: var(--prop-size);

    &>*{
        border: 1px solid #ccc;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;

        &>*{
        min-height: var(--prop-size);
        }
    }
`;
LayoutResponsiveTileWrapper.displayName = 'LayoutResponsiveTileWrapper'

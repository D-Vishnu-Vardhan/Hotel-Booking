import styled from 'styled-components';
import defaultImg from "../assets/images/room-1.jpeg";

const StyledCover = styled.header`
    min-height: 60vh;
    background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default StyledCover;

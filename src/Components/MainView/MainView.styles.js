import styled from 'styled-components';

export const MainViewContainer = styled.div`
    padding-left: ${props => props.isSidebarOpen ? '275px' : '85px'};
    transition: .2s ease-in padding-left;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
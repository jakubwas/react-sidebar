import React from 'react';
import * as styled from './MainView.styles';
import Routes from '../../Routes'

const MainView = (props) => {
    return (
        <styled.MainViewContainer isSidebarOpen={props.isSidebarOpen}>
            <Routes/>
        </styled.MainViewContainer>
    )
}

export default MainView;

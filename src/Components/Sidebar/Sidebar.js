import React from 'react';
import * as styled from './Sidebar.styles';

const Sidebar = (props) => {

    
    return (
        <styled.SidebarContainer>
            <styled.SidebarHeader>{props.header}</styled.SidebarHeader>
        </styled.SidebarContainer>
    )
}

export default Sidebar

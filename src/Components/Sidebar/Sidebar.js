import React from 'react';
import * as styled from './Sidebar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
    faHome,
    faColumns, 
    faBuilding, 
    faExclamationTriangle, 
    faCog, 
    faTimes, 
    faNetworkWired
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faHome, 
    faColumns, 
    faBuilding, 
    faExclamationTriangle, 
    faCog, 
    faTimes,
    faNetworkWired
    );

const Sidebar = (props) => {
    
    const menuItemsJSX = props.menuItems.map((item, index)=> {
        return (
            <styled.MenuItem key={index}>
                <styled.Icon src={item.icon}>
                    <FontAwesomeIcon icon={item.icon} />
                </styled.Icon>
                <styled.Text>{item.name}</styled.Text>
            </styled.MenuItem>
        )
    })
    
    return (
        <styled.SidebarContainer>
            <styled.SidebarHeader>{props.header}</styled.SidebarHeader>
            <styled.MenuItemsContainer>{menuItemsJSX}</styled.MenuItemsContainer>
        </styled.SidebarContainer>
    )
}

export default Sidebar;

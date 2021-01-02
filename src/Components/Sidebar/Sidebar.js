import React, { useState, useEffect } from 'react';
import * as styled from './Sidebar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { mainMenuContent } from '../../Data/mainMenuContent';
import { Link } from 'react-router-dom';
import { 
    faHome,
    faColumns, 
    faBuilding, 
    faExclamationTriangle, 
    faCog, 
    faTimes 
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faHome, 
    faColumns, 
    faBuilding, 
    faExclamationTriangle, 
    faCog, 
    faTimes
    );

    const Sidebar = (props) => {

        const [selected, setSelected] = useState('');
    
        const menuItemJSX = mainMenuContent.map((item, index) => {
    
            const isSelected = selected === item.label;
    
            // If there is no submenu
            if (!item.items) {
                return (
                    <Link 
                        to={item.url} 
                        className='link-decoration'
                        onClick={() => {setSelected(item.label)}}
                    >
                        <styled.MenuItem 
                            key={index} 
                            isSidebarOpen={props.isSidebarOpen}
                            isSelected={isSelected}
                        >
                        <styled.MenuItemInner>
                            <styled.Icon isSidebarOpen={props.isSidebarOpen}>
                                <FontAwesomeIcon icon={faHome}/>
                            </styled.Icon>
                            <styled.TextToggle isSidebarOpen={props.isSidebarOpen}>
                                {item.label}
                            </styled.TextToggle>
                        </styled.MenuItemInner>
                        </styled.MenuItem>
                    </Link>
                )
            }
            // If there are submenus
            const subMenuJSX = item.items.map((subMenuItem, subMenuItemIndex) => {
                return (
                    <Link 
                        to={subMenuItem.url}
                        className='link-decoration'
                        onClick={() => {setSelected(item.label)}}
                    >
                        <styled.SubMenuItem>{subMenuItem.label}</styled.SubMenuItem>
                    </Link>
                )
            })
    
            return (
                <styled.ItemContainer>
                    <styled.MenuItem 
                        key={index} 
                        isSidebarOpen={props.isSidebarOpen}
                        isSelected={isSelected}    
                    >
                        <styled.MenuItemInner>
                            <styled.Icon isSidebarOpen={props.isSidebarOpen}>
                                <FontAwesomeIcon icon={faHome}/>
                            </styled.Icon>
                            <styled.TextToggle isSidebarOpen={props.isSidebarOpen}>
                                {item.label}
                            </styled.TextToggle>
                        </styled.MenuItemInner>
                    {props.isSidebarOpen && <styled.DropdownIcon/>}
                    <styled.SubMenuItemContainer className="subMenuItemContainer">
                        {
                            !props.isSidebarOpen &&
                            <styled.SubMenuTitle>
                                {item.label}
                            </styled.SubMenuTitle>
                        }
                        {subMenuJSX}    
                    </styled.SubMenuItemContainer>   
                    </styled.MenuItem>
                </styled.ItemContainer>
            )
        })
        
        return (
            <styled.SidebarContainer isSidebarOpen={props.isSidebarOpen}>
                <styled.MenuItemContainer>
                    {menuItemJSX}
                </styled.MenuItemContainer>
                <styled.TogglerContainer onClick={()=>{props.setSidebarState(!props.isSidebarOpen)}}>
                    <styled.Toggler/>
                </styled.TogglerContainer>
            </styled.SidebarContainer>
        )
    }

export default Sidebar;


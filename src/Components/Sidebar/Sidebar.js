import React, { useState, useEffect } from 'react';
import * as styled from './Sidebar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
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

    const [selected, setSelectedMenuItem] = useState(props.menuItems[0].name);
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [subMenusStates, setSubMenus] = useState({});

    useEffect(() => {

        const newSubmenus = {};

        props.menuItems.forEach((item, index) => {
            const hasSubmenus = !!item.subMenuItems.length;
            
            if (hasSubmenus) {
                newSubmenus[index] = {};
                newSubmenus[index]['isOpen'] = false;
                newSubmenus[index]['selected'] = null;
              }
        })
        
        setSubMenus(newSubmenus);

    }, [props.menuItems] )

    useEffect(() => {

        const updateWindowResize = () => {
            if (window.innerWidth < 1280 && isSidebarOpen) setSidebarOpen(false);
            else setSidebarOpen(true);
        }
        
        window.addEventListener('resize', updateWindowResize);

        return () => {
            window.removeEventListener('resize', updateWindowResize);
        }
    }, [] )

    const handleMenuItemClick = (name, index) => {
        setSelectedMenuItem(name);

        const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

        if (subMenusStates.hasOwnProperty(index)) {
            subMenusCopy[index]['isOpen'] = !subMenusStates[index]['isOpen'];
            setSubMenus(subMenusCopy);
        }
    }

    const menuItemsJSX = props.menuItems.map((item, index)=> {

        const isSelectedItem = selected === item.name;

        const hasSubmenus = !!item.subMenuItems.length;

        const isOpen = subMenusStates[index]?.isOpen;

        const subMenusJSX = item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
            return (
                <styled.SubMenuItem>{subMenuItem.name}</styled.SubMenuItem>
            )
        })

        return (
            <styled.ItemContainer key={index}>

                <styled.MenuItem 
                    selected={isSelectedItem}
                    isSidebarOpen={isSidebarOpen}
                    onClick={()=> {handleMenuItemClick(item.name, index)}}
                    isOpen={isOpen}
                >
                    <styled.Icon src={item.icon} isSidebarOpen={isSidebarOpen}>
                        <FontAwesomeIcon icon={item.icon} />
                    </styled.Icon >
                    <styled.Text isSidebarOpen={isSidebarOpen}>{item.name}</styled.Text>
                    { hasSubmenus && isSidebarOpen && 
                    ( <styled.DropdownIcon selected={isSelectedItem} isOpen={isOpen} /> )
                    }
                </styled.MenuItem>
                
                {hasSubmenus && isOpen && (
                    <styled.SubMenuItemContainer isSidebarOpen={isSidebarOpen}>
                        {subMenusJSX}
                    </styled.SubMenuItemContainer>
                )}
                
            </styled.ItemContainer>

        )
    })  
    
    return (
        <styled.SidebarContainer isSidebarOpen={isSidebarOpen}>
            <styled.SidebarHeader>{props.header}</styled.SidebarHeader>
            <styled.MenuItemsContainer>{menuItemsJSX}</styled.MenuItemsContainer>
            <styled.TogglerContainer onClick={()=>{setSidebarOpen(!isSidebarOpen)}}>
                <styled.Toggler/>
            </styled.TogglerContainer>
        </styled.SidebarContainer>
    )
}

export default Sidebar;

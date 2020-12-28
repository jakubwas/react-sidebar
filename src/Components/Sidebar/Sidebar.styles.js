import styled from 'styled-components';

export const SidebarContainer = styled.div`
    width: ${ props => props.isSidebarOpen ? '20%' : '5%'};
    max-width: 280px;
    min-width: 80px;
    position: relative;
    background-color: rgb(9, 63, 110);
    transition: .2s ease-in all;
`

export const SidebarHeader = styled.h3`
    padding: 20px 0;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 6px;
    color: white;
`

export const MenuItemsContainer = styled.div``

export const ItemContainer = styled.div`
    position: relative;
    &:hover {
        .subMenuItemContainer{
            display: block;
        }
    }
`

export const SubMenuItemContainer = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    background-color: rgb(255, 255, 255);
    min-width: 190px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
`

export const MenuItem = styled.div`
    padding: 6px 20px;
    color: ${ prop => prop.selected ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.92)' };
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    transition: .2s ease-in all;

    ${ props => !props.isSidebarOpen && `
        text-align: center;
        margin: auto;
        ${ props.selected && `
            background-color: rgba(0, 0, 0, 0.5);
        `}
    `}
    
    &:hover {
        color: rgb(255, 255, 255);
        transition: 0.1s ease-in all;
    }

    &:after{
        content: '';
        border-bottom: 2px solid 
            ${ prop => prop.selected ? 'rgb(255, 255, 255)' : 'rgba(19, 15, 64, 0.2)' };
        display: ${props => props.isOpen && props.isSidebarOpen && props.selected ? 'none' : 'block'};
        margin: 8px 0 4px;
    }

    ${props => !props.selected && `
        &:hover {
            &:after {
                border-color: rgba(255, 255, 255, 0.2);
                transition: 0.1s ease-in all;
            }
        }
    `};
`

export const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    display: ${ props => props.isSidebarOpen ? 'inline-block' : 'none'};
`

export const Icon = styled.div`
    width: 20px;
    height: 28px;
    color: rgba(255, 255, 255, 0.45);
    display: inline-block;
    text-align: center;

    ${ props => props.isSidebarOpen && `
        padding-right: 25px;
        transition: .2s ease-in padding-right;
    `}
`

export const SubMenuItem = styled.p`
    color: black;
    padding: 10px 16px;
    display: block;
    font-size: 15px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`

export const TogglerContainer = styled.div`
    position: absolute;
    width: 30%;
    bottom: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
`

export const Toggler = styled.div`
    height: 40px;
    cursor: pointer;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: .25em;
        width: 100%;
        height: .1em;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 .75em 0 0 rgb(255, 255, 255), 0 1.5em 0 0 rgb(255, 255, 255);
    }
`

export const DropdownIcon = styled.span`
    position: absolute;
    top: 30%;
    right: 10px;
    border: solid rgba(255, 255, 255, 0.48);
    border-width: 0 2px 2px 0;
    padding: 3px;
    transform: rotate(-45deg);
    transition: .3s ease-in all;
`
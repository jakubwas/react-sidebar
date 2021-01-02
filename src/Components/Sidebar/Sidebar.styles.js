import styled from 'styled-components';

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

export const SidebarContainer = styled.div`
    width: ${props => props.isSidebarOpen ? '275px' : '85px'};
    transition: width ease-in .2s;
    background-color:rgb(9, 63, 110);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100vh;

    .link-decoration {
        text-decoration: none;
    }
`;

export const MenuItemContainer = styled.div`
    padding-top: 110px;
`;

export const MenuItem = styled.div`
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    transition: .2s ease-in all;
    padding: 6px 20px;

    ${ props => !props.isSidebarOpen && props.isSelected && (`
            background-color: rgba(0, 0, 0, 0.5);
    `)};

    .mdc-list-item__graphic {
        margin: 0;
        ${ props => props.isSidebarOpen && `
            padding-right: 25px;
            transition: .2s ease-in padding-right;
        `}
    }

    &:after{
        content: '';
        border-bottom: 2px solid 
            ${props => props.isSelected ? 'rgba(255, 255, 255, 0.75)' : 'rgba(19, 15, 64, 0.2)'};
        display: block;
        margin: 8px 0 4px;
    }
    
    &:hover {
        &:after {
            ${props => !props.isSelected && `
                border-color: rgba(255, 255, 255, 0.2);
                transition: 0.1s ease-in all;
            `}
        }
    }
`;

export const MenuItemInner = styled.div`
    text-decoration: none;
    padding-left: 9px;
    display: flex;
    align-items: center;
    width: 100%;
`;

export const ItemContainer = styled.div`
    position: relative;
    &:hover {
        .subMenuItemContainer{
            display: block;
        }
    }
`;

export const SubMenuItem = styled.div`
    color: rgb(71, 67, 67);
    padding: 12px 16px;
    display: block;
    font-size: 15px;
    font-weight: 500;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

export const SubMenuItemContainer = styled.div`
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    background-color: rgb(255, 255, 255);
    min-width: 190px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 9999 !important;
`;

export const SubMenuTitle = styled.div`
    font-size: 16px;
    color: rgb(255, 255, 255);
    text-align: center;
    font-weight: 500;
    letter-spacing: 1px;
    padding: 12px;
    background-color: rgb(9, 63, 110);
`;

export const TextToggle = styled.div`
    display: ${props => props.isSidebarOpen ? 'block' : 'none'};
    color: rgb(255, 255, 255);
`;

export const DropdownIcon = styled.span`
    position: absolute;
    top: 30%;
    right: 10px;
    border: solid rgba(255, 255, 255, 0.48);
    border-width: 0 2px 2px 0;
    padding: 3px;
    transform: rotate(-45deg);
    transition: .3s ease-in all;
`;

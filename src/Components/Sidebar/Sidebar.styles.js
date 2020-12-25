import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
    width: ${ props => props.isSidebarOpen ? '20%' : '5%'};
    max-width: 280px;
    min-width: 80px;
    position: relative;
    background-image: linear-gradient(
        315deg, #90D5EC 0%, #FC575E 74%
    );
    transition: .2s ease-in all;
`

export const SidebarHeader = styled.h3`
    padding: 20px 0;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 6px;
    color: white;
`

export const MenuItemsContainer = styled.div`

`

export const MenuItem = styled.div`
    padding: 6px 20px;
    font-weight: 600;
    color: ${ prop => prop.selected ? 'rgb(255, 255, 255)' : 'rgb(19, 15, 64)' };
    cursor: pointer;
    white-space: nowrap;

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
        display: block;
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
    font-size: 15px;
    font-weight: 500;
    display: ${ props => props.isSidebarOpen ? 'inline-block' : 'none'};
`

export const Icon = styled.div`
    width: 20px;
    height: 28px;
    color: rgba(255, 255, 255, 0.8);
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
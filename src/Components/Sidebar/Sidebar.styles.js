import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
    width: 20%;
    max-width: 280px;
    min-width: 80px;
    background-image: linear-gradient(
        315deg, #90D5EC 0%, #FC575E 74%
    );
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
    display: flex;
    align-items: center;
`

export const Text = styled.p`
    height: 28px;
    color: rgba(0, 0, 0, 0.7);
`

export const Icon = styled.div`
    width: 30px;
    height: 28px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.8);
`
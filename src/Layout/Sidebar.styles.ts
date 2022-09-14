import styled from 'styled-components'

const BASE_SIDEBAR_WIDTH = 48;

export const Sidebar = styled.nav`
  grid-area: sidebar;
  position: sticky;
  height: calc(100vh - 16px);
  min-height: ${768 - 16}px;
  margin-bottom: 8px;
  width: 100px;
`

export const SidebarContent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 8px;
  padding-top: 32px;
  display: flex;
  overflow: hidden;
  width: ${BASE_SIDEBAR_WIDTH}px;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #1d1a38;
`

export const SidebarItem = styled.li`
  width: 100%;
  cursor: pointer;
  height: 60px;
  display: flex;
  align-items: center;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: rgba(255,255,255,0.05);
  }
`
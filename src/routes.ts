import React from "react";
// react-icons is a library that provides a lot of icons
import { MdHome, MdNotifications, MdEmail, MdSettings, MdLogout, MdOutlineCreate, MdDeleteForever } from 'react-icons/md';
import { CreateMessages, Home, Logout, Messages, Notifications, RemovedMessages } from "./pages";

export enum RoutePath {
  LOG_IN = '/login',
  FORGOT_PASSWORD = '/forgot_password',
  HOME = '/',
  MESSAGES = '/messages',
  INBOX = '/inbox',
  NOTIFICATIONS = '/notifications',
  SETTINGS = 'settings',
  CREATE_MESSAGE = 'create_message',
  REMOVE_MESSAGES = 'remove_messages',
  LOG_OUT = '/logout'
}

export const defaultSidebarNavItems: SidebarNavItem[] = [
  {
    name: 'home',
    path: RoutePath.HOME,
    icon: MdHome,
  },
  {
    name: 'notifications',
    path: RoutePath.NOTIFICATIONS,
    icon: MdNotifications,
  },
  {
    name: 'inbox',
    path: RoutePath.INBOX,
    icon: MdEmail,
  },
  {
    name: 'settings',
    path: RoutePath.SETTINGS,
    icon: MdSettings,
  },
  {
    name: 'logout',
    path: RoutePath.LOG_OUT,
    icon: MdLogout,
  }
]

export const messagesSidebarNavItems: SidebarNavItem[] = [
  {
    name: 'home',
    path: RoutePath.HOME,
    icon: MdHome,
  },
  {
    name: "Create Message",
    path: RoutePath.CREATE_MESSAGE,
    icon: MdOutlineCreate
  },
  {
    name: 'Check Messages',
    path: RoutePath.MESSAGES,
    icon: MdEmail,
  },
  {
    name: 'Remove Messages',
    path: RoutePath.REMOVE_MESSAGES,
    icon: MdDeleteForever
  }
]

export const routes: Route[] = [
  {
    name: "home",
    path: RoutePath.HOME,
    component: Home,
    sidebarNavItems: defaultSidebarNavItems
  },
  {
    name: "logout",
    path: RoutePath.LOG_OUT,
    component: Logout
  },
  {
    name: "notifications",
    path: RoutePath.NOTIFICATIONS,
    component: Notifications,
    sidebarNavItems: defaultSidebarNavItems
  },
  {
    name: "messages",
    path: RoutePath.MESSAGES,
    component: Messages,
    sidebarNavItems: messagesSidebarNavItems
  },
  {
    name: "createMessage",
    path: RoutePath.CREATE_MESSAGE,
    component: CreateMessages,
    sidebarNavItems: messagesSidebarNavItems
  },
  {
    name: "removeMessages",
    path: RoutePath.REMOVE_MESSAGES,
    component: RemovedMessages,
    sidebarNavItems: messagesSidebarNavItems
  }
]

export interface SidebarNavItem {
  name: string;
  path: string;
  icon: React.ComponentType;
}

export interface Route {
  name: string;
  path: RoutePath;
  sidebarNavItems?: SidebarNavItem[];
  component: React.ComponentType;
}
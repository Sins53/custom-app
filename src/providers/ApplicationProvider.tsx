import { LIGHT_THEME } from "@/theme";
import React from "react";
import { DefaultTheme } from "styled-components";
// import { useUserData } from '../genericQueries/userQuery';
export interface Roles {
  code: string;
  name: string;
  roleId: number;
}

export interface UserDetailInterface {
  departments: Array<string>;
  designation: string;
  email: string;
  employeeCode: string;
  name: string;
  userId: string;
  username: string;
  profile_pic?: string;
}

export interface ApplicationContextInterface {
  // permissions: null | ScreenPermissions;
  // role: null | Array<Roles>;
  // user: null | UserDetailInterface;
  themeToggler: () => void;
  theme: DefaultTheme;
}
export interface ScreenPermissions {
  [key: string]: any;
}

export interface ModulePermissions {
  [key: string]: PrivilegePermissions;
}

export interface PrivilegePermissions {
  [key: string]: number;
}

export interface Role {
  code: string;
  name: string;
  roleId: number;
}

export const ApplicationContext =
  React.createContext<ApplicationContextInterface>({
    // permissions: null,
    // role: null,
    // user: null,
    themeToggler: () => console.log("theme toggler"),
    theme: LIGHT_THEME,
  });

interface Props {
  children: React.ReactNode;
  themeToggler: () => void;
  theme: DefaultTheme;
}

export function ApplicationProvider(props: Props) {
  // const { data } = useUserData();
  // console.log(data, 'application provider data');

  return (
    <ApplicationContext.Provider
      value={{
        // permissions: data?.data.permissions ? data?.data.permissions : null,
        // role: data?.data.role ? data?.data.role : null,
        // user: data?.data.user ? data?.data.user : null,
        themeToggler: props.themeToggler,
        theme: props.theme,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
}

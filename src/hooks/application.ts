import { ApplicationContext } from '@/providers/ApplicationProvider';
import { useContext } from 'react';

// const useRole = () => {
//   const { role } = useContext(ApplicationContext);
//   return role;
// };
// const useUserDetails = () => {
//   const { user } = useContext(ApplicationContext);
//   return user;
// };
// const usePermissions = () => {
//   const { permissions } = useContext(ApplicationContext);
//   return permissions;
// };
const useThemeToggler = () => {
  const { themeToggler } = useContext(ApplicationContext);
  return themeToggler;
};

// export { useRole, useUserDetails, usePermissions, useThemeToggler };
export { useThemeToggler };

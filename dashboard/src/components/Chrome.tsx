import React from 'react';
import Chrome from '@shared/dashboard/Chrome';
import { useDispatch, useSelector } from '../redux/hooks';
import { logoutClicked } from '../redux/slice-auth';
import {
  hamburgerMenuClicked,
  mobileSidebarClosed,
  desktopSidebarCollapsedToggled,
} from '../redux/slice-menu';

interface Props {
  children: React.ReactNode;
}

const ChromeContainer: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const mobileSidebarOpen = useSelector((state) => state.menu.mobileSidebarOpen);
  const sidebarCollapsed = useSelector((state) => state.menu.desktopSidebarCollapsed);
  const windowWidth = useSelector((state) => state.menu.windowWidth);

  return (
    <Chrome
      children={children}
      mobileSidebarOpen={mobileSidebarOpen}
      urlPath={location.pathname}
      onLogout={() => dispatch(logoutClicked())}
      sidebarCollapsed={sidebarCollapsed}
      onMobileHamburgerClick={() => dispatch(hamburgerMenuClicked())}
      onMobileSidebarClose={() => dispatch(mobileSidebarClosed())}
      onToggleSidebarCollapsed={() => dispatch(desktopSidebarCollapsedToggled())}
      usingMobileView={windowWidth < 768}
    />
  );
};

export default ChromeContainer;
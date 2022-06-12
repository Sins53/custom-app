import FlexLayout from "./FlexLayout";
import AbsoluteLayout from "./AbsoluteLayout";
import BaseLayout from "./BaseLayout";
import MainLayout from "./MainLayout";
import WrapperLayout from "./WrapperLayout";
import RowLayout from "./RowLayout";
import ContainerLayout from "./ContainerLayout";

const Layout = () => {
  return <Layout />;
};

Layout.Absolute = AbsoluteLayout;
Layout.Wrapper = WrapperLayout;
Layout.Flex = FlexLayout;
Layout.Row = RowLayout;
Layout.Main = MainLayout;
Layout.Base = BaseLayout;
Layout.Container = ContainerLayout;

export default Layout;
export {
  FlexLayout,
  AbsoluteLayout,
  BaseLayout,
  MainLayout,
  WrapperLayout,
  RowLayout,
};

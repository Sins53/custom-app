import { Text } from "@/components/core";
import Button from "@/components/derived/Buttons/Buttons";
import Layout from "@/components/layout";
import { useThemeToggler } from "@/hooks/application";
import styled from "styled-components";
import {
  getBaseColor,
  StatBox,
  StatCount,
  StatDescription,
} from "./dashboard-styles";

export const HeaderTitle = styled(Text)`
  color: ${(props) => getBaseColor(props.theme)};
  font-weight: 600;
  font-size: 1.125rem;
`;

const Dashboard = () => {
  const toggler = useThemeToggler();
  return (
    <>
      <Layout.Container className="mt-5">
        <HeaderTitle variant="h5" typeface="semiBold">
          Dashboard
        </HeaderTitle>
        <Button className="btn btn-primary px-2 mt-3" onClick={toggler}>
          click me
        </Button>
      </Layout.Container>
      <StatBox className="m-5">
        <StatCount> 123456 </StatCount>
        <StatDescription variant="h3" typeface="medium" className="mt-5">
          This is description
        </StatDescription>
      </StatBox>
    </>
  );
};

export default Dashboard;

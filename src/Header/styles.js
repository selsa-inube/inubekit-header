import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: ${({ theme }) =>
    theme?.header?.background?.color || inube.header.background.color};
  box-shadow:
    0px 1px 3px 1px
      ${({ theme }) =>
        theme?.header?.background?.color || inube.header.background.color},
    0px 1px 2px 0px
      ${({ theme }) =>
        theme?.header?.background?.color || inube.header.background.color};

  & > div > div > div {
    position: unset;
    display: flex;
    align-items: center;
  }
  & li {
    display: flex;
    align-items: center;
    padding: 0 40px;
  }
  & > div > div:first-child {
    padding-left: 12px;
  }
  & > div > div > div:last-child {
    padding: 8px 16px;
    border-left: 1px solid
      ${({ theme }) =>
        theme?.header?.background?.color || inube.header.background.color};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  padding: 16px;
`;

export { StyledHeader, StyledLink };

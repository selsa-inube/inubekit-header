import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { Link } from "react-router-dom";
import { tokens } from "./Tokens/tokens";

const StyledHeader = styled.header`
  box-sizing: border-box;
  border-bottom: 1px solid
    ${({ theme }) => theme?.palette?.neutral?.N40 || inube.palette.neutral.N40};
  // height: 54px;
  background-color: ${({ theme }) =>
    theme?.header?.background?.color || tokens.background.color};
  box-shadow:
    0px 1px 3px 1px
      ${({ theme }) =>
        theme?.palette?.neutral?.N40 || inube.palette.neutral.N40},
    0px 1px 2px 0px
      ${({ theme }) =>
        theme?.palette?.neutral?.N20 || inube.palette.neutral.N20};
`;

const StyledFullscreenNav = styled.div`
  position: relative;
  height: 24px;
  width: 24px;
  display: ${({ $display }) => ($display ? "block" : "none")};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid
    ${({ theme }) => theme?.palette?.neutral?.N40 || inube.palette.neutral.N40};
`;

export { StyledHeader, StyledFullscreenNav, StyledLink, StyledUser };

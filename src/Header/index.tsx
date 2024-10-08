import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { IMenuSection, User } from "@inubekit/user";
import { useMediaQueries } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { ITextAppearance, Text } from "@inubekit/text";
import { FullscreenNav, IFNavigation } from "@inubekit/fullscreennav";
import { IHeaderLink } from "./props";
import { StyledHeader, StyledLink } from "./styles";
import { tokens } from "./Tokens/tokens";

interface IHeader {
  portalId: string;
  navigation?: IFNavigation;
  logoURL: JSX.Element;
  userName?: string;
  client?: string;
  links?: IHeaderLink[];
  showLinks?: boolean;
  showUser?: boolean;
  userMenu?: IMenuSection[];
}

const Header = (props: IHeader) => {
  const {
    portalId,
    navigation,
    logoURL,
    userName,
    client,
    links,
    showLinks = false,
    showUser = true,
    userMenu = [],
  } = props;
  const theme = useContext(ThemeContext) as { header: typeof tokens };
  const linkAppearance =
    (theme?.header?.content?.appearance as ITextAppearance) ||
    tokens.content.appearance;
  const [mobile, tablet] = Object.values(
    useMediaQueries(["(max-width: 420px)", "(max-width: 944px) "]),
  );

  return (
    <StyledHeader>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack
          justifyContent="space-between"
          gap="23px"
          height={showUser ? "auto" : "53px"}
          alignItems="center"
        >
          {tablet && navigation && (
            <FullscreenNav
              portalId={portalId}
              navigation={navigation}
              logoutPath="/logout"
              logoutTitle="Logout"
            />
          )}
          {logoURL}
        </Stack>
        <Stack justifyContent="space-between" gap="23px">
          {showLinks &&
            links &&
            links.map((link, index) => (
              <StyledLink key={index} to={link.path}>
                <Text
                  type="label"
                  size="medium"
                  appearance={linkAppearance}
                  weight="bold"
                >
                  {link.label}
                </Text>
              </StyledLink>
            ))}
          {showUser && userName && (
            <User
              username={userName}
              client={client!}
              size={mobile ? "small" : "large"}
              menu={userMenu}
            />
          )}
        </Stack>
      </Stack>
    </StyledHeader>
  );
};

export { Header };
export type { IHeader };

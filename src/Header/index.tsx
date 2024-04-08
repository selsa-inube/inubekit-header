import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { inube } from "@inubekit/foundations";
import { User } from "@inubekit/user";
import { useMediaQueries } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { ITextAppearance, Text } from "@inubekit/text";
import { FullscreenNav, IFNavigation } from "@inubekit/fullscreennav";
import { IHeaderLink } from "./props";
import { StyledHeader, StyledLink } from "./styles";

interface IHeader {
  portalId: string;
  navigation: IFNavigation;
  logoURL: JSX.Element;
  userName: string;
  client: string;
  links?: IHeaderLink[];
}

const Header = (props: IHeader) => {
  const { portalId, navigation, logoURL, userName, client, links } = props;
  const theme = useContext(ThemeContext);
  const linkAppearance =
    (theme?.header?.content?.appearance as ITextAppearance) ||
    inube.header.content.appearance;
  const [mobile, tablet] = Object.values(
    useMediaQueries(["(max-width: 420px)", "(max-width: 944px) "]),
  );

  return (
    <StyledHeader>
      <Stack alignItems="center" justifyContent="space-between">
        <Stack justifyContent="space-between" gap="23px">
          {tablet && (
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
          {tablet &&
            links &&
            links.map((link, index) => (
              <StyledLink key={index} to={link.path}>
                <Text type="label" size="medium" appearance={linkAppearance}>
                  {link.label}
                </Text>
              </StyledLink>
            ))}
          <User
            username={userName}
            client={client}
            size={mobile ? "small" : "large"}
          />
        </Stack>
      </Stack>
    </StyledHeader>
  );
};

export { Header };
export type { IHeader };

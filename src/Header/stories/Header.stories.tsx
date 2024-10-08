import { BrowserRouter } from "react-router-dom";

import {
  MdKey,
  MdMeetingRoom,
  MdPhone,
  MdBadge,
  MdStarBorder,
  MdAccountBalance,
  MdAccountBalanceWallet,
  MdAndroid,
  MdSettings,
  MdPrivacyTip,
  MdLogout,
} from "react-icons/md";

import { props, parameters } from "../props";
import { Header, IHeader } from "..";

import { Logo } from "./logo";

const story = {
  title: "navigation/Header",
  components: [Header],
  parameters,
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IHeader) => <Header {...args} />;

Default.args = {
  portalId: "portals",
  navigation: {
    title: "MENU",
    sections: {
      administrate: {
        name: "Administrate",
        links: {
          privileges: {
            id: "privileges",
            label: "Privileges",
            icon: <MdKey />,
            path: "/privileges",
          },
          accounting: {
            id: "accounting",
            label: "Accounting",
            icon: <MdMeetingRoom />,
            path: "/accounting",
          },
          contacts: {
            id: "contacts",
            label: "Contacts",
            icon: <MdPhone />,
            path: "/contacts",
          },
          crm: {
            id: "crm",
            label: "CRM",
            icon: <MdStarBorder />,
            path: "/crm",
          },
        },
      },
      request: {
        name: "Request",
        links: {
          documents: {
            id: "documents",
            label: "Documents",
            icon: <MdBadge />,
            path: "/documents",
          },
          marketing: {
            id: "marketing",
            label: "Marketing",
            icon: <MdStarBorder />,
            path: "/marketing",
          },
          savings: {
            id: "savings",
            label: "Savings",
            icon: <MdAccountBalanceWallet />,
            path: "/savings",
          },
          credit: {
            id: "credit",
            label: "Credit",
            icon: <MdAccountBalance />,
            path: "/credit",
          },
        },
      },
    },
  },
  logoURL: <Logo />,
  userName: "Leonardo Garzón",
  client: "Sistemas Enlínea S.A",
  links: [
    {
      label: "Actualizar datos",
      path: "/update-data-assisted",
      icon: <MdAndroid />,
    },
  ],
  userMenu: [
    {
      id: "section1",
      title: "Profile",
      links: [
        {
          id: "link1",
          title: "Account Settings",
          path: "/account",
          iconBefore: <MdSettings />,
        },
        {
          id: "link2",
          title: "Privacy Settings",
          path: "/privacy",
          iconBefore: <MdPrivacyTip />,
        },
      ],
      divider: true,
    },
    {
      id: "section2",
      title: "Actions",
      actions: [
        {
          id: "action1",
          title: "Logout",
          action: () => console.log("Logout"),
          iconBefore: <MdLogout />,
        },
      ],
      divider: true,
    },
  ],
  showLinks: false,
  showUser: true,
};

export default story;

export { Default };

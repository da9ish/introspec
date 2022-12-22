import { useLocation } from 'react-router'
import { useState } from 'react'

import Box from 'components/Box'
import Clickable from 'components/Clickable'
import Flex from 'components/Flex'
import Icon from 'components/Icon'
import Link from 'components/Link'
import Text from 'components/Text'
import { css, styled } from 'stiches.config'
import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'
import { colors } from 'colors'

const StyledSidebar = styled(Box, {
  transition: 'all 0.1s ease',

  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '220px',
  maxWidth: '330px',
  minWidth: '220px',
  fontSize: '$body',
  backgroundColor: '$bgBase',
  borderRight: '1px solid $bgBorder',
  borderTopLeftRadius: 15
})

const Header = styled(Box, {
  transition: 'all 0.3s ease',

  boxSizing: 'border-box',
  width: '100%',
  backgroundColor: '$bgBase',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 16px',
  borderTopLeftRadius: 15,

  variants: {
    setupMode: {
      true: {
        backgroundColor: '$bgBase',
        border: '1px solid transparent',
        transform: 'scale(110%)',
        transformOrigin: 'center',
        borderRadius: '8px',
        boxShadow: 'rgb(62 99 221 / 90%) 0px 0px 0px 3px, rgb(0 0 0 / 7%) 0px 0px 20px 2px'
      }
    }
  }
})

const HeaderContainer = styled(Flex, {
  width: '100%',
  height: 30,
  alignItems: 'center',
  justifyContent: 'space-between'
})

const WorkspaceContainer = styled('button', {
  boxSizing: 'border-box',
  borderRadius: '4px',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  padding: '6px 9px',

  '&:hover': {
    backgroundColor: '$bgBaseHover'
  }
})

const LogoContainer = styled('img', {
  width: 18,
  height: 18,
  borderRadius: '50%'
})

const WorkspaceTitle = styled(Text, {
  marginLeft: 12
})

const Profile = styled('img', {
  width: '18px',
  height: '18px',
  backgroundColor: '$bgSubtle',
  borderRadius: '50%'
})

const Body = styled(Box, {
  transition: 'all 0.1s ease',

  boxSizing: 'border-box',
  flexGrow: 1,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  padding: '8px 16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
})

const FooterContainer = styled(Box, {
  boxSizing: 'border-box',
  width: '100%',
  padding: '16px'
})

const SubMenuItemContainer = styled(Box, {
  transition: 'all 0.1s ease',

  width: '100%',
  overflowY: 'hidden',
  flexShrink: 0,

  variants: {
    open: {
      true: {
        pointerEvents: 'all'
      },
      false: {
        pointerEvents: 'none'
      }
    }
  }
})

const NavItem = styled(Box, {
  transition: 'all 0.1s ease',

  outline: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',
  width: '100%',
  height: '32px',
  padding: '8px',
  margin: 0,
  display: 'flex',
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: '$labelTitle',
  borderRadius: '4px',
  textTransform: 'none',

  '&:focus': {
    backgroundColor: '$bgBaseHover',
    color: '$labelTitle'
  },

  '&:hover': {
    backgroundColor: '$bgBaseHover',
    color: '$labelTitle'
  },

  variants: {
    active: {
      true: {
        color: '$labelTitle'
      },
      false: {
        color: '$labelMuted'
      }
    },
    indent: {
      true: {
        marginTop: '2px',
        paddingLeft: '48px'
      },
      false: {
        marginTop: '8px',
        paddingLeft: '8px'
      }
    }
  }
})

const LinkItem = styled(Link, {
  transition: 'all 0.1s ease',

  outline: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',
  width: '100%',
  height: '32px',
  padding: '8px',
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderRadius: '4px',
  textTransform: 'none',

  '&:focus': {
    backgroundColor: '$bgBaseHover',
    color: '$labelTitle'
  },

  '&:hover': {
    backgroundColor: '$bgBaseHover',
    color: '$labelTitle'
  },

  variants: {
    active: {
      true: {
        color: '$labelTitle'
      },
      false: {
        color: '$labelMuted'
      }
    },
    indent: {
      true: {
        marginTop: '2px',
        paddingLeft: '48px'
      },
      false: {
        marginTop: '8px',
        paddingLeft: '8px'
      }
    }
  },

  compoundVariants: [
    {
      active: true,
      indent: true,
      css: {
        backgroundColor: '$bgBaseHover'
      }
    }
  ]
})

const NavTitle = styled('a', {
  transition: 'all 0.1s ease',

  flexGrow: 1,
  textAlign: 'left',
  margin: '0 8px',
  color: 'inherit'
})

const NavIcon = styled(Icon, {
  transition: 'all 0.1s ease',

  color: 'inherit',

  variants: {
    open: {
      true: {
        transform: 'rotate(180deg)'
      },
      false: {
        transform: 'rotate(0deg)'
      }
    }
  }
})

const ROOT_LINKS: LinkType[] = [
  {
    id: 'overview',
    name: 'Overview',
    path: '/overview',
    submenus: [],
    icon: 'airplay'
  },
  {
    id: 'authentication',
    name: 'Authentication',
    submenus: [
      {
        id: 'authentication-users',
        name: 'Users',
        path: '/authentication/users'
      },
      {
        id: 'authentication-providers',
        name: 'Providers',
        path: '/authentication/providers'
      },
      {
        id: 'authentication-settings',
        name: 'Settings',
        path: '/authentication/settings'
      }
    ],
    icon: 'key'
  },
  {
    id: 'database',
    name: 'Database',
    submenus: [
      {
        id: 'database-schema',
        name: 'Schema',
        path: '/database/schema'
      },
      {
        id: 'database-data',
        name: 'Data',
        path: '/database/data'
      },
      {
        id: 'database-migrations',
        name: 'Migrations',
        path: '/database/migrations'
      },
      {
        id: 'database-settings',
        name: 'Settings',
        path: '/database/settings'
      }
    ],
    icon: 'database'
  },
  {
    id: 'storage',
    name: 'Storage',
    submenus: [
      {
        id: 'storage-files',
        name: 'Files',
        path: '/storage/files'
      },
      {
        id: 'storage-settings',
        name: 'Settings',
        path: '/storage/settings'
      }
    ],
    icon: 'archive'
  },
  {
    id: 'resolvers',
    name: 'Resolvers',
    path: '/resolvers',
    submenus: [],
    icon: 'command'
  },
  {
    id: 'integrations',
    name: 'Integrations',
    path: '/integrations',
    submenus: [],
    icon: 'codepen'
  },
  {
    id: 'schedulars',
    name: 'Schedulars',
    path: '/schedulars',
    submenus: [],
    icon: 'clock'
  },
  {
    id: 'settings',
    name: 'Settings',
    path: '/settings',
    icon: 'settings',
    submenus: [],
    isFooter: true
  }
]

interface LinkType {
  id: string,
  name: string,
  path?: string,
  icon?: string,
  submenus?: LinkType[],
  isFooter?: boolean
}

const useStyles = (count: number) => ({
  submenu: css({
    height: `${count * 34}px`
  })()
})

const MenuItem: React.FC<LinkType & { indent?: boolean, tabIndex: number }> = ({
  name, path, icon, submenus, tabIndex, indent = false
}) => {
  const location = useLocation()
  const [ open, setOpen ] = useState(false)
  const className = useStyles(open ? submenus?.length || 0 : 0)

  if (!path) {
    return (
      <>
        <NavItem as="button" role="button" tabIndex={tabIndex} indent={indent} active={open} onClick={() => setOpen(!open)}>
          {icon && <NavIcon name={icon} />}
          <NavTitle>{name}</NavTitle>
          {!!submenus?.length && <NavIcon open={open} name={open ? 'chevron-up' : 'chevron-down'} />}
        </NavItem>
        <SubMenuItemContainer open={open} className={className.submenu}>
          {submenus?.map((menu, idx) => (
            <MenuItem key={menu.id} tabIndex={tabIndex + idx + 1} {...menu} indent />
          ))}
        </SubMenuItemContainer>
      </>
    )
  }

  const active = location.pathname.includes(path)

  return (
    <>
      <LinkItem
        tabIndex={tabIndex}
        active={active}
        indent={indent}
        to={path}
        onClick={() => setOpen(!open)}
      >
        {icon && <NavIcon name={icon} />}
        <NavTitle>{name}</NavTitle>
        {!!submenus?.length && <NavIcon open={open} name={open ? 'chevron-up' : 'chevron-down'} />}
      </LinkItem>
      <SubMenuItemContainer open={open} className={className.submenu}>
        {submenus?.map((menu, idx) => (
          <MenuItem key={menu.id} {...menu} tabIndex={tabIndex + idx + 1} indent />
        ))}
      </SubMenuItemContainer>
    </>
  )
}

interface SidebarProps {
  setupMode?: boolean,
  formValues?: Record<string, any>
}

const Sidebar: React.FC<SidebarProps> = ({
  setupMode = false,
  formValues
}) => {
  const currentAccount = useCurrentAccountContext()

  return (
    <StyledSidebar>
      <Header setupMode={setupMode}>
        <HeaderContainer>
          <WorkspaceContainer>
            <LogoContainer src={currentAccount?.workspace?.logo || formValues?.logo?.preview} />
            <WorkspaceTitle color={colors.labelTitle} fontSize={13}>
              {currentAccount?.workspace?.name || formValues?.name}
            </WorkspaceTitle>
          </WorkspaceContainer>
          <Clickable css={{ height: '-webkit-fill-available' }}>
            <Profile src="https://uploads.linear.app/9ce8f073-64f8-442a-9993-143fc4d8c6ee/e101b696-d608-4f2d-bf38-79a97d621d94" />
          </Clickable>
        </HeaderContainer>
      </Header>
      <Body>
        {ROOT_LINKS.filter((link) => !link.isFooter).map((link, idx) => (
          <MenuItem key={link.id} tabIndex={idx} {...link} />
        ))}
      </Body>
      <FooterContainer>
        {ROOT_LINKS.filter((link) => link.isFooter).map((link, idx) => (
          <MenuItem key={link.id} tabIndex={idx} {...link} />
        ))}
      </FooterContainer>
    </StyledSidebar>
  )
}

export default Sidebar

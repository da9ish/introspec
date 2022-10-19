import { useState } from 'react'
import { useLocation } from 'react-router'

import Box from 'components/Box'
import { css, styled } from 'stiches.config'
import Link from 'components/Link'
import Icon from 'components/Icon'
import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'

const StyledSidebar = styled(Box, {
  transition: 'all 0.1s ease',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '220px',
  fontSize: '$body',
  borderRight: '1px solid #F8F9FB'
})

const Header = styled(Box, {
  boxSizing: 'border-box',
  width: '100%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px'
})

const LogoContainer = styled(Box, {
  boxSizing: 'border-box',
  flexGrow: 1,
  height: '28px',
  backgroundColor: '#F5F5F5',
  borderRadius: '4px',
  padding: '4px 8px',
  marginRight: '8px',
  display: 'flex',
  alignItems: 'center'
})

const Profile = styled(Box, {
  width: '28px',
  height: '28px',
  backgroundColor: '#F5F5F5',
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
  color: '#282A30',
  borderRadius: '4px',

  '&:focus': {
    backgroundColor: '#f0f3f9'
  },

  '&:hover': {
    backgroundColor: '#f0f3f9'
  },

  variants: {
    active: {
      true: {
        color: '#282A30'
      },
      false: {
        color: '#6b6f76'
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

  '&:focus': {
    backgroundColor: '#f0f3f9'
  },

  '&:hover': {
    backgroundColor: '#f0f3f9'
  },

  variants: {
    active: {
      true: {
        color: '#282A30'
      },
      false: {
        color: '#6b6f76'
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
        backgroundColor: '#F5F5F5'
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

const Sidebar: React.FC = () => {
  const currentAccount = useCurrentAccountContext()

  return (
    <StyledSidebar>
      <Header>
        <LogoContainer>{currentAccount?.workspace?.name}</LogoContainer>
        <Profile />
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

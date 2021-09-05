import React, { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Box } from "../Box"
import { styled } from "../../stiches.config";
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Project } from '../../assets/icons/project.svg'
import { ReactComponent as Document } from '../../assets/icons/document.svg'
import { ReactComponent as Playground } from '../../assets/icons/playground.svg'
import { ReactComponent as Profile } from '../../assets/icons/user.svg'
import { ReactComponent as Settings } from '../../assets/icons/settings.svg'

const StyledSidebar = styled(Box, {
  transition: "all 0.3s ease",
  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '124px',
  height: '100vh',
  background: "#313131",
  borderTopRightRadius: '30px',
  borderBottomRightRadius: '30px',

  "&:hover": {
    width: '280px'
  }
})

const LogoContainer = styled(Box, {
  display: 'flex',
  alignItems: 'center',
  margin: '50px 0',
  padding: '8px 24px',
})

const AppName = styled('h3', {
  transition: "all 0.3s ease",

  margin: 0,
  marginLeft: '16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '#FCFBF4',

  variants: {
    hovered: {
      true: {
        display: 'block'
      },
      false: {
        display: 'none'
      }
    }
  }
})

const LinksContainer = styled(Box, {
  transition: "all 0.3s ease",

  width: '100%',
  height: '100%',
  overflow: 'auto',
  padding: '32px 0',

  variants: {
    hovered: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
      },
      false: {}
    }
  }
})

const FooterContainer = styled(Box, {
  width: '100%',
})

const NavItem = styled(Link, {
  transition: "all 0.3s ease",

  cursor: 'pointer',
  height: '66px',
  display: 'flex',
  alignItems: 'center',
  padding: '8px 24px',

  '&:hover > p': {
    color: '#FCFBF4'
  },

  variants: {
    hovered: {
      true: {
        width: '100%',
        justifyContent: 'flex-start',
      },
      false: {
        justifyContent: 'center',
      }
    }
  }
})

const NavTitle = styled('a', {
  transition: "all 0.3s ease",

  margin: 0,
  marginLeft: '16px',
  color: '#7C7B70',

  variants: {
    hovered: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      }
    }
  }
})

const NavIcon = styled(Box, {
  transition: "all 0.3s ease",

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '8px',
  borderRadius: '18px',
  
  variants: {
    active: {
      true: {
        backgroundColor: '#FCFBF4',
        color: '#313131'
      },
      false: {
        backgroundColor: 'unset',
        color: '#FCFBF4'
      }
    }
  }
})

const ROOT_LINKS = [
  {
    id: 'projects',
    name: 'Projects',
    path: '/projects',
    icon: 'projects'
  },
  {
    id: 'documentation',
    name: 'Documentation',
    path: '/docs',
    icon: 'document'
  },
  {
    id: 'playground',
    name: 'Playground',
    path: '/playground',
    icon: 'playground'
  },
  {
    id: 'profile',
    name: 'Profile',
    path: '/profile',
    icon: 'profile'
  },
  {
    id: 'settings',
    name: 'Settings',
    path: '/settings',
    icon: 'settings',
    isFooter: true
  }
]

const ICON_MAP: Record<
  string, 
  React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }>
> = {
  projects: Project,
  document: Document,
  playground: Playground,
  profile: Profile,
  settings: Settings
}

const Sidebar: React.FC = () => {
  const location = useLocation()
  const [isSidebarHovered, setIsSidebarHovered] = useState(false)
  return (
    <StyledSidebar onMouseEnter={() => setIsSidebarHovered(true)} onMouseLeave={() => setIsSidebarHovered(false)}>
      <LogoContainer>
        <Logo />
        <AppName hovered={isSidebarHovered}>Instrospec</AppName>
      </LogoContainer>
      <LinksContainer hovered={isSidebarHovered}>
        {ROOT_LINKS.filter(link => !link.isFooter).map(link => {
          const Icon = ICON_MAP[link.icon]
          return (
          <NavItem key={link.id} hovered={isSidebarHovered} to={link.path}>
            <NavIcon active={location.pathname.includes(link.path)}><Icon /></NavIcon>
            <NavTitle hovered={isSidebarHovered}>{link.name}</NavTitle>
          </NavItem>
        )})}
      </LinksContainer>
      <FooterContainer>
        {ROOT_LINKS.filter(link => link.isFooter).map(link => {
          const Icon = ICON_MAP[link.icon]
          return (
          <NavItem key={link.id} hovered={isSidebarHovered} to={link.path}>
            <NavIcon active={location.pathname.includes(link.path)}><Icon /></NavIcon>
            <NavTitle hovered={isSidebarHovered}>{link.name}</NavTitle>
          </NavItem>
        )})}
      </FooterContainer>
    </StyledSidebar>
  )
}

export default Sidebar
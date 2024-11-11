import { AppBar, Button, Stack, Toolbar, IconButton, Drawer, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -65;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (isMobile) {
      handleDrawerToggle();
    }
  };

  const isServicesPage = location.pathname.includes('/service');

  const navigate = useNavigate();

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={0}
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderBottom: '1px solid rgba(0,0,0,0.1)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <img src="/logo.png" height={40} />
        
        {isServicesPage ? (
          <Button 
            onClick={() => navigate('/')}
            sx={{ 
              color: 'text.primary',
              fontWeight: 600,
              px: 2.5,
              py: 1,
              borderRadius: 3,
              fontSize: '0.95rem',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'primary.main',
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
                transform: 'translateY(-2px)',
              }
            }}
          >
            Back to Home
          </Button>
        ) : (
          <>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
                
                <Drawer
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true // Better open performance on mobile.
                  }}
                >
                  <Stack 
                    spacing={2} 
                    sx={{ 
                      width: 250,
                      p: 2,
                      mt: 2
                    }}
                  >
                    {navItems.map((item) => (
                      <Button 
                        key={item.label} 
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        variant="outlined"
                        fullWidth
                        sx={{ 
                          color: 'text.primary',
                          py: 1.2,
                          borderRadius: 2,
                          borderColor: 'rgba(25, 118, 210, 0.3)',
                          backgroundColor: activeSection === item.href.substring(1) ? 'rgba(25, 118, 210, 0.12)' : 'transparent',
                          '&:hover': {
                            backgroundColor: 'rgba(25, 118, 210, 0.08)',
                            borderColor: 'primary.main',
                            color: 'primary.main'
                          }
                        }}
                      >
                        {item.label}
                      </Button>
                    ))}
                    <Button 
                      variant="contained" 
                      color="primary"
                      fullWidth
                      sx={{
                        mt: 1,
                        py: 1.5,
                        borderRadius: 2,
                        fontWeight: 600,
                        textTransform: 'none',
                        background: 'linear-gradient(45deg, #0D4B81 30%, #1976d2 90%)',
                        boxShadow: '0 2px 10px rgba(13, 75, 129, 0.2)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #093358 30%, #1565c0 90%)',
                          boxShadow: '0 4px 15px rgba(13, 75, 129, 0.3)'
                        }
                      }}
                    >
                      Get Quote
                    </Button>
                  </Stack>
                </Drawer>
              </>
            ) : (
              <Stack direction="row" spacing={3}>
                {navItems.map((item) => (
                  <Button 
                    key={item.label} 
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    sx={{ 
                      color: 'text.primary',
                      fontWeight: 600,
                      px: 2.5,
                      py: 1,
                      borderRadius: 3,
                      fontSize: '0.95rem',
                      letterSpacing: '0.5px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      backgroundColor: activeSection === item.href.substring(1) ? 'rgba(25, 118, 210, 0.12)' : 'transparent',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'primary.main',
                        transform: activeSection === item.href.substring(1) ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'right',
                        transition: 'transform 0.3s ease'
                      },
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'rgba(25, 118, 210, 0.08)',
                        transform: 'translateY(-2px)',
                        '&::after': {
                          transform: 'scaleX(1)',
                          transformOrigin: 'left'
                        }
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button 
                  variant="contained" 
                  color="primary"
                  component="a"
                  href="tel:61467788814"
                  sx={{
                    px: 4,
                    py: 1.2,
                    borderRadius: 3,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    letterSpacing: '0.5px',
                    background: 'linear-gradient(45deg, #0D4B81 30%, #1976d2 90%)',
                    boxShadow: '0 3px 15px rgba(13, 75, 129, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px) scale(1.02)',
                      boxShadow: '0 5px 20px rgba(13, 75, 129, 0.4)',
                      background: 'linear-gradient(45deg, #093358 30%, #1565c0 90%)'
                    }
                  }}
                >
                  Call Now
                </Button>
              </Stack>
            )}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
} 
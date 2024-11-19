import { AppBar, Button, Stack, Toolbar, IconButton, Drawer, useMediaQuery, useTheme, Box, LinearProgress } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Active section detection
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
      setMobileOpen(false);
    }
  };

  const isServicesPage = location.pathname.includes('/service');

  return (
    <AppBar 
      position="fixed"
      sx={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: theme.palette.primary.main,
          transform: `scaleX(${scrollProgress / 100})`,
          transformOrigin: 'left',
          transition: 'transform 0.1s ease-out'
        }
      }}
    >
      <Toolbar sx={{ py: 1 }}>
        <Box 
          component={Link} 
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            transition: 'transform 0.2s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        >
          <img src="/logo.png" height={45} alt="Logo" style={{ marginRight: '8px' }} />
        </Box>

        {isServicesPage ? (
          <Button
            onClick={() => navigate('/')}
            startIcon={<ArrowBackIcon />}
            variant="contained"
            sx={{
              ml: 'auto',
              background: 'linear-gradient(45deg, #0D4B81 30%, #1976d2 90%)',
              boxShadow: '0 2px 8px rgba(13, 75, 129, 0.2)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(13, 75, 129, 0.3)',
              }
            }}
          >
            Back to Home
          </Button>
        ) : (
          <>
            {isMobile ? (
              <IconButton
                onClick={() => setMobileOpen(!mobileOpen)}
                sx={{
                  ml: 'auto',
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  backgroundColor: mobileOpen ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(25, 118, 210, 0.12)',
                    transform: 'rotate(180deg)'
                  }
                }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            ) : (
              <Stack 
                direction="row" 
                spacing={1} 
                alignItems="center" 
                sx={{ ml: 'auto' }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component="a" 
                    onClick={(e) => scrollToSection(e, item.href)}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      position: 'relative',
                      color: activeSection === item.href.substring(1) ? 'primary.main' : 'text.primary',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '10%',
                        width: '80%',
                        height: '2px',
                        backgroundColor: theme.palette.primary.main,
                        transform: activeSection === item.href.substring(1) ? 'scaleX(1)' : 'scaleX(0)',
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.08)',
                        '&::before': {
                          transform: 'scaleX(1)',
                        }
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="outlined"
                  href="tel:61467788814"
                  sx={{
                    ml: 2,
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: 'rgba(25, 118, 210, 0.04)',
                    borderColor: 'rgba(25, 118, 210, 0.3)',
                    color: '#1976d2',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.08)',
                      borderColor: '#1976d2',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(13, 75, 129, 0.08)',
                    }
                  }}
                >
                  Get Started
                </Button>
              </Stack>
            )}
          </>
        )}

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          PaperProps={{
            sx: {
              width: '100%',
              maxWidth: 350,
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
            }
          }}
        >
          <Stack spacing={2} sx={{ p: 3, mt: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  scrollToSection(e as unknown as React.MouseEvent<HTMLAnchorElement>, item.href);
                  setMobileOpen(false);
                }}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  justifyContent: 'flex-start',
                  backgroundColor: activeSection === item.href.substring(1) ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                  color: activeSection === item.href.substring(1) ? 'primary.main' : 'text.primary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(25, 118, 210, 0.12)',
                    transform: 'translateX(8px)'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="outlined"
              href="tel:61467788814"
              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: 2,
                backgroundColor: 'rgba(25, 118, 210, 0.04)',
                borderColor: 'rgba(25, 118, 210, 0.3)',
                color: '#1976d2',
                fontWeight: 600,
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.08)',
                  borderColor: '#1976d2',
                  transform: 'translateX(8px)',
                }
              }}
            >
              Contact Us Now
            </Button>
          </Stack>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
} 
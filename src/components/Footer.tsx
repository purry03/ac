import { Box, Container, Grid, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';

export function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      bgcolor: 'grey.900', 
      color: 'grey.100', 
      mt: 'auto',
      borderTop: '1px solid',
      borderColor: 'primary.800',
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 3 : 6} py={isMobile ? 6 : 10}>
          {/* Company Info Section */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2.5} justifyContent="center" alignItems="center">
              <Box>
                <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight="bold" mb={1}>
                  Alpha Duct Cleaning
                </Typography>
                <Typography variant="body2" color="grey.300" sx={{ maxWidth: 300 }}>
                  Professional air duct cleaning services in Melbourne. 
                  Committed to improving your indoor air quality.
                </Typography>
              </Box>
              <Stack direction="row" spacing={2.5} sx={{ mt: 2 }} justifyContent="center">
                {[
                  { icon: '/facebook.png', url: 'https://facebook.com/alphaduct', alt: 'Facebook' },
                  { icon: '/instagram.png', url: 'https://instagram.com/alphaduct', alt: 'Instagram' },
                  { icon: '/youtube.png', url: 'https://linkedin.com/company/alphaduct', alt: 'LinkedIn' }
                ].map((social) => (
                  <Box
                    key={social.alt}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener"
                    sx={{
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                      }
                    }}
                  >
                    <Box 
                      component="img" 
                      src={social.icon} 
                      alt={social.alt} 
                      sx={{ 
                        width: 28, 
                        height: 28,
                        opacity: 0.9,
                        '&:hover': { opacity: 1 }
                      }} 
                    />
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2.5}>
              <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight="bold">
                Contact Info
              </Typography>
              {[
                { 
                  href: 'tel:61467788814',
                  text: 'Phone: (61) 467 788 814'
                },
                {
                  href: 'mailto:info@alphaduct.com.au',
                  text: 'Email: info@alphaduct.com.au'
                }
              ].map((contact) => (
                <Typography
                  key={contact.href}
                  variant="body2"
                  component='a'
                  href={contact.href}
                  sx={{
                    color: 'grey.300',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: 'primary.main',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {contact.text}
                </Typography>
              ))}
              <Typography variant="body2" color="grey.300">
                Address: 30 Medway Rd Caraigieburn,<br />Melbourne VIC 3000
              </Typography>
            </Stack>
          </Grid>

          {/* Business Hours Section */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2.5}>
              <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight="bold">
                Business Hours
              </Typography>
              <Typography variant="body2" color="grey.300">
                7 Days a week<br />
                7:00 AM - 7:00 PM
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Stack 
          direction="row" 
          justifyContent="center" 
          py={isMobile ? 2.5 : 3} 
          borderTop={1} 
          borderColor="primary.800"
        >
          <Typography 
            variant="body2" 
            color="grey.400"
            sx={{ opacity: 0.8 }}
          >
            © {new Date().getFullYear()} Alpha Duct Cleaning. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
} 
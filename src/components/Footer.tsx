import { Box, Container, Grid, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';

export function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ bgcolor: '#051B2E', color: 'white', mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 2 : 4} py={isMobile ? 4 : 8}>
          <Grid item xs={12} md={4}>
            <Stack spacing={isMobile ? 1 : 2}>
              <Typography variant={isMobile ? 'subtitle1' : 'h6'}>Alpha Duct Cleaning</Typography>
              <Typography variant="body2">
              Professional air duct cleaning services in Melbourne. 
                Committed to improving your indoor air quality.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 1 }} alignItems='center' justifyContent='center'>
                <Box component="a" href="https://facebook.com/alphaduct" target="_blank" rel="noopener" sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}>
                  <Box component="img" src="/facebook.png" alt="Facebook" sx={{ width: 24, height: 24 }} />
                </Box>
                <Box component="a" href="https://instagram.com/alphaduct" target="_blank" rel="noopener" sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}>
                  <Box component="img" src="/instagram.png" alt="Instagram" sx={{ width: 24, height: 24 }} />
                </Box>
                <Box component="a" href="https://linkedin.com/company/alphaduct" target="_blank" rel="noopener" sx={{ color: 'white', '&:hover': { color: 'primary.main' } }}>
                  <Box component="img" src="/youtube.png" alt="LinkedIn" sx={{ width: 24, height: 24 }} />
                </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={isMobile ? 1 : 2}>
              <Typography variant={isMobile ? 'subtitle1' : 'h6'}>Contact Info</Typography>
              <Typography variant="body2" component='a' href='tel:61467788814' sx={{
                color: 'white',
                '&:hover': {
                  color: 'primary.main',
                  textDecoration: 'underline'
                }
              }}>Phone: (61) 467 788 814</Typography>
              <Typography variant="body2" component='a' href='mailto:info@alphaduct.com.au' sx={{
                color: 'white', 
                '&:hover': {
                  color: 'primary.main',
                  textDecoration: 'underline'
                }
              }}>Email: info@alphaduct.com.au</Typography>
              <Typography variant="body2">
                Address: 30 Medway Rd Caraigieburn, Melbourne VIC 3000
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={isMobile ? 1 : 2}>
              <Typography variant={isMobile ? 'subtitle1' : 'h6'}>Business Hours</Typography>
              <Typography variant="body2">7 Days a week : 7am - 7pm</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack 
          direction="row" 
          justifyContent="center" 
          py={isMobile ? 1.5 : 2} 
          borderTop={1} 
          borderColor="primary.800"
        >
          <Typography variant="body2" color="primary.100">
            © 2024 Alpha Duct Cleaning. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
} 
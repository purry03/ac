import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { services } from '../data/services';
import { ThemeProvider } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Find the service based on the URL parameter
  const service = services.find(
    s => s.title.toLowerCase().replace(/ /g, '-') === serviceId
  );

  // Handle case where service is not found
  if (!service) {
    return (
      <ThemeProvider theme={theme}>
        <Stack minHeight="100vh">
          <Navbar />
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4">Service not found</Typography>
            <Button 
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/')}
              sx={{ mt: 2 }}
            >
              Back to Home
            </Button>
          </Container>
          <Footer />
        </Stack>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack minHeight="100vh">
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          {/* Back Button */}
          <Button 
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate('/')}
            sx={{ mb: 4 }}
          >
            Back to Home
          </Button>

          {/* Service Title */}
          <Typography 
            variant={isMobile ? "h3" : "h2"} 
            component="h1"
            sx={{ 
              mb: 3,
              fontWeight: 'bold'
            }}
          >
            {service.title}
          </Typography>

          {/* Service Image */}
          <Box
            component="img"
            src={service.image}
            alt={service.title}
            sx={{
              width: '100%',
              height: { xs: '250px', sm: '400px' },
              objectFit: 'cover',
              borderRadius: 2,
              mb: 4
            }}
          />

          {/* Service Description */}
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.8
            }}
          >
            {service.description}
          </Typography>

          {/* Additional Service Details */}
          {service.details && (
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h4" 
                sx={{ mb: 2, fontWeight: 'bold' }}
              >
                What we offer
              </Typography>
              <Stack spacing={2}>
                {service.details.map((detail, index) => (
                  <Typography 
                    key={index} 
                    variant="body1"
                    sx={{ 
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      lineHeight: 1.8
                    }}
                  >
                    • {detail}
                  </Typography>
                ))}
              </Stack>
            </Box>
          )}

          {/* Call to Action */}
          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography 
              variant="h5" 
              sx={{ mb: 3 }}
            >
              Interested in our {service.title.toLowerCase()}?
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => navigate('/contact')} // Assuming you have a contact page
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem'
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
};

export default ServicePage;
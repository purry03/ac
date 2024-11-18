import './App.css'
import { 
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box, 
  Button, 
  Container,
  extendTheme,
  Rating,
  Stack, 
  TextField, 
  ThemeProvider, 
  Typography,
  useMediaQuery,
  useTheme,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Markdown } from './components/Markdown';
import React from 'react';
import { services } from './services';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const stats = [
  { value: '24/7', label: 'Emergency Service', description: 'We recognize that unexpected situations can arise at any moment. That’s why we offer 24/7 emergency air duct cleaning services to ensure we’re available whenever you need us.' },
  { value: 'Free', label: 'Free Quotes', description: 'We provide free consultations for all our services, allowing you to discuss your needs without any obligation. Our team is here to guide you in finding the ideal solution for your home and budget.' },
  { value: '100%', label: 'Satisfaction Guarantee', description: 'We’re dedicated to ensuring your complete satisfaction with our air duct cleaning services. If you’re not entirely happy, we’ll work to make it right with our 100% satisfaction guarantee.' },
  { value: '7+', label: 'Experienced Technicians', description: 'With over seven years of experience in air duct cleaning, our skilled technicians are trained to handle projects of all sizes and complexities, ensuring thorough and effective results for your home.' },
];

const testimonials = [
  {
    name: 'John D.',
    rating: 5,
    comment: 'Excellent service! The team was professional and thorough.',
  },
  {
    name: 'Sarah M.',
    rating: 5,
    comment: 'Very satisfied with the quality of work. Would highly recommend!',
  },
  {
    name: 'Michael R.',
    rating: 5,
    comment: 'Great experience from start to finish. Will use again!',
  },
];

const faqs = [
  {
    question: 'How often should I clean my air ducts?',
    answer: 'We recommend cleaning your air ducts every 3-5 years, depending on usage and environmental factors.',
  },
  {
    question: 'How long does the cleaning process take?',
    answer: 'A typical residential duct cleaning service takes 2-4 hours, depending on the size of your system.',
  },
  {
    question: 'Do you offer emergency services?',
    answer: 'Yes, we provide 24/7 emergency services for urgent HVAC issues.',
  },
];

const beforeAfterImages = [
  {
    before: '/before1.png',
    after: '/after1.png',
  },
  {
    before: '/before3.png',
    after: '/after3.png',
  },
  {
    before: '/before4.png',
    after: '/after4.png',
  },
  {
    before: '/before5.png',
    after: '/after5.png',
  },
  // Add more image pairs as needed
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  return (
    <Router basename="/ac">
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/service/:serviceId" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    try {
      await emailjs.send(
        'service_ew98941',
        'template_pu2non8',
        {
          name: formData.get('name'),
          phone: formData.get('phone'),
          message: formData.get('message'),
        },
        'tRC8wr2iARFXw9n_e'
      );
      
      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme} defaultMode='dark'>
      <Stack minHeight="100vh">
        <Navbar />
        
        {/* Hero Section */}
        <Stack id="hero">
          <Stack sx={{
            backgroundImage: 'url(/hero.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          height={{ xs: 800, sm: 600, md: 800 }}
          width='100%'
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
            <Stack sx={{
                  backdropFilter: 'blur(3px)',
                  background: 'rgba(0,0,0,0.7)',
                  alignItems: 'center',
                  justifyContent: 'center'
            }}
            height='100%'
            width='100%'
            >
              <Stack spacing={{ xs: 3, sm: 6 }} maxWidth="1200px" px={{ xs: 2, sm: 4 }}>
                <Stack spacing={3} alignItems="center" component={motion.div} {...fadeInUp}>
                <img src="/logo.png" height={120} />
                  <Typography 
                    variant={isMobile ? 'h6' : 'h5'}
                    color='#00cc00'
                    sx={{
                      fontWeight: 600,
                      textAlign: 'center',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      textTransform: 'uppercase',
                      letterSpacing: { xs: 1, sm: 4 },
                      fontSize: { xs: '0.9rem', sm: undefined },
                    }}
                  >
                    Alpha Duct Cleaning
                  </Typography>
                  {/* <img src="/logo.png" height={100} /> */}
                  <Typography 
                    variant={isMobile ? 'h3' : 'h2'}
                    color='white'
                    sx={{
                      fontWeight: 700,
                      textAlign: 'center',
                      lineHeight: 1.2,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                      maxWidth: '900px',
                      fontSize: { xs: '1.75rem', sm: '2.75rem', md: '3.75rem' }
                    }}
                  >
                    Fresh air, every breath
                  </Typography>
                </Stack>

                {/* Feature Cards */}
                <Stack 
                  direction={{ xs: 'column', sm: 'row' }} 
                  spacing={2}
                  sx={{ width: '100%' }}
                  component={motion.div}
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {[
                    { title: '24/7 Service', icon: '🕒', desc: 'Emergency support available' },
                    { title: 'Licensed Experts', icon: '👨‍🔧', desc: 'Fully qualified technicians' },
                    { title: 'Best Price', icon: '💰', desc: 'Competitive market rates' }
                  ].map((item) => (
                    <Stack
                      key={item.title}
                      component={motion.div}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        p: { xs: 2, sm: 3 },
                        borderRadius: 2,
                        border: '1px solid rgba(255,255,255,0.2)',
                        flex: 1,
                        transition: 'transform 0.2s',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.15)',
                        }
                      }}
                      spacing={0.5}
                    >
                      <Typography fontSize={{ xs: '1.5rem', sm: '2rem' }}>{item.icon}</Typography>
                      <Typography color="white" variant={isMobile ? 'subtitle1' : 'h6'} fontWeight={600}>
                        {item.title}
                      </Typography>
                      <Typography color="grey.300" variant={isMobile ? 'body2' : 'body1'}>
                        {item.desc}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                {/* CTA Button */}
                <Button
                  component={motion.a}
                  href="tel:61467788814"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variant="contained" 
                  size={isMobile ? 'large' : 'large'}
                  sx={{
                    mt: { xs: 2, sm: 4 },
                    py: { xs: 1.5, sm: 2 },
                    px: { xs: 4, sm: 6 },
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    borderRadius: 2,
                    alignSelf: 'center',
                    textTransform: 'none',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
                    width: { xs: '100%', sm: 'auto' }
                  }}
                >
                  Call Now for Free Quote
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        {/* Why Choose Us Section */}
        <Box sx={{
          background: 'url(/background.png) no-repeat center center / cover'
        }} id='about'>
          <Container sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            height: '100%', 
            width: '100%', 
            padding: { xs: 3, sm: 6, md: 10 } 
          }} >
            <Typography 
              component={motion.h2}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variant={isMobile ? 'h3' : 'h2'}
              sx={{ 
                mb: { xs: 3, sm: 6 },
                color: '#2d2657',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              Breathe Easy, Know Your Home is in Good Hands
            </Typography>
            
            <Typography 
              component={motion.p}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              variant="body1" 
              sx={{ 
                mb: 4, 
                textAlign: 'center',
                px: { xs: 2, sm: 4 }
              }}
            >
              Alpha Duct Cleaning is your one-stop shop for all your air duct cleaning needs. We understand that your home is your sanctuary, and we take your air quality seriously. Our team of experienced technicians will clean your air ducts thoroughly and efficiently, leaving you with peace of mind knowing that your home is in good hands.
            </Typography>

            <Stack 
              component={motion.div}
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              direction={{ xs: 'column', md: 'row' }} 
              spacing={4}
              flexWrap="wrap"
              sx={{ mt: 4 }}
              alignItems="center"
              justifyContent="center"
            >
              {stats.map((stat) => (
                <Box 
                  component={motion.div}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  key={stat.label} 
                  sx={{ 
                    flex: { xs: '1 1 100%', md: '1 1 20%' },
                    bgcolor: 'background.paper',
                    py: { xs: 3, sm: 4 },
                    px: 1,
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    height: { xs: 'auto', md: '350px' }, // Added fixed height
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <Typography 
                    variant={isMobile ? 'h6' : 'h5'}
                    color="primary.700" 
                    sx={{ mb: 1 }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    mt='auto'
                    align='center'
                  >
                    {stat.description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Container>
        </Box>

        {/* Services Section */}
        <Box sx={{
          position: 'relative',
          bgcolor: 'white',
          backgroundImage: 'url(/bg.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          width: '100%'
        }} id="services">
          <Stack py={{ xs: 4, sm: 6, md: 8 }} px={{ xs: 2, sm: 4 }} alignItems="center" sx={{
            bgcolor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(10px)'
          }}>
            <Typography 
              component={motion.h3}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              variant={isMobile ? 'h4' : 'h3'} 
              mb={{ xs: 4, sm: 6 }}
              textAlign="center"
              sx={{
                color: 'white',
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Our Services
            </Typography>
            <Container maxWidth="lg">
              <Stack 
                component={motion.div}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                direction={{ xs: 'column', md: 'row' }}
                flexWrap="wrap"
                gap={2}
                sx={{ width: '100%' }}
              >
                {services.map((service) => (
                  <Stack 
                    component={motion.div}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    key={service.title}
                    onClick={() => navigate(`/service/${encodeURIComponent(service.title.toLowerCase().replace(/ /g, '-'))}`)}
                    sx={{
                      width: { xs: '100%', md: 'calc(50% - 16px)' },
                      height: '120px',
                      borderRadius: 2,
                      overflow: 'hidden',
                      position: 'relative',
                      cursor: 'pointer',
                      border: '1px solid rgba(0,0,0,0.12)',
                      background: 'url(/background.png) no-repeat center center / cover',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      }
                    }}
                    direction="row"
                    alignItems="center"
                    spacing={3}
                    p={3}
                  >
                    <Box
                      sx={{
                        width: '80px',
                        height: '80px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        component="img"
                        src={service.image}
                        alt={service.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          mixBlendMode: 'multiply'
                        }}
                      />
                    </Box>
                    <Stack spacing={1} flex={1}>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          color: 'text.primary',
                          fontWeight: 500,
                          fontSize: { xs: '1.1rem', sm: '1.5rem' }
                        }}
                      >
                        {service.title}
                      </Typography>
                      {!isMobile && <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {service.description}
                      </Typography>}
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Container>
          </Stack>
        </Box>

        {/* Our Work/Testimonials Section */}
        <Box sx={{
          background: 'url(/background.png) no-repeat center center / cover',
          width: '100%'
        }}>
          <Stack py={{ xs: 4, sm: 6, md: 8 }} px={{ xs: 2, sm: 4 }} alignItems="center">
            <Typography 
              component={motion.h3}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              variant={isMobile ? 'h4' : 'h3'}
              mb={{ xs: 4, sm: 6 }}
              textAlign="center"
            >
              Our Work
            </Typography>
            <Stack 
              component={motion.div}
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              direction={{ xs: 'column', md: 'row' }} 
              spacing={4}
              justifyContent="center"
              width="100%"
            >
              {testimonials.map((testimonial, index) => (
                <Stack 
                  component={motion.div}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  sx={{
                    bgcolor: 'primary.50',
                    p: { xs: 3, sm: 4 },
                    borderRadius: 2,
                    width: { xs: '100%', md: '30%' },
                  }}
                  spacing={2}
                  alignItems='center'
                >
                  <Rating value={testimonial.rating} readOnly size={isMobile ? 'small' : 'medium'} />
                  <Typography variant="body1">{testimonial.comment}</Typography>
                  <Typography variant="subtitle2" color="primary.700">
                    - {testimonial.name}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>

        {/* Before/After Section */}
        <Box sx={{ bgcolor: 'background.default' }}>
          <Container maxWidth="lg">
            <Stack py={{ xs: 4, sm: 6, md: 8 }} px={{ xs: 2, sm: 4 }}>
              <Typography 
                component={motion.h3}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                variant={isMobile ? 'h4' : 'h3'}
                mb={{ xs: 4, sm: 6 }}
                textAlign="center"
              >
                Before & After Results
              </Typography>
              <Stack 
                component={motion.div}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                direction={{ xs: 'column', md: 'row' }}
                spacing={0}
                flexWrap="wrap"
                justifyContent="space-around"
              >
                {beforeAfterImages.map((item, index) => (
                  <Stack 
                    key={index}
                    component={motion.div}
                    variants={fadeInUp}
                    spacing={2}
                    my={1}
                    sx={{
                      width: { xs: '100%', md: '45%' },
                      aspectRatio: '1/1',
                    }}
                  >
                    <ReactCompareSlider
                      itemOne={<ReactCompareSliderImage src={item.before} alt="Before" style={{ objectFit: 'cover' }} />}
                      itemTwo={<ReactCompareSliderImage src={item.after} alt="After" style={{ objectFit: 'cover' }} />}
                      style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: '8px',
                        overflow: 'hidden'
                      }}
                    />
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ bgcolor: 'white' }} id="faq">
          <Container maxWidth="lg">
            <Stack py={{ xs: 4, sm: 6, md: 8 }} px={{ xs: 2, sm: 4 }}>
              <Typography 
                component={motion.h3}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                variant={isMobile ? 'h4' : 'h3'}
                mb={{ xs: 4, sm: 6 }}
                textAlign="center"
              >
                Frequently Asked Questions
              </Typography>
              {faqs.map((faq, index) => (
                <Accordion 
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant={isMobile ? 'subtitle1' : 'h6'}>{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Container>
        </Box>
        
        

        {/* Contact Us Section */}
        <Box sx={{
          position: 'relative',
          overflow: 'hidden',
          background: 'url(/background.png) no-repeat center center / cover',
        }} id="contact">
          <Stack 
            py={{ xs: 4, sm: 6, md: 8 }} 
            px={{ xs: 2, sm: 4 }} 
            alignItems="center" 
            justifyContent='center' 
            spacing={{ xs: 4, md: 5 }} 
            direction={{ xs: 'column', md: 'row' }} 
            width='100%'
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              sx={{
                textDecoration: 'none',
                overflow: 'hidden',
                maxWidth: '100%',
                width: '1000px',
                height: { xs: '300px', sm: '400px', md: '500px' }
              }}
            >
              <Box
                id="canvas-for-googlemap"
                sx={{
                  height: '100%',
                  width: '100%',
                  maxWidth: '100%'
                }}
              >
                <iframe
                  style={{
                    height: '100%',
                    width: '100%',
                    border: 0
                  }}
                  frameBorder="0"
                  src="https://www.google.com/maps/embed/v1/place?q=30 Medway Rd Caraigieburn, Melbourne VIC 3000&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                />
              </Box>
            </Box>
            <Stack 
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              height={{ xs: 'auto', md: 500 }}
              maxWidth="600px" 
              width="100%" 
              spacing={3}
              justifyContent='center'
              p={{ xs: 3, sm: 4 }}
              sx={{
                position: 'relative',
                backgroundColor: 'rgba(255,255,255,0.5)',
                backdropFilter: 'blur(2px)'
              }}
            >
              <Typography variant={isMobile ? 'h5' : 'h4'} textAlign="center">
                Get in Touch with Our Duct Cleaning Experts Today!
              </Typography>
              
              <Stack component="form" spacing={3} onSubmit={handleSubmit}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  variant="outlined"
                  name="name"
                />
                <TextField
                  fullWidth
                  label="Phone Number (Optional)"
                  variant="outlined"
                  name="phone"
                />
                <TextField
                  required
                  fullWidth
                  label="Message"
                  variant="outlined"
                  name="message"
                  multiline
                  rows={4}
                />
                <Button 
                  component={motion.button}
                  type="submit"
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                  variant="contained" 
                  size={isMobile ? 'medium' : 'large'}
                  disabled={isLoading}
                  sx={{ 
                    py: { xs: 1.5, sm: 2 },
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    textTransform: 'none'
                  }}
                >
                  {isLoading ? (
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CircularProgress size={20} color="inherit" />
                      <span>Sending...</span>
                    </Stack>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>

        <Snackbar 
          open={snackbar.open} 
          autoHideDuration={6000} 
          onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
        >
          <Alert 
            onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} 
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>

        <Footer />
      </Stack>
    </ThemeProvider>
  )
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette:{
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#fff',
      },
      secondary: {
        main: '#9c27b0',
        light: '#ba68c8', 
        dark: '#7b1fa2',
        contrastText: '#fff',
      },
      background: {
        default: '#fff',
        paper: '#fff',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.6)',
      },
    }}}
});


function ServicePage() {
  const { serviceId } = useParams();
  const service = services.find(s => s.title.toLowerCase().replace(/ /g, '-') === serviceId);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return <div>Service not found</div>;
  }
  return (
    <ThemeProvider defaultMode='light' theme={theme}>
      <Stack minHeight="100vh">
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Typography variant="h1" sx={{ mb: 3, fontSize: { xs: '2.5rem', sm: '3.5rem' } }}>{service.title}</Typography>
          <Box
            component="img"
            src={service.banner}
            alt={service.title}
            sx={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: 2,
              mb: 3
            }}
          />
          {service.body && (
            <Box sx={{ mt: 3 }}>
              <Markdown content={service.body} />
            </Box>
          )}
          
          {/* Added CTA Section */}
          <Box
            sx={{
              mt: 6,
              p: 4,
              bgcolor: 'primary.main',
              borderRadius: 2,
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Typography variant="h4" sx={{ mb: 2 }}>
              Ready to Improve Your Air Quality?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Get a free quote for your {service.title.toLowerCase()} service today!
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                href="tel:61467788814"
                variant="contained"
                size="large"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100',
                  },
                  px: 4,
                  py: 1.5,
                }}
              >
                Call Now
              </Button>
              <Button
                href='/#contact'
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'grey.100',
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                  px: 4,
                  py: 1.5,
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Box>
        </Container>
        
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App

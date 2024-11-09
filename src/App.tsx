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
  ThemeProvider, 
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';

const services = [
  {
    title: 'Split System Cleaning',
    description: 'Professional cleaning for your split system units',
    image: '/split-system.jpg'
  },
  {
    title: 'Air Duct Cleaning',
    description: 'Complete duct system cleaning and sanitization',
    image: '/duct-cleaning.jpg'
  },
  {
    title: 'Chimney Cleaning',
    description: 'Professional chimney cleaning and maintenance',
    image: '/chimney.jpg'
  },
  {
    title: 'Outdoor Unit Service',
    description: 'Comprehensive outdoor HVAC unit maintenance',
    image: '/outdoor-unit.jpeg'
  },
  {
    title: 'Air Filter Replacement',
    description: 'Quality air filter replacement service',
    image: '/air-filter.jpg'
  },
  {
    title: 'Commercial Services',
    description: 'Complete HVAC solutions for businesses',
    image: '/commercial.webp'
  }
];

const stats = [
  { value: '24/7', label: 'Emergency Service', description: 'We understand that emergencies can happen at any time. That\'s why we offer emergency service for our air duct cleaning services. If you have an emergency, you can call us 24/7 and we will be there to help you.' },
  { value: 'Free', label: 'Free Quotes', description: 'We offer free consultations for all of our services. This means that you can talk to us about your needs without any obligation. We\'ll answer any questions you have and help you choose the right solution for your budget and lifestyle.' },
  { value: '100%', label: 'Satisfaction Guarantee', description: 'We are confident that you will be satisfied with our air duct cleaning services. However, if you are not, we want to make sure that you are completely happy with your experience. That\'s why we offer a 100% satisfaction guarantee.' },
  { value: '7+', label: 'Experienced Technicians', description: 'We have been in business for over 7 years and have cleaned air ducts in homes of all sizes. We know what it takes to get the job done right. Our technicians are highly trained and experienced in all aspects of air duct cleaning.' },
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
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/service/:serviceId" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

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
                    Professional Air Duct Cleaning for Melbourne Homes and Businesses
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
                  href="tel:0312345678"
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
              Dust Away is your one-stop shop for all your air duct cleaning needs. We understand that your home is your sanctuary, and we take your air quality seriously. Our team of experienced technicians will clean your air ducts thoroughly and efficiently, leaving you with peace of mind knowing that your home is in good hands.
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
                    p: { xs: 3, sm: 4 },
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    textAlign: 'center'
                  }}
                >
                  <Typography 
                    variant={isMobile ? 'h6' : 'h5'}
                    color="primary.700" 
                    sx={{ mb: 2 }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
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
          width: '100%'
        }} id="services">
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
              Specialized HVAC Services
            </Typography>
            <Container maxWidth="lg">
              <Stack 
                component={motion.div}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                direction="row" 
                flexWrap="wrap" 
                justifyContent="center"
                sx={{ 
                  gap: 3,
                  width: '100%'
                }}
              >
                {services.map((service) => (
                  <Stack 
                    component={motion.div}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    key={service.title}
                    onClick={() => navigate(`/service/${encodeURIComponent(service.title.toLowerCase().replace(/ /g, '-'))}`)}
                    sx={{
                      width: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(33.333% - 24px)' },
                      height: { xs: '200px', sm: '250px' },
                      borderRadius: 2,
                      overflow: 'hidden',
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                  >
                    <Box
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Stack
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        background: 'rgba(0,0,0,0.7)',
                        p: { xs: 1.5, sm: 2 },
                      }}
                    >
                      <Typography variant={isMobile ? 'subtitle1' : 'h6'} color="white">{service.title}</Typography>
                      <Typography variant="body2" color="white">{service.description}</Typography>
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
                  src="https://www.google.com/maps/embed/v1/place?q=melbourne&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                />
              </Box>
              <Box
                sx={{
                  '& img.text-marker': {
                    maxWidth: 'none !important',
                    background: 'none !important'
                  },
                  '& img': {
                    maxWidth: 'none'
                  }
                }}
              />
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
              
              <Stack spacing={2}>
                <Typography variant="body1">
                  <strong>Address:</strong> 123 Main Street, Melbourne VIC 3000
                </Typography>
                <Typography variant="body1">
                  <strong>Phone:</strong> (03) 9123 4567
                </Typography>
                <Typography variant="body1">
                  <strong>Email:</strong> info@dustaway.com.au
                </Typography>
                <Typography variant="body1">
                  <strong>Hours:</strong> Monday - Friday: 8am - 6pm
                  <br />
                  Saturday: 9am - 4pm
                  <br />
                  Sunday: Closed
                </Typography>
              </Stack>

              <Button 
                component={motion.a}
                href="tel:0312345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant="contained" 
                size={isMobile ? 'medium' : 'large'}
                sx={{ 
                  py: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  textTransform: 'none',
                  mt: 2
                }}
              >
                Call Now
              </Button>
            </Stack>
          </Stack>
        </Box>

        <Footer />
      </Stack>
    </ThemeProvider>
  )
}

const theme = extendTheme({
  palette: {
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
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});


function ServicePage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.title.toLowerCase().replace(/ /g, '-') === serviceId);

  if (!service) {
    return <div>Service not found</div>;
  }
  return (
    <ThemeProvider defaultMode='light' theme={theme}>
      <Stack minHeight="100vh">
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Button onClick={() => navigate(-1)}>Back</Button>
          <Typography variant="h2" sx={{ mb: 3 }}>{service.title}</Typography>
          <Box
            component="img"
            src={service.image}
            alt={service.title}
            sx={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: 2,
              mb: 3
            }}
          />
          <Typography variant="body1">{service.description}</Typography>
          {/* Add more service details here */}
        </Container>
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App

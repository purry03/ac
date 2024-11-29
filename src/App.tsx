import './App.css'
import { 
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box, 
  Button, 
  Container,
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
  Grid,
  Card,
  Fab,
  Fade,
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
import { Call, Email, KeyboardArrowUp } from '@mui/icons-material';
import '@fontsource/montserrat/700.css'; // For bold headings
import '@fontsource/montserrat/800.css'; // For extra-bold headings

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
    question: "How often should I clean my air ducts?",
    answer: "We recommend cleaning your air ducts ever year, depending on usage and environmental factors.",
  },
  {
    question: "How long does the cleaning process take?",
    answer: "A typical residential duct cleaning service takes 60-90 minutes, depending on the size of your system.",
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes, we provide 24/7 emergency services for urgent HVAC issues.",
  },
  {
    question: "What are the signs that I need duct cleaning?",
    answer: "Common signs include visible dust coming from vents, increased allergy symptoms, musty odors, higher energy bills, or if you haven't had them cleaned in over 5 years.",
  },
  {
    question: "What is included in your duct cleaning service?",
    answer: "Our comprehensive service includes cleaning of all supply and return ducts, main trunk lines, vents, registers, and the HVAC unit itself. We use professional-grade equipment and follow NADCA guidelines.",
  },
  {
    question: "Do you offer any guarantees on your work?",
    answer: "Yes, we provide a 100% satisfaction guarantee on all our services. If you're not completely satisfied with our work, we'll return to address any concerns at no additional cost.",
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
    <Router>
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
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
        
        {/* Hero Section - Full Width */}
        <Stack id="hero">
          <Stack sx={{
            backgroundImage: 'url(/hero.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          height={{ xs: 1000, sm: 600, md: 800 }}
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
                    { title: '24/7 Service', icon: '🕒', desc: 'Emergency support available', href: "#contact" },
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
                        cursor: item.href ? 'pointer' : 'default',  // Only show pointer cursor if href exists
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.15)',
                        }
                      }}
                      spacing={0.5}
                      onClick={item.href ? () => {
                        const element = document.querySelector(item.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      } : undefined}  // Only add onClick if href exists
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

        {/* Stats Section - Full Width with Diagonal Cut */}
        <Box 
          sx={{
            position: 'relative',
            bgcolor: '#cee8fa',
            py: { xs: 8, md: 12 },
            mt: -6
          }}
          id="about"
        >
          <Container maxWidth="lg">
          <Typography 
              variant="h2"
              textAlign="center"
              sx={{
                fontFamily: 'Montserrat',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #2E5CFF, #FF6B4A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 8
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

            <Grid container spacing={4}>
              {stats.map((stat) => (
                <Grid item xs={12} md={3} key={stat.label}>
                  <Stack
                    component={motion.div}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      bgcolor: 'white',
                      p: 4,
                      borderRadius: '24px',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background: 'linear-gradient(90deg, #2E5CFF, #FF6B4A)',
                      }
                    }}
                  >
                    <Typography variant="h3" color="primary.main" fontWeight="bold" mb={2}>
                      {stat.value}
                    </Typography>
                    <Typography variant="h6" color="text.primary" mb={1}>
                      {stat.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.description}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Services Section - Alternating Layout */}
        <Box sx={{ 
          py: { xs: 8, md: 12 },
          bgcolor: 'white'
        }} id="services">
          <Container maxWidth="lg">
            <Typography 
              variant="h2"
              textAlign="center"
              sx={{
                fontFamily: 'Montserrat',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #2E5CFF, #FF6B4A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 8
              }}
            >
              Our Services
            </Typography>
            
            <Stack spacing={8}>
              {services.map((service, index) => (
                <Stack
                  key={service.title}
                  direction={{ xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
                  spacing={4}
                  alignItems="center"
                  component={motion.div}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => navigate(`/service/${encodeURIComponent(service.title.toLowerCase().replace(/ /g, '-'))}`)}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '50%' },
                      height: '400px',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    <Box
                      component="img"
                      src={service.banner}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                  </Box>
                  <Stack spacing={3} sx={{ width: { xs: '100%', md: '50%' } }} justifyContent="center" alignItems="center">
                    <Typography variant="h3" fontWeight="bold">
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {service.description}
                    </Typography>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        borderRadius: '12px',
                        px: 4,
                        py: 1.5
                      }}
                    >
                      Learn More
                    </Button>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Container>
        </Box>

        {/* Before/After Section */}
        <Box sx={{ 
          py: { xs: 8, md: 12 }, 
          bgcolor: '#cee8fa'
        }}>
          <Container maxWidth="lg">
            <Typography 
              variant="h2"
              textAlign="center"
              sx={{
                fontFamily: 'Montserrat',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #2E5CFF, #FF6B4A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 8
              }}
            >
              Our Results
            </Typography>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
              {beforeAfterImages.map((image, index) => (
                <Grid item xs={12} md={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Card 
                    component={motion.div}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    sx={{ 
                      borderRadius: '24px',
                      overflow: 'hidden',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                      width: '80%',
                    }}
                  >
                    <ReactCompareSlider
                      itemOne={<ReactCompareSliderImage src={image.before} alt="Before" />}
                      itemTwo={<ReactCompareSliderImage src={image.after} alt="After" />}
                      style={{ 
                        height: '300px'
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ 
          py: { xs: 8, md: 12 },
          bgcolor: 'white'
        }}>
          <Container maxWidth="lg">
            <Typography 
              variant="h2"
              textAlign="center"
              sx={{
                fontFamily: 'Montserrat',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #2E5CFF, #FF6B4A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 8
              }}
            >
              What Our Clients Say
            </Typography>
            <Grid container spacing={4}>
              {testimonials.map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    component={motion.div}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: '24px',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography variant="h1" color="primary.main" sx={{ mb: 2, fontSize: '3rem' }}>"</Typography>
                    <Typography variant="body1" sx={{ flex: 1, mb: 3 }}>{testimonial.comment}</Typography>
                    <Stack spacing={1} justifyContent="center" alignItems="center">
                      <Rating value={testimonial.rating} readOnly />
                      <Typography variant="h6" fontWeight="bold">{testimonial.name}</Typography>
                    </Stack>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ 
          py: { xs: 8, md: 12 }, 
          bgcolor: '#cee8fa'
        }} id="faq">
          <Container maxWidth="lg">
            <Typography 
              variant="h2"
              textAlign="center"
              sx={{
                fontFamily: 'Montserrat',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #2E5CFF, #FF6B4A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 8
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Stack spacing={2} maxWidth="800px" mx="auto">
              {faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  component={motion.div}
                  variants={fadeInUp}
                  sx={{
                    borderRadius: '16px !important',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    '&:before': { display: 'none' },
                    mb: 2,
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" fontWeight="600">{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography align='left'>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box id="contact" sx={{ 
          py: { xs: 8, md: 12 },
          bgcolor: 'white',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.05,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }
        }}>
          <Container maxWidth="lg" sx={{ position: 'relative' }}>
            <Typography 
              variant="h2"
              sx={{
                fontFamily: 'Montserrat',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #2E5CFF, #FF6B4A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 4
              }}
            >
              Get in Touch
            </Typography>
            
            <Grid container spacing={6}>
              {/* Left side - Map */}
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    minHeight: '500px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                  }}
                >
                  <iframe 
                    src="https://www.google.com/maps/embed/v1/place?q=30+Medway+Rd+Caraigieburn,+Melbourne+VIC+3000&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    style={{
                      border: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </Grid>

              {/* Right side - Contact Form */}
              <Grid item xs={12} md={6}>
                <Card
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    p: 4,
                    height: '100%',
                    borderRadius: '24px',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                  }}
                >
                  <Stack spacing={3}>
                    <Typography variant="h4" fontWeight="bold">Send us a message</Typography>
                    <TextField
                      name="name"
                      label="Your Name"
                      required
                      fullWidth
                    />
                    <TextField
                      name="phone"
                      label="Phone Number"
                      required
                      fullWidth
                    />
                    <TextField
                      name="message"
                      label="Message"
                      multiline
                      rows={4}
                      required
                      fullWidth
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isLoading}
                      sx={{ borderRadius: '12px', py: 1.5 }}
                    >
                      {isLoading ? <CircularProgress size={24} /> : 'Send Message'}
                    </Button>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Fade in={showScrollTop}>
          <Box
            onClick={scrollToTop}
            role="presentation"
            sx={{
              position: 'fixed',
              bottom: 24,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
            }}
          >
            <Fab
              color="primary"
              size="large"
              aria-label="scroll back to top"
              sx={{
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
                transition: 'transform 0.2s',
              }}
            >
              <KeyboardArrowUp />
            </Fab>
          </Box>
        </Fade>

        <Footer />

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Stack>
    </ThemeProvider>
  );
}

function ServicePage() {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const service = services.find(s => s.title.toLowerCase().replace(/ /g, '-') === serviceId);
  const theme = useTheme();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <ThemeProvider defaultMode='light' theme={theme}>
      <Stack minHeight="100vh" sx={{
        }}>
        <Navbar />
        
        {/* Hero Section */}
        <Box
          sx={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${service.banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            height: '80vh',
            width: '100%',
            overflow: 'hidden',
            backgroundColor: '#000',
          }}
        >
          
          {/* Text Overlay */}
          <Container 
            sx={{
              height: '100%',
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Stack maxWidth="1000px" alignItems="center" justifyContent="center">
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' },
                  lineHeight: 1.2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  mb: 3,
                }}
              >
                {service.title}
              </Typography>
              
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  maxWidth: '600px',
                  opacity: 0.9,
                  mb: 4,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  fontSize: { xs: '1rem', md: '1.5rem' },
                }}
              >
                {service.description}
              </Typography>

              <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="tel:0467788814"
                  sx={{
                    py: 2,
                    px: 4,
                    fontSize: '1.1rem',
                    backgroundColor: '#2E5CFF',
                    '&:hover': {
                      backgroundColor: '#1E3DB2',
                    },
                  }}
                >
                  Call Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    py: 2,
                    px: 4,
                    fontSize: '1.1rem',
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    },
                  }}
                  component="button" 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  Get a Free Quote
                </Button>
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: 8 }} >
          <Grid container spacing={6}>
            {/* Left Column - Main Content */}
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Card
                  elevation={0}
                  sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 4,
                    px: 4,
                    mb: 4,
                  }}
                >
                  {service.body && (
                    <Box sx={{ '& > *': { mb: 2 } }} >
                      <Markdown content={service.body} />
                    </Box>
                  )}
                </Card>
              </motion.div>
            </Grid>

            {/* Right Column - CTA and Quick Info */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Stack spacing={3} position="sticky" top={100}>
                  {/* Quick Contact Card */}
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      background: 'linear-gradient(135deg, #2E5CFF, #1E3DB2)',
                      color: 'white',
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold" mb={3}>
                      Get a Free Quote
                    </Typography>
                    <Stack spacing={2}>
                      <Button
                        href="tel:61467788814"
                        variant="contained"
                        size="large"
                        startIcon={<Call />}
                        sx={{
                          bgcolor: 'white',
                          color: 'primary.main',
                          '&:hover': { bgcolor: 'grey.100' },
                        }}
                      >
                        Call: 0467 788 814
                      </Button>
                      <Button
                        onClick={() => {
                          navigate('/');
                          setTimeout(() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                          }, 100);
                        }}
                        variant="outlined"
                        size="large"
                        startIcon={<Email />}
                        sx={{
                          borderColor: 'white',
                          color: 'white',
                          '&:hover': {
                            borderColor: 'grey.100',
                            bgcolor: 'rgba(255,255,255,0.1)',
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </Card>

                  {/* Why Choose Us Card */}
                  <Card
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      bgcolor: 'background.paper',
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold" mb={2}>
                      Why Choose Us
                    </Typography>
                    <Stack spacing={2}>
                      {[
                        { icon: '🏆', text: 'Licensed & Insured' },
                        { icon: '⚡', text: 'Same Day Service' },
                        { icon: '💯', text: 'Satisfaction Guaranteed' },
                        { icon: '💸', text: 'Competitive Pricing' },
                      ].map((item, index) => (
                        <Stack
                          key={index}
                          direction="row"
                          spacing={2}
                          alignItems="center"
                        >
                          <Typography fontSize="1.5rem">{item.icon}</Typography>
                          <Typography>{item.text}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Card>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        <Footer />
      </Stack>
    </ThemeProvider>
  );
}

export default App

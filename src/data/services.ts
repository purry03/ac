interface Service {
  title: string;
  image: string;
  description: string;
  details?: string[];
}

export const services: Service[] = [
  {
    title: "Split System Cleaning",
    image: "/images/web-development.jpg",
    description: "We create modern, responsive websites tailored to your business needs. Our web development services combine cutting-edge technology with user-friendly design to deliver exceptional digital experiences.",
    details: [
      "Custom website development using modern frameworks",
      "Responsive design for all devices",
      "E-commerce solutions",
      "Content Management Systems (CMS)",
      "Website maintenance and support",
      "Performance optimization"
    ]
  },
  {
    title: "Mobile Development",
    image: "/images/mobile-development.jpg",
    description: "Transform your ideas into powerful mobile applications. We develop native and cross-platform mobile apps that provide seamless user experiences across all devices.",
    details: [
      "iOS and Android app development",
      "Cross-platform development",
      "UI/UX design for mobile",
      "App testing and quality assurance",
      "App store submission",
      "Ongoing maintenance and updates"
    ]
  },
  {
    title: "Cloud Solutions",
    image: "/images/cloud-solutions.jpg",
    description: "Leverage the power of cloud computing for your business. We provide comprehensive cloud solutions that help you scale efficiently and securely manage your data.",
    details: [
      "Cloud infrastructure setup",
      "Cloud migration services",
      "Serverless architecture",
      "Cloud security implementation",
      "Performance monitoring",
      "24/7 support and maintenance"
    ]
  }
  // Add more services as needed
]; 
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, FreelanceExperience, Feedbacks, Hero, Navbar, Technology, Works, StarsCanvas, Footer } from './components';
import VercelAnalytics from './components/Analytics';
import VercelSpeedInsights from './components/SpeedInsights';
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const App = () => {
  return (
      <BrowserRouter>
        <ErrorBoundary>
          <div className="relative z-0 bg-primary">
            <Navbar />
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Hero />
            </div>
            <div className="relative z-0">
              <StarsCanvas />
              <About />
              <Technology />
              <Experience />
              <Works />
              {/* Education */}
              {/* Achievement & Certificate */}
              <FreelanceExperience />
              {/* Interests */}
              {/* <Feedbacks /> */}
              <Contact />
              <Footer />
              <VercelAnalytics />
              <VercelSpeedInsights />
            </div>
          </div>
        </ErrorBoundary>
      </BrowserRouter>
  );
};

export default App;

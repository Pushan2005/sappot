import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders the correct heading', () => {
    render(<Home />);
    const heading = screen.getByText(/Tech support made simple/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the "Open a ticket" button', () => {
    render(<Home />);
    const button = screen.getByRole('link', { name: /Open a ticket/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/tickets/new');
  });

  it('renders the "View tickets" button', () => {
    render(<Home />);
    const button = screen.getByRole('link', { name: /View tickets/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/tickets');
  });

  it('renders the "Why choose Sappot?" section heading', () => {
    render(<Home />);
    const heading = screen.getByText(/Why choose Sappot\?/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders feature cards', () => {
    render(<Home />);
    const fastResolutionCard = screen.getByText(/Fast Resolution/i);
    const simpleProcessCard = screen.getByText(/Simple Process/i);
    const securePlatformCard = screen.getByText(/Secure Platform/i);

    expect(fastResolutionCard).toBeInTheDocument();
    expect(simpleProcessCard).toBeInTheDocument();
    expect(securePlatformCard).toBeInTheDocument();
  });

  it('renders the "How it works" section heading', () => {
    render(<Home />);
    const heading = screen.getByText(/How it works/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the "How it works" steps', () => {
    render(<Home />);
    const step1 = screen.getByRole('heading', { name: /Create a ticket/i });
    const step2 = screen.getByRole('heading', { name: /Get matched with an expert/i });
    const step3 = screen.getByRole('heading', { name: /Problem solved/i });

    expect(step1).toBeInTheDocument();
    expect(step2).toBeInTheDocument();
    expect(step3).toBeInTheDocument();
  });

  it('renders the CTA section with the correct heading', () => {
    render(<Home />);
    const ctaHeading = screen.getByText(/Ready to get started\?/i);
    expect(ctaHeading).toBeInTheDocument();
  });

  it('renders the footer with company and legal sections', () => {
    render(<Home />);
    const companySection = screen.getByText(/Company/i);
    const legalSection = screen.getByText(/Legal/i);

    expect(companySection).toBeInTheDocument();
    expect(legalSection).toBeInTheDocument();
  });

  it('renders social media icons', () => {
    render(<Home />);
    const socialIcons = screen.getAllByRole('link');
    expect(socialIcons.length).toBeGreaterThan(0);
  });
});

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    
    render(<App />);
  
    
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      level: 1,
    });
  
    
    expect(topLevelHeading).toBeInTheDocument();
  });
  
  
  test("displays an image with alt text", () => {
    
    render(<App />);
  
    
    const profileImage = screen.getByAltText(/profile picture/i);
  
   
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src');
  });
  
 
  test("displays a second-level heading with the text `About Me`", () => {
    
    render(<App />);
  
    
    const aboutMeHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
  
    
    expect(aboutMeHeading).toBeInTheDocument();
  });
  
  
  test("displays a paragraph for the biography", () => {
    
    render(<App />);
  
    
    const bioParagraph = screen.getByText(/biography content/i);
  
    
    expect(bioParagraph).toBeInTheDocument();
  });
  
  
  test("displays a link to the GitHub page", () => {
    
    render(<App />);
  
   
    const githubLink = screen.getByRole('link', { name: /github/i });
  
    
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/your-username');
  });
  
  
  test("displays a link to the LinkedIn page", () => {
   
    render(<App />);
  
   
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
  
    
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/your-profile');
  });
  
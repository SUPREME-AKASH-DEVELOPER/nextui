// components/CustomButton.js
// This is a customizable button component built using Next.js and styled-components for dynamic styling

import React from 'react';
import styled from 'styled-components'; // Import styled-components to handle dynamic styling

// Styled button component using dynamic props for color, size, and hover effects
const Button = styled.button`
  background-color: ${(props) => props.bgColor || '#0070f3'}; /* Default background color is blue if no bgColor prop is provided */
  color: ${(props) => props.textColor || '#ffffff'}; /* Default text color is white if no textColor prop is provided */
  padding: ${(props) => 
    props.size === 'large' ? '15px 30px' : 
    props.size === 'small' ? '5px 15px' : 
    '10px 20px'}; /* Dynamic padding based on the size prop: large, small, or default medium */
  font-size: ${(props) => 
    props.size === 'large' ? '18px' : 
    props.size === 'small' ? '12px' : 
    '16px'}; /* Dynamic font-size based on size prop */
  border: none; /* Removes the default button border */
  border-radius: 5px; /* Adds a subtle roundness to the button's corners */
  cursor: pointer; /* Changes cursor to pointer on hover to indicate interactivity */
  transition: all 0.3s ease; /* Smooth transition for hover effects */
  
  &:hover {
    background-color: ${(props) => props.hoverBgColor || '#005bb5'}; /* Changes background on hover, defaults to a darker blue */
  }
`;

// Main CustomButton component, which takes props to customize its appearance
const CustomButton = ({ text, bgColor, textColor, size, hoverBgColor }) => {
  return (
    <Button 
      bgColor={bgColor} 
      textColor={textColor} 
      size={size} 
      hoverBgColor={hoverBgColor}
    >
      {text || 'Click Me'} {/* If no text prop is provided, default to "Click Me" */}
    </Button>
  );
};

// Exporting the CustomButton component to be used in other parts of the project
export default CustomButton;

/* 
Usage Example:
---------------
To use this component, import it into any Next.js page or component and pass the desired props:

import CustomButton from '../components/CustomButton';

<CustomButton text="Primary Button" size="large" />
<CustomButton text="Secondary Button" bgColor="#ff4081" hoverBgColor="#e91e63" />
<CustomButton text="Small Button" size="small" bgColor="#4caf50" hoverBgColor="#388e3c" />
*/

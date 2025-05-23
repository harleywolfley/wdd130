// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements we need to interact with
    const color1Input = document.getElementByClass('color1'); // First color picker input
    const color2Input = document.getElementByClass('color2'); // Second color picker input
    const mixedColorDiv = document.getElementByClass('mixedColor'); // Div to display the mixed color
    const hexCodeParagraph = document.getElementByClass('hexCode'); // Paragraph to display the hex code
    const pageHeader = document.getElementByClass('pageHeader'); // The header element
    const pageFooter = document.getElementByClass('pageFooter'); // The footer element
  
    // Function to convert a hexadecimal color code (like #rrggbb) to an RGB array [r, g, b]
    function hexToRgb(hex) {
      // Remove the '#' symbol from the beginning of the hex code
      const bigint = parseInt(hex.slice(1), 16);
      // Extract the red, green, and blue color components using bitwise operations
      const r = (bigint >> 16) & 255; // Right-shift by 16 bits and get the last 8 bits (red)
      const g = (bigint >> 8) & 255;  // Right-shift by 8 bits and get the last 8 bits (green)
      const b = bigint & 255;       // Get the last 8 bits (blue)
      return [r, g, b]; // Return the RGB values as an array
    }
  
    // Function to convert an RGB array [r, g, b] to a hexadecimal color code (like #rrggbb)
    function rgbToHex(r, g, b) {
      // Map each RGB component to its hexadecimal representation
      return '#' + [r, g, b].map(x => {
        const hex = x.toString(16); // Convert the number to a base-16 (hexadecimal) string
        // Ensure each hex value is two digits long by padding with a '0' if necessary
        return hex.length === 1 ? '0' + hex : hex;
      }).join(''); // Join the hex values together into a single string
    }
  
    // Function to calculate the relative luminance of an RGB color
    // This is used to determine if white or black text will have better contrast
    function getLuminance(rgb) {
      // Constants for the formula
      const a = 0.055;
      const multipliers = [0.2126, 0.7152, 0.0722]; // Weights for red, green, and blue
  
      // Adjust RGB values based on a threshold (sRGB to linear RGB conversion)
      const adjustedRgb = rgb.map(v => {
        v /= 255; // Normalize the RGB value to the range [0, 1]
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + a) / (1 + a), 2.4);
      });
  
      // Calculate the luminance using the formula
      return adjustedRgb.reduce((sum, val, index) => sum + val * multipliers[index], 0);
    }
  
    // Function to mix the two selected colors and update the display
    function mixColors() {
      // Get the RGB values of the two selected colors
      const color1 = hexToRgb(color1Input.value);
      const color2 = hexToRgb(color2Input.value);
  
      // Calculate the average of each RGB component to get the mixed color
      const mixedR = Math.round((color1[0] + color2[0]) / 2);
      const mixedG = Math.round((color1[1] + color2[1]) / 2);
      const mixedB = Math.round((color1[2] + color2[2]) / 2);
  
      // Convert the mixed RGB values back to a hexadecimal color code
      const mixedHex = rgbToHex(mixedR, mixedG, mixedB);
  
      // Update the background color of the result div
      mixedColorDiv.style.backgroundColor = mixedHex;
      // Update the text content of the hex code paragraph
      hexCodeParagraph.textContent = mixedHex;
  
      // Determine the luminance of the mixed color to decide on the text color for header and footer
      const luminance = getLuminance([mixedR, mixedG, mixedB]);
      // If the luminance is greater than 0.5, use black text; otherwise, use white text for better contrast
      const textColor = luminance > 0.5 ? '#000' : '#fff';
  
      // Update the text color of the header and footer
      pageHeader.style.color = textColor;
      pageFooter.style.color = textColor;
    }
  
    // Add event listeners to the color input elements
    // When the value of either color picker changes, call the mixColors function
    color1Input.addEventListener('input', mixColors);
    color2Input.addEventListener('input', mixColors);
  
    // Call the mixColors function once when the page loads to set the initial mixed color
    // and the initial text color of the header and footer based on the default color values
    mixColors();
  });
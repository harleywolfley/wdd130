document.addEventListener('DOMContentLoaded', () => {
    const color1Input = document.getElementById('color1');
    const color2Input = document.getElementById('color2');
    const mixedColorDiv = document.getElementById('mixedColor');
    const hexCodeParagraph = document.getElementById('hexCode');
  
    function hexToRgb(hex) {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return [r, g, b];
    }
  
    function rgbToHex(r, g, b) {
      return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('');
    }
  
    function mixColors() {
      const color1 = hexToRgb(color1Input.value);
      const color2 = hexToRgb(color2Input.value);
  
      const mixedR = Math.round((color1[0] + color2[0]) / 2);
      const mixedG = Math.round((color1[1] + color2[1]) / 2);
      const mixedB = Math.round((color1[2] + color2[2]) / 2);
  
      const mixedHex = rgbToHex(mixedR, mixedG, mixedB);
      mixedColorDiv.style.backgroundColor = mixedHex;
      hexCodeParagraph.textContent = mixedHex;
    }
  
    color1Input.addEventListener('input', mixColors);
    color2Input.addEventListener('input', mixColors);
  
    mixColors(); // Initial call to set the initial mixed color
  });
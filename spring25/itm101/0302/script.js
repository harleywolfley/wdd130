document.addEventListener('DOMContentLoaded', () => {
    const color1Input = document.getElementById('color1');
    const color2Input = document.getElementById('color2');
    const colorDisplay1 = document.getElementById('colorDisplay1');
    const colorDisplay2 = document.getElementById('colorDisplay2');
    const mixedColorDisplayLarge = document.getElementById('mixedColorDisplayLarge');
    const mixedColorDisplaySmall1 = document.getElementById('mixedColorDisplaySmall1');
    const mixedColorDisplaySmall2 = document.getElementById('mixedColorDisplaySmall2');
    const hexCodeParagraph = document.getElementById('hexCode');
    const pageHeader = document.getElementById('pageHeader');
    const pageFooter = document.getElementById('pageFooter');
  
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
  
    function getLuminance(rgb) {
      const a = 0.055;
      const multipliers = [0.2126, 0.7152, 0.0722];
      const adjustedRgb = rgb.map(v => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + a) / (1 + a), 2.4);
      });
      return adjustedRgb.reduce((sum, val, index) => sum + val * multipliers[index], 0);
    }
  
    function updateColorDisplays() {
      colorDisplay1.style.backgroundColor = color1Input.value;
      colorDisplay2.style.backgroundColor = color2Input.value;
    }
  
    function mixColors() {
      const color1 = hexToRgb(color1Input.value);
      const color2 = hexToRgb(color2Input.value);
  
      const mixedR = Math.round((color1[0] + color2[0]) / 2);
      const mixedG = Math.round((color1[1] + color2[1]) / 2);
      const mixedB = Math.round((color1[2] + color2[2]) / 2);
  
      const mixedHex = rgbToHex(mixedR, mixedG, mixedB);
      mixedColorDisplayLarge.style.backgroundColor = mixedHex;
      mixedColorDisplaySmall1.style.backgroundColor = mixedHex;
      mixedColorDisplaySmall2.style.backgroundColor = mixedHex;
      hexCodeParagraph.textContent = mixedHex;
  
      pageHeader.style.backgroundColor = mixedHex;
      pageFooter.style.backgroundColor = mixedHex;
  
      const luminance = getLuminance([mixedR, mixedG, mixedB]);
      const textColor = luminance > 0.5 ? '#000' : '#fff';
      pageHeader.style.color = textColor;
      pageFooter.style.color = textColor;
    }
  
    color1Input.addEventListener('input', () => {
      updateColorDisplays();
      mixColors();
    });
    color2Input.addEventListener('input', () => {
      updateColorDisplays();
      mixColors();
    });
  
    updateColorDisplays(); // Initial call to set the initial color displays
    mixColors(); // Initial call
  });
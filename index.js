const textElements = [
    "Ascend",
    "Football tournament   @Vizag",
    "Register Now!!",
  ];
  
  const textElement = document.getElementById('text');
  const cursorElement = document.getElementById('cursor');
  
  let textIndex = 0;
  let charIndex = 0;
  let isErasing = false;
  
  function typeText() {
    const currentText = textElements[textIndex];
    
    if (textIndex === 0) {
        textElement.innerHTML = `<span class="gradient-text">${currentText.substring(0, charIndex)}</span>`;
    } else {
        textElement.innerHTML = currentText.substring(0, charIndex);
    }
  
    if (charIndex <= currentText.length && !isErasing) {
        charIndex++;
    } else if (charIndex >= 0 && isErasing) {
        charIndex--;
    } else {
        isErasing = !isErasing;
        textIndex = (textIndex + (isErasing ? 0 : 1)) % textElements.length;
    }
  
    cursorElement.style.display = isErasing ? 'none' : 'inline';
  
    let typingSpeed = isErasing ? 60 : 100;
    setTimeout(typeText, typingSpeed);
  }
  
  typeText();
  
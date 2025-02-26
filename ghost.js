const ghost = document.querySelector('.ghost');

document.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(e) {

  // Get mouse position
  const x = e.pageX; 
  const y = e.pageY;

  // Center position 
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;  
  
  // Calculate distance from center
  // and scale it down by 40x
  const distX = (x - centerX) / 40; 
  const distY = (y - centerY) / 40;

  // Set position using distance 
  // from center scaled down
  ghost.style.left = centerX + distX + 'px';
  ghost.style.top = centerY + distY + 'px';

}
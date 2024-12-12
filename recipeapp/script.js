// Select elements
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');

// Add click event listener to toggle button
toggleBtn.addEventListener('click', () => {
  // Toggle the 'active' class on the navigation links
  navLinks.classList.toggle('active');

  // Switch icons for open and close
  const menuIcon = toggleBtn.querySelector('.menu');
  const closeIcon = toggleBtn.querySelector('.close');
  menuIcon.style.display = navLinks.classList.contains('active') ? 'none' : 'inline';
  closeIcon.style.display = navLinks.classList.contains('active') ? 'inline' : 'none';
});

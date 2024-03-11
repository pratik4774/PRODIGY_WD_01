// JavaScript code to change nav item color on hover
const navItems = document.querySelectorAll('.nav-li');

navItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.color = 'red';
  });

  item.addEventListener('mouseleave', function() {
    this.style.color = '#fff';
  });
});
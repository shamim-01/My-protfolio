// --- 1. Initialize AOS (Animate On Scroll) ---
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// --- 2. Navbar Scroll Effect ---
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// --- 3. Typed.js Configuration (More Animated) ---
const typed = new Typed('.typing-text', {
  strings: [
    'HTML & CSS',
    'JavaScript (ES6+)',
    'React.js',
    'WordPress Development',
    'Tailwind CSS',
    'Bootstrap 5',
    'Responsive Design',
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
  showCursor: true,
  cursorChar: '|',
});

// --- 4. Three.js Background Animation ---
const initThreeJS = () => {
  const container = document.getElementById('canvas-container');

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Create Geometry (Icosahedron for futuristic look)
  const geometry = new THREE.IcosahedronGeometry(10, 2);
  const material = new THREE.MeshBasicMaterial({
    color: 0x64ffda,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  // Add Particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 700;
  const posArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 50; // Spread particles
  }

  particlesGeometry.setAttribute(
    'position',
    new THREE.BufferAttribute(posArray, 3),
  );
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x64ffda,
    transparent: true,
    opacity: 0.8,
  });
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  camera.position.z = 15;

  // Mouse interaction
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', event => {
    mouseX = event.clientX / window.innerWidth - 0.5;
    mouseY = event.clientY / window.innerHeight - 0.5;
  });

  // Animation Loop
  const animate = () => {
    requestAnimationFrame(animate);

    // Rotate sphere
    sphere.rotation.y += 0.002;
    sphere.rotation.x += 0.001;

    // Rotate particles based on mouse
    particlesMesh.rotation.y = mouseY * 0.5;
    particlesMesh.rotation.x = mouseX * 0.5;

    renderer.render(scene, camera);
  };

  animate();

  // Handle Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
};

initThreeJS();

// --- 5. Vanilla Tilt Configuration ---
VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
  max: 5,
  speed: 400,
  glare: true,
  'max-glare': 0.2,
});

// --- 6. GSAP Animations for Hero Text ---
gsap.from('.greeting', { opacity: 0, y: 20, duration: 1, delay: 0.5 });
gsap.from('.name', { opacity: 0, y: 20, duration: 1, delay: 0.7 });
gsap.from('.title', { opacity: 0, y: 20, duration: 1, delay: 0.9 });
gsap.from('.description', { opacity: 0, y: 20, duration: 1, delay: 1.1 });
gsap.from('.cta-buttons', { opacity: 0, y: 20, duration: 1, delay: 1.3 });

// --- 7. Mobile Menu Toggle ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.right = '0';
    navLinks.style.background = '#112240';
    navLinks.style.width = '100%';
    navLinks.style.padding = '20px';
    navLinks.style.textAlign = 'center';
  }
});

// This is the fix for game.js
// Add this function at the beginning of your game.js file

// Function to get base URL for GitHub Pages
function getBaseUrl() {
  // Check if we're on GitHub Pages
  if (window.location.hostname.includes('github.io')) {
    // Extract the repository name from the pathname
    const pathParts = window.location.pathname.split('/');
    if (pathParts.length > 1) {
      const repoName = pathParts[1];
      return `/${repoName}`;
    }
  }
  // Return empty string for localhost
  return '';
}

// Update path handling in loadScene function
function loadScene(sceneKey) {
  const baseUrl = getBaseUrl();
  const scene = scenes[sceneKey];
  
  // Fix the background image path
  const backgroundPath = scene.background.startsWith('./') 
    ? baseUrl + scene.background.substring(1) 
    : baseUrl + scene.background;
  
  // Rest of your loadScene code with the fixed path
  const gameDiv = document.getElementById("game");
  const sceneBackground = document.getElementById("scene-background");
  // ... other variables
  
  // Set background with fixed path
  sceneBackground.style.backgroundImage = `url('${backgroundPath}')`;
  // ... rest of the function
}

// Update all scene background paths in your scenes object
// For each scene in your scenes object:
Object.keys(scenes).forEach(key => {
  // Ensure background paths use the correct format
  if (scenes[key].background.startsWith('./assets/')) {
    scenes[key].background = scenes[key].background.replace('./assets/', '/assets/');
  }
});

// Also update the sw.js file to use relative paths:
// const CACHE_NAME = 'pope-game-cache-v1';
// const urlsToCache = [
//   './',
//   './index.html',
//   './styles.css',
//   './game.js',
//   './sw.js',
//   './favicon.ico',
//   './assets/medieval_village.png',
//   './assets/villager.png',
//   './assets/plant_icon.png',
//   './assets/question_mark.png'
// ];

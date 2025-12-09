/* script.js - Version optimisée */

// On attend que le HTML soit prêt (plus rapide que 'load')
document.addEventListener('DOMContentLoaded', () => {
  
  // Gestion de l'effet d'apparition des images (nécessaire pour le CSS)
  const imgs = document.querySelectorAll('.card img');
  
  imgs.forEach(img => {
    // Si l'image est déjà dans le cache du navigateur, on l'affiche tout de suite
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      // Sinon, on attend qu'elle finisse de charger pour l'afficher
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });

});
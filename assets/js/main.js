(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });
})();

// Obtén la casilla de verificación del menú

// Agrega un controlador de eventos a cada enlace del menú
//menuLinks.forEach(function(link) {
  //link.addEventListener('click', function() {
    // Desmarca la casilla de verificación del menú
    //menuTrigger.removeAttribute('checked');
    //menuTrigger.checked = false;
    // menuTrigger.click();
  //});
//});
// menú desactivado cuando se navega a otra página
// window.addEventListener('beforeunload', function() {
//    // Desmarca la casilla de verificación del menú
//    var menuTrigger = document.getElementById('menu-trigger');
//    menuTrigger.checked = false;
//  });
document.addEventListener('visibilitychange', function() {
  var menuTrigger = document.getElementById('menu-trigger');
  
  if (document.visibilityState === 'hidden') {
    // Cambiar a otra pestaña
    menuTrigger.checked = false;
  } else {
    // Regresar a la pestaña actual
    menuTrigger.disabled = false;
  }
});



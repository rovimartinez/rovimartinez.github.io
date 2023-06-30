

// Temporizador de cierre de sesión

var tiempo = 300000; // 5 minutos
var tiempo2 =290000; // 10 segundos antes de los 5 minutos

 let logoutTimer; // Variable para almacenar el temporizador de cierre de sesión

    const startLogoutTimer = () => {
      logoutTimer = setTimeout(() => {
        signOut(auth)
          .then(() => {
            // Cerrar sesión automáticamente
            window.location.href = 'index.html'; // Redireccionar a index.html
          })
          .catch((error) => {
            // Manejar errores de cierre de sesión
            console.log(error);
            alert('Error al cerrar sesión.');
          });
      }, tiempo); // Cerrar sesión después de 10 segundos de inactividad
    };

    const resetLogoutTimer = () => {
      clearTimeout(logoutTimer); // Reiniciar el temporizador de cierre de sesión
      startLogoutTimer(); // Volver a iniciar el temporizador
    };

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is not authenticated, redirect to index.html
        window.location.href = 'index.html';
      }
    });

    const logoutForm = document.getElementById('logoutForm');

    logoutForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent form submission

      signOut(auth)
        .then(() => {
          // Usuario cerró sesión correctamente
          window.location.href = 'index.html'; // Redirect to index.html
        })
        .catch((error) => {
          // Manejar errores de cierre de sesión
          console.log(error);
          alert('Error al cerrar sesión.');
        });
    });

// Reiniciar temporizador al hacer clic o interactuar con la página
    document.addEventListener('click', resetLogoutTimer);
    document.addEventListener('keydown', resetLogoutTimer);
    document.addEventListener('mousemove', resetLogoutTimer);
    document.addEventListener('scroll', resetLogoutTimer);
    document.addEventListener('touchstart', resetLogoutTimer);

    // Iniciar el temporizador de cierre de sesión al cargar la página
    startLogoutTimer();

 var timeout;

    function showInactivePopup() {
      var popup = document.getElementById('inactive-popup');
      popup.style.display = 'block';

      var countdownElement = document.getElementById('countdown');
      countdownElement.textContent = '10';

      var countdown = 10;
      timeout = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown === 0) {
          hideInactivePopup();
        }
      }, 1000);
    }

    function hideInactivePopup() {
      var popup = document.getElementById('inactive-popup');
      popup.style.display = 'none';

      clearInterval(timeout);
    }

    var inactivityTime = tiempo2; // 10 segundos de inactividad
    var timeoutID;

    function resetTimer() {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(showInactivePopup, inactivityTime);
	hideInactivePopup();
    }

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('scroll', resetTimer);
    window.addEventListener('touchstart', resetTimer);

    resetTimer();

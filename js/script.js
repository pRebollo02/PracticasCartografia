// Botón GitHub
document.getElementById('github').addEventListener('click', function() {
    window.open('https://github.com/RESMdev/Proyecto_G.git', '_blank');
});

// Botón Figma
document.getElementById('figma').addEventListener('click', function() {
    window.open('https://www.figma.com/design/egSAvd4kXvuLLsOLi9w7s3/Geo?node-id=0-1&t=RszUST16ujqir54R-1', '_blank');
});

// Botón Pablo
document.getElementById('pablo').addEventListener('click', function() {
    window.open('https://github.com/pRebollo02', '_blank');
});

// Botón RESM
document.getElementById('resm').addEventListener('click', function() {
    window.open('https://www.instagram.com/___resm_/?next=%2F', '_blank');
});

// Mecánica clickeable
document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('homeButton'); // Botón de Home
    const homeImage = document.getElementById('homeImage'); // Imagen de la página principal
    
    let url = ''; // Definir la variable url en el ámbito adecuado

    document.getElementById('abrirMapa').disabled = true;

    // Función para mostrar la visualización y cambiar la imagen
    document.querySelectorAll('.clicleable').forEach(function(cajita) {
      cajita.addEventListener('click', function() {
        const id = cajita.getAttribute('data-id'); // Obtener el data-id de la caja clickeada
        url = cajita.getAttribute('data-url'); // Obtener la URL desde el data-url

        console.log('Elemento clickeado:', id);
        if (url) {
          console.log('URL del elemento:', url); // Mostrar la URL en la consola
        }

        // Cambiar la imagen del Home a una imagen de visualización (puedes cambiarla según lo desees)
        homeImage.src = '/assets/icono/home-d.svg'; // Cambia esta ruta por la imagen que desees para la visualización
  
        // Ocultar todos los visualizadores
        document.querySelectorAll('.visualizador').forEach(function(visualizador) {
          visualizador.style.display = 'none';
        });
  
        // Mostrar el visualizador correspondiente
        const visualizador = document.querySelector(`#${id}`);
        if (visualizador) {
          visualizador.style.display = 'block';
        }

        mostrarMapa();
        
        //Recalcular tamaño mapas
        if (id === 'rectangle-3' || id === 'rectangle-7' || id === 'rectangle-8') {
          console.log("|Mapa|");
          //mostrarMapa();
        } else {
          console.log("|Imagen|");
        }

        // Activar el botón solo si el clic fue en un rectangle-5 o rectangle-6
        if (id === 'rectangle-5' || id === 'rectangle-6') {
          console.log('Clic en rectangle-5 o rectangle-6'); // Verificar si entra aquí
          document.getElementById('abrirMapa').disabled = false;
          console.log('Botón reedirigido a:', url);
        } else {
          // Deshabilitar el botón si no es rectangle-5 o rectangle-6
          document.getElementById('abrirMapa').disabled = true;
        }
      });
    });

    // Redirigir cuando el botón es clickeado
    document.getElementById('abrirMapa').addEventListener('click', function () {
      if (document.getElementById('abrirMapa').disabled === false && url) {
        console.log('Redirigiendo a la URL:', url);
        window.location.href = url; // Redirigir a la URL almacenada
      }
    });
  
    // Función para volver a la página principal
    homeButton.addEventListener('click', function() {
      // Cambiar la imagen de vuelta a la de la página principal
      homeImage.src = '/assets/icono/home.svg'; // Cambia esta ruta por la imagen que usas para la página principal
      
      // Ocultar todos los visualizadores y mostrar todas las prácticas nuevamente
      document.querySelectorAll('.visualizador').forEach(function(visualizador) {
        visualizador.style.display = 'none'; // Oculta todas las visualizaciones
      });
  
      // Mostrar todas las cajas de prácticas de nuevo
      document.querySelectorAll('.clicleable').forEach(function(cajita) {
        cajita.style.display = 'block'; // Muestra todas las cajas de prácticas
      });
    });
  });
  

    //Funciión para arrastrar y dropear
    document.addEventListener('DOMContentLoaded', function() {
        // Función para hacer los elementos arrastrables
        document.querySelectorAll('.arrastrable').forEach(function(cajita) {
          cajita.addEventListener('dragstart', function(event) {
            // Guardamos el id de la caja que se está arrastrando en el dataTransfer del evento
            event.dataTransfer.setData('text', cajita.getAttribute('data-id'));
          });
        });
      
        // Función para permitir que el contenedor acepte el drop
        const groupContainer = document.querySelector('.group');
        groupContainer.addEventListener('dragover', function(event) {
          // Prevenir el comportamiento por defecto para permitir el drop
          event.preventDefault();
        });
      
        // Función para manejar el evento de "soltar"
        groupContainer.addEventListener('drop', function(event) {
          // Prevenir el comportamiento por defecto (como abrir enlaces)
          event.preventDefault();
      
          // Obtener el id de la caja que fue arrastrada
          const id = event.dataTransfer.getData('text');
      
          // Mostrar la práctica correspondiente
          document.querySelectorAll('.visualizador').forEach(function(visualizador) {
            visualizador.style.display = 'none'; // Ocultamos todas las prácticas
          });
          
          // Cambiar la imagen del Home a una imagen de visualización (puedes cambiarla según lo desees)
        homeImage.src = '/assets/icono/home-d.svg'; // Cambia esta ruta por la imagen que desees para la visualización

          // Mostrar el visualizador correspondiente basado en el id
          const visualizador = document.querySelector(`#${id}`);
          if (visualizador) {
            visualizador.style.display = 'block'; // Hacemos visible la práctica correspondiente
          }
        });
      
        // Función para manejar la lógica del botón "Home"
        const homeButton = document.getElementById('homeButton');
        const homeImage = document.getElementById('homeImage');
        
        homeButton.addEventListener('click', function() {
          // Volver a la imagen inicial y ocultar todas las visualizaciones
          homeImage.src = '/assets/icono/home.svg';
          document.querySelectorAll('.visualizador').forEach(function(visualizador) {
            visualizador.style.display = 'none';
          });
      
          // Mostrar todas las cajas de prácticas
          document.querySelectorAll('.clicleable').forEach(function(cajita) {
            cajita.style.display = 'block';
          });
        });
      });
      
            
//Función descarga
document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar el drag and drop
    const downloadArea = document.querySelector('.descargar');

    downloadArea.addEventListener('dragover', function(e) {
        e.preventDefault(); // Prevenir el comportamiento predeterminado
        // Aquí podrías cambiar el estilo del área de descarga para indicar que se puede soltar
        downloadArea.classList.add('drag-over');
    });

    downloadArea.addEventListener('dragleave', function() {
        // Eliminar el estilo de "drag-over" cuando el elemento deje el área
        downloadArea.classList.remove('drag-over');
    });

    downloadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        // Obtener el data-id de la caja que se soltó
        const id = e.dataTransfer.getData('text/plain'); 

        // Aquí puedes hacer que se descargue el archivo correspondiente
        // Vamos a suponer que cada práctica tiene un archivo relacionado, por ejemplo, un PDF o archivo .zip
        const archivo = obtenerArchivoDePractica(id);  // Esta función debe devolver la URL del archivo a descargar
        
        if (archivo) {
            // Crear un link para descargar el archivo
            const link = document.createElement('a');
            link.href = archivo;  // URL del archivo de la práctica
            link.download = id + ".pdf";  // Nombre del archivo a descargar (puedes modificar la extensión según sea necesario)
            link.click();  // Simula un click en el enlace para descargar
        }

        // Eliminar el estilo de "drag-over"
        downloadArea.classList.remove('drag-over');
    });

    // Función que devuelve la URL del archivo correspondiente basado en el ID
    function obtenerArchivoDePractica(id) {
        // Aquí puedes tener una lógica para asociar cada ID de práctica con su archivo
        // Ejemplo:
        const archivos = {
            'rectangle-1': 'assets/practicas/3.TempLluv/3.PRECIPITACIONES.pdf',
            'rectangle-3': 'assets/practicas/4.ZONAS_VALIDAS.zip',
            'rectangle-2': 'assets/practicas/3.TempLluv/3.TEMPERATURAS.pdf',
            'rectangle-4': '/assets/archivos/pdf04.pdf',
            'rectangle-5': 'assets/practicas/8.Practica/Contenedores_Rebollo.html',
            'rectangle-6': 'assets/practicas/8.Practica/Accidentes_Madrid_Rebollo.html',
            'rectangle-7': '/assets/archivos/pdf07.pdf',
            'rectangle-8': '/assets/archivos/pdf08.pdf',
            'rectangle-9': '/assets/archivos/pdf09.pdf',
            // Agregar más prácticas según sea necesario
        };

        return archivos[id];
    }
});

//Modo día-noche
// Obtener el botón y el contenedor del fondo
const modoDiaBtn = document.getElementById('modoDiaBtn');
const body = document.body;

// Verificar si el usuario tiene una preferencia guardada
if (localStorage.getItem('modo') === 'dia') {
    body.classList.add('modo-dia');
} else {
    body.classList.add('modo-noche');
}

// Cambiar entre los modos y guardar la preferencia
modoDiaBtn.addEventListener('click', () => {
    if (body.classList.contains('modo-dia')) {
        body.classList.remove('modo-dia');
        body.classList.add('modo-noche');
        localStorage.setItem('modo', 'noche');  // Guardar preferencia de modo noche
    } else {
        body.classList.remove('modo-noche');
        body.classList.add('modo-dia');
        localStorage.setItem('modo', 'dia');  // Guardar preferencia de modo día
    }
});

// //ENES-idioma-traducir
// // Mapeo de elementos del DOM
// const elementsToTranslate = {
//   practicas: document.querySelector('.text-wrapper'),
//   visualizar: document.querySelector('.div'),
//   abrirMapa: document.querySelector('#abrirMapa'),
// };

// // Estado inicial del idioma (por defecto Español)
// let currentLanguage = localStorage.getItem('language') || 'es';

// // Función para cambiar el idioma
// async function changeLanguage() {
//   try {
//     // Cambiar el idioma al opuesto
//     currentLanguage = currentLanguage === 'es' ? 'in' : 'es';
//     localStorage.setItem('language', currentLanguage);

//     // Cargar el archivo de idioma correspondiente
//     const response = await fetch(`./idiomas/${currentLanguage}.json`);
    
//     // Verificar si la carga fue exitosa
//     if (!response.ok) {
//       throw new Error(`No se pudo cargar el archivo de idioma: ${response.statusText}`);
//     }

//     const translations = await response.json();

//     // Actualizar los textos en el DOM
//     elementsToTranslate.practicas.textContent = translations.practicas;
//     elementsToTranslate.visualizar.textContent = translations.visualizar;
//     elementsToTranslate.abrirMapa.textContent = translations.abrirMapa;

//     // Cambiar el ícono si fuera necesario
//     elementsToTranslate.toggleLangButton.src =
//       currentLanguage === 'es'
//         ? '../assets/icono/enes-d.svg'
//         : '../assets/icono/enes-c.svg'; // Cambia por la ruta de tu ícono
//   } catch (error) {
//     console.error('Error al cargar las traducciones:', error);
//   }
// }

// // Event Listener para el botón de cambio de idioma
// elementsToTranslate.toggleLangButton.addEventListener('click', changeLanguage);


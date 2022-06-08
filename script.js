

window.onload = function () {


    // Variables
    
    const IMAGENES = [
        'img/arquero.png',
        'img/bruja.png',
        'img/caballero.png',
        'img/dragon.png',
        'img/goblin.webp',
        'img/golem.png',
        'img/los-pillos.png',
        'img/Miner_info.webp',
        'img/montaPuercos.webp',
        'img/Pekka.webp',
        'img/principe.png'
    ];

    

    const TEXTOS = [
        'Arquero: Dispara una flecha mágica que atraviesa y daña a los enemigos que se interponen en su camino. No es ningún truco, ¡es magia! Arquero mágico es una carta de rareza legendaria de Clash Royale que puede obtenerse a partir de la arena 5.',
        'Bruja nocturna: Es una tropa de base constructora que proviene de Clash Royale, junto con el bombardero y el bebé dragón. Sin embargo, dispara el mismo proyectil que la Bruja, a diferencia de su contraparte cuerpo a cuerpo de Clash Royale, a pesar de blandir un hacha.',
        'Caballero: Se puede utilizar como tanque para tropas más pequeñas como los Duendes. Es una gran carta para usar al frente de un mini-ataque. Tiene una gran sinergia en particular con los mazos de carnada de hechizos, y con el Barril de duendes, además es también común en mazos de Bait junto a la Valquiria.',
        'Dragon.',
        'Sneaky goblings: Es una Súper Tropa basada en el Goblin. Se puede desbloquear aumentando el Goblin cuando el Goblin tiene al menos el nivel 7 y cuando el Ayuntamiento se actualiza al nivel 11 o superior.',
        'Golem: Es lento, pero persistente, y solo ataca las estructuras. Cuando se destruye, explota y se convierte en dos golemitas que infligen daño en área. Gólem es una carta de rareza épica de Clash Royale que puede obtenerse a partir de la arena 3.',
        'Los pillos: Está formada por dos "niñas pillas" y un "niño pillo", el cual tiene la función de defender a sus amigas mientras estas lanzan "chicles" a sus enemigos. Por lo tanto, la función de esta carta es muy sencilla: realizar el daño con las niñas pillas mientras distraemos con el niño pillo.',
        'Minero: Es una carta legendaria que puede obtenerse de los cofres una vez alcanzamos la arena 6. Cuesta 3 de elixir, una cifra bastante asequible, y puede desplegarse en cualquier parte de la Arena. Tiene bastantes puntos de vida, 1.000 a nivel 1 y de 1.460 a nivel 5, que no está nada mal.',
        'Montapuercos: Es una tropa terrestre rápida con puntos de vida medios, poco daño y la capacidad de saltar sobre los muros enemigos. Se desbloquea en el nivel 2 del Cuartel oscuro.',
        'Pekka:Es una tropa poderosa y puede hacer bastante daño con la colocación y el apoyo correctos. Hace daño masivo a un objetivo a la vez. Sólo a niveles decentes, una P.E.K.K.A puede matar a un Bárbaro de un solo golpe.',
        'Príncipe:Es una tropa muy fuerte, además que tiene una gran velocidad, acompañar esta carta con otras unidades que ataquen con daño en área suele ser un buen combo.'
    ];

    const NOMBRES = [
        'Arquero',
        'Bruja nocturna',
        'Caballero',
        'Dragon',
        'Sneaky goblings',
        'Golem',
        'Los pillos',
        'Minero',
        'Montapuercos',
        'Pekka',
        'Príncipe'
    ];

    var posicionAnt = Number(localStorage.getItem('posicion'));
    let posicionActual = 0 + posicionAnt;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $info = document.querySelector('#info');
    let $imagen = document.querySelector('#canvas');
  

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
     function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            document.getElementById("avanzar").src="img/boderagris.png";
        } else {
            document.getElementById("retroceder").src="img/boizqazul.png";
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            document.getElementById("retroceder").src="img/boizqgris.png";
        } else {
            document.getElementById("avanzar").src="img/boderazul.png";
            posicionActual--;
        }
        renderizarImagen();
        
    }

    function infoFoto(){
        document.getElementById("clara").innerHTML = "<div id='arriba'><button type='button' id='volver'>Volver</button></div><canvas id='canvasInfo'></canvas><div id='textoInfo'>gggggg</div><div id='abajo'></div>";
        let $imagenInfo = document.querySelector('#canvasInfo');
        let $volver = document.querySelector('#volver');
        const button = document.querySelector('button');
        button.setAttribute('style', 'background-color: blue; color: white');
    
        $imagenInfo.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        document.getElementById("textoInfo").textContent=TEXTOS[posicionActual];
        $volver.addEventListener('click',retornar);
    }

    // local store

    function retornar(){
        localStorage.setItem('posicion', posicionActual);
        window.location.reload()

        renderizarImagen();
    }
    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        document.getElementById("info").textContent=NOMBRES[posicionActual];
    
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $info.addEventListener('click',infoFoto);

    // Iniciar
    renderizarImagen();
} 

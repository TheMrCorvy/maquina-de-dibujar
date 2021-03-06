1) mostrar el lienzo
2) mostrar la paleta de colores
3) mostrar las opciones del estado del lapiz
4) comenzar a pintar



Comenzamos llamando a las funciones que inician el programa

-------

Para no tener que ingresar 2 veces la cantidad de filas y columnas (ya que estos valores serán necesarios en la función iniciarLapiz),
lo que voy a hacer es que cuando se llame a mostrarLienzo(), ésta función retorne dichos valores, para ser enviados como parámetros
a iniciarLapiz()

constante cantidadFilasColumnas = función mostrarLienzo() recibe como parámetros: la cantidad de filas, y la cantidad de columnas

función mostrarPaleta() no recibe parámetros

función iniciarLapiz() recibe como parámetro a cantidadFilasColumnas



Definición de funciones:

------

función mostrarLienzo(columnas, filas)

    bucle 1: iterar una cantidad igual al valor columnas, pasando un índice de iteración (llamemoslo "c") para ser usado dentro del bucle

        bucle 2: iterar una cantidad igual al valor filas, pasando un índice de iteración (llamemoslo "f") para ser usado dentro del bucle

            crearCasillero: creamos un cuadrado (por ejemplo, un div en HTML) que contenga como propiedades las coordenadas de su posición
            propiedad x: f
            propiedad y: c

            propiedad pintado: falso
            propiedad colorDePintura: texto vacío, ya que ningún cuadro ha sido pintado todavía

            por ultimo, si y solo si, tanto f como c son iguales a cero, le añadimos la propiedad "activo", que será usada más adelante

        cierre bucle 2
    
    cierre buclie 1

    * Comentario: yo hice este ejercicio como si lo pensara en HTML y JavaScript por lo que, al crear casillas nuevas dentro de los bucles, siempre se pondrian automáticamente lo más a la izquierda y hacia arriba posible, ya que mediante los estilos de css se puede hacer que así sea.

    retorna un objeto con las propiedades: { cantidadX: filas, cantidadY: columnas }



* Comentario: En éste caso voy a definir una constante fuera de la función mostrarPaleta, ya que va a ser usada en otras funciones también

constante colores = [rojo, azul]

función mostrarPaleta() no recibe parámetros

    bucle: iterar una vez por cada elemento dentro de colores, pasando el índice de iteración ("c") para ser usado dentro del búcle

        imprimir en la interfaz gráfica el color cuyo índice dentro de colores sea igual a c, imprimir colores[c]

        añadir un oyente de eventos a la impresión en curso, escuchando si se le hace click, que llame a la función cambiarColor()

        añadir una propiedad a la impresión en curso que contenga el color que representa:
        color: colores[c]

    cierre bucle

    * Comentario: ya que estoy abordando este ejercicio desde la perspectiva de JavaScript y HTML, asumo que no hace falta detallar  aquí el resto de la construcción de la interfaz gráfica para seleccionar colores, ya que eso suele hacerse dentro del esqueleto HTML.



función cambiarColor() recibe como parámetro el color elegido (siendo este parámetro un número que usaré como índice)

    condicional: si existe un color dentro de la constante colores cuyo índice sea igual a color elegido, entonces:

        colorActual = colores[colorElegido]

    cierre condicional



* Comentario: En éste caso voy a estar configurando unas variables externas a esta función para manejar el estado del lápiz:

variable colorActual = colores[0] /* Comentario: el primer elemento dentro de colores */

variable actualmenteActivo = obtiene el elemento que actualmente contiene la propiedad "activo"

* Comentario: ya que solo se ejecutaron las funciones mostrarLienzo y mostrarPaleta, la variable actualmenteActivo iniciará con el elemento en coordenadas 0,0



función iniciarLapiz(lienzo) recibe como parámetro un objeto con propiedad cantidadX = la cantidad de filas, y cantidadY = la cantidad de columnas

    crea un oyente para los siguientes eventos:

    1) flecha hacia arriba:
        constante resultadoDeBusqueda = si y solo si el elemento actualmenteActivo tiene un valor y mayor a 0, busca al elemento con y = actualmenteActivo.y -1

        condicional: si el resultadoDeBusqueda existe:

            removemos la propiedad "activo" al elemento actualmenteActivo

            añadimos la propiedad "activo" al resultadoDeBusqueda

            cambiamos el elemento actualmenteActivo para que sea el resultadoDeBusqueda

        ciere condicional
    
    cierre caso 1


    2) flecha hacia abajo:

        constante resultadoDeBusqueda = si y solo si la suma de el elemento actualmenteActivo.y +1 es menor a lienzo.cantidadY, entonces busca al elemento 
        con y = actualmenteActivo.y +1 y continua con el resto del caso 2

        condicional: si el resultadoDeBusqueda existe:

            removemos la propiedad "activo" al elemento actualmenteActivo

            añadimos la propiedad "activo" al resultadoDeBusqueda

            cambiamos el elemento actualmenteActivo para que sea el resultadoDeBusqueda

        ciere condicional
    
    cierre caso 2


    3) flecha hacia la izquierda:

        constante resultadoDeBusqueda = si y solo si el elemento actualmenteActivo tiene un valor x mayor a 0, busca al elemento con x = actualmenteActivo.x -1

        condicional: si el resultadoDeBusqueda existe:

            removemos la propiedad "activo" al elemento actualmenteActivo

            añadimos la propiedad "activo" al resultadoDeBusqueda

            cambiamos el elemento actualmenteActivo para que sea el resultadoDeBusqueda

        ciere condicional
    
    cierre caso 3


    4) flecha hacia la derecha:

        constante resultadoDeBusqueda = si y solo si la suma de el elemento actualmenteActivo.x +1 es menor o igual a lienzo.cantidadX, entonces busca al elemento 
        con x = actualmenteActivo.x +1 y continua con el resto del caso 4

        condicional: si el resultadoDeBusqueda existe:

            removemos la propiedad "activo" al elemento actualmenteActivo

            añadimos la propiedad "activo" al resultadoDeBusqueda

            cambiamos el elemento actualmenteActivo para que sea el resultadoDeBusqueda

        ciere condicional
    
    cierre caso 4


    5) tecla enter / salto de línea:

        al elemento actualmenteActivo se le editan algunas de sus propiedades:
        pintado: verdadero
        colorDePintura: colorActual

        * Comentario: Para este caso no creo que haga falta añadir un condicional que verifique si el cuadro está pintado o no, no habrá ninguna diferencia notable
    
    cierre caso 5

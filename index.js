/**
 * Declaración de variables
 */

// cantidad de filas y de columnas
let cantFC = {
	X: 0,
	Y: 0,
}

const container = document.getElementById("inner_container")

const colores = ["rojo", "azul"]

let colorActual = colores[0]

let actualmenteActivo

window.addEventListener("load", () => {
	document.getElementById("iniciar_maquina").addEventListener("submit", (e) => {
		e.preventDefault()

		if (e.target[0].value !== "" && e.target[1].value !== "") {
			cantFC.X = Number(e.target[0].value)
			cantFC.Y = Number(e.target[1].value)

			e.target.classList.remove("init")
			e.target.classList.add("d-none")

			container.classList.remove("d-none")

			document.getElementById("instrucciones").classList.remove("d-none")

			iniciarMaquina()
		} else {
			document.getElementById("mensaje").classList.remove("d-none")
		}

		console.log(cantFC)
	})
})

function iniciarMaquina() {
	mostrarLienzo()

	mostrarPaleta()

	iniciarLapiz()
}

function mostrarLienzo() {
	//bucle de columnas
	for (let y = 0; y < cantFC.Y; y++) {
		const columna = document.createElement("div")

		columna.classList.add("columna")

		//bucle de filas
		for (let x = 0; x < cantFC.X; x++) {
			const casilla = document.createElement("div")

			casilla.classList.add("casilla")

			if (x === 0 && y === 0) {
				casilla.classList.add("activo")

				actualmenteActivo = casilla
			}

			casilla.setAttribute("x", x)
			casilla.setAttribute("y", y)

			casilla.setAttribute("pintado", false)
			casilla.setAttribute("colorDePintura", "")

			columna.appendChild(casilla)
		}

		container.appendChild(columna)
	}
}

function mostrarPaleta() {
	const paleta = document.getElementById("paleta")

	colores.map((color, index) => {
		const div = document.createElement("div")

		const label = document.createElement("label")
		label.classList.add("label")
		label.setAttribute("for", color)
		label.innerHTML = color

		const opcion = document.createElement("input")

		opcion.setAttribute("type", "radio")
		opcion.setAttribute("name", "elegir_color")
		opcion.setAttribute("id", color)
		opcion.setAttribute("value", color)

		if (color === colores[0]) {
			opcion.setAttribute("checked", true)
		}

		div.appendChild(label)
		div.appendChild(opcion)

		paleta.appendChild(div)

		opcion.addEventListener("click", () => cambiarColor(index))
	})

	paleta.classList.remove("d-none")
}

function cambiarColor(indice) {
	if (typeof colores[indice] != "undefined") {
		colorActual = colores[indice]
	}
}

function iniciarLapiz() {}

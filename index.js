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

			if (cantFC.X <= 35 && cantFC.Y <= 35) {
				e.target.classList.remove("init")
				e.target.classList.add("d-none")

				container.classList.remove("d-none")

				document.getElementById("instrucciones").classList.remove("d-none")

				iniciarMaquina()
			} else {
				document.getElementById("advertencia").classList.remove("d-none")
			}
		} else {
			document.getElementById("mensaje").classList.remove("d-none")
		}
	})
})

function iniciarMaquina() {
	mostrarLienzo()

	mostrarPaleta()

	iniciarLapiz()
}

function mostrarLienzo() {
	//bucle de filas
	for (let y = 0; y < cantFC.X; y++) {
		const columna = document.createElement("div")

		columna.classList.add("columna")

		//bucle de columnas
		for (let x = 0; x < cantFC.Y; x++) {
			const casilla = document.createElement("div")

			casilla.classList.add("casilla")

			if (x === 0 && y === 0) {
				casilla.classList.add("activo")

				actualmenteActivo = casilla
			}

			//por un error de calculo mio, este valor quedó invertido...
			casilla.setAttribute("y", x)
			casilla.setAttribute("x", y)

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

function iniciarLapiz() {
	document.addEventListener("keydown", (e) => {
		let resultadoDeBusqueda

		let coordenadas = {
			Y: Number(actualmenteActivo.getAttribute("y")),
			X: Number(actualmenteActivo.getAttribute("x")),
		}

		switch (e.key) {
			case "ArrowUp":
				if (coordenadas.Y > 0) {
					const criterioDeBusqueda = `[y="${coordenadas.Y - 1}"][x="${coordenadas.X}"]`

					resultadoDeBusqueda = document.querySelector(criterioDeBusqueda)

					actualmenteActivo.classList.remove("activo")

					resultadoDeBusqueda.classList.add("activo")

					actualmenteActivo = resultadoDeBusqueda

					coordenadas = {
						Y: Number(actualmenteActivo.getAttribute("y")),
						X: Number(actualmenteActivo.getAttribute("x")),
					}
				}

				break
			case "ArrowDown":
				if (coordenadas.Y + 1 < cantFC.Y) {
					const criterioDeBusqueda = `[y="${coordenadas.Y + 1}"][x="${coordenadas.X}"]`

					resultadoDeBusqueda = document.querySelector(criterioDeBusqueda)

					actualmenteActivo.classList.remove("activo")

					resultadoDeBusqueda.classList.add("activo")

					actualmenteActivo = resultadoDeBusqueda

					coordenadas = {
						Y: Number(actualmenteActivo.getAttribute("y")),
						X: Number(actualmenteActivo.getAttribute("x")),
					}
				}

				break

			case "ArrowLeft":
				if (coordenadas.X > 0) {
					const criterioDeBusqueda = `[y="${coordenadas.Y}"][x="${coordenadas.X - 1}"]`

					resultadoDeBusqueda = document.querySelector(criterioDeBusqueda)

					actualmenteActivo.classList.remove("activo")

					resultadoDeBusqueda.classList.add("activo")

					actualmenteActivo = resultadoDeBusqueda

					coordenadas = {
						Y: Number(actualmenteActivo.getAttribute("y")),
						X: Number(actualmenteActivo.getAttribute("x")),
					}
				}

				break

			case "ArrowRight":
				if (coordenadas.X + 1 < cantFC.X) {
					const criterioDeBusqueda = `[y="${coordenadas.Y}"][x="${coordenadas.X + 1}"]`

					resultadoDeBusqueda = document.querySelector(criterioDeBusqueda)

					actualmenteActivo.classList.remove("activo")

					resultadoDeBusqueda.classList.add("activo")

					actualmenteActivo = resultadoDeBusqueda

					coordenadas = {
						Y: Number(actualmenteActivo.getAttribute("y")),
						X: Number(actualmenteActivo.getAttribute("x")),
					}
				}

				break
			case "Enter":
				if (
					actualmenteActivo.classList.contains("rojo") ||
					actualmenteActivo.classList.contains("azul")
				) {
					actualmenteActivo.classList.remove("rojo")
					actualmenteActivo.classList.remove("azul")
				}

				actualmenteActivo.classList.add(colorActual)

				break

			default:
				break
		}
	})
}

window.addEventListener("load", () => {
	document.getElementById("iniciar_maquina").addEventListener("submit", (e) => {
		e.preventDefault()

		console.log(e.target[0].value)
		console.log(e.target[1].value)
	})
})

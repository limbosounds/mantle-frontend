import Provider from "Provider"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
	<BrowserRouter>
		<Provider />
	</BrowserRouter>,
	document.getElementById("__root")
)
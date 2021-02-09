import React from "react"
import { Switch, Route } from "react-router-dom"

import "../typings/Console"

import App from "App"

export interface ProviderProps {

}

export interface ProviderState {

}

export default
class Provider
extends React.Component<ProviderProps, ProviderState> {
	render() {
		return <>
			<Switch>
				<Route
					path="/"
					component={App}
				/>
			</Switch>
		</>
	}
}
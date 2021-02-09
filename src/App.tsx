import React from "react"
import { observer } from "mobx-react";
import { RouteComponentProps } from "react-router-dom"

import "styles/fonts"
import "styles/main"
import Speech from "components/Speech";

export interface AppProps
extends RouteComponentProps {
	
}

export interface AppState {

}

@observer
export default
class App
extends React.Component<AppProps, AppState> {
	render() {
		return <>
			<Speech />
		</>
	}
}
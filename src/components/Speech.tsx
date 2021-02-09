import { observer } from "mobx-react"
import React from "react"

import "styles/components/speech"

import SpeechRecon from "stores/SpeechRecon"

export interface SpeechProps {

}

export interface SpeechState {

}

@observer
export default
class Speech 
extends React.Component<SpeechProps, SpeechState> {
	componentDidMount() {
		SpeechRecon.init()
		SpeechRecon.start()
	}

	componentWillUnmount() {
		SpeechRecon.stop()
		SpeechRecon.clear()
	}

	render() {
		return <div className="c-speech">
			<section className="speech-column">
				<header>
					<h2>Original speech</h2>
				</header>
				<div className="content">
					{SpeechRecon.originalSpeech.map((phrase, i) => {
						return <p key={i}>
							{phrase}
						</p>
					})}
				</div>
				<div className="content">
					{SpeechRecon.interimSpeech.map((phrase, i) => {
						return <p key={i}>
							{phrase}
						</p>
					})}
				</div>
			</section>
			<section className="speech-column">
				<header>
					<h2>Translated speech</h2>
				</header>
				<div className="content">

				</div>
			</section>
		</div>
	}
}
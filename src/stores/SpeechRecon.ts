import { action, computed, observable } from "mobx"

class SpeechReconStore {
	private service?
		: SpeechRecognition

	@observable 
	private speech
		: string[]
		= []

	@observable
	private interim
		: string[]
		= []

	@action
	private handleResult = (
		event: SpeechRecognitionEvent
	) => {
		this.interim = []
		for (var i = event.resultIndex; i < event.results.length; ++i) {
			if (event.results[i].isFinal)
				this.speech.push(event.results[i][0].transcript)
			else
				this.interim.push(event.results[i][0].transcript)
		}
	}

	init = (
		lang: string = "ru"
	) => {
		const ServiceConstructor = window.SpeechRecognition || ((window as any).webkitSpeechRecognition as typeof SpeechRecognition)
		if (!ServiceConstructor) {
			alert("Whoops, seems like your browser does not support speech recognition. Come back with latest Chrome / Edge")
		}
		
		this.service = new ServiceConstructor()
		this.service.lang = lang
		this.service.interimResults = true
		this.service.continuous = true

		this.service.addEventListener("result", this.handleResult)
	}

	start = () => {
		this.service?.start()
	}

	stop = () => {
		this.service?.stop()
	}

	clear = () => {
		this.speech = []
	}

	@computed
	get originalSpeech(): string[] {
		const { length } = this.speech
		return length > 20
			? this.speech.slice(length - 20, length)
			: this.speech
	}

	@computed
	get interimSpeech(): string[] {
		return this.interim
	}
}

export default new SpeechReconStore()
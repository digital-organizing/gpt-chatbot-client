import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

export interface Text {
	id: number;
	content: string;
	url: string;
	page: number;
}

export interface Answer {
	answer: string;
	texts: Text[];
}

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
	ENDPOINT: string = environment.apiUrl;

	answer?: Answer;
	loading = false;
	callbacks: ((answer: Answer) => void)[] = [];
	slug: string;

	constructor() {
		this.slug = window.location.pathname.replaceAll("/", "");
	}

	getTitle(callback: (title: string) => void) {
		const url = new URL(this.ENDPOINT);
		url.pathname = `/bot/${this.slug}/name/`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				callback(data["name"]);
			})
			.catch((error) => {
				window.location.href = `/${environment.defaultBot}`;
			});
	}

	fetchAnswer(question: string) {
		const url = new URL(this.ENDPOINT);
		url.pathname = `/bot/${this.slug}/`;
		url.searchParams.append("question", question);

		this.loading = true;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.answer = data as Answer;
				this.loading = false;
				this.callbacks.forEach((callback) => callback(data));
			})
			.catch((error) => {
				this.answer = undefined;
				this.loading = false;
			});
	}

	addCallback(callback: (answer: Answer) => void) {
		this.callbacks.push(callback);
	}

	getAnswer() {
		return this.answer;
	}

	isLoading() {
		return this.loading;
	}
}

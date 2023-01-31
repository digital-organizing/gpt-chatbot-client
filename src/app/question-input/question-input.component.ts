import { Component } from "@angular/core";
import { ChatbotService } from "../chatbot.service";

@Component({
  selector: 'app-question-input',
  templateUrl: './question-input.component.html',
  styleUrls: ['./question-input.component.css']
})
export class QuestionInputComponent {
	question = "";
	constructor(private chatbotService: ChatbotService) {}

	sendQuestion() {
		this.chatbotService.fetchAnswer(this.question);
	}

	isLoading() {
		return this.chatbotService.isLoading();
	}
}

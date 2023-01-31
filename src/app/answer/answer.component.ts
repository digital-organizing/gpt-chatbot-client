import { Component } from "@angular/core";
import { Answer, ChatbotService } from "../chatbot.service";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
	answer?: Answer;
	constructor(protected chatbotService: ChatbotService) {
		chatbotService.addCallback((answer: Answer) => {
			this.answer = answer;
		});
	}

	isLoading() {
		return this.chatbotService.isLoading();
	}
}

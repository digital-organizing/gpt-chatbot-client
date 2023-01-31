import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { environment } from "src/environments/environment";
import { ChatbotService } from "./chatbot.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = "";

	constructor(
		private titleService: Title,
		private botService: ChatbotService,
	) {}

	ngOnInit(): void {
		this.botService.getTitle((title) => {
			this.titleService.setTitle(title);
			this.title = title;
		});
	}
}

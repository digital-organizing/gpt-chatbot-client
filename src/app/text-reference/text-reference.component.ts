import { Component, Input } from "@angular/core";
import { Text } from "../chatbot.service";

@Component({
  selector: 'app-text-reference',
  templateUrl: './text-reference.component.html',
  styleUrls: ['./text-reference.component.css']
})
export class TextReferenceComponent {
	@Input() text!: Text;
}

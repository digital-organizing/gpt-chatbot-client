import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TextReferenceComponent } from "./text-reference/text-reference.component";
import { QuestionInputComponent } from "./question-input/question-input.component";
import { AnswerComponent } from "./answer/answer.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TextReferenceComponent,
    QuestionInputComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

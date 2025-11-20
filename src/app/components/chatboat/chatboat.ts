import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

@Component({
  selector: 'app-chatboat',
  imports: [FormsModule, CommonModule],
  templateUrl: './chatboat.html',
  styleUrl: './chatboat.scss',
})
export class Chatboat {

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  messages: Message[] = [];
  input = '';
  loading = false;

  constructor(private chatService: ApiService) {}

  ngOnInit(): void {
    // First call with empty string to receive greeting from backend
    this.send('');
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  send(userInput?: string) {
    // If userInput provided explicitly, use it; otherwise use this.input
    const msg = userInput !== undefined ? userInput : this.input.trim();

    // Prevent sending nothing twice (except first automatic greeting call)
    if (msg === '' && this.messages.length > 0) {
      return;
    }

    // Add user's message to the UI (if non-empty)
    if (msg !== '') {
      this.messages.push({ role: 'user', content: msg });
    }

    this.loading = true;

    this.chatService.sendMessage(msg).subscribe({
      next: (res) => {
        const reply = res?.reply ?? '(No reply)';
        this.messages.push({ role: 'assistant', content: reply });
        this.input = ''; // clear input after send
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.messages.push({ role: 'assistant', content: 'Error: could not reach server.' });
        this.loading = false;
      }
    });
  }

  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.send();
    }
  }

  private scrollToBottom(): void {
    try {
      if (this.scrollContainer) {
        const el = this.scrollContainer.nativeElement;
        el.scrollTop = el.scrollHeight;
      }
    } catch (err) {
      // ignore
    }
  }

}

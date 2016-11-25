import $ from 'jquery';
import {ChatForm} from './dom';

const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';

export class ChatForm {
  constructor(formSel, inputSel) {
    this.chatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
    this.$form = $(formSel);
    this.$input = $(inputSel);
  }

  init(submitCallback) {
    this.$form.submit((event) => {
      // don't reload page, you silly.
      event.preventDefault();
      let val = this.$input.val();
      submitCallback(val);
      // reset fields to blank after cb is called.
      this.$input.val('');
    });

    // register eventhandler to envoke submit method when submit button is clicked.
    this.$form.find('button').on('click', () => this.form.submit());
  }
}

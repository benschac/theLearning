import $ from 'jquery';


export class ChatForm {
  constructor(formSel, inputSel) {
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
    this.$form.find('button').on('click', () => this.$form.submit());
  }
}

export class ChatList {
  constructor(listSel, username) {
    this.$list = $(listSel);
    this.$username = $(username);
  }

  drawMessage({user: u, timestamp: t, message: m}) {
    let $messageRow = $('<li>', {
      'class': 'message-row'
    });
    // adds class to style you messages uniquely.
    if(this.username === u) {
      $messageRow.addClass('me');
    }

    // create jquery message obj.
    let $message = $('<p>');

    // append span for meta username data.
    $message.append($('<span>', {
      'class': 'message-username',
      text: u
    }));

    // append span for time meta data.
    $message.append($('<span>', {
      'class': 'timestamp',
      'data-time': t,
      text: (new Date(t)).getTime()
    }));

    // append span for message.
    $message.append($('<span>', {
      'class': 'message-message',
      text: m
    }));

    // add message to row.
    $messageRow.append($message);
    // append row to list.
    $(this.listId).append($messageRow);
    // scrolls to newest message.
    $messageRow.get(0).scrollIntoView();
  }
}

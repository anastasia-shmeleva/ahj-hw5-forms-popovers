/* eslint-disable no-param-reassign */
const popupName = {
  title: 'Popover title',
  text: 'And here\'s some amazing content. It\'s very engaging. Right?',
};

export default class Form {
  constructor(element, popups) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }

    this.element = element;
    this.popups = popups;

    this.onSubmit = this.onSubmit.bind(this);

    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    if (this.popups.popups[0] && this.popups.popups[0].name === 'popup') {
      this.popups.removePopup();
    } else this.popups.addPopup(popupName.title, popupName.text, e.submitter);
    e.preventDefault();
  }
}

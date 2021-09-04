export default class Popup {
  constructor() {
    this.popups = [];
  }

  addPopup(title, text, targetElem) {
    const popup = document.createElement('div');
    popup.className = 'popup';

    const popupHeader = document.createElement('h3');
    popupHeader.className = 'popup-header';
    popupHeader.textContent = title;

    const popupBody = document.createElement('div');
    popupBody.className = 'popup-body';
    popupBody.textContent = text;

    const arrow = document.createElement('div');
    arrow.className = 'arrow';

    const name = popup.className;

    this.popups.push({
      name,
      popup,
    });

    document.body.appendChild(popup);
    popup.appendChild(popupHeader);
    popup.appendChild(popupBody);
    popup.appendChild(arrow);

    if (targetElem) {
      const coords = targetElem.getBoundingClientRect();
      popup.style.bottom = `${coords.top + 20}px`;
      popup.style.left = `${coords.left + coords.width / 2 - popup.offsetWidth / 2}px`;
      arrow.style.left = popup.style.left;
    }
  }

  removePopup() {
    if (this.popups[0]) {
      this.popups[0].popup.remove();
      this.popups.splice(this.popups[0], 1);
    }
  }
}

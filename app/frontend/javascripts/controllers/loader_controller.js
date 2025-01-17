import { Controller } from 'stimulus';

export default class extends Controller {
  initialize() {
    this._show = this._show.bind(this);
    this._hide = this._hide.bind(this);
  }

  connect() {
    this.element.addEventListener('loader:hide', this._hide);
    this.element.addEventListener('loader:show', this._show);
  }

  disconnect() {
    this.element.removeEventListener('loader:hide', this._hide);
    this.element.removeEventListener('loader:show', this._show);
  }

  _show() {
    this.element.classList.remove('hidden');
  }

  _hide() {
    this.element.classList.add('hidden');
  }
}

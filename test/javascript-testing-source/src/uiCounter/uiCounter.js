import $ from 'jquery';
import {createCounter} from './counter';

export function createUICounter(el, options) {
  const $el = $(el);
  const counter = createCounter(options);

  function render() {
    const val = counter.val();
    const decDisabled = counter.isMin() ? 'disabled' : '';
    const incDisabled = counter.isMax() ? 'disabled' : '';

    $el.html(`
      <button data-testid="btn-dec" type="button" ${decDisabled} class="btn btn-secondary btn-dec">-</button>
      <span data-testid="value" class="value">${val}</span>
      <button data-testid="btn-inc" type="button" ${incDisabled} class="btn btn-primary btn-inc">+</button>
    `);
  }

  render();

  $el.on('click', '.btn-inc', () => {
    counter.inc();
    render();
  });

  $el.on('click', '.btn-dec', () => {
    counter.dec();
    render();
  });
}

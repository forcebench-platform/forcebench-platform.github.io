/* Progressive enhancement only: all manuscript values are already in the HTML.
   Sorting never requests or substitutes a sample dataset. */
(() => {
  'use strict';
  const tables = document.querySelectorAll('.paper-table');
  tables.forEach(table => {
    const buttons = [...table.querySelectorAll('thead button[data-sort]')];
    const reset = document.querySelector(`[data-table="${table.id}"]`);
    const status = document.querySelector(`[data-status="${table.id}"]`);
    let activeKey = null;
    let direction = 'descending';

    function sortGroups(compare) {
      table.querySelectorAll('tbody[data-group]').forEach(body => {
        [...body.querySelectorAll('tr[data-method]')].sort(compare).forEach(row => body.appendChild(row));
      });
    }

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const key = button.dataset.sort;
        direction = activeKey === key && direction === 'descending' ? 'ascending' : (activeKey === key ? 'descending' : (key === 'name' ? 'ascending' : 'descending'));
        activeKey = key;
        const sign = direction === 'ascending' ? 1 : -1;
        sortGroups((a, b) => {
          let comparison;
          if (key === 'name') {
            comparison = a.dataset.name.localeCompare(b.dataset.name, 'en');
          } else {
            const value = row => key === 'mean' ? Number(row.dataset.mean) : Number(row.dataset.values.split(',')[Number(key)]);
            comparison = value(a) - value(b);
          }
          return comparison * sign || Number(a.dataset.order) - Number(b.dataset.order);
        });
        buttons.forEach(other => {
          other.closest('th').setAttribute('aria-sort', other === button ? direction : 'none');
          other.querySelector('span').textContent = other === button ? (direction === 'ascending' ? '↑' : '↓') : '↕';
        });
        const label = button.childNodes[0].textContent.trim();
        status.textContent = `Sorted by ${label}, ${direction}, within each comparison block.`;
        reset.hidden = false;
      });
    });

    reset.addEventListener('click', () => {
      sortGroups((a, b) => Number(a.dataset.order) - Number(b.dataset.order));
      activeKey = null;
      buttons.forEach(button => {
        button.closest('th').setAttribute('aria-sort', 'none');
        button.querySelector('span').textContent = '↕';
      });
      status.textContent = 'Rows follow the manuscript order.';
      reset.hidden = true;
    });
  });
})();

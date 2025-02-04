document.querySelectorAll('label[for]').forEach(label => {
  label.setAttribute("tabindex", "0");
  label.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const input = document.getElementById(label.getAttribute('for'));
      input.checked = !input.checked; // Toggle input state
      input.dispatchEvent(new Event('change')); // Trigger the change event
      // Or trigger click: input.click();
      toggleEntriesFocusability();
    }
  });
});
function toggleEntriesFocusability() {
  const hideState = document.getElementById('hide-state').checked;
  const entries = document.querySelectorAll('#main-menu .entry');
  entries.forEach(entry => {
    if (hideState) {
      // Make entry not focusable when hideState is true
      entry.setAttribute('tabindex', '-1');
    } else {
      // Restore focusability when hideState is false
      entry.setAttribute('tabindex', '0');
    }
  });
}

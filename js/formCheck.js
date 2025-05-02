document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        status.textContent = 'Thanks for your message! I’ll be in touch soon.';
        status.style.color = '#38bdf8';
        form.reset();
      } else {
        response.json().then(data => {
          status.textContent = data.errors ? data.errors.map(e => e.message).join(", ") : 'Oops! Something went wrong.';
          status.style.color = '#f87171';
        });
      }
    })
    .catch(error => {
      status.textContent = 'There was a problem submitting the form.';
      status.style.color = '#f87171';
    });
  });
});

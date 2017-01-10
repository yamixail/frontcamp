document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    const elClassList = e.target.classList;
    if (!elClassList.contains('action')) return;
    
    e.preventDefault();
    if (elClassList.contains('delete')) {
      fetch('/article/' + e.target.dataset.id, {
          method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
          if (data.redirect) location.assign(data.redirect);
        })
        .catch(console.error);
    }
  });

  document.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let formData = [];
    const formInputs = e.target.querySelectorAll('input');
    
    [].forEach.call(formInputs, (el) => {
        formData.push(`${el.name}=${encodeURI(el.value)}`);
      }
    );
    
    fetch(e.target.getAttribute('action'), {
        method: e.target.getAttribute('method'),
        headers: {  
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        },  
        body: formData.join('&')
      })
      .then(response => response.json())
      .then(data => {
        if (data.redirect) location.assign(data.redirect);
      })
      .catch(console.error);
  });
});
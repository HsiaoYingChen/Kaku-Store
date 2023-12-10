export function loadHeader() {
  fetch('HTMLShare/header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data)
}

export function loadFooter() {
  fetch('HTMLShare/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);
}
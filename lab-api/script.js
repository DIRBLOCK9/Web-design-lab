document.getElementById('loadUser').addEventListener('click', () => {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      const fullName = `${user.name.first} ${user.name.last}`;
      const email = user.email;
      const picture = user.picture.large;

      const userInfo = `
        <h3>${fullName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <img src="${picture}" alt="Фото користувача">
      `;

      document.getElementById('userInfo').innerHTML = userInfo;
    })
    .catch(error => {
      console.error('Помилка при завантаженні:', error);
      document.getElementById('userInfo').innerHTML = "Не вдалося отримати дані.";
    });
});

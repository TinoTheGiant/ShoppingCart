function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const userCard = document.getElementById('user-details');
            const userImage = document.getElementById('user-image');
            const userName = document.getElementById('user-name');

            userImage.src = user.picture.large;
            userName.textContent = `${user.name.first} ${user.name.last}`;
        })
        .catch(error => console.error('Error:', error));
}

fetchRandomUser();
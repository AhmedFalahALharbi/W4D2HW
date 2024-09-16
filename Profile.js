let fullName = localStorage.getItem('fullName');

        if (fullName) {
            document.getElementById('fullName').textContent = fullName;
        } else {
            location.assign('index.html');
        }
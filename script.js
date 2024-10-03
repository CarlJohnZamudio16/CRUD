// Event listener for form submission (Create or Update)
    document.getElementById('userForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let fname = document.getElementById('fname').value;
        let lname = document.getElementById('lname').value;
        let address = document.getElementById('address').value;
        let email = document.getElementById('email').value;
        
        let user = {
            fname: fname,
            lname: lname,
            address: address,
            email: email
        };
        
        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if Update button is displayed
        if (document.getElementById('updateBtn').style.display === 'none') {
            // CREATE: Add new user to local storage
            users.push(user);
        } else {
            // UPDATE: Modify existing user
            const userId = document.getElementById('updateBtn').dataset.id;
            users[userId] = user;
            document.getElementById('updateBtn').style.display = 'none';
        }
        
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('userForm').reset(); // Clear the form
        alert('User saved successfully!');
    });
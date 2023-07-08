                // Toggle Function
function toggle() {
    let result = document.getElementById('result');
    let signUp = document.getElementById('addUser');
    let logIn = document.getElementById('loginForm');
    let table = document.getElementById('table');
    let delUser = document.getElementById('deleteUser');

    if (signUp.classList.contains('hidden')) {
        signUp.classList.remove('hidden');
        logIn.classList.add('hidden');
        result.classList.add('hidden');
        delUser.classList.add('hidden');
        table.classList.add('hidden');
    } else {
        signUp.classList.add('hidden');
        logIn.classList.add('hidden');
        table.classList.add('hidden');
        delUser.classList.add('hidden');
        result.classList.remove('hidden');
    }
}

function toggle1() {
    let result = document.getElementById('result');
    let logIn = document.getElementById('loginForm');
    let signUp = document.getElementById('addUser');
    let table = document.getElementById('table');
    let delUser = document.getElementById('deleteUser');

    if (logIn.classList.contains('hidden')) {
        logIn.classList.remove('hidden');
        signUp.classList.add('hidden');
        table.classList.add('hidden');
        result.classList.add('hidden');
        delUser.classList.add('hidden');
    } else {
        logIn.classList.add('hidden');
        signUp.classList.add('hidden');
        table.classList.add('hidden');
        delUser.classList.add('hidden');
        result.classList.remove('hidden');
    }
}

function toggle3(){
    let result = document.getElementById('result');
    let signUp = document.getElementById('addUser');
    let logIn = document.getElementById('loginForm');
    let table = document.getElementById('table');
    let delUser = document.getElementById('deleteUser');
    
    if (delUser.classList.contains('hidden')) {
      delUser.classList.remove('hidden');
      signUp.classList.add('hidden');
      logIn.classList.add('hidden');
      result.classList.add('hidden');
      table.classList.add('hidden');
    } else {
      signUp.classList.add('hidden');
      logIn.classList.add('hidden');
      table.classList.add('hidden');
      delUser.classList.add('hidden');
      result.classList.remove('hidden');
    }
}


                            // Local Storage
// localStorage.clear();
// Function to generate a random User ID
function generateUserID() {
  const characters = '0123456789';
  const length = 4;
  let userID = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.random() * characters.length;
    userID += characters.charAt(randomIndex);
  }

  return userID;
}

// Function to save user data to local storage
function save() {
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let userID = generateUserID();

    let user = {
        id: userID,
        name: name,
        address: address,
        email: email,
        password: password
    };

    let users = localStorage.getItem('users');
    if (!users) {
        users = [];
    } else {
        users = JSON.parse(users);
    }

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    generateList();
}

// Function to update the table with user data from local storage
function generateList() {
    let tableBody = document.querySelector('#table tbody');

    tableBody.innerHTML = '';

    let users = JSON.parse(localStorage.getItem('users'));

    users.forEach(function(user, index) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.address}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
        `;
        tableBody.appendChild(row);
    });

    let result = document.getElementById('result');
    let logIn = document.getElementById('loginForm');
    let signUp = document.getElementById('addUser');
    let table = document.getElementById('table');
    let delUser = document.getElementById('deleteUser');

    if (table.classList.contains('hidden')) {
        table.classList.remove('hidden');
        logIn.classList.add('hidden');
        signUp.classList.add('hidden');
        delUser.classList.add('hidden');
        result.classList.add('hidden');
    } else {
        logIn.classList.add('hidden');
        signUp.classList.add('hidden');
        table.classList.add('hidden');
        delUser.classList.add('hidden');
        result.classList.remove('hidden');
    }
};

// Function to delete a user by User ID
function deleteUser() {
    let userId = document.getElementById('userId').value;
  
    localStorage.removeItem(userId);
      
      // Store the updated user data in localStorage
      localStorage.setItem('users', JSON.stringify(users));
    
    // Call the function to display users in the table
    generateList();
    
    // Clear the User ID input field
    document.getElementById('userId').value = '';
} 
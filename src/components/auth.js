const users = [
    {username: 'user1', password: 'Password1'},
    {username: 'user2', password: 'Password2'}
];

export const authenticateUser = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    return user;
};

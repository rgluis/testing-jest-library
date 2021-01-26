const axios = require('axios');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Luis', () => {
        const user = 'Luis';
        expect(user).toBe('Luis');
    });

    test('User is Caro', () => {
        const user = 'Caro';
        expect(user).toBe('Caro');
    });
});

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: x => x,
    createUser: () => {
        const user = {
            firstName: 'Luis',
        };
        user['lastName'] = 'Reyes';
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.data)
        .catch(error = 'error')
};

module.exports = functions;
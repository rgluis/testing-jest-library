const functions = require('./functions');

// toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// not.toBe
test('Adds 2 + 2 to Not equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('User should be Luis Reyes objec', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Luis',
        lastName: 'Reyes',
    });
});

// Less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;

    expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I or i in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in username', () => {
    usernames = ['john', 'caro', 'admin'];

    expect(usernames).toContain('admin');
});

// Working with async data (Promise)
test('[Promise] User fetched name should be Leanne Graham', () => {
    expect.assertions(1);

    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham');
        });
});

// Working with async data (Async Await)
test('[Async Await] User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);

    const data = await functions.fetchUser();   
    expect(data.name).toEqual('Leanne Graham');
});
// Callbacks

// Don't do this
// test('the data is peanut butter', () => {
//     function callback(data) {
//         expect(data).toBe('peanut butter');
//     }
    
//     fetchData(callback);
// });

// test('the data is peanut butter', done => {
//     function callback(data) {
//         expect(data).toBe('peanut butter');
//         done();
//     }
    
//     fetchData(callback);
// });


// Promises

test('the data is peanut butter', () => {
    expect.assertions(1);
    return fetchData().then(data => {
        expect(data).toBe('peanut butter')
    });
});

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error'))
})

// resolve, rejects
test('the data is peanut butter', () => {
    expect.assertions(1);
    return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return expect(fetchData()).rejects.toMatch('error');
});

// async, await
test('the data is peanut butter', async () => {
    expect.assertions(1);
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});

test('the data is peanut butter', async () => {
    expect.assertions(1);
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    await expect(fetchData()).rejects.toMatch('error');
});


const { dayOfTheWeek } = require('./app');

test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('6/18/2022') );
    expect( day ).toBe('Wednesday');
});
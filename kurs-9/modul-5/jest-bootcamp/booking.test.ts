import {
  setOrigin,
  bookTrip,
  goOnTrip,
  getPosition,
  resetData,
} from './booking.ts';

describe('Setting current location', () => {
  beforeEach(() => resetData());

  test(`Set origin to "Stockholm"`, () => {
    expect(setOrigin('Stockholm')).toBeTruthy();
  });

  test(`Set origin to "" should throw`, () => {
    expect(() => setOrigin('')).toThrow();
  });
});

describe('Booking a trip', () => {
  beforeEach(() => resetData());

  test(`Set origin to "Stockholm"`, () => {
    expect(bookTrip('Stockholm')).toBeTruthy();
  });

  test(`Booking a trip from origin to origin should throw`, () => {
    setOrigin('Stockholm');
    expect(bookTrip('Stockholm')).toBeFalsy();
  });

  test(`Destination should't be allowed to be ""`, () => {
    expect(bookTrip('')).toBeFalsy();
  });
});

describe('Travel', () => {
  beforeEach(() => resetData());

  test(`Travel from Stockholm to Härnösand`, () => {
    setOrigin('Stockholm');
    bookTrip('Härnösand');
    expect(goOnTrip()).toBeTruthy();
  });

  test(`Traveling from Stockholm to Stocholm should throw`, () => {
    expect(() => {
      setOrigin('Stockholm');
      bookTrip('Stockholm');
      goOnTrip();
    }).toThrow();
  });

  test(`If neither origin or destination has been set, it should throw`, () => {
    expect(() => goOnTrip()).toThrow();
  });
});

describe('Current position', () => {
  beforeEach(() => resetData());

  test(`Get the current position before travel"`, () => {
    setOrigin('Stockholm');
    expect(getPosition()).toBe('Stockholm');
  });

  test(`After traveling from Stockholm to Härnösand, should return Härnösand`, () => {
    setOrigin('Stockholm');
    bookTrip('Härnösand');
    goOnTrip();
    expect(getPosition()).toBe('Härnösand');
  });

  test(`If neither origin or destination has been set, it should thow `, () => {
    expect(() => getPosition()).toThrow();
  });
});

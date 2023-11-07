const data = {
  origin: '',
  destination: '',
  traveled: false,
};

export function resetData() {
  data.origin = '';
  data.destination = '';
  data.traveled = false;
}

export function setOrigin(origin: string) {
  if (origin) {
    data.origin = origin;
    return true;
  } else {
    throw new Error('Origin has to be a non-empty string.');
  }
}

export function bookTrip(destination: string) {
  if (destination && data.origin !== destination) {
    data.destination = destination;
    return true;
  } else {
    return false;
  }
}

export function goOnTrip() {
  if (!data.origin || !data.destination) {
    throw new Error('Origin and destination has to be set.');
  }

  if (data.origin !== data.destination) {
    data.traveled = true;
    return true;
  } else {
    return false;
  }
}

export function getPosition() {
  if (!data.origin) {
    throw new Error('Origin has not been set.');
  }

  if (data.traveled) {
    return data.destination;
  } else {
    return data.origin;
  }
}

const homeCheck = (home : Boolean, away : Boolean) => {
  if (home > away) {
    return true;
  }
  if (home < away) {
    return false;
  } else {
    return null;
  }
};

const awayCheck = (home: Boolean, away: Boolean) => {
  if (home < away) {
    return true;
  }
  if (home > away) {
    return false;
  } else {
    return null;
  }
};

export {homeCheck, awayCheck}
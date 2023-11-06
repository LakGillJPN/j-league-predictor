export const fixtureAPICall = () => {
  let fixString : string;
  const apiUrl = process.env.WEBSITE_URL || 'https://j-league-backend.vercel.app/api/fixtures';

  if (process.env.NODE_ENV === 'development') {
    fixString = '/api/fixtures' 
  } else {
    fixString = apiUrl
  }
  return fixString;
}

export const usersAPICall = () => {
  let userString : string;
  const apiUrl = process.env.WEBSITE_URL || 'https://j-league-backend.vercel.app/api/users';

  if (process.env.NODE_ENV === 'development') {
    userString = '/api/users' 
  } else {
    userString = apiUrl
  }
  return userString;
}

export const predicationsAPICall = () => {
  let predictString : string;
  const apiUrl = process.env.WEBSITE_URL || 'https://j-league-backend.vercel.app/api/predications';

  if (process.env.NODE_ENV === 'development') {
    predictString = '/api/predications'
  } else {
    predictString = apiUrl
  }
  return predictString;
}

export const resultsAPICall = () => {
  let resultString : string;
  const apiUrl = process.env.WEBSITE_URL || 'https://j-league-backend.vercel.app/api/results';

  if (process.env.NODE_ENV === 'development') {
    resultString = '/api/results'
  } else {
    resultString = apiUrl
  }
  return resultString;
}

export const totalAPICall = () => {
  let totalString : string;
  const apiUrl = process.env.WEBSITE_URL || 'https://j-league-backend.vercel.app/api/total';

  if (process.env.NODE_ENV === 'development') {
    totalString = '/api/total'
  } else {
    totalString = apiUrl
  }
  return totalString;
}

export const overallAPICall = () => {
  let overallString : string;
  const apiUrl = process.env.WEBSITE_URL || 'https://j-league-backend.vercel.app/api/overall';

  if (process.env.NODE_ENV === 'development') {
    overallString = '/api/total'
  } else {
    overallString = apiUrl
  }
  return overallString;
}

export const pointsAPICall = () => {
  let pointsString : string;
  const apiUrl = process.env.WEBSITE_URL || 'https://j-league-backend.vercel.app/api/points';

  if (process.env.NODE_ENV === 'development') {
    pointsString = '/api/points' 
  } else {
    pointsString = apiUrl
  }
  return pointsString;
}
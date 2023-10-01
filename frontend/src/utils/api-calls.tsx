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
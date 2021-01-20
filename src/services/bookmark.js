import axios from "axios";

export async function getBookmarkList({ size } = {}) {
  return await axios.get(
    `https://api.raindrop.io/rest/v1/raindrops/-1?-created&&perpage=${size}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_RAINDROP_TOKEN}`, //the token is a variable which holds the token
      },
      timeout: 2,
    }
  );
}

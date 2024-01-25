import axios from "axios";

const TOKEN =
  "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";
const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: TOKEN,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

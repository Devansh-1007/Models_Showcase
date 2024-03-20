import axios from "axios";

let pRes = null;
let cRes = null;

async function getPhotos() {
  const url = "https://jsonplaceholder.typicode.com/photos/";
  try {
    const response = await axios.get(url, { params: { _limit: 500 } });
    pRes = response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
}
async function getComments() {
  const url = "https://jsonplaceholder.typicode.com/comments/";
  try {
    const response = await axios.get(url);
    cRes = response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
}
await getPhotos();
await getComments();
for (let i = 0; i < pRes.length; i++) {
  pRes[i].body = cRes[i].body;
  if (i % 9 === 0) {
    pRes[i].featured = true;
  } else pRes[i].featured = false;
}
export default pRes;

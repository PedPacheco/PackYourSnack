import ingredients from "./ingredients";

export async function mockApi(url) {
  return await new Promise((resolve, reject) => {
    if (url === "https://mockapi.com/ingredients") {
      setTimeout(() => {
        resolve({ status: 200, data: ingredients });
      }, 500);
    } else {
      setTimeout(() => {
        reject({ status: 404, error: "not found" });
      }, 500);
    }
  });
}

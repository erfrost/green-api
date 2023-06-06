export const getMessage = async (idInstance, apiTokenInstance) => {
  try {
    const response = await fetch(
      `https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}/`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

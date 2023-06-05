export const sendMessage = async (
  message,
  phone,
  idInstance,
  apiTokenInstance
) => {
  try {
    const response = await fetch(
      `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}/`,
      {
        method: "POST",
        body: JSON.stringify({
          chatId: `${phone}@c.us`,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

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

export const deleteMessage = async (
  receiptId,
  idInstance,
  apiTokenInstance
) => {
  try {
    const response = await fetch(
      `https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

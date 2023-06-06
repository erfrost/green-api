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

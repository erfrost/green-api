export const sendMessage = async (
  message,
  phone,
  idInstance,
  apiTokenInstance
) => {
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
};

export const transformDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedDate = `${hours}:${minutes}`;
  return formattedDate;
};

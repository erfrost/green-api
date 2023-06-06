export const transformPhone = (phone) => {
  if (phone.startsWith("8")) {
    const formattedPhoneNumber = `+7 ${phone.slice(1, 4)} ${phone.slice(
      4,
      7
    )} ${phone.slice(7, 9)} ${phone.slice(9)}`;
    return formattedPhoneNumber;
  } else if (phone.startsWith("7")) {
    const formattedPhoneNumber = `+${phone.slice(0, 1)} ${phone.slice(
      1,
      4
    )} ${phone.slice(4, 7)} ${phone.slice(7, 9)} ${phone.slice(9)}`.replace(
      /(\d{3})(\d{2})(\d{2})(\d{2})/,
      "$1 $2 $3 $4"
    );
    return formattedPhoneNumber;
  } else return phone;
};

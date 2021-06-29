export const dateFormatter = (dateString) => {
  const dateTimeFormat = new Intl.DateTimeFormat('en-CA', {
    dateStyle: 'short',
    timeStyle: 'medium',
  });
  const offSet = new Date().getTimezoneOffset() * 60 * 1000;
  const formatter = dateTimeFormat.format;
  const date = formatter(new Date(dateString).getTime() + offSet);
  return `${date}`;
};

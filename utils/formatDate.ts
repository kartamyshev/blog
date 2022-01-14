const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
};

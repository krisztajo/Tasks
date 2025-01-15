const formatCreationDate = (date: string): string => {
  const [month, day, year] = date.split("/");
  return `${day}.${month}.${year}`;
};

export default formatCreationDate;

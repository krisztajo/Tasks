const randomGenerator = (length: number): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let uid = "";
  for (let i = 0; i < length; i++) {
    uid += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return uid;
};

const randomIdGenerator = (): string => {
  return [
    randomGenerator(8),
    randomGenerator(4),
    randomGenerator(4),
    randomGenerator(4),
    randomGenerator(12),
  ].join("-");
};

export default randomIdGenerator;

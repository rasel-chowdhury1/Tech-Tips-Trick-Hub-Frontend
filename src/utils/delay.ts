export const delay = async (ms = 5000) => {
  return await new Promise((resolve) => setTimeout(resolve, ms));
};

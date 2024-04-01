const getRandomNumber = (arr1, arr2) => {
  const maxValue = Math.max(arr1, arr2);
  const minValue = Math.min(arr1, arr2);

  return Math.floor(Math.random() * (maxValue - minValue + 1) - minValue);
};

export default getRandomNumber;

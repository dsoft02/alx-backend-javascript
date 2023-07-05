const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  const filteredValues = Array.from(set).filter((value) => value !== undefined && value.startsWith(startString));
  const cleanedString = filteredValues.map(value => value.slice(startString.length)).join('-');
  return cleanedString;
};

export default cleanSet;

const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw new Error('Position is outside the range');
  }
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer, 0, length);
  int8Array.set([value], position);
  return new DataView(buffer);
};

export default createInt8TypedArray;

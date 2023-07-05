const getStudentsByLocation = (students, city) => {
  const arrayObject = students.filter((funtion) => funtion.location === city);
  return arrayObject;
};

export default getStudentsByLocation;

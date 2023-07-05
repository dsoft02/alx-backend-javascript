const getStudentsByLocation = (students, city) => {
  const arrayObject = students.filter((student) => student.location === city);
  return arrayObject;
};

export default getStudentsByLocation;

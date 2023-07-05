const getListStudentIds = (students) => {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((studentId) => studentId.id);
};

export default getListStudentIds;

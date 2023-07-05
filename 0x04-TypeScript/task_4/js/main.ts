import { Subjects } from './js/subjects';

const { Cpp, Java, React } = Subjects;

const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

console.log('C++');
Cpp.cpp.setTeacher(cTeacher);
console.log(Cpp.cpp.getRequirements());
console.log(Cpp.cpp.getAvailableTeacher());

console.log('Java');
Java.java.setTeacher(cTeacher);
console.log(Java.java.getRequirements());
console.log(Java.java.getAvailableTeacher());

console.log('React');
React.react.setTeacher(cTeacher);
console.log(React.react.getRequirements());
console.log(React.react.getAvailableTeacher());

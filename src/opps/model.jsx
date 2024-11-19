class Student {
  constructor(data) {
    this.name = data?.name;
  }

  studentName() {
    const { name } = this;
    return name;
  }
}
export default Student;

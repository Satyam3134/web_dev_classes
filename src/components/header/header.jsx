// import Student from "../../opps/model";

import { schooldataItem } from "../../data";

export default function Header({ mohit }) {
  //   const schoolData = new Student({
  //     name: "Satyam",
  //     rollno: "123",
  //     class: "12th",
  //   });
  //   return <>hello mam {schoolData.studentName()}</>;

  return (
    <>
      <ol>
        {schooldataItem?.map((item, index) => (
          <li key={index}>{item?.name}</li>
        ))}
      </ol>
      <h2>{`${console.log(mohit && true)}`}</h2>
    </>
  );
}

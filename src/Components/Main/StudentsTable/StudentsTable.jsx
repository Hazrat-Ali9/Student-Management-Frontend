import ClassOne from "./ClassOne/ClassOne";
import ClassTwo from "./ClassTwo/ClassTwo";
import studentINfo from "../../../assets/StudentInfo.json";
import { useState, useEffect } from "react";
// Student Table js
const StudentsTable = () => {
  const [classOneInfo, setClassOneInfo] = useState(studentINfo[0]);
  const [classTwoInfo, setClassTwoInfo] = useState(studentINfo[1]);

  console.log(classTwoInfo);

  useEffect(() => {
    const newClassOneInfo = classOneInfo
      .slice()
      .sort((a, b) => b.percentage - a.percentage);
    setClassOneInfo(newClassOneInfo);
  }, []);

  useEffect(() => {
    const newClassTwoInfo = classTwoInfo
      .slice()
      .sort((a, b) => b.percentage - a.percentage);
    setClassTwoInfo(newClassTwoInfo);
  }, []);

  return (
    <div className="max-w-[848px] mx-auto  ">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#FFFFFF0D]">
            <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
              ID
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold text-left">
              Name
            </th>
            <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
            <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
          </tr>
        </thead>

        <tbody>
          <tr className="bg-white/5">
            <td className="p-5 text-sm md:text-xl " colSpan="4">
              Class One
            </td>

          </tr>

                {
                    classOneInfo.map((informationForOne,index)=> <ClassOne key={informationForOne.id} informationForOne={informationForOne} index={index}></ClassOne>)
                }

                <tr className="bg-white/5">
                    <td className="p-5 text-sm md:text-xl" colSpan="4">
                        Class Two
                    </td>
                </tr>

                {
                    classTwoInfo.map((informationForTwo,index)=> <ClassTwo key={informationForTwo.id} informationForTwo={informationForTwo} index={index}></ClassTwo>)
                }
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;

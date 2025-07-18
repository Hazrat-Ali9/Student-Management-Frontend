/* eslint-disable react/prop-types */
const ClassTwo = ({informationForTwo,index}) => {
// class two
    const {name,grade,percentage} = informationForTwo;

  return (
  
      <tr className="border-b border-[#7ECEB529]">
        <td className="p-5 text-sm md:text-xl">{index +1}</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="whitespace-nowrap">
            {name}
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">{grade}</td>
        <td className="p-5 text-sm md:text-xl text-center">{percentage}%</td>
      </tr>
   
  );
};

export default ClassTwo;

/* eslint-disable react/prop-types */


const ClassOne = ({informationForOne,index}) => {

    const {name,grade,percentage} = informationForOne;

  return (
    
      <tr className="border-b border-[#7ECEB529]  ">
        <td className="p-5 text-sm md:text-xl">{index +1}</td>
        <td className="p-5 text-sm md:text-xl">
          <div className="whitespace-nowrap">
            <p>{name}</p>
          </div>
        </td>
        <td className="p-5 text-sm md:text-xl text-center">{grade}</td>
        <td className="p-5 text-sm md:text-xl text-center">{percentage}%</td>
      </tr>
   
  );
};

export default ClassOne;

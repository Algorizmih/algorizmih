// const Button = () => {
//   return (
//     <>
//       <div>
//         <button>
//           <a
//             href="#"
//             className="mt-8 inline-block rounded bg-blue-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-600"
//           >
//             About Us
//           </a>
//         </button>
//       </div>
//     </>
//   );
// };

// export default Button;

import React from "react";

const Button = ({ text, onClick, className = "" }) => {
  return (
    <button
      className={`bg-[#1C32FF] hover:bg-blue-900  font-medium  transition rounded focus:outline-none focus:none  ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

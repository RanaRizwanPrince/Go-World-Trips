// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// const HomePopup = () => {
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();
//   useEffect(() => {
//     setShow(true);
//   }, []);
//   const handleStart = () => {
//     setShow(false);       // popup close
//     navigate("/contact"); // apna next page route yahan likhen
//   };
//   if (!show) return null;
//   return (
//     <>
//       <div className="overlay">
//         <div className="popup">
//           <button className="close" onClick={() => setShow(false)}>✖</button>
//           <h2>Welcome 🎉</h2>
//           <p>  Get Free Consultation Today!   Fill out the form and our team will contact you shortly.</p>
//         </div>
//       </div>
//       <style>{`
//         .overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0,0,0,0.8);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 9999;
//         }
//         .popup {
//           background: #fff;
//           width: 400px;
//           padding: 30px;
//           border-radius: 12px;
//           text-align: center;
//           position: relative;
//           animation: fadeIn 0.3s ease-in-out;
//         }
// h2{color:#F36C03;}
//         .close {
//           position: absolute;
//           top: 10px;
//           right: 12px;
//           border: none;
//           background: none;
//           font-size: 18px;
//           cursor: pointer;
//         }
//         .btn { 
//           padding: 10px 20px;
//           background: #F36C03;
//           border: none;
//           color:white;
//           border-radius: 6px; 
//         } 
//       `}</style>
//     </>
//   );
// };
// export default HomePopup;




import React, { useEffect, useState } from "react";

const HomePopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    // 3 seconds baad popup automatically close
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <>
      <div className="overlay">
        <div className="popup">
          <h2>Welcome 🎉</h2>
          <p>
            Get Free Consultation Today! Fill out the form and our team will
            contact you shortly.
          </p>
        </div>
      </div>

      <style>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .popup {
          background: #fff;
          width: 400px;
          padding: 30px;
          border-radius: 12px;
          text-align: center;
          position: relative;
          animation: fadeIn 0.3s ease-in-out;
        }

        h2 {
          color:#F36C03;
        }

        .btn { 
          padding: 10px 20px;
          background: #F36C03;
          border: none;
          color:white;
          border-radius: 6px; 
        } 
      `}</style>
    </>
  );
};

export default HomePopup;
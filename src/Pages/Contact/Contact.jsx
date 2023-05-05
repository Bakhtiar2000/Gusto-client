import React from 'react';

const Contact = () => {
    return (
        <div  className='text-center my-20'>
            <h1 className='text-4xl mb-6'>Contact us </h1>
            <p className='text-xl'>Email: gustobanani@gmail.com</p>
            <p className='text-xl'>Phone: +8801534288567</p>
        </div>
    );
};

export default Contact;








// import React, { useRef } from 'react';

// function App() {
//   const section1Ref = useRef(null);
//   const section2Ref = useRef(null);
//   const section3Ref = useRef(null);

//   const scrollToSection = (sectionRef) => {
//     sectionRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div>
//       <button onClick={() => scrollToSection(section1Ref)}>Go to section 1</button>
//       <button onClick={() => scrollToSection(section2Ref)}>Go to section 2</button>
//       <button onClick={() => scrollToSection(section3Ref)}>Go to section 3</button>

//       <div ref={section1Ref}>
//         <h2>Section 1</h2>
//         <p>This is the content of section 1</p>
//       </div>

//       <div ref={section2Ref}>
//         <h2>Section 2</h2>
//         <p>This is the content of section 2</p>
//       </div>

//       <div ref={section3Ref}>
//         <h2>Section 3</h2>
//         <p>This is the content of section 3</p>
//       </div>
//     </div>
//   );
// }
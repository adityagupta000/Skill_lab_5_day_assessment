// // import React from "react";
// // import Image from "next/image";

// // const Header = () => (
// //   <div className="text-center mb-6">
// //     <Image
// //       src="/1.jpeg"
// //       alt="Aditya Profile"
// //       width={150}
// //       height={150}
// //       className="mx-auto "
// //     />
// //     <h1 className="text-2xl font-bold mt-2">Aditya</h1>
// //     <p className="text-gray-300">
// //       Email: aditya@example.com | Phone: +91 123456789 | Location: Mangalore
// //     </p>
// //   </div>
// // );

// // const Section = ({ title, children }) => (
// //   <div className="p-4 bg-800 rounded-lg shadow-md">
// //     <h2 className="text-xl font-semibold text-blue-400 mb-2">{title}</h2>
// //     {children}
// //   </div>
// // );

// // const Education = () => (
// //   <Section title="Education">
// //     <p>
// //       <strong>Bachelor of Engineering</strong>
// //     </p>
// //   </Section>
// // );

// // const Experience = () => (
// //   <Section title="Experience">
// //     <p>
// //       <strong>Frontend Developer</strong>
// //     </p>
// //     <p>Developed web applications using React.js and JavaScript.</p>
// //   </Section>
// // );

// // const Skills = () => (
// //   <Section title="Skills">
// //     <ul className="list-disc list-inside text-gray-300">
// //       <li>HTML, CSS, JavaScript</li>
// //       <li>React.js, Next.js</li>
// //     </ul>
// //   </Section>
// // );

// // const Projects = () => (
// //   <Section title="Projects">
// //     <p>
// //       <strong>E-commerce Web App</strong>
// //     </p>
// //   </Section>
// // );

// // const Contact = () => (
// //   <Section title="Contact">
// //     <p>
// //       LinkedIn:{" "}
// //       <a
// //         href="https://linkedin.com/in/aditya"
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="text-blue-400"
// //       >
// //         linkedin.com/in/aditya
// //       </a>{" "}
// //       | GitHub:{" "}
// //       <a
// //         href="https://github.com/aditya"
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="text-blue-400"
// //       >
// //         github.com/aditya
// //       </a>
// //     </p>
// //   </Section>
// // );

// // export default function Resume() {
// //   return (
// //     <div className="bg-black text-white mt-5 p-6 max-w-3xl mx-auto rounded-lg shadow-lg">
// //       <Header />

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <Education />
// //         <Experience />
// //         <Skills />
// //         <Projects />
// //       </div>

// //       <div className="mt-6">
// //         <Contact />
// //       </div>
// //     </div>
// //   );
// // }

// // import React from "react";
// // import Image from "next/image";

// // const BleachProfile = () => {
// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
// //       <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-6 max-w-3xl">

// //         <div className="flex-shrink-0">
// //           <Image
// //             src="/1.jpeg"
// //             alt="Ichigo Kurosaki"
// //             width={200}
// //             height={200}
// //             className="rounded-lg"
// //           />
// //         </div>

// //         <div className="text-center md:text-left">
// //           <h1 className="text-3xl font-bold text-orange-400">Ichigo Kurosaki</h1>
// //           <p className="text-gray-300 mt-2">
// //             Substitute Shinigami & Protector of Karakura Town. Wields the powerful Zanpakutō, <strong>Zangetsu</strong>.
// //           </p>

// //           <div className="mt-4">
// //             <h2 className="text-xl font-semibold text-blue-400">Abilities</h2>
// //             <ul className="list-disc list-inside text-gray-300 mt-2">
// //               <li>Bankai: Tensa Zangetsu</li>
// //               <li>Getsuga Tenshō</li>
// //               <li>Hollowfication</li>
// //               <li>Final Getsuga Tenshō</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BleachProfile;

// import React from "react";
// import Image from "next/image";

// const Section = ({ title, children }) => (
//   <div className="p-4 bg-gray-800 rounded-lg shadow-md">
//     <h2 className="text-xl font-semibold text-blue-400 mb-2">{title}</h2>
//     {children}
//   </div>
// );

// export default function Resume() {
//   return (
//     <div className="bg-gray text-white mt-5 p-6 max-w-3xl mx-auto rounded-lg shadow-lg">
//       <div className="text-center mb-6">
//         <Image
//           src="/1.jpeg"
//           alt="Profile"
//           width={120}
//           height={120}
//           className="mx-auto"
//         />
//         <h1 className="text-2xl font-bold mt-2">Aditya</h1>
//         <p className="text-gray-300">
//           Email: aditya@example.com | Location: Mangalore
//         </p>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
//         <Section title="Education">
//           <p>
//             <strong>Bachelor of Engineering</strong>
//           </p>
//         </Section>
//         <Section title="Experience">
//           <p>
//             <strong>Frontend Developer</strong>
//           </p>
//           <p>Developed web applications using React.js & JavaScript.</p>
//         </Section>
//         <Section title="Skills">
//           <ul className="list-disc list-inside text-gray-300">
//             <li>HTML, CSS, JavaScript</li>
//             <li>React.js, Next.js</li>
//           </ul>
//         </Section>
//         <Section title="Projects">
//           <p>
//             <strong>E-commerce Web App</strong>
//           </p>
//         </Section>
//       </div>

//       <div className="mt-6">
//         <Section title="Contact">
//           <p>
//             LinkedIn:{" "}
//             <a
//               href="https://linkedin.com/in/aditya"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-400"
//             >
//               linkedin.com/in/aditya
//             </a>{" "}
//             | GitHub:{" "}
//             <a
//               href="https://github.com/aditya"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-400"
//             >
//               github.com/aditya
//             </a>
//           </p>
//         </Section>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";

const Section = ({ title, children }) => (
  <div className="p-4 bg-gray-800 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold text-blue-400 mb-2">{title}</h2>
    {children}
  </div>
);

export default function Resume() {
  return (
    <div className="bg-black text-white mt-5 p-6 max-w-3xl mx-auto rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <Image
          src="/1.jpeg"
          alt="Aditya Profile"
          width={150}
          height={150}
          className="mx-auto rounded-full"
        />
        <h1 className="text-2xl font-bold mt-2">Aditya</h1>
        <p className="text-gray-300">
          Email: aditya@example.com | Phone: +91 123456789 | Location: Mangalore
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Section title="Education">
          <p>
            <strong>Bachelor of Engineering</strong>
            <br />
            <span className="text-gray-400">Computer Science</span>
          </p>
        </Section>

        <Section title="Experience">
          <p>
            <strong>Frontend Developer</strong>
          </p>
          <p className="text-gray-300">
            Developed responsive web applications using React.js and JavaScript.
            Implemented modern UI/UX designs and optimized frontend performance.
          </p>
        </Section>

        <Section title="Skills">
          <ul className="list-disc list-inside text-gray-300">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Next.js</li>
            <li>Tailwind CSS</li>
            <li>Version Control (Git)</li>
          </ul>
        </Section>

        <Section title="Projects">
          <div>
            <p>
              <strong>E-commerce Web App</strong>
            </p>
            <p className="text-gray-300">
              Full-stack e-commerce platform with product catalog, 
              shopping cart, and payment integration.
            </p>
          </div>
        </Section>
      </div>

      <div className="mt-6">
        <Section title="Contact">
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/aditya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/aditya
            </a>{" "}
            | GitHub:{" "}
            <a
              href="https://github.com/aditya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/aditya
            </a>
          </p>
        </Section>
      </div>
    </div>
  );
}
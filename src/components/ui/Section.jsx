// function Section({ id, children }) {
//   return (
//     <section
//       id={id}
//       className="py-24 px-8"
//     >
//       <div className="max-w-7xl mx-auto">
//         {children}
//       </div>
//     </section>
//   );
// }

// export default Section;
function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
     className={`scroll-mt-28 py-14 lg:py-20 px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export default Section;
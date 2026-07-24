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
      className={`py-24 px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export default Section;
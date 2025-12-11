// import { useLayoutEffect, useRef, useState } from "react";

// export default function LayoutSmooth() {
//   const [open, setOpen] = useState(false);
//   const boxRef = useRef();
//   const [height, setHeight] = useState(0);

//   useLayoutEffect(() => {
//     // Happens BEFORE paint → no jump
//     if (open) {
//       const h = boxRef.current.scrollHeight;
//       setHeight(h);
//     } else {
//       setHeight(0);
//     }
//   }, [open]);

//   return (
//     <div style={{ padding: 20 }}>
//       <h3>✅ useLayoutEffect — Smooth, no jump</h3>

//       <button onClick={() => setOpen(!open)}>Toggle</button>

//       <div
//         ref={boxRef}
//         style={{
//           overflow: "hidden",
//           transition: "height 0.3s ease",
//           background: "#d9ffd9",
//           marginTop: 10,
//           height,
//         }}
//       >
//         <p style={{ margin: 0, padding: 10 }}>
//           This is some content inside a collapsible box.
//         </p>
//       </div>
//     </div>
//   );
// }


// import { useState, useDeferredValue } from "react";

// export default function Child() {
//   // Create a large list of 10,000 items
//   const bigList = Array.from({ length: 10000 }, (_, i) => "Item " + i);

//   const [query, setQuery] = useState("");

//   // Delayed version of the query
//   const deferredQuery = useDeferredValue(query);

//   // Expensive filtering (simulated heavy work)
//   const filtered = bigList.filter((item) =>
//     item.toLowerCase().includes(deferredQuery.toLowerCase())
//   );

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>useDeferredValue Example</h2>

//       <input
//         style={{ padding: 8, width: 300 }}
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Type to search..."
//       />

//       <p>Showing {filtered.length} results...</p>

//       <ul>
//         {filtered.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

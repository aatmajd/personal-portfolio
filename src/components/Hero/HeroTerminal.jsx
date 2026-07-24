import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function HeroTerminal() {
    const terminalLines = [
  "> Booting Portfolio...",
  "> Loading Projects...",
  "> Loading Skills...",
  "> Initializing Developer Profile...",
  "✔ Ready"
];
const command = "npm run portfolio";

const [typedCommand, setTypedCommand] = useState("");
const [visibleLines, setVisibleLines] = useState(0);
const [showCursor, setShowCursor] = useState(true);
const [showNewPrompt, setShowNewPrompt] = useState(false);
useEffect(() => {
  const blink = setInterval(() => {
    setShowCursor((prev) => !prev);
  }, 500);

  return () => clearInterval(blink);
}, []);
useEffect(() => {
  let index = 0;

  const typing = setInterval(() => {
    setTypedCommand(command.slice(0, index + 1));

    index++;

    if (index === command.length) {
      clearInterval(typing);
    }
  }, 50);

  return () => clearInterval(typing);
}, []);
useEffect(() => {
  const interval = setInterval(() => {
    if (typedCommand !== command) return;
    setVisibleLines((prev) => {
      if (prev < terminalLines.length) {
        return prev + 1;
      }

      clearInterval(interval);
      setShowNewPrompt(true);
      return prev;
    });
  }, 500);

  return () => clearInterval(interval);
}, [typedCommand]);
  return (
    <div className="h-auto sm:h-52 font-mono text-xs sm:text-sm bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-xl">

      {/* Window Bar */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-gray-700">

        <div className="w-3 h-3 rounded-full bg-red-500"></div>

        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

        <div className="w-3 h-3 rounded-full bg-green-500"></div>

        <p className="ml-4 text-gray-400 text-sm font-mono">
          terminal
        </p>

      </div>

      {/* Terminal Body */}

      <div className="px-3 sm:px-5 pt-2 pb-3 sm:pb-0 font-mono text-xs sm:text-sm">



  <p className="break-all text-green-400">
    Aatmaj@portfolio:~$ {typedCommand}
    
  </p>

  {terminalLines.map((line, index) => (

  <p

    key={index}

    className={

      index < visibleLines

        ? line.includes("✔")

          ? "text-green-400"

          : "text-gray-300"

        : "invisible"

    }

  >

    {line}

  </p>

))}
<p
    className={
        showNewPrompt
            ? "break-all text-green-400"
            : "invisible"
    }
>
    Aatmaj@portfolio:~$
    <span className="text-white">
        {showCursor ? "█" : ""}
    </span>
</p>
</div>

    </div>
    
    
  );
  
  
}

export default HeroTerminal;
import React from "react";
import FingerGuide from "./FingerGuide";
import { keyToFingerMap } from "@/constants/keyboard";

interface VisualKeyboardProps {
  nextKey: string | null;
}

const VisualKeyboard: React.FC<VisualKeyboardProps> = ({ nextKey }) => {
  const isUpperCase = nextKey && nextKey >= "A" && nextKey <= "Z";
  const keyboardLayout = [
    [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "Backspace",
    ],
    ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
    [
      "CapsLock",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      ";",
      "'",
      "Enter",
    ],
    ["L-Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "R-Shift"],
    [" "],
  ];
  const keyWidths: { [key: string]: string } = {
    default: "w-14",
    " ": "flex-grow",
    Backspace: "w-28",
    Tab: "w-24",
    "\\": "w-20",
    CapsLock: "w-32",
    Enter: "w-40",
    "L-Shift": "w-48",
    "R-Shift": "w-48",
  };
  return (
    <div className="w-full max-w-5xl p-2 mx-auto mt-6 bg-gray-900/50 rounded-lg">
      {keyboardLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center my-1.5 w-full gap-1">
          {row.map((key) => {
            const displayKey = key.includes("Shift")
              ? "Shift"
              : key.includes("Caps")
              ? "Caps"
              : key.includes("Back")
              ? "Back"
              : key;
            let lookupKey = key.toLowerCase();
            if (key.includes("Shift")) lookupKey = "shift";
            const isNext =
              (isUpperCase && key.includes("Shift")) ||
              lookupKey === nextKey?.toLowerCase();
            const finger = keyToFingerMap[lookupKey];
            const keyColor = finger?.includes("Pinky")
              ? "bg-pink-600/80"
              : finger?.includes("Ring")
              ? "bg-purple-600/80"
              : finger?.includes("Middle")
              ? "bg-blue-600/80"
              : finger?.includes("Index")
              ? "bg-green-600/80"
              : finger?.includes("Thumb")
              ? "bg-gray-600/80"
              : "bg-gray-700/80";
            return (
              <div
                key={key}
                className={`h-14 rounded-md text-white flex items-center justify-center font-mono transition-all duration-150 ease-in-out ${
                  keyWidths[key] || keyWidths.default
                } ${
                  isNext
                    ? "transform scale-110 shadow-lg shadow-cyan-500/50 ring-2 ring-cyan-400 bg-cyan-500"
                    : keyColor
                }`}
              >
                {displayKey.toUpperCase()}
              </div>
            );
          })}
        </div>
      ))}
      <FingerGuide nextKey={nextKey} />
    </div>
  );
};

export default VisualKeyboard;

import React from "react";
import { keyToFingerMap } from "@/constants/keyboard";

interface FingerGuideProps {
  nextKey: string | null;
}

const FingerGuide: React.FC<FingerGuideProps> = ({ nextKey }) => {
  const isUpperCase = nextKey && nextKey >= "A" && nextKey <= "Z";
  let finger = keyToFingerMap[nextKey?.toLowerCase() || ""] || null;
  if (isUpperCase) finger = "Pinky";
  if (nextKey === " ") finger = "Thumb";

  const Hand = ({ isLeft }: { isLeft: boolean }) => {
    const fingers = isLeft
      ? [
          ["L-Pinky", "top-10 left-0"],
          ["L-Ring", "top-2 left-8"],
          ["L-Middle", "top-0 left-16"],
          ["L-Index", "top-2 left-24"],
        ]
      : [
          ["R-Index", "top-2 right-24"],
          ["R-Middle", "top-0 right-16"],
          ["R-Ring", "top-2 right-8"],
          ["R-Pinky", "top-10 right-0"],
        ];
    const getHighlight = (name: string) =>
      (finger === "Pinky" && name.includes("Pinky")) || finger === name;
    return (
      <div className="relative w-40 h-28">
        <div className="absolute bottom-0 w-full h-20 bg-gray-700/80 rounded-b-[50px]"></div>
        {fingers.map(([name, posClass]) => (
          <div
            key={name}
            className={`absolute w-8 h-8 rounded-full transition-all duration-200 ${posClass} ${
              getHighlight(name)
                ? "bg-cyan-400 scale-125 ring-2 ring-white"
                : "bg-gray-500 opacity-60"
            }`}
          ></div>
        ))}
      </div>
    );
  };

  const Thumb = () => (
    <div
      className={`relative w-24 h-10 self-end mb-2 rounded-xl transition-all duration-200 ${
        finger === "Thumb"
          ? "bg-cyan-400 scale-110 ring-2 ring-white"
          : "bg-gray-500 opacity-60"
      }`}
    ></div>
  );

  return (
    <div className="flex justify-center items-center w-full max-w-lg h-36 mx-auto mt-6">
      <div className="flex justify-center items-end space-x-6">
        <Hand isLeft={true} />
        <Thumb />
        <Hand isLeft={false} />
      </div>
    </div>
  );
};

export default FingerGuide;

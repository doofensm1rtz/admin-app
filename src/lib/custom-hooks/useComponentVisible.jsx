import { useState, useRef, useEffect } from "react";

export default function useComponentVisible(initialIsVisible, setVisibility) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleHideDropdown = (event) => {
    if (event.key === "Escape") {
      setIsComponentVisible(false);
      setVisibility && setVisibility(false);
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
      setVisibility && setVisibility(false);
      !setVisibility && console.log(event.target, ref);
    }
  };

  const handleMouseScroll = (event) => {
    setIsComponentVisible(false);
    setVisibility && setVisibility(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleHideDropdown, true);
    document.addEventListener("click", handleClickOutside, true);
    document.body.addEventListener("wheel", handleMouseScroll, true);
    return () => {
      document.removeEventListener("keydown", handleHideDropdown, true);
      document.removeEventListener("click", handleClickOutside, true);
      document.body.removeEventListener("wheel", handleMouseScroll, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

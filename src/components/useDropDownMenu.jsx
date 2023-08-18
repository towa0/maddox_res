import { useState, useEffect } from "react";

function useDropdownMenu(initialState) {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.closest(".dropdown-menu")) return;
      setIsOpen(false);
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return { isOpen, toggleMenu };
}

export default useDropdownMenu;

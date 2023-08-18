import { useState, useEffect } from "react";

function useDropdownMenu(initialState) {
  const [isOpen2, setIsOpen2] = useState(initialState);

  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.closest(".dropdown-menu")) return;
      setIsOpen2(false);
    }

    if (isOpen2) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen2]);

  function toggleMenu2() {
    setIsOpen2(!isOpen2);
  }

  return { isOpen2, toggleMenu2 };
}

export default useDropdownMenu;

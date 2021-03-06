import { useState, useEffect } from "react";

const useBurgerMenu = (initialState, initialClick) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const [isClick, setIsClick] = useState(initialClick);

  useEffect(() => {
    if (isClick && isOpen) {
      hide();
    }
  }, [isOpen, isClick]);
  const hide = () => {
    setIsOpen(false);
  };

  const show = () => {
    setIsOpen(true);
    setIsClick(false);
  };

  const handleSelect = () => {
    setIsClick(true);
  };

  const handleClick = () => {
    isOpen ? hide() : show();
  };

  return { handleClick, isOpen, handleSelect };
};

export default useBurgerMenu;

import { useState, useCallback, useRef } from "react";
import { useClickAway } from "react-use";

const NiceSelect = ({
  options,
  defaultCurrent,
  placeholder,
  className,
  onChange,
  name,
}) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(options[defaultCurrent]);
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);
  const ref = useRef(null);

  useClickAway(ref, onClose);

  const currentHandler = (item) => {
    setCurrent(item);
    onChange(item, name);
    onClose();
  };

  return (
    <div
      className={`nice-select ${(className, open && "open")}`}
      role="button"
      tabIndex={0}
      onClick={() => setOpen((prev) => !prev)}
      onKeyDown={(e) => {
        e.key === "Enter" && setOpen((prev) => !prev);
      }}
      ref={ref}
    >
      <span className="current">{current?.text || placeholder}</span>
      <ul
        className="list"
        role="menubar"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {options?.map((item) => (
          <li
            key={item.value}
            data-value={item.value}
            className={`option ${
              item.value === current?.value && "selected focus"
            }`}
            role="menuitem"
            onClick={() => currentHandler(item)}
            onKeyDown={(e) => {
              e.key === "Enter" && currentHandler(item);
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NiceSelect;

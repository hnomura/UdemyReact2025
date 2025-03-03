export default function TabButton({children, onSelect, isSelected}) {

  // prop.children gives element child (incl. inner text)
  return (
    <li>
      <button className={isSelected? "active": null} onClick={onSelect}>{children}</button>
    </li>
  );
}

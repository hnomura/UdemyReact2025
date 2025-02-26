export default function TabButton({children, onSelect}) {

  // prop.children gives element child (incl. inner text)
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

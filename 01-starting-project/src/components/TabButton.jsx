export default function TabButton({children, isSelected, ...props}) {

  // prop.children gives element child (incl. inner text)
  return (
    <li>
      <button className={isSelected? "active": null} {...props}>{children}</button>
    </li>
  );
}

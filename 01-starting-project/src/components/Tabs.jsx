export default function Tabs({ children, buttons, buttonsContainer }) {
  // dynamically specified component type for wrapper of "buttons"
  // Key is to use the Upper Case character for the first letter, so that
  // React treats it as a component instead of a string.
  // Alternatively, the prop name can be "ButtonContainer" in this case,
  // without the const declaration below.
  const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
}

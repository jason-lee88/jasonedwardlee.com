interface ColorSchemeToggleProps {
  toggleColorScheme: () => void;
}

const ColorSchemeToggle = ({ toggleColorScheme }: ColorSchemeToggleProps) => (
  <button onClick={toggleColorScheme}>Theme</button>
);

export default ColorSchemeToggle;

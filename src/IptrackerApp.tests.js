import { render, screen } from "@testing-library/react";
import IptrackerApp from "../src/components/IptrackerApp";

test('renders "Hola mundo"', () => {
  // Arrange
  render(<IptrackerApp />);
  // Act
  const divElement = screen.getByText("Hola mundo");
  // Assert
  expect(divElement).toBeInTheDocument();
});

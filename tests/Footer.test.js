import Footer from "../src/components/Footer";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Footer component", () => {
  test("author has to be in the footer", () => {
    render(<Footer />);
    const author = screen.getByText(/Alba Vidal/i);
    expect(author).toBeInTheDocument();
  });

  test("Linkedin is in the footer", () => {
    render(<Footer />);
    const linkedin = screen.getByTitle("Linkedin");
    expect(linkedin).toBeInTheDocument();
    expect(linkedin.href).toBe("https://www.linkedin.com/in/albavidalm/");
    expect(linkedin.target).toBe("_blank");
  });
});

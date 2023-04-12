import Footer from "../src/components/Footer";
import { render, screen } from "@testing-library/react";
import React from "react";

describe("Footer component", () => {
  let author;
  let linkedin;

  beforeEach(() => {
    render(<Footer />);
    author = screen.getByText(/Alba Vidal/i);
    linkedin = screen.getByTitle("Linkedin");
  });

  test("author has to be in the footer", () => {
    expect(author).toBeInTheDocument();
  });

  test("Linkedin is in the footer", () => {
    expect(linkedin).toBeInTheDocument();
    expect(linkedin.href).toBe("https://www.linkedin.com/in/albavidalm/");
    expect(linkedin.target).toBe("_blank");
  });
});

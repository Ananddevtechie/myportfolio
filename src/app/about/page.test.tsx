import { render, screen } from "@testing-library/react";
import About from "./page";
import "@testing-library/jest-dom";
import '@testing-library/jest-dom';

// Mock ResizeObserver for jsdom environment
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

describe("About Page", () => {
  it("renders the About me heading", () => {
    render(<About />);
    expect(screen.getByText(/About e/i)).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component tests", () => {
  test("renders posts if request succeeds", async () => {
    // jest.fn creates a mock dummy function
    window.fetch = jest.fn();
    // when we fetch, we call response.json once response comes
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    render(<Async />);
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});

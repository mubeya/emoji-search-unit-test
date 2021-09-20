import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("Emoji Search Testing" , () => {
    test("Header dökümanda bulunmalıdır", () => {
        render(<Header />)
        const header = screen.getByText("Emoji Search");
        expect(header).toBeInTheDocument();
    });
})
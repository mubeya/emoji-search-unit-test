import { render } from "@testing-library/react";
import EmojiResultRow from "./EmojiResultRow";

describe("Emoji Search Testing" , () => {
    const emoji = {
        key:"100",
        symbol:"💯",
        title:"100"
    }

    test("Emojiler üstlerine tıklandıklarında kopyalanabilmelidir.", () => {
        const {container} = render(<EmojiResultRow key={emoji.title} symbol={emoji.symbol} title={emoji.title}/>)
        const row = container.querySelector(".copy-to-clipboard").dataset.clipboardText;
        expect(row).toEqual(emoji.symbol);
    });
    
})
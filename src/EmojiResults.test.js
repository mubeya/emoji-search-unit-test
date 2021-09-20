import { render } from "@testing-library/react";

import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji"

describe("Emoji Search Testing" , () => {
   
    test("Emoji listesi ilk açılışta ekrana gelmelidir.", () => {
        const {container} = render(<EmojiResults emojiData={filterEmoji("", 20)}/>)
        const emojiList = container.getElementsByClassName("component-emoji-result-row");
        expect(emojiList.length).toEqual(20);
    });

    test("Emoji listesi yeniden filtreli ekrana gelmelidir.", () => {
        const {container} = render(<EmojiResults emojiData={filterEmoji("smile", 1)}/>)
        const emojiList = container.getElementsByClassName("component-emoji-result-row");
        expect(emojiList.length).toEqual(1);
    });
})
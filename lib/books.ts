// The reading list shown in the Shelf section. Add a book here and the page,
// the counter, and the spine stack all pick it up. `read: false` renders an
// empty checkbox, so this doubles as the to-read list.
export interface Book {
  title: string;
  author: string;
  read: boolean;
}

export const books: Book[] = [
  { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson", read: true },
  { title: "Days at the Morisaki Bookshop", author: "Satoshi Yagisawa", read: true },
  { title: "Who Moved My Cheese?", author: "Spencer Johnson", read: true },

  { title: "101 Essays That Will Change the Way You Think", author: "Brianna Wiest", read: false },
  { title: "Everything I Know About Love", author: "Dolly Alderton", read: false },
  { title: "How to Not Die Alone", author: "Logan Ury", read: false },
  { title: "The Defining Decade", author: "Meg Jay", read: false },
  { title: "The Vegetarian", author: "Han Kang", read: false },
  { title: "The Art of War", author: "Sun Tzu", read: false },
  { title: "Almond", author: "Won-pyung Sohn", read: false },
  { title: "Three Women", author: "Lisa Taddeo", read: false },
  { title: "The Courage to Be Disliked", author: "Ichiro Kishimi and Fumitake Koga", read: false },
  { title: "So Good They Can’t Ignore You", author: "Cal Newport", read: false },
  { title: "Talk Like TED", author: "Carmine Gallo", read: false },
  { title: "Factfulness", author: "Hans Rosling", read: false },
  { title: "The Correspondent", author: "Virginia Evans", read: false },
  { title: "The Silent Patient", author: "Alex Michaelides", read: false },
  { title: "$100M Offers", author: "Alex Hormozi", read: false },
  { title: "Skin in the Game", author: "Nassim Nicholas Taleb", read: false },
  { title: "Shoe Dog", author: "Phil Knight", read: false },
  { title: "Influence", author: "Robert Cialdini", read: false },
  { title: "Make", author: "Pieter Levels", read: false },
];

export function readingSummary(list: readonly Book[]) {
  const read = list.filter((b) => b.read).length;
  return { read, total: list.length, toRead: list.length - read };
}

// Splits the list for display, keeping each group in the order it was added.
export function shelfGroups(list: readonly Book[]) {
  return {
    read: list.filter((b) => b.read),
    toRead: list.filter((b) => !b.read),
  };
}

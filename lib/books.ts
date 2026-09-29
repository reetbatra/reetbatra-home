// The reading list shown in the Shelf section. Add a book here and the page,
// the counter, and the spine stack all pick it up. `read: false` renders an
// empty checkbox, so this doubles as the to-read list.
export interface Book {
  title: string;
  author: string;
  read: boolean;
}

export const books: Book[] = [
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    read: true,
  },
];

export function readingSummary(list: readonly Book[]) {
  const read = list.filter((b) => b.read).length;
  return { read, total: list.length, toRead: list.length - read };
}

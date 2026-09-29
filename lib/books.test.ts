import { test } from "node:test";
import assert from "node:assert/strict";
import { books, readingSummary, shelfGroups, type Book } from "./books.ts";

test("every book has a title and author, and no title repeats", () => {
  const titles = new Set<string>();
  for (const b of books) {
    assert.ok(b.title.trim(), "empty title");
    assert.ok(b.author.trim(), `empty author for ${b.title}`);
    assert.ok(!titles.has(b.title), `duplicate title: ${b.title}`);
    titles.add(b.title);
  }
});

test("book copy follows the site's no em dash rule", () => {
  for (const b of books) {
    assert.ok(!/—/.test(b.title + b.author), `em dash in ${b.title}`);
  }
});

test("exactly the books Reet has finished are ticked", () => {
  const ticked = books.filter((b) => b.read).map((b) => b.title).sort();
  assert.deepEqual(ticked, [
    "Days at the Morisaki Bookshop",
    "The Almanack of Naval Ravikant",
    "Who Moved My Cheese?",
  ]);
});

test("shelfGroups splits read from unread and keeps insertion order", () => {
  const list: Book[] = [
    { title: "A", author: "X", read: false },
    { title: "B", author: "Y", read: true },
    { title: "C", author: "Z", read: false },
    { title: "D", author: "W", read: true },
  ];
  const { read, toRead } = shelfGroups(list);
  assert.deepEqual(read.map((b) => b.title), ["B", "D"]);
  assert.deepEqual(toRead.map((b) => b.title), ["A", "C"]);
});

test("readingSummary counts read and unread books", () => {
  const list: Book[] = [
    { title: "A", author: "X", read: true },
    { title: "B", author: "Y", read: false },
    { title: "C", author: "Z", read: true },
  ];
  assert.deepEqual(readingSummary(list), { read: 2, total: 3, toRead: 1 });
  assert.deepEqual(readingSummary([]), { read: 0, total: 0, toRead: 0 });
});

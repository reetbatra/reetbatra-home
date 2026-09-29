import { test } from "node:test";
import assert from "node:assert/strict";
import { books, readingSummary, type Book } from "./books.ts";

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

test("The Almanack is on the list and marked read", () => {
  const almanack = books.find((b) => b.title === "The Almanack of Naval Ravikant");
  assert.ok(almanack, "The Almanack is missing");
  assert.equal(almanack.read, true);
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

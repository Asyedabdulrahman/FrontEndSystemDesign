const data = {
  authors: [
    { id: "1", name: "chirag goel", booksids: ["101", "102"] },
    { id: "2", name: "akshay saini", bookids: ["103"] },
  ],
  books: [
    { id: "101", title: "book 1", publishedYear: 2000, authorid: "1" },
    { id: "102", title: "book 2", publishedYear: 2010, authorid: "1" },
    { id: "103", title: "book 3", publishedYear: 2010, authorid: "2" },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      console.log(parent);
      return data.books.filter((book) => parent.booksids.includes(book.id));
    },
  },
  Author: {
    books: (parent, args, context, info) => {
      console.log(parent);
      return data.books.find((booksdetails) => booksdetails.id === parent.id);
    },
  },
  Query: {
    authors: () => {
      return data.authors;
    },

    books: () => {
      return data.books;
    },
  },
};

const newLibrary = () => {
  let library = [];

  const addNewbook = (name, author, page, isRead) => {
    library.push({
      name,
      author,
      page,
      isRead,
      ID: crypto.randomUUID(),
    });
  };

  const getLatestBook = () => library[library.length - 1];

  const getLibrary = () => library;

  return { addNewbook, getLatestBook, getLibrary };
};


export { newLibrary };

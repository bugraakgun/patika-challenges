import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./main.css";

const Main = ({ books1 }) => {
  const [detailModalIsOpen, setDetailModalIsOpen] = useState(false);
  const [inspectModalIsOpen, setInspectModalIsOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleDetailClick = (book) => {
    setSelectedBook(book);
    setDetailModalIsOpen(true);
  };

  const handleInspectClick = (book) => {
    setSelectedBook(book);
    setInspectModalIsOpen(true);
  };

  const closeModal = () => {
    setDetailModalIsOpen(false);
    setInspectModalIsOpen(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {books1 &&
        books1.map((book) => (
          <div
            key={book.id}
            className={`${styles["book-card"]} relative group overflow-hidden`}
          >
            <img
              src={book.img}
              alt={book.title}
              className="max-w-full h-auto rounded mt-5 transition duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end justify-center px-4 pb-4 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="text-center text-white">
                <p className="font-bold text-lg">{book.title}</p>
                <p>{book.author}</p>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                  onClick={() => handleDetailClick(book)}
                >
                  Detay
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded mt-2 ml-2"
                  onClick={() => handleInspectClick(book)}
                >
                  İncele
                </button>
              </div>
            </div>
          </div>
        ))}

      <Modal
        isOpen={detailModalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detail Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            maxWidth: "400px",
            margin: "auto",
            borderRadius: "8px",
            padding: "20px",
          },
        }}
      >
        <img
          src={selectedBook?.img}
          alt={selectedBook?.title}
          className="max-w-full h-auto rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 uppercase">{selectedBook?.title}</h2>
        <p className="text-lg mb-2 text-gray-800 font-medium">{selectedBook?.author}</p>
        <p className="text-base text-gray-500"> <span className="font-bold ">Sayfa Sayısı</span>{`: ${selectedBook?.pageCount}`}</p>
        <button
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mt-4"
          onClick={closeModal}
        >
          Kapat
        </button>
      </Modal>

<Modal
  isOpen={inspectModalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Inspect Modal"
  style={{
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      maxWidth: "400px",
      margin: "auto",
      borderRadius: "8px",
      padding: "20px",
    },
  }}
>
  <h2 className="text-2xl font-bold mb-2 uppercase">{selectedBook?.title}</h2>
  {/* Ortalama uzunlukta bir metin */}
  <p className="text-base text-gray-500">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor nec lacus euismod fringilla ut eu tellus.
  </p>
  <p className="text-lg mb-2 text-gray-600 font-medium ">{selectedBook?.author}</p>
  <button
    className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded mt-4"
    onClick={closeModal}
  >
    Kapat
  </button>
</Modal>


    </div>
  );
};

export default Main;

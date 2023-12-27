// BookDetail.jsx
import React from "react";

const BookDetail = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Yazar: {book.author}</p>
      <p>Sayfa Sayısı: {book.pageCount}</p>
      {/* Diğer detayları ekleyebilirsiniz */}
    </div>
  );
};

export default BookDetail;

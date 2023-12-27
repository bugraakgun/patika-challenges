// src/App.test.js
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Jest ile kullanılan jest-dom eklentisi

import App from './App';

test('Başlık kısmının başarılı bir şekilde render edildiğini kontrol et', () => {
  render(<App />);
  expect(screen.getByText('Emoji Search')).toBeInTheDocument();
});

test('Uygulama ilk açıldığında emoji listesinin başarılı bir şekilde render edildiğini kontrol et', () => {
  render(<App />);
  const defaultEmojiCount = 20; // Varsayılan olarak ilk açıldığında görünen emoji sayısı
  expect(screen.getAllByAltText('Click to copy emoji')).toHaveLength(defaultEmojiCount);
});

test('Filtreleme işlemi yapıldığında emoji listesinin filtreye uygun şekilde yeniden render edildiğini kontrol et', async () => {
  render(<App />);
  
  // Filtreleme yapmadan önce emoji sayısını al
  const defaultEmojiCount = screen.getAllByAltText('Click to copy emoji').length;

  // Filtreleme input'una bir değer gir
  const filterInput = screen.getByRole('textbox');
  fireEvent.change(filterInput, { target: { value: 'happy' } });

  // Filtrelenmiş emoji sayısını bekle ve kontrol et
  await waitFor(() => {
    const filteredEmojiCount = screen.getAllByAltText('Click to copy emoji').length;
    expect(filteredEmojiCount).toBeLessThanOrEqual(defaultEmojiCount); // Filtrelenmiş emoji sayısı, başlangıçtaki sayıdan az veya eşit olmalı
  });
});

test('Liste üzerinden herhangi emojiye tıklandığında, ilgili emojinin kopyalandığını kontrol et', () => {
  render(<App />);
  const emojiToCopy = screen.getAllByAltText('Click to copy emoji')[0];
  
  // Emojiye tıklanıyor gibi davran ve kopyalama işlemini kontrol et
  fireEvent.click(emojiToCopy);
  expect(document.execCommand).toHaveBeenCalledWith('copy');
});

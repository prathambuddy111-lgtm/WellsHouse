'use client';

import { useState } from 'react';
import Header from '@/components/header';

const MOCK_BOOKS = [
  {
    id: '1',
    title: 'The Time Machine',
    author: 'H.G. Wells',
    genre: 'Classics',
    cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '2',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Fiction',
    cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '3',
    title: 'Meditations',
    author: 'Marcus Aurelius',
    genre: 'Philosophy',
    cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: '4',
    title: 'Leaves of Grass',
    author: 'Walt Whitman',
    genre: 'Poetry',
    cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
  },
];

const GENRES = ['All', 'Classics', 'Fiction', 'Philosophy', 'Poetry', 'Essays'];

export default function StacksPage() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = MOCK_BOOKS.filter((book) => {
    const matchesGenre = selectedGenre === 'All' || book.genre === selectedGenre;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2623] font-sans">
      <Header />

      <main className="max-w-6xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12 border-b border-[#E5E0D8] pb-8">
          <h1 className="font-serif text-4xl font-normal tracking-tight mb-3">The Stacks</h1>
          <p className="text-[#6E655F] text-lg max-w-xl font-light">
            Explore our curated collection of timeless literature and modern classics.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white border border-[#E5E0D8] rounded-none px-4 py-2 text-sm w-full md:w-80 focus:outline-none focus:border-[#2C2623]"
          />

          <div className="flex flex-wrap gap-2">
            {GENRES.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-1.5 text-xs tracking-wider uppercase transition-colors ${
                  selectedGenre === genre
                    ? 'bg-[#2C2623] text-[#FAF8F5]'
                    : 'bg-white text-[#5C534E] border border-[#E5E0D8] hover:border-[#2C2623]'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book) => (
            <div key={book.id} className="group flex flex-col cursor-pointer">
              <div className="aspect-[2/3] bg-[#EAE6DF] mb-4 overflow-hidden border border-[#E5E0D8]">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#8C827A] mb-1">
                {book.genre}
              </span>
              <h3 className="font-serif text-lg font-medium text-[#2C2623] leading-snug mb-1">
                {book.title}
              </h3>
              <p className="text-xs text-[#6E655F] font-light">{book.author}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
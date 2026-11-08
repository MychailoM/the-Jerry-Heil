
import { useEffect, useMemo, useState } from "react";
import songs from "./../data/songs.json";
import "./../styles/SongsList.css";

export function SongsList() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [sortOrder, setSortOrder] = useState("newest");

  // Перетворення DD.MM.YYYY у timestamp
  const parseDate = (date) => {
    const [day, month, year] = date.split(".").map(Number);

    return new Date(year, month - 1, day).getTime();
  };

  // Сортування пісень
  const sortedSongs = useMemo(() => {
    return [...songs].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);

      return sortOrder === "newest"
        ? dateB - dateA
        : dateA - dateB;
    });
  }, [sortOrder]);

  // Закриття модального вікна клавішею Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedSong(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Панель сортування */}
      <div className="songs-toolbar">
        <div className="songs-count">
          Усього пісень: <strong>{songs.length}</strong>
        </div>

        <div className="songs-sort">
          <label htmlFor="songs-sort-select">
            Сортування:
          </label>

          <select
            id="songs-sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="songs-sort-select"
          >
            <option value="newest">
              Від новіших до старіших
            </option>

            <option value="oldest">
              Від старіших до новіших
            </option>
          </select>
        </div>
      </div>

      {/* Список пісень */}
      <ul className="songs-list">
        {sortedSongs.map((song) => (
          <li className="songs-item" key={song.id}>
            <div className="songs-image-wrapper">
              <img
                className="songs-image"
                src={`/photos/songs-preview/${song.id}.jpg`}
                alt={song.name}
              />
            </div>

            <div className="songs-content">
              <h2 className="songs-name">{song.name}</h2>

              <p className="songs-singers">{song.singers}</p>

              <p className="songs-date">{song.date}</p>

              <div className="songs-actions">
                <a
                  className="songs-button songs-listen"
                  href={song.video}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>▶</span> Прослухати
                </a>

                <button
                  className="songs-button songs-read"
                  onClick={() => setSelectedSong(song)}
                >
                  <span>☰</span> Переглянути текст
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Модальне вікно */}
      {selectedSong && (
        <div
          className="songs-modal-overlay"
          onClick={() => setSelectedSong(null)}
        >
          <div
            className="songs-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="songs-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="songs-modal-header">
              <div>
                <h2 id="songs-modal-title">
                  {selectedSong.name}
                </h2>

                <p>{selectedSong.singers}</p>
                <p className="songs-date">{selectedSong.date}</p>
              </div>

              <button
                className="songs-modal-close"
                onClick={() => setSelectedSong(null)}
                aria-label="Закрити"
              >
                ×
              </button>
            </div>

            <div className="songs-modal-body">
              <p className="songs-modal-text">
                {selectedSong.text}
              </p>
            </div>

            <div className="songs-modal-footer">
              <a
                className="songs-button songs-listen"
                href={selectedSong.video}
                target="_blank"
                rel="noreferrer"
              >
                ▶ Прослухати
              </a>

              <button
                className="songs-button songs-close"
                onClick={() => setSelectedSong(null)}
              >
                Закрити
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

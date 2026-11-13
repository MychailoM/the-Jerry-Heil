import "./../styles/SocialsList.css";

export const SocialsList = () => {
  const socials = [
    {
      social: "YouTube",
      link: "https://www.youtube.com/@JERRY_HEIL",
      preview: "preview-eurovision",
    },
    {
      social: "YouTube Music",
      link: "https://music.youtube.com/@JERRY_HEIL",
      preview: "preview-eurovision",
    },
    {
      social: "Instagram",
      link: "https://www.instagram.com/thejerryheil/",
      preview: "preview-eurovision",
    },
    {
      social: "Telegram",
      link: "https://t.me/s/jerryheil",
      preview: "palaceOfMusic",
    },
    {
      social: "TikTok",
      link: "https://www.tiktok.com/@jerryheil",
      preview: "preview-eurovision",
    },
    {
      social: "Apple Music",
      link: "https://music.apple.com/ua/artist/jerry-heil/1300248034?l=uk",
      preview: "preview-eurovision",
    },
    {
      social: "Spotify",
      link: "https://open.spotify.com/artist/71DkA619tW0bpaMi4QBzmr",
      preview: "preview-eurovision",
    },
    {
      social: "Threads",
      link: "https://www.threads.com/@thejerryheil",
      preview: "preview-eurovision",
    },
    {
      social: "X",
      link: "https://x.com/thejerryheil",
      preview: "preview-eurovision",
    },
    {
      social: "Facebook",
      link: "https://www.facebook.com/thejerryheil2",
      preview: "preview-eurovision",
    },
  ];

  return (
    <ul className="socials-list">
      {socials.map((social) => (
        <li className="socials-item" key={social.social}>
          <img className="socials-img"
            src={`/photos/socials-preview/${social.preview}.jpeg`}
            alt={social.social}
          />
          <h2 className="socials-title">{social.social}</h2>
          <a className="socials-link" href={social.link} target="_blank" rel="noopener noreferrer">
            Перейти
          </a>
        </li>
      ))}
    </ul>
  );
};

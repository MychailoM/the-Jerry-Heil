
import styled from "styled-components";

const SocialsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;

  a {
    display: inline-flex;
    flex-shrink: 0;
    color: var(--white-sky-tint);
    transition: opacity 0.3s ease;
  }

  a:hover {
    opacity: 0.7;
  }

  svg {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

const socials = [
  { name: "Instagram", icon: "icon-instagram", url: "https://www.instagram.com/" },
  { name: "Telegram", icon: "icon-telegram", url: "https://telegram.org/" },
  { name: "YouTube", icon: "icon-youtube", url: "https://www.youtube.com/" },
  { name: "TikTok", icon: "icon-tiktok", url: "https://www.tiktok.com/" },
  { name: "YouTube Music", icon: "icon-youtubemusic", url: "https://music.youtube.com/" },
  { name: "Apple Music", icon: "icon-applemusic", url: "https://music.apple.com/" },
  { name: "Spotify", icon: "icon-spotify", url: "https://open.spotify.com/" },
];

export function SocialsLink() {
  return (
    <SocialsBox>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          title={social.name}
        >
          <svg className="icon" aria-hidden="true">
            <use href={`/icons/symbol-defs.svg#${social.icon}`} />
          </svg>
        </a>
      ))}
    </SocialsBox>
  );
}

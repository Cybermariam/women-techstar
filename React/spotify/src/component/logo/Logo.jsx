import SpotifyWhite from './../../assets/images/spotify-white.svg';
import SpotifyBlack from './../../assets/images/spotify-black.svg';
import style from './style.module.css';

export function Logo(props) {
  const myImage = props.useWhite ? SpotifyWhite : SpotifyBlack;
  return (
    <a href="#/dashboard" className={style.logo}>
      <img src={myImage} alt="spotify-logo" className="ms" />
    </a>
  );
  /* if (props.useWhite) {
    return (
      <a href="#/dashboard">
        <img src={SpotifyWhite} alt="spotify-logo" />
      </a>
    );
  } else {
    return (
      <a href="#/dashboard">
        <img src={SpotifyBlack} alt="spotify-logo" />
      </a>
    );
  }*/
}
//<img src={SpotifyWhite} alt="spotify-logo" />

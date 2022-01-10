import errorImage from './error.jpg';

export function PokemonFallbackView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="sadcat" />
      {message}
    </div>
  );
}

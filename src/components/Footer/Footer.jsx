export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container01">
          <img
            width="50px"
            src="./src/assets/rick_morty.png"
            alt="Morty-Cabreado"
          ></img>
          <h2>Gracias por la visita!</h2>
          <p>
            Rick y Morty es una serie de televisión estadounidense de animación
            para adultos creada por Justin Roiland y Dan Harmon en 2013 para
            Adult Swim, también se emitió en Cartoon Network.
          </p>
        </div>
        <div className="footer-container02">
          <a href="https://www.hbomax.com/es/es/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ">
            <img
              width="60px"
              src="./src/assets/icons8-hbo.svg"
              alt="Icono-HBO"
            ></img>
          </a>
          <div className="p-img">
            <p>
              Rick y Morty: Tras estar desaparecido casi 20 años Rick Sánchez
              aparece inesperadamente en casa de su hija Beth y se queda allí a
              vivir con ella y su familia. Beth acoge a Rick en su casa con los
              brazos abiertos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

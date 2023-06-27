export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container01">
          {/* <img width="100px" src="./src/assets/icons8-jerry-smith.svg" alt="" /> */}
          <img
            width="50px"
            className="img-logo"
            src="./src/assets/rick_morty.png"
          ></img>
          <h2>Gracias por visitarme!</h2>
          <p>
            Rick y Morty es una serie de televisión estadounidense de animación
            para adultos creada por Justin Roiland y Dan Harmon en 2013 para
            Adult Swim, también se emitió en Cartoon Network.
          </p>
        </div>
        <div className="footer-container02">
          <p>Estas aburrido? Ya sabes donde ir!</p>
          <a href="https://www.hbomax.com/es/es/series/urn:hbo:series:GXkRjxwjR68PDwwEAABKJ">
            <img width="60px" src="./src/assets/icons8-hbo.svg"></img>
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

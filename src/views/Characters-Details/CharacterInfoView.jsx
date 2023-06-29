// eslint-disable-next-line react/prop-types
export default function CharacterInfoView({info}) {
  console.log(info);
  return (
    <>
      {info ? (
        <div className="details-character">
          <h1>{info.name}´s Details</h1>
          <img src={info.image} alt={info.name} />
          <div className="para-info">
            <p>Status: {info.status}</p>
            <p>Species: {info.species}</p>
            <p>Gender: {info.gender}</p>
            <p>Location: {info.location.name}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

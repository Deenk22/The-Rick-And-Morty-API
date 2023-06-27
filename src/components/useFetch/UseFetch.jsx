function getSuspender(promise) {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "erro":
        throw response;
      default:
        return response;
    }
  };
  return {read};
}

export default function UseFetch(url) {
  const promise = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  return getSuspender(promise);
}

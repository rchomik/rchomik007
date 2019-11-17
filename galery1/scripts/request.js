function makeRequest(url) {
      return fetch(url)
        .then((response) => {
            return response.json();

        })
        .then((data) => {
            console.log(data);
            return data
        })
        .catch((error) => {
            console.log(error);

        })
}
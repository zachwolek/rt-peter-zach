

export default function makeAPICall() {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
  .then((response) => response.json())
    //if response.ok then 
        //return data => data
    //else 
        //return .catch
}

//   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));


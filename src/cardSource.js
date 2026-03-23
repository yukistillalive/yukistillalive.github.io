import { PROXY_KEY, PROXY_URL } from "./apiConfig";

export function searchCards() {
    const url= PROXY_URL + "/cards/search?" + new URLSearchParams(searchParams);

    return fetch(url, {
        method: 'GET',
        hears: {
            'X-DH2642-Key': PROXY_KEY,
            'X-DH2642-Group': "100",
        },
    })
    .then(gotResponseACB)
    .then(gotCardArrayACB)
    .catch(handleErrorACB);
}

function gotResponseACB(response) {
  if(!response.ok)
      throw new Error("Response was not 200");
    return response.json(); 
}

// function gotCardArrayACB(r)

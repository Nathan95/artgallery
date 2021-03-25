export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_CERTIFICATE":
      // return current state if empty
      if (!action.payload) {
        return state;
      }
      // return current state if duplicate
      if (state.includes(action.payload)) {
        return state;
      }
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          image: action.payload.image,
          title: action.payload.title,
          artist: action.payload.artist,
          year: action.payload.year
        }
      ];
    case "DELETE_CERTIFICATE":
      return state.filter(cert => cert.id !== action.payload);
    case "EDIT_CERTIFICATE":
      return state.map(todo => {
        return todo.id === action.payload.id ? action.payload : todo;
    });
    default:
      return state;
  }
}

export function EditCertificateTitle(id, edit, image, year, artist) {
  return { type: "EDIT_CERTIFICATE", payload: { 
    id,  
    image,
    title: edit,
    artist,
    year
  }};
}

export function EditCertificateYear(id, edit, title, image, artist) {
  return { type: "EDIT_CERTIFICATE", payload: { 
    id,  
    image,
    title,
    artist,
    year: edit
  }};
}

export function EditCertificateArtist(id, edit, year, title, image) {
  return { type: "EDIT_CERTIFICATE", payload: { 
    id,  
    image,
    title,
    artist: edit,
    year
  }};
}

export function DeleteCertificate(id) {
  return { type: "DELETE_CERTIFICATE", payload: id};
}

export function AddCertificate(image, title, artist, year) {
  console.log(image, title, artist, year)
  return { 
    type: "ADD_CERTIFICATE", 
    payload: {
      image,
      title,
      artist,
      year
    } 
  };
}

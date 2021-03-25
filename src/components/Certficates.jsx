import React, { useContext, useEffect, useState } from 'react';
import Store from '../context';
import '../css/Certificates.scss';
import { DeleteCertificate, 
  EditCertificateTitle,  
  EditCertificateYear,
  EditCertificateArtist
} from '../reducer';
import "../css/Button.scss";
import ListItem from './ListItem';

const Certificates = () => {
  const [noResults, setNoResults] = useState(false);
  const { state, dispatch } = useContext(Store);

   const HandleDelete = id => {
    if (window.confirm('Are you sure you want to delete this certificate?')) {
      dispatch(DeleteCertificate(id))
    }
  }

  const HandleTitleEdit = (id, title, image, year, artist) => {
   let edit = window.prompt("edit title:", title);
   if(edit != null) {
     dispatch(EditCertificateTitle(id, edit, image, year, artist))
   }
  }
   const HandleArtistEdit = (id, artist, year, title, image) => {
    let edit = window.prompt("edit artist:", artist);
    if(edit != null) {
      dispatch(EditCertificateArtist(id, edit, year, title, image))
    }
   }
   const HandleYearEdit = (id, year, title, image, artist) => {
    let edit = window.prompt("edit Year of production:", year);
    if(edit != null) {
      dispatch(EditCertificateYear(id, edit, title, image, artist))
    }
   }

   useEffect(() => {
     if(state.length == [] || undefined) {
      setNoResults(true)
     } else {
       setNoResults(false)
     }
    }, [state])

  return (
    <div className="certficateWrapper">
      {noResults ? <h2>No certificates</h2> : null}
      {state.map(certs => (
        <ListItem 
          handleDelete={() => HandleDelete(certs.id)}
          handleTitleEdit={() => HandleTitleEdit( 
            certs.id, 
            certs.title,
            certs.image,
            certs.year,
            certs.artist
          )}
          handleArtistEdit={() => HandleArtistEdit(
            certs.id, 
            certs.artist,
            certs.year,
            certs.title,
            certs.image
          )}
          handleYearEdit={() => HandleYearEdit(
            certs.id, 
            certs.year,
            certs.title,
            certs.image,
            certs.artist
          )}
          key={certs.id} 
          image={certs.image} 
          title={certs.title} 
          year={certs.year}
          artist={certs.artist}
        />
      ))}
    </div>
  );
}

export default Certificates;
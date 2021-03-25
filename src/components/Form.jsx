import React, { useState, useContext } from 'react';
import InputField from './InputField';
import Button from './Button';
import "../css/Form.scss";
import { AddCertificate } from '../reducer';
import Store from '../context';
import { useStorage } from "../hooks/useStorage";
import "../css/Button.scss";

const Form = () => {
  const { dispatch } = useContext(Store);

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");

  const [error, setError] = useState(null);
  const [titleError, setTitleError] = useState("");
  const [artistError, setArtistError] = useState("");
  const [yearError, setYearError] = useState("");
 
  const types = ["image/png", "image/jpeg", "image/jpg"];

  const handleFileChange = (e) => {
      let selectedFile = e.target.files[0];

      if (selectedFile) {
          if (types.includes(selectedFile.type)) {
              setError(null);
              setFile(selectedFile);
          } else {
              setFile(null);
              setError("Please select an image file (png or jpg)");
          }
      }
  };
  const handleTitleChange = e => setTitle(e.target.value);
  const handleArtistChange = e => setArtist(e.target.value);
  const handleYearChange = e => setYear(e.target.value);

  const { url } = useStorage(file);

  const handleCertAdd = () => {
      dispatch(AddCertificate(url, title, artist, year));
  }

  function handleSubmitForm(event) {
    if (event.keyCode === 13) handleCertAdd();
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(file === null) {
     setError("Please select a file")
    } 
    if(title === "") {
      setTitleError("Please add a title");
    }
    if(artist === "") {
      setArtistError("Please add an artist");
    }
    if(year === "") {
      setYearError("Please add a year");
    }
    if(file && title && artist && year !== "") {
      handleCertAdd();
    }
  }

  return (
    <div className="formContainer">
      <form onSubmit={onSubmit}>
        <div className="wrapper">
          <div className="formItem">
            <InputField
              type="file"
              label="Upload a Photo"
              className="inputStyles"
              name="photo"
              handleChange={handleFileChange}
              validation={error}
              validationTestID="fileError"
              focus={() => setError(false)}
            />
          </div>
          <div className="formItem">
            <InputField
              type="text"
              label="Title of Certificate"
              className="inputStyles"
              name="title"
              handleChange={handleTitleChange}
              value={title}
              placeholder="Title"
              validation={titleError}
              validationTestID="titleError"
              focus={() => setTitleError(false)}
            />
          </div>
          <div className="formItem">
            <InputField
              type="text"
              label="The Artist"
              name="artist"
              className="inputStyles"
              handleChange={handleArtistChange}
              value={artist}
              placeholder="Artist"
              validation={artistError}
              validationTestID="artistError"
              focus={() => setArtistError(false)}
            />
          </div>
          <div className="formItem">
            <InputField
              type="text"
              name="year"
              label="Year of Production"
              className="inputStyles"
              handleChange={handleYearChange}
              value={year}
              placeholder="Year of production"
              validation={yearError}
              validationTestID="yearError"
              focus={() => setYearError(false)}
            />
          </div>
            <Button
              type="submit"
              title="Create Certificate"
              classname="button"
              onKeyUp={handleSubmitForm}
            />
      </div>
    </form>
      </div>
  );
}

export default Form;
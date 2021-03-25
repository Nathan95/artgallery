import React from 'react';
import PropTypes from "prop-types";

const ListItem = ({
  handleDelete, 
  handleTitleEdit, 
  handleYearEdit,
  handleArtistEdit,
  image, 
  title, 
  artist, 
  year
}) => {
  return (
    <div className="itemWrapper">
       <button className="cross" onClick={handleDelete}>X</button>
    <div className="item">
      <div className="imageWrapper">
        <img src={image} alt="" />
      </div> 
          <div>
            <ul>
              <li>
                <span>Title:</span> 
                  &nbsp; {title}
              <button 
                className="pen" 
                onClick={handleTitleEdit}
                title="Edit title"
                >
                  ✎
              </button> 
              </li> 
              <li>
                <span>Artist:</span> 
                &nbsp; {artist}
                <button 
                  className="pen" 
                  onClick={handleArtistEdit}
                  title="Edit artist"
                >
                  ✎
                </button>
              </li> 
              <li>
                <span>Year of Production:</span> 
                &nbsp; {year}
                <button 
                  className="pen" 
                  onClick={handleYearEdit}
                  title="Edit year"
                >
                  ✎
                </button> 
              </li>
            </ul> 
        </div> 
      </div>
    </div>
  );
}

ListItem.propTypes = {
  handleDelete: PropTypes.func.isRequired, 
  handleTitleEdit: PropTypes.func.isRequired,
  handleYearEdit: PropTypes.func.isRequired,
  handleArtistEdit: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default ListItem;
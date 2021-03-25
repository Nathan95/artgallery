import React from 'react';

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

export default ListItem;
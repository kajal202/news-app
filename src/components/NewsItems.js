import { React } from "react";
import { Link } from "react-router-dom";

function NewsItems({ title, description, imageUrl,  newsUrl, author, date, source}) {

  return (
    <div className="my-3">
      <div className="news-card border  shadow relative" >
          <span className="position-relative  
           translate-middle badge rounded-pill text-bg-danger" style={{left: '90%', zIndex: '1'}}>
            {source}
          </span>
        <img src={imageUrl ? imageUrl
          : "https://media.cnn.com/api/v1/images/stellar/prod/ap24110701965992.jpg?c=16x9&q=w_800,c_fill"
        } className="card-img-top" alt="..."
        />

        <div className="card-body p-2">
        
          <h5 className="card-title">{title} </h5>

          <p className="card-text text-justify">
            {!description ? "The Republican primary race between Virginia Rep. Bob Good the Republican" : description} ...
          </p>
          <p className="card-text">
            <small className="text-muted"> by {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <Link to={newsUrl} className="btn btn-sm btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;

import React from "react";

const NewsItem = (props) =>{

    let {title,description,imageUrl,newsUrl,author,date,source} = props;

    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: 0,
            }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={!imageUrl ? "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1be15e2a67cc215ec2d37365e33ae11e.jpg": imageUrl}
            className="card-img-top"
            alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noopener noreferrer"
              href={newsUrl}
              target="_blank"
              btn="true"
              btn-sm="true"
              btn-dark="true"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;

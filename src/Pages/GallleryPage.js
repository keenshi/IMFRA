import React, { useState } from "react";
import "lightbox2/dist/css/lightbox.css";
import "lightbox2/dist/js/lightbox-plus-jquery";
import "./../Styles/style.css";

const images = require.context("./../images", true);
const imageList = images.keys().map((image) => images(image));

export const GalleryPage = () => {
  return (
    <div className="container content-container">
      <div className="row">
        {imageList.map((image, index) => {
          return (
            <div className="item col-lg-3 col-md-4 col-6 col-sm-6">
              <a key={index} href={image} data-lightbox="default-gallery">
                <img
                  src={image}
                  className="img-thumbnail thumbnail-style"
                  alt={image}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

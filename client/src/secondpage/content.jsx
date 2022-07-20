import "./navbar3.css";
import { useState } from "react";
import { saveAs } from "file-saver";
import { DefaultContext } from "../Context";
import { useContext } from "react";

const ContentPage = () => {
  const [downloadImage, setDownloadImage] = useState();

  const { title } = useContext(DefaultContext);

  console.log(title);

  const ImageUploader = (ind) => {
    let arr = [];
    console.log("hey");
    let type = title[ind].subtitle;

    title.forEach((element) => {
      if (element.subtitle == type) {
        console.log("Get");
        saveAs(element.image, "image.jpg");
      }
    });
    alert("Загрузите скачанный файл в редактор");
    setDownloadImage(arr);
  };

  return (
    <div className="secondpage">
      <div className="catalog">
        <div className="text">
          <p className="type">Posts</p>
        </div>
        <div className="products2">
          {title ? (
            <>
              {title.map((item, index) =>
                item.type === "Пост" ? (
                  <div key={index} className="subproduct2">
                    <div className="content">
                      <div className="page2">
                        <div
                          className="el1"
                          onClick={() => ImageUploader(index)}
                        >
                          <a
                            href="http://localhost:4000/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="iproduct1"
                              src={item.image}
                              alt="template"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <> </>
                )
              )}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="text">
          <p className="type">Stories</p>
        </div>
        <div className="products2">
          {title ? (
            <>
              {title.map((item, index) =>
                item.type === "Сторис" ? (
                  <div key={index} className="subproduct2">
                    <div className="page2">
                      <div className="el1" onClick={() => ImageUploader(index)}>
                        <a
                          href="http://localhost:4000/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="iproduct2"
                            src={item.image}
                            alt="template"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <> </>
                )
              )}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="text">
          <p className="type">Highlights</p>
        </div>
        <div className="products2">
          {title ? (
            <>
              {title.map((item, index) =>
                item.type === "Хайлайт" ? (
                  <div key={index} className="subproduct2">
                    <div className="page2">
                      <div className="el1" onClick={() => ImageUploader(index)}>
                        <a
                          href="http://localhost:4000/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="iproduct3"
                            src={item.image}
                            alt="template"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <> </>
                )
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;

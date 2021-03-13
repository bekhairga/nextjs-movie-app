import React from "react";

const Carousel = ({images}) => {
    return(
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
                {
                    images.map((image, idx) =>(
                            <li key={idx} className={idx === 1 ? 'active' : ''} data-target="#carouselExampleIndicators" data-slide-to={idx}></li>
                        ))
                }
            </ol>
            <div className="carousel-inner" role="listbox">
                {images.map((image, idx) => {
                    return(
                        <div className={`carousel-item ${idx === 1 ? 'active' : ''}`}>
                            <img className="d-block img-fluid image-carousel" src={image} alt={`${idx} slide`} />
                        </div>
                    )
                })}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            <style jsx>{`
                .carousel-item{
                  height: 50vh;
                }
                .image-carousel{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
      `}</style>
        </div>
    )
}
export default Carousel;
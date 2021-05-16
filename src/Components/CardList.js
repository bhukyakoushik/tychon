import React from "react";

function CardList({ items }) {
    return (
        <div className="container mtb-30">
            <div className="row">
                {items.map((elem, index) => (
                    <div className="col-3" key={index}>
                        <div className="movie">
                            <div className="movie__img">
                                <img src={elem.Poster} alt={elem.Title} />
                            </div>
                            <div className="movie__name">
                                {elem.Title}
                            </div>
                            <div className="movie__name">
                                {elem.Year}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardList;
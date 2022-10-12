import React from "react";

const OneCardMovie = (props) => {
        const {
            Poster,
            Title,
            Type,
            Year,
        } = props
        return (
                <div className="card movie">
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator pic" src={Poster} />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{Title}<i
                            className="material-icons right">{Type}</i></span>
                        <p>{Year}</p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">{Type}</span>
                        <p>{Type}</p>
                    </div>
                </div>
        )

}

export default OneCardMovie
import React from "react";

class OneCardMovie extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const {
            Poster,
            Title,
            Type,
            Year,
            imdbID,
        } = this.props
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

}

export default OneCardMovie
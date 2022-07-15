import React from 'react'
import BeatLoader from "react-spinners/BeatLoader";

const Splash = ({ loading }) => {
    return (
        <div
            style={{
                width: "95%",
                height: "50vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            <BeatLoader color={"#583e81"} loading={loading} size={30} />
        </div>
    )
}

export default Splash
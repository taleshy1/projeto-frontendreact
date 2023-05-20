import React from "react";
import loadingImage from "../../assets/loadingImage.gif.gif"
import { LoadingBox } from "./style";

export default function LoadingPage() {

    return(
     <LoadingBox>
        <img src={loadingImage}/>
    </LoadingBox>
    )
}
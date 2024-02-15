'use client'
import React, { useState } from "react";
import ClienteleScrollerApi from "./clienteleScrollerApiVertical";
import ClienteleScrollerChildContainerVertical from "./ClienteleScrollerChildContainerVertical";
import './ClienteleScrollerCSS.css';

interface ClienteleScrollerProps {
    scrollerApiId: number;
    sliderAnimationDirection: string;
    // slideDirection?: string;
}

const ClienteleScrollerVertical: React.FC<ClienteleScrollerProps> = ({scrollerApiId, sliderAnimationDirection}) => {
    const [clienteleScrollerData] = useState(ClienteleScrollerApi);
    return (
        <>

                <div className="mainContainerVertical">
                    <div className="innerContainerVertical"> {/* Marque */}
                        <ClienteleScrollerChildContainerVertical clienteleScrollerData={clienteleScrollerData} scrollerApiId={scrollerApiId} sliderAnimationDirection={sliderAnimationDirection} />
                    </div>
                </div>

        </>
    );
};

export default ClienteleScrollerVertical;

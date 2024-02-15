'use client'
import React, { useState } from "react";
import ClienteleScrollerApi from "./clienteleScrollerApi";
import ClienteleScrollerChildContainer from "./ClienteleScrollerChildContainer";
import './ClienteleScrollerCSS.css';

interface ClienteleScrollerProps {
    scrollerApiId: number;
    // slideDirection?: string;
}

const ClienteleScroller: React.FC<ClienteleScrollerProps> = ({scrollerApiId}) => {
    const [clienteleScrollerData] = useState(ClienteleScrollerApi);

    return (
        <>

                <div className="mainContainer">
                    <div className="innerContainer"> {/* Marque */}
                        <ClienteleScrollerChildContainer clienteleScrollerData={clienteleScrollerData} scrollerApiId={scrollerApiId} />
                    </div>
                </div>

        </>
    );
};

export default ClienteleScroller;

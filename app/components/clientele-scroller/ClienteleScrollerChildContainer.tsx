import React from "react";

interface ClienteleScrollerChildContainerProps {
  clienteleScrollerData: Array<{
    id: number;
    itemData: Array<{
      id: number;
      clienteleText?: string;
      clienteleImage?: string;
      clienteleVideo?: string;
      clienteleYouTubeVideo?: string;
      // You can add other properties (clienteleImage, clienteleVideo, etc.) here if needed
    }>;
  }>;
  scrollerApiId: number;
}

const ClienteleScrollerChildContainer: React.FC<ClienteleScrollerChildContainerProps> = ({
  clienteleScrollerData,
  scrollerApiId,
}) => {
  return (
    <>
      {clienteleScrollerData &&
        clienteleScrollerData
          .filter((currentElement) => currentElement.id === scrollerApiId)
          .map((currentElement) => (
            <>
              <ul className="ulGroup">
                {currentElement.itemData &&
                  currentElement.itemData.map((itemDataElement) => (
                    <>
                      
                      {itemDataElement.clienteleImage && (
                          <li key={itemDataElement.id} className="liItem"><img src={itemDataElement.clienteleImage} alt="image" /></li>
                        
                      )}

                      {itemDataElement.clienteleText && (
                        <li key={itemDataElement.id}>
                          <h2 className="text-h2 font-medium">{itemDataElement.clienteleText}</h2>
                        </li>
                      )}
                    </>
                  ))}
              </ul>
              <ul className="ulGroup">
                {currentElement.itemData &&
                  currentElement.itemData.map((itemDataElement) => (
                    <>
                      
                      {itemDataElement.clienteleImage && (
                          <li key={itemDataElement.id} className="liItem"><img src={itemDataElement.clienteleImage} alt="image" /></li>
                        
                      )}

                      {itemDataElement.clienteleText && (
                        <li key={itemDataElement.id}>
                          <h2 className="text-h2 font-medium">{itemDataElement.clienteleText}</h2>
                        </li>
                      )}
                    </>
                  ))}
              </ul>
            </>
          ))}
    </>
  );
};

export default ClienteleScrollerChildContainer;

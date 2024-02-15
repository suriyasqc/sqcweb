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
  sliderAnimationDirection: string;
}

const ClienteleScrollerChildContainerVertical: React.FC<ClienteleScrollerChildContainerProps> = ({
  clienteleScrollerData,
  scrollerApiId,
  sliderAnimationDirection,
}) => {
  return (
    <>
      {clienteleScrollerData &&
        clienteleScrollerData
          .filter((currentElement) => currentElement.id === scrollerApiId)
          .map((currentElement) => (
            <>
              <ul className={`ulGroupVertical ${sliderAnimationDirection}`}>
                {currentElement.itemData &&
                  currentElement.itemData.map((itemDataElement) => (
                    <>
                      
                      {itemDataElement.clienteleImage && (
                          <li key={itemDataElement.id} className="liItem my-4 overflow-hidden rounded-2xl"><img src={itemDataElement.clienteleImage} alt="image" /></li>
                        
                      )}

                      {itemDataElement.clienteleText && (
                        <li key={itemDataElement.id}>
                          <h2 className="text-h2 font-medium">{itemDataElement.clienteleText}</h2>
                        </li>
                      )}
                    </>
                  ))}
              </ul>
              <ul className={`ulGroupVertical ${sliderAnimationDirection}`}>
                {currentElement.itemData &&
                  currentElement.itemData.map((itemDataElement) => (
                    <>
                      
                      {itemDataElement.clienteleImage && (
                          <li key={itemDataElement.id} className="liItem my-4 overflow-hidden rounded-2xl"><img src={itemDataElement.clienteleImage} alt="image" /></li>
                        
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

export default ClienteleScrollerChildContainerVertical;

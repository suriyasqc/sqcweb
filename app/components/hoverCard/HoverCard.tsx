// components/HoverCard.tsx

"use client"
import React, { CSSProperties } from 'react';
import styles from './HoverCard.module.css'; // Create a CSS module file for styling

interface HoverCardProps {
  heading: string;
  hoverText?: string;
  backgroundColor?: string;
  imageSrc?: string;
  customStyle?: CSSProperties; // New prop for custom styles
}

const HoverCard: React.FC<HoverCardProps> = ({
  heading,
  hoverText,
  backgroundColor,
  imageSrc,
  customStyle = {},
}) => {

  return (
    <div
      className={`${styles.hoverCard} rounded-3xl p-10 w-full h-full flex flex-col relative h-full justify-between`}
      style={{
        backgroundColor: backgroundColor,
        ...customStyle, // Apply custom styles
      }}
    >
        <h3 className='text-h3 font-bold mb-2'>{heading}</h3>
        <div className='asset overflow-hidden flex flex-row justify-end expandIconImage'>
           <img className='w-20 h-20 object-contain' src={imageSrc} alt="learn more" />
        </div>
        <div className={`${styles.overlayData}`}>
            <h3 className='text-paragraph font-bold mb-2'>{heading}</h3> <br />
            <div className={`${styles.hoverText}`}>{hoverText}</div>
        </div>
    </div>
  );
};

export default HoverCard;

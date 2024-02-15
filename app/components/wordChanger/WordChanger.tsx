'use client'
import React, { useState, useEffect } from 'react';
import styles from './WordChanger.module.css';

const words = ['How Do I Take My Idea From Mind To Market', 'How Might I Take My Customer Experience To The Next Level', 'How Might I Decode What Is New and What Is Next?', 'How Might I Create Digital Differentiator', 'How Might I Create The Next Big Destination Brand', 'How Can We Design For Behavioural Change', 'How Do I Create A Metaverse Experience'];

const WordChanger: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationProgress, setAnimationProgress] = useState(0);

useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationProgress(0);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 6000);
  
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);
  
  useEffect(() => {
    let animationInterval: NodeJS.Timeout | undefined;
  
    if (animationProgress < words[currentWordIndex].length) {
      animationInterval = setInterval(() => {
        setAnimationProgress((prevProgress) => prevProgress + 1);
      }, 30);
    }
  
    return () => {
      if (animationInterval) {
        clearInterval(animationInterval);
      }
    };
  }, [animationProgress, currentWordIndex]);
  

  return (
    <mark className={styles.mark}>
      {words[currentWordIndex].slice(0, animationProgress)}
      <span className={styles.blinker}>|</span>
    </mark>
  );
};

export default WordChanger;

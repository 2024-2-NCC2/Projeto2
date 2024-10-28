import React, { useState, useEffect } from "react";
import styled from "styled-components";


const OpportunityTitle = styled.h2`
  font-size: 3.7rem;
  color: #F25157;
  margin-top: 20px;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const words = ["Oportunidades", "Desenvolvimento", "Networking", "Conhecimentos"];
const typingSpeed = 130; 
const erasingSpeed = 50; 
const pauseDuration = 1000; 

const AnimacaoTexto = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeoutId = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
      } else {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? erasingSpeed : typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <OpportunityTitle>
      {displayedText} |
    </OpportunityTitle>
  );
};

export default AnimacaoTexto;

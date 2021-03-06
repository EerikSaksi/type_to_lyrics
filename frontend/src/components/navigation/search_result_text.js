import React from 'react';
export default function SearchResultText({ text, style }) {
  return (
    <div
      style={{
        position: 'absolute',
        height: 30,
        opacity: 0.8,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ...style,
      }}
    >
      <p
        style={{
          width: '100%',
          whiteSpace: 'no-wrap',
          color: 'black',
          fontSize: 20,
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

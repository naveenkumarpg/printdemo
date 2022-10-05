import React from 'react';

type ChildProps = {
  children?: JSX.Element | JSX.Element[];
};

export default function Body({ children }: ChildProps) {
  return (
    <main role="main">
      <div className="album py-5">
        <div className="container">
          <div className="row">{children}</div>
        </div>
      </div>
    </main>
  );
}

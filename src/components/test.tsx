import React, { useRef } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function test() {
  const ref = useRef<HTMLButtonElement>(null);
  return <div>test</div>;
}

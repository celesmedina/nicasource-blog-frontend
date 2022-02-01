// components/ClientOnly.js

import { useEffect, useState } from "react";

type ClientOnlyProps = { children: JSX.Element };
export default function ClientOnly({
  children,
  ...delegated
}: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...delegated}>{children}</div>;
}

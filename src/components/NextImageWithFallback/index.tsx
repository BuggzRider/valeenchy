import Image from "next/image";
import { useEffect, useState } from "react";

const NextImageWithFallback = ({
  fallback = "/assets/images/fallback_landscape.png",
  alt,
  src,
  ...props
}: any) => {
  const [error, setError] = useState(null);
  const handleError = (error: any) => {
    setError(error);
  };

  useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={handleError}
      src={error ? fallback : src}
      {...props}
    />
  );
};

export default NextImageWithFallback;

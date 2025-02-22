export interface RateStarsProps {
  rate: number;
  enableNumberRate?: boolean;
  reviewsUrl: string;
}

export default function RateStars({
  rate = 0,
  enableNumberRate = false,
  reviewsUrl = "#",
}: RateStarsProps) {
  const roundedRate = Math.round(rate);
  const fullStars = Math.floor(roundedRate);
  const emptyStars = 5 - fullStars;

  return (
    <div className="flex items-center">
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <svg
            key={`fullStars-${index}`}
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}

      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <svg
            key={`emptyStars-${index}`}
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}

      {enableNumberRate && (
        <p className="ms-2 text-sm font-bold text-white">{rate.toFixed(2)}</p>
      )}
      <span className="w-1 h-1 mx-1.5 rounded-full bg-gray-400"></span>
      <a
        href={reviewsUrl}
        className="text-sm font-medium hover:underline text-white">
        Read reviews
      </a>
    </div>
  );
}

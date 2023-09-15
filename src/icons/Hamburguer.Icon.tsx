export const HamburguerIcon = ({
  color,
  width = 25,
  height = 25,
}: {
  color: string;
  width?: number;
  height?: number;
}): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="4.5" x2="24" y2="4.5" stroke="white" />
      <line y1="11.5" x2="24" y2="11.5" stroke="white" />
      <line y1="19.5" x2="24" y2="19.5" stroke="white" />
    </svg>
  );
};

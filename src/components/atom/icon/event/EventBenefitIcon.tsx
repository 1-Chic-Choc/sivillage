export default function EventBenefitIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="44"
      height="44"
    >
      <defs>
        <path id="a" d="M0 0h20.625v20.625H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          d="M41.25 22c0 10.632-8.618 19.25-19.25 19.25-10.63 0-19.25-8.618-19.25-19.25S11.37 2.75 22 2.75c10.632 0 19.25 8.618 19.25 19.25z"
          stroke="#000"
        />
        <path
          d="M38.5 22c0 9.112-7.388 16.5-16.5 16.5S5.5 31.112 5.5 22 12.888 5.5 22 5.5 38.5 12.888 38.5 22z"
          stroke="#000"
          strokeDasharray="1,2.25"
        />
        <g transform="translate(11.688 11.688)">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            fill="#000"
            fillRule="nonzero"
            mask="url(#b)"
            d="m11.336 16.418 4.545-12.21h-.29l-3.915 10.628L7.788 4.207H4.785l4.516 12.21z"
          />
        </g>
      </g>
    </svg>
  );
}

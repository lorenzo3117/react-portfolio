interface LogoProps {
  width?: number;
}

export const Logo = ({ width = 32 }: LogoProps) => {
  return (
    <figure>
      <img src="./logo.svg" alt="Logo" width={width} />
    </figure>
  );
};

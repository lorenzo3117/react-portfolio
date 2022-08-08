interface ProfileProps {
  width?: number;
}

export const Profile = ({ width = 192 }: ProfileProps) => {
  return (
    <figure>
      <img
        src="./profile.jpg"
        alt="Profile"
        width={width}
        style={{ borderRadius: "100%" }}
      />
    </figure>
  );
};

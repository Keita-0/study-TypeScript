import { EditButton } from "./EditButton";

const style = {
  width: "300px",
  height: "200px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#e9dbd0",
  display: "flex",
  FlexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

type Props = {
  isAdmin: boolean;
};

export const Card = (props: Props) => {
  const { isAdmin } = props;

  return (
    <div style={style}>
      <p>山田太郎</p>
      <EditButton isAdmin={isAdmin}></EditButton>
    </div>
  );
};

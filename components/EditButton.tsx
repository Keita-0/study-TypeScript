const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

type Props = {
  isAdmin: boolean;
};

export const EditButton = (props: Props) => {
  const { isAdmin } = props;
  return (
    <button style={style} disabled={isAdmin}>
      編集
    </button>
  );
};

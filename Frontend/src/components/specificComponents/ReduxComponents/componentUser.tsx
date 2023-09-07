import { connect, ConnectedProps } from "react-redux";

interface UserProps extends ReduxProps {}

const User: React.FC<UserProps> = ({ user }) => {
  return <div>{user ? user.name : "No user"}</div>; 
};

const mapUserStateToProps = (state: any) => ({
  user: state.user,
});

const connector = connect(mapUserStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

const UserConnect = connector(User);

export default UserConnect;


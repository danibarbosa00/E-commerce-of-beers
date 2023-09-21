import { connect, ConnectedProps } from "react-redux";

interface UserProps extends ReduxProps {}

 const User: React.FC<UserProps> = ({ user }) => {
  if (!user) {
    return null
  }
 return <div>{user.email}</div>
}

const mapUserStateToProps = (state: any) => ({
  user: state.user,
});


const connector = connect(mapUserStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

const UserConnect = connector(User);

export default UserConnect;


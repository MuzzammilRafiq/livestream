import { Actions } from "@/actions/browser";
import { isFollowingUser } from "@/lib/follow-service";
import { getUserByUsername } from "@/lib/user-service";
import { notFound } from "next/navigation";

interface UserPageProps {
  params: {
    username: string;
  };
}
const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);
  if (!user) {
    notFound();
  }
  const isFollowing = await isFollowingUser(user.id);
  return (
    <div>
      username:{user.username} <br /> userid:{user.id} {user.externalUserId}
      <br />
      isFollowing: {isFollowing ? "true" : "false"}
      <Actions isFollowing={isFollowing} userId={user.id} />
    </div>
  );
};
export default UserPage;

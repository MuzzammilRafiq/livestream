"use client";

import { Button } from "@/components/ui/button";
import { onFollow, onUnfollow } from "./follow";
import { useTransition } from "react";
import { toast } from "sonner";

export const Actions = ({
  isFollowing,
  userId,
}: {
  isFollowing: boolean;
  userId: string;
}) => {
  const [isPending, startTransition] = useTransition();
  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };
  const handleUnFollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) =>
          toast.success(`You unfollowed ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const handleClick = () => {
    if (isFollowing) {
      handleUnFollow();
    } else {
      handleFollow();
    }
  };
  return (
    <Button variant="primary" onClick={handleClick} disabled={isPending}>
      {isFollowing ? "UnFollow" : "Follow"}
    </Button>
  );
};

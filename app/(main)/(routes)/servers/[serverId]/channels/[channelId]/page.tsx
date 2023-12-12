import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import ChatHeader from "@/components/chat/chat-header";

interface ChannelIdPageProps {
  params: { channelId: string; severId: string; name: string };
}
export default async function ChanngelIdPAge({ params }: ChannelIdPageProps) {
  const profile = await currentProfile();

  if (!profile) {
    return redirectToSignIn();
  }

  const channel = await db.channel.findUnique({
    where: {
      id: params.channelId,
    },
  });

  const member = await db.member.findFirst({
    where: {
      serverId: params.severId,
      profileId: profile.id,
    },
  });

  if (!channel || !member) {
    redirect("/");
  }

  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader
        serverId={params.severId}
        name={channel.name}
        type="channel"
      />
    </div>
  );
}

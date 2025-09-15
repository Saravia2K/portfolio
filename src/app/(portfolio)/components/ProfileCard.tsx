"use client";

import { useRouter } from "next/navigation";
import RBProfileCard from "@/components/react-bits/profile-card";

import profilePic from "@/assets/images/profile_pic.png";

export default function ProfileCard() {
  const router = useRouter();

  return (
    <RBProfileCard
      avatarUrl={profilePic}
      name="Diego Saravia"
      title="Software Engineer"
      status="Online"
      contactText="Contactar"
      handle="Fullstack web dev"
      onContactClick={() => router.push("/contactar")}
    />
  );
}

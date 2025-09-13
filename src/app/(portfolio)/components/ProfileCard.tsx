"use client";

import RBProfileCard from "@/components/react-bits/profile-card";

export default function ProfileCard() {
  return (
    <RBProfileCard
      avatarUrl="https://picsum.photos/386/481"
      name="Diego Saravia"
      title="Software Engineer"
      status="Online"
      onContactClick={() => alert("Hola")}
    />
  );
}

"use client";

import RBProfileCard from "@/components/react-bits/profile-card";

import profilePic from "@/assets/images/profile_pic.png";

export default function ProfileCard() {
  return (
    <RBProfileCard
      avatarUrl={profilePic}
      name="Diego Saravia"
      title="Software Engineer"
      status="Online"
      contactText="Contactar"
      handle="Fullstack web dev"
      onContactClick={() => alert("Hola")}
    />
  );
}

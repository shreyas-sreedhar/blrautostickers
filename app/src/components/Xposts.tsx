"use client"; // Add this line at the very top

import { XEmbed } from "react-social-media-embed";

export default function XPost({ posturl }: { posturl: string}) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <XEmbed url={posturl} width={"100%"} />
    </div>
  );
}

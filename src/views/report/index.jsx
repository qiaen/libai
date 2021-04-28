import React, { useState } from "react";
export default function () {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <section className="scroll-y">
      <div style={{ height: "1000px" }}>report</div>
    </section>
  );
}

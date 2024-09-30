import { Tooltip as BsTooltip } from "bootstrap";
import React, { useEffect, useRef } from "react";

export const Tooltip = (p) => {
  const childRef = useRef(undefined);
  const tooltipRef = useRef(null); // To hold the tooltip instance

  useEffect(() => {
    // Create a new Bootstrap Tooltip instance
    tooltipRef.current = new BsTooltip(childRef.current, {
      title: p.text,
      placement: p.placement,
      trigger: "hover",
    });

    return () => {
      tooltipRef.current.dispose();
    };
  }, [p.text, p.placement]); // Include p.placement in the dependency array

  return React.cloneElement(p.children, { ref: childRef });
};

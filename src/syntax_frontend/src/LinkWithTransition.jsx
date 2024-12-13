import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LinkWithTransition({ href, children, back = false }) {
  const location = useLocation(); // Current location
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();

    if (back) {
      // Handle back navigation
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          navigate(-1); // Navigate to the previous page
        });
      } else {
        navigate(-1);
      }
      return;
    }

    // Prevent navigating to the same page
    if (location.pathname === href) {
      return;
    }

    // Handle forward navigation
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(href);
      });
    } else {
      navigate(href);
    }
  };

  return (
    <a href={href || "#"} onClick={handleNavigation}>
      {children}
    </a>
  );
}

export default LinkWithTransition;

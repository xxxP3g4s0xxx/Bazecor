import * as React from "react";

interface IconProps {
  size?: "md" | "sm";
}

function IconMouse({ size = "md" }: IconProps) {
  return (
    <>
      {size === "md" ? (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="pathMouseMask" fill="white">
            <path d="M6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21C8.68629 21 6 18.3137 6 15V9Z" />
          </mask>
          <path
            d="M12.6 7.5C12.6 7.16863 12.3314 6.9 12 6.9C11.6686 6.9 11.4 7.16863 11.4 7.5H12.6ZM11.4 10.5C11.4 10.8314 11.6686 11.1 12 11.1C12.3314 11.1 12.6 10.8314 12.6 10.5H11.4ZM11.4 7.5V10.5H12.6V7.5H11.4ZM16.8 9V15H19.2V9H16.8ZM7.2 15V9H4.8V15H7.2ZM12 19.8C9.34903 19.8 7.2 17.651 7.2 15H4.8C4.8 18.9764 8.02355 22.2 12 22.2V19.8ZM12 22.2C15.9764 22.2 19.2 18.9764 19.2 15H16.8C16.8 17.651 14.651 19.8 12 19.8V22.2ZM12 4.2C14.651 4.2 16.8 6.34903 16.8 9H19.2C19.2 5.02355 15.9764 1.8 12 1.8V4.2ZM12 1.8C8.02355 1.8 4.8 5.02355 4.8 9H7.2C7.2 6.34903 9.34903 4.2 12 4.2V1.8Z"
            fill="currentColor"
            mask="url(#pathMouseMask)"
          />
        </svg>
      ) : (
        ""
      )}
      {size === "sm" ? (
        <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="prefix_MouseSm_a" fill="#fff">
            <path d="M5 7.5a5 5 0 0110 0v5a5 5 0 01-10 0v-5z" />
          </mask>
          <path
            d="M10.5 6.25a.5.5 0 00-1 0h1zm-1 2.5a.5.5 0 001 0h-1zm0-2.5v2.5h1v-2.5h-1zM14 7.5v5h2v-5h-2zm-8 5v-5H4v5h2zm4 4a4 4 0 01-4-4H4a6 6 0 006 6v-2zm0 2a6 6 0 006-6h-2a4 4 0 01-4 4v2zm0-15a4 4 0 014 4h2a6 6 0 00-6-6v2zm0-2a6 6 0 00-6 6h2a4 4 0 014-4v-2z"
            fill="currentColor"
            mask="url(#prefix_MouseSm_a)"
          />
        </svg>
      ) : (
        ""
      )}
    </>
  );
}

export default IconMouse;

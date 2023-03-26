import React from "react";
import classNames from "classnames";

function MyComponent({ primary }) {
  const primaryColor = primary ? "primary" : "secondary";

  return (
    <div className="container mx-auto">
      <h1
        className={classNames("text-h1 font-bold", `text-${primaryColor}-dark`)}
      >
        Hello, world!
      </h1>
      <p className={classNames("text-body-main", `text-${primaryColor}`)}>
        This is a sample component using the custom theme we defined in Tailwind
        CSS.
      </p>
      <button
        className={classNames(
          "bg-accent text-white font-medium py-2 px-4 rounded-md shadow-md hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light",
          {
            "bg-primary": primary,
            "bg-secondary": !primary,
          }
        )}
      >
        Click me!
      </button>
    </div>
  );
}

export default MyComponent;

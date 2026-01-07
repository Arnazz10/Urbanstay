import clsx from "clsx";

export default function Avatar({
  name,
  src,
  className
}: {
  name?: string;
  src?: string;
  className?: string;
}) {
  const initials =
    name
      ?.split(" ")
      .map(part => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "U";

  if (src) {
    return (
      <img
        src={src}
        alt={name || "Avatar"}
        className={clsx(
          "h-10 w-10 rounded-full object-cover ring-2 ring-white shadow",
          className
        )}
      />
    );
  }

  return (
    <div
      className={clsx(
        "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-teal text-sm font-semibold text-white shadow",
        className
      )}
    >
      {initials}
    </div>
  );
}


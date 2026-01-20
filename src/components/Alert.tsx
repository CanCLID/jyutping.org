import type React from "react";

interface AlertProps {
  title?: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light";
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  title,
  color = "primary",
  children,
}) => {
  // Map color prop to Tailwind CSS classes
  // Using basic background/border/text colors - adjust as needed for closer theme match
  const colorClasses = {
    primary: "bg-blue-100 border-blue-500 text-blue-700",
    secondary: "bg-gray-100 border-gray-500 text-gray-700",
    success: "bg-green-100 border-green-500 text-green-700",
    danger: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-cyan-100 border-cyan-500 text-cyan-700",
    light: "bg-gray-50 border-gray-300 text-gray-600",
  };

  const alertClasses = `border-l-4 px-4 py-2 my-4 ${
    colorClasses[color] || colorClasses.primary
  }`;

  return (
    <div className={alertClasses} role="alert">
      {title && <h4 className="font-bold mb-2">{title}</h4>}
      <div>{children}</div>
    </div>
  );
};

export default Alert;

import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <div className="relative z-10">
        <div className="h-[150vh]" />
        <Outlet />
        <div className="h-[150vh]" />
      </div>
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
        className="fixed inset-0"
      />
    </div>
  );
};

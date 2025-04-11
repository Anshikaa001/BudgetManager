import * as React from "react";

export function Dialog({ children }: { children: React.ReactNode }) {
  return <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">{children}</div>;
}

export function DialogContent({ children }: { children: React.ReactNode }) {
  return <div className="bg-white rounded-lg p-6 w-full max-w-md">{children}</div>;
}

export function DialogTrigger({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return <div onClick={onClick} className="cursor-pointer">{children}</div>;
}

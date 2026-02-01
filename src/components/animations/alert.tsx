import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
};

export default function Alert({ icon }: Props) {
  const Icon = icon;
  return (
    <div className="relative inline-block">
      <Icon className="size-8 text-slate-700" />

      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </div>
  );
}

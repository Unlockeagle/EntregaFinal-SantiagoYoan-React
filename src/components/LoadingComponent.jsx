export default function LoadingComponent() {
  return (
    <>
      <div className="flex flex-col gap-4 mt-12 sm:w-60 md:w-56 xl:w-72 p-2">
        <div className="skeleton bg-slate-300 h-48 w-full "></div>

        <div className="skeleton bg-slate-300 h-4 w-full"></div>
        <div className="skeleton bg-slate-300 h-4 w-full"></div>
        <div className="skeleton bg-slate-300 h-6 w-28"></div>
      </div>
    </>
  );
}

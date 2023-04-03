import dynamic from "next/dynamic";
const Social = dynamic(() => import("./social"));

export default function index() {
  return (
    <div className="py-4 pr-2 text-white dark:bg-black bg-gray-300">
    <div className="container mx-auto">
      <div className="w-full">
        <Social />
      </div>
    </div>
  </div>
  )
}

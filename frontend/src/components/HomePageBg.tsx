import { BackgroundLines } from "@/components/ui/background-lines";

export default function HomePageBg() {
  return (
    <BackgroundLines className="flex items-center justify-center h-screen w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-6xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Thoughts, <br />  Home for Ideas
      </h2>
      <p className="max-w-xl mx-auto text-xs md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
      Create, share, and connect with a vibrant community that values meaningful stories and authentic expression.
      </p>
    </BackgroundLines>
  );
}

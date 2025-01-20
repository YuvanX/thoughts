import { BackgroundLines } from "@/components/ui/background-lines";

export default function HomePageBg() {
  return (
    <BackgroundLines className="flex items-center justify-center h-screen w-full flex-col px-4">
      
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans py-4 sm:py-6 md:py-8 lg:py-10 relative z-20 font-bold tracking-tight leading-tight">
        Thoughts, <br /> Home for Ideas
      </h2>
      
      
      <p className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-neutral-700 dark:text-neutral-400 text-center px-4 sm:px-6 md:px-8">
        Create, share, and connect with a vibrant community that values meaningful stories and authentic expression.
      </p>
    </BackgroundLines>
  );
}

interface BannerSectionProps {
  title: string;
}

export const BannerSection = ({ title }: BannerSectionProps) => {
  return (
    <div className="flex h-[35vh] w-full items-end justify-start overflow-x-hidden px-1 py-2 ph:px-6 ph:py-4 md:px-12 md:py-8 lg:px-18 lg:py-12 xl:px-24 xl:py-16">
      <p className="font-syne text-3xl leading-[48px] text-secondary ph:text-5xl ph:leading-[60px] md:leading-[72px] lg:text-5xl lg:leading-[84px]">
        {title}
      </p>
    </div>
  );
};

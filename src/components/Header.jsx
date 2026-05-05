export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <img
        src="./assets/PAS_FOTO_RAHMAT-removebg-preview.png"
        alt=""
        className="rounded-full w-32"
      />
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Rahmat Hidayat
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Fullstack web developer based in Jakarta.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I am a Fullstack developer from Jakarta, Indonesia with 1 years of
        experience in DPMPTSP Jakarta.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="./assets/CV_RAHMAT HIDAYAT_GIS_OFFICER.pdf"
          download
          className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
        >
          my resume{" "}
          <img
            src="./assets/CV_RAHMAT HIDAYAT_GIS_OFFICER.pdf"
            alt=""
            className="w-4 dark:invert"
          />
        </a>
      </div>
    </div>
  );
}

export default function Work() {
  const work = [
    {
      name: "Frontend project JakBizHub",
      icon: "./assets/jakbizhub.png",
      description: "Web Design",
      link: "https://invest.jakarta.go.id/jakbizhub",
    },
    {
      name: "Service Admin Dashboard",
      icon: "./assets/mpp.png",
      description: "Service Admin Dashboard",
      link: "https://pelayanan.jakarta.go.id/home",
    },
    {
      name: "Mini Project Persebaran Coffeeshop Kota Padang",
      icon: "./assets/persebaran.png",
      description: "Web Developer",
      link: "https://coffeeshoppadang.netlify.app/",
    },
    {
      name: "Admin Dashboard UI/UX Design",
      icon: "./assets/work-4.png",
      description: "UI/UX Design",
      link: "",
    },
  ];

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio. Here you’ll find a selection of
        projects that highlight my skills in front-end development, responsive
        design, and creating user-focused digital experiences.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {work.map((item) => (
          <a
            key={item.name}
            href={item.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${item.icon})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <img src="./assets/send-icon.png" alt="" className="w-5" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

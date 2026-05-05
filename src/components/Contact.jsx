import { useEffect, useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // cek captcha aman
    const captchaElement = event.target.querySelector(
      "textarea[name=h-captcha-response]",
    );

    if (!captchaElement) {
      setResult("Captcha tidak ditemukan");
      return;
    }

    const hCaptcha = captchaElement.value;

    if (!hCaptcha) {
      setResult("Please fill out captcha field");
      return;
    }

    setResult("Sending...");

    // dummy response
    setTimeout(() => {
      setResult("Message sent successfully");
      event.target.reset();
    }, 1000);
  };

  function CaptchaLoader() {
    const captchadiv = document.querySelectorAll('[data-captcha="true"]');

    if (captchadiv.length) {
      captchadiv.forEach((item) => {
        if (!item.dataset.sitekey) {
          item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
        }
      });

      const script = document.createElement("script");
      script.src = "https://js.hcaptcha.com/1/api.js";
      script.async = true;
      script.defer = true;

      document.body.appendChild(script);
    }
  }

  useEffect(() => {
    CaptchaLoader();
  }, []);

  // return (
  //   <div
  //     // id="contact"
  //     // className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
  //   >
  //     <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
  //       <input type="hidden" name="subject" value="New form submission" />

  //       {/* CAPTCHA */}
  //       <div
  //         className="h-captcha mb-6"
  //         data-captcha="true"
  //         data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
  //       ></div>

  //       {/* BUTTON */}
  //       {/* <button
  //         type="submit"
  //         className="py-2 px-6 bg-black text-white rounded-full mx-auto block"
  //       >
  //         Submit
  //       </button> */}

  //       {/* RESULT */}
  //       <p className="mt-4 text-center">{result}</p>
  //     </form>
  //   </div>
  // );
}

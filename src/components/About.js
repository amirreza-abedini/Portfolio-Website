const About = () => {
  return (
    <section className="about" id="About">
      <div className="container">
        <h1 className="text-center title">
          درباره من
          <div className="border"></div>
          <div className="border-md"></div>
        </h1>
        <div className="content grid">
          <p>
            مهارت اصلی من در زبان های HTML، CSS و JavaScript است. همچنین در فریم
            ورک BootStrap و کتابخانه های React و Jquery نیز مهارت دارم. من
            توانایی ساخت وبسایت های کاملا عملی و Responsive در موبایل، تبلت و
            کامپیوتر را با قابلیت واکنش گرا را دارا هستم. به علاوه در حل مسایل و
            چالش های کد نویسی مهارت دارم و میتوانم کمبود و کاستی های کد را
            شناسایی و برطرف کنم.
          </p>
          <div className="card-sec">
            <div className="card">
              <h3>JavaScript</h3>
              <div className="bar">
                <div className="fill-bar fill-bar-1">
                  <p>70%</p>
                </div>
              </div>
            </div>
            <div className="card">
              <h3>HTML & CSS</h3>
              <div className="bar">
                <div className="fill-bar fill-bar-2">
                  <p>90%</p>
                </div>
              </div>
            </div>
            <div className="card">
              <h3>React</h3>
              <div className="bar">
                <div className="fill-bar fill-bar-3">
                  <p>60%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

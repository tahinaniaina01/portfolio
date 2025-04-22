function Hero() {
  return (
    <section className="w-full px-6 lg:px-12 bg-accent relative z-[-100]">
      <div className="container w-full mx-auto lg:h-[346px] 2xl:h-[500px] h-[200px] flex flex-col-reverse md:items-center md:flex-row gap-12">
        <div className="w-full h-full flex items-center justify-center">
          <h1 className="text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl font-heading">
            My services
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import pic1 from "@/assets/about-us-pics/about-us-pics.jpeg";
import pic2 from "@/assets/about-us-pics/about-us-pics2.jpeg";

const HistorySection = () => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="inline-block text-primary font-bold uppercase tracking-widest text-sm text-left block">
                Our Heritage
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-left">
                History of Naijá
              </h2>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-muted-foreground text-xl leading-relaxed text-left">
                The language is traceable to the early efforts of the Dutch and then the Portuguese in the 14th Century. Around the 18th -19th century, the trade relations between the British and hinterland areas of the West Africa Coast gave birth to the form and forms that gradually began to spread and creolise in areas of present day Niger Delta region of Nigeria.
              </p>
              <p className="text-muted-foreground text-xl leading-relaxed text-left">
                Naijá represents a form of that early language which today is commonly spoken across Nigeria, parts of West and Central Africa and in many parts where the diaspora populations thrive in Europe.
              </p>
              <div className="py-4 border-l-4 border-primary pl-8 bg-primary/5 rounded-r-2xl">
                <p className="text-foreground font-medium text-lg leading-relaxed italic text-left">
                  "Naijá has evolved from a trade language into a powerful symbol of Nigerian identity, unity, and global cultural influence."
                </p>
              </div>
            </div>
          </div>

          {/* Right Images - Simple Duo Composition */}
          <div className="relative h-[650px] w-full flex items-center">
            {/* Left Image of the duo */}
            <div className="w-[60%] h-[75%] rounded-[2.5rem] overflow-hidden shadow-2xl z-10 group transform -rotate-2">
              <img
                src={pic1}
                alt="Heritage 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Right Image of the duo */}
            <div className="w-[60%] h-[75%] -ml-[20%] mt-[15%] rounded-[2.5rem] overflow-hidden shadow-3xl z-20 border-8 border-white group transform rotate-2 hover:rotate-0 transition-all duration-500">
              <img
                src={pic2}
                alt="Heritage 2"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;

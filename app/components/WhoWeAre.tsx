export default function WhoWeAre() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto flex">
        <div className="flex-1">
          <div className="border-b-2 border-black w-1/2 mb-6"/>
          <h2 className="text-4xl font-bold mb-6 flex-1">Who<br/>We Are</h2>
        </div>
        <div className="flex-1">
          <h3 className="text-3xl mb-8">
            <span className="font-bold">We design</span>
            <br />
            <span className="italic">beautiful user experiences</span>
          </h3>
          <p className="text-lg mb-8">
            Our mission is to create a better digital world and make our
            customers happy. We possess a winning combination of creative,
            technical and people skills that not only make us fun to work with,
            but ensure we get the job done, and done well.
          </p>
          <a
            href="#more"
            className="text-lg underline hover:text-gray-600 transition-colors"
          >
            More about us
          </a>
        </div>
      </div>
    </section>
  );
}

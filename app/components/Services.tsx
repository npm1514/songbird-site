export default function Services() {
  const services = [
    { title: "Research & Strategy" },
    { title: "UX Design" },
    { title: "Visual Design" },
    { title: "Usability Testing" },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="flex">
        <div className="flex-1">
          <div className="border-[2px] border-brand-yellow w-[60px] mb-6" />
          <h2 className="text-6xl font-bold mb-6 flex-1 font-bebas uppercase">
            What
            <br />
            We Do
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-center">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

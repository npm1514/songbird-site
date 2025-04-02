export default function Services() {
  const services = [
    { title: "Research & Strategy" },
    { title: "UX Design" },
    { title: "Visual Design" },
    { title: "Usability Testing" },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

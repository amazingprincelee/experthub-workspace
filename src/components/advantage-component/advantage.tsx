const Advantages = () => {
    const advantages = [
      {
        id: 1,
        title: "Hybrid Workspace",
        description:
          "We provide physical workspace and online workspace. So you can choose to work online or at any of our physical locations.",
      },
      {
        id: 2,
        title: "Good Facilities",
        description:
          "We provide comfortable services and a good working environment.",
      },
      {
        id: 3,
        title: "Affordable Price",
        description:
          "Our prices are affordable to fit both large businesses and start-ups.",
      },
    ];
  
    return (
      <section className="mt-14 mb-14" >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center mb-10">
            The Advantages We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.id} className="flex flex-col font-sans">
                <div className="flex flex-row">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#FEEDCD] text-primary text-lg font-bold mb-4 mr-4 p-3">
                    {advantage.id}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                    <p className="text-base text-gray-600">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Advantages;
  
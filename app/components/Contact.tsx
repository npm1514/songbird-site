"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => (
  <button onClick={onClick} className="btn-primary">
    {children}
  </button>
);

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl">Get in touch with us for your next project</p>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={() => {
              // Your click handler logic here
            }}
          >
            Contact Now
          </Button>
        </div>
      </div>
    </section>
  );
}

import ContactForm from "../contacts/ContactForm";
import SocialsNetworks from "../contacts/SocialsNetworks";

function Contacts() {
  return (
    <section className="px-4 mt-12 md:px-8 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row gap-7">
        <SocialsNetworks />
        <ContactForm />
      </div>
    </section>
  );
}

export default Contacts;

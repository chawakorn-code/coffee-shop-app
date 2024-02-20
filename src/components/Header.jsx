import coffeeImg from "../assets/coffee-picture/bg-cafe.jpg";
function Header() {
  const textLabel = "font-DMsans text-white text-[0.875rem] inline-grid  ";
  return (
    // <div className="relative bg-cover bg-no-repeat w-full h-full">
    <>
      <img
        src={coffeeImg}
        alt="Coffee image background"
        className="relative w-full object-cover"
      />
      <div className="flex flex-col absolute inset-x-20 inset-y-40 bg-[#1B1D1F] rounded-lg">
        <section className=" text-center px-80 py-16">
          <h1 className="font-DMsans text-[2rem] text-white">Our collection</h1>
          <p className="text-[#6F757C] flex-row">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </section>
        <p className={textLabel}>All products</p>
        <p className={textLabel}>Available Now</p>
      </div>
    </>
    // </div>
  );
}
export default Header;

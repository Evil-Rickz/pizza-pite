export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-xl hover:shadow-black/15 transition-all hover:-translate-y-2 duration-400">
            <img src="/pepperoni-pizza.jpg" alt="pepperoni pizza" className="rounded"/>
            <h4 className="font-semibold text-xl">
                Pepperoni Pizza
            </h4>
            <p className="text-gray-500 text-sm">
                Pizza Dough, Flour, Olive Oil, Pizza Sauce, Shredded Mozzarella Cheese, Pepperoni Slices, Parmesan Cheese.
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2 transition-all hover:bg-red-700 active:bg-red-400 focus:ring focus:ring-red-800 ">
                Add to cart $13
            </button>
        </div>
    );
}
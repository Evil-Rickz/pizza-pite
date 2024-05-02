export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center">
            <img src="/pepperoni-pizza.png" alt="muzzarela pizza" />
            <h4 className="font-semibold text-xl">
                Pepperoni Pizza
            </h4>
            <p className="text-gray-500 text-sm">
                Pizza Dough, Flour, Olive Oil, Pizza Sauce, Shredded Mozzarella Cheese, Pepperoni Slices, Parmesan Cheese.
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
                Add to cart $13
            </button>
        </div>
    );
}
import React from 'react';

const ChefSpecialties = () => {
    const specialties = [
        {
            "id": 1,
            "name": "Nutrient-Rich Lentil Soup",
            "chef": "Chef Maria Rodriguez",
            "description": "Warm your heart and nourish your body with our hearty lentil soup, packed with wholesome lentils, fresh vegetables, and aromatic herbs. A comforting bowl that's perfect for chilly days and sharing with loved ones.",
            "image": "https://media.istockphoto.com/id/1681084782/photo/lentil-soup-with-vegetables-on-black-stone-table.jpg?s=612x612&w=0&k=20&c=dVTeLxkCiapHUMC9V0mmFeFR4FP_G8lJn5OiD4fTv9g="
        },
        {
            "id": 2,
            "name": "Fruit Salad Delight",
            "chef": "Chef Alejandro Sanchez",
            "description": "Refresh your palate with our vibrant fruit salad bursting with seasonal fruits, including juicy strawberries, ripe mangoes, and tangy pineapple. A colorful medley that's as nutritious as it is delicious!",
            "image": "https://media.istockphoto.com/id/1352885750/photo/fruit-salad-in-bowl-on-the-table.jpg?s=612x612&w=0&k=20&c=ANsG05WKzGVrKWgMwEzXBXks1xgouX4rVPYft-nR9QE="
        },
        {
            "id": 3,
            "name": "Whole Grain Vegetable Wrap",
            "chef": "Chef Emily Anderson",
            "description": "Savor the wholesome goodness of our whole grain vegetable wrap filled with crisp lettuce, crunchy bell peppers, creamy avocado, and zesty hummus. A satisfying and nutritious meal that's perfect for on-the-go!",
            "image": "https://media.istockphoto.com/id/1165696618/photo/healthy-vegan-vegetarian-veggie-wrap.jpg?s=612x612&w=0&k=20&c=h36xvo0UOEJ_h9eH2exiBQuY1C2Bjm_xTnw5MCU09Io="
        },
        {
            "id": 4,
            "name": "Quinoa-Stuffed Bell Peppers",
            "chef": "Chef Javier Morales",
            "description": "Delight your taste buds with our colorful quinoa-stuffed bell peppers, filled with a savory mixture of quinoa, black beans, corn, and spices. Baked to perfection and topped with melted cheese for a wholesome and satisfying meal.",
            "image": "https://media.istockphoto.com/id/883114388/photo/colorful-stuffed-peppers.jpg?s=612x612&w=0&k=20&c=yY41uuUCrIjf8IcnlUkilAFR5_flM_Ym2XI6rxZWTCg="
        }
        
    ];

    return (
        <section className='mt-5'>
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-8">NutriHarvest's Special Selections</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {specialties.map(specialty => (
                        <div key={specialty.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={specialty.image} alt={specialty.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{specialty.name}</h3>
                                <p className="text-gray-600 mb-4">{specialty.description}</p>
                                <p className="text-sm text-gray-500">Featured by: {specialty.chef}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChefSpecialties;

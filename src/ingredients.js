export default {
    breads: {
        step: "Escolha seu pão",
        many: false,
        types: [
            {
                type: "Brioche",
                price: 5,
                text: "Pão:"
            },
            {
                type: "Australiano",
                price: 4,
                text: "Pão:"
            },
            {
                type: "Gergelim",
                price: 3,
                text: "Pão:"
            },
            {
                type: "Sal",
                price: 2.50,
                text: "Pão:"
            },
        ]
    },

    steaks: {
        step: "Escolha sua carne",
        many: false,
        types: [
            {
                type: "Bovina",
                price: 8,
                text: "Carne:"
            },
            {
                type: "Suína",
                price: 6,
                text: "Carne:"
            },
            {
                type: "Frango",
                price: 4,
                text: "Carne:"
            },
            {
                type: "Vegetariano",
                price: 6,
                text: "Carne:"
            },
        ]
    },

    cheeses: {
        step: "Escolha seu queijo",
        many: false,
        types: [
            {
                type: "Molho Gorgonzola",
                price: 8,
                text: "Queijo:"
            },
            {
                type: "Prato",
                price: 6,
                text: "Queijo:"
            },
            {
                type: "cheddar",
                price: 3,
                text: "Queijo:"
            },
            {
                type: "Sem queijo",
                price: 0,
                text: "Queijo:"
            },
        ]
    },

    salads: {
        step: "Escolha suas Saladas",
        many: true,
        types: [
            {
                type: "Alface",
                price: 1,
                text: "Saladas:"
            },
            {
                type: "Tomate",
                price: 2,
                text: "Saladas:"
            },
            {
                type: "Cebola",
                price: 2,
                text: "Saladas:"
            },
            {
                type: "Picles",
                price: 4,
                text: "Saladas:"
            },
        ]
    },

    complements: {
        step: "Escolha seus complementos",
        many: true,
        types: [
            {
                type: "Bacon",
                price: 4,
                text: "Complemento:"
            },
            {
                type: "Cebola Caramelizada",
                price: 2,
                text: "Complemento:"
            },
            {
                type: "Molho Especial",
                price: 3,
                text: "Complemento:"
            },
            {
                type: "Pimenta Jalapeño",
                price: 3,
                text: "Complemento:"
            },
        ]
    }
}
export const menuData: menuDataType = {
    appetizers: [
        {
            title: 'Cold tapas platter',
            subtitle: '',
            price: '49 PLN'
        },
        {
            title: 'Beef carpaccio with balsamic onion, capers, arugula, parmesan flakes and garlic croutons',
            subtitle: '',
            price: '49 PLN'
        },
        {
            title: 'Shrimps in spicy garlic oil, garlic croutons',
            subtitle: '',
            price: '49 PLN'
        },
        {
            title: 'Spanish cheeses platter',
            subtitle: '',
            price: '49 PLN'
        }
    ],
    paellas: [
        {
            title: 'Paella marinera',
            subtitle: 'octopus / New Zealand mussels / shrimp / squid / green peas',
            price: '49 PLN'
        },
        {
            title: 'Paella mixta',
            subtitle: 'beef / shrimp / celery / peppers / zucchini / jalapeño pepper',
            price: '49 PLN'
        },
        {
            title: 'Paella marinera',
            subtitle: 'chicken / serrano ham / chorizo sausage / green peas',
            price: '49 PLN'
        },
    ],
    pasta: [
        {
            title: 'Pappardelle with chicken, capers and fennel in cream sauce with parmesan',
            subtitle: '',
            price: '49 PLN'
        },
        {
            title: 'Spaghetti with Serrano ham, gorgonzola in cream sauce with filo pastry chips',
            subtitle: '',
            price: '49 PLN'
        },
        {
            title: 'Tagliatelle with tofu, sun-dried tomatoes and olives',
            subtitle: '',
            price: '49 PLN'
        },
    ],
    soups: [
        {
            title: 'Seafood soup',
            subtitle: 'with spicy jalapeño pepper and zucchini noodles, garlic croutons',
            price: '49 PLN'
        },
        {
            title: 'Gazpacho de tomate',
            subtitle: 'Tomato gazpacho',
            price: '49 PLN'
        },
        {
            title: 'Sopa de repollo con chorizo',
            subtitle: 'Young cabbage soup with chorizo',
            price: '49 PLN'
        },
    ],
    desserts: [
        {
            title: 'Puff with passion fruit cream and vanilla ice cream, topped with chocolate',
            subtitle: '',
            price: '49 PLN'
        },
        {
            title: 'Mango cheesecake',
            subtitle: '',
            price: '49 PLN'
        },
        {
            title: 'Vanilla Catalan cream',
            subtitle: '',
            price: '49 PLN'
        },
    ]
}

export type menuDataType = {
    [key: string] : {
        title: string,
        subtitle: string,
        price: string
    }[]
}
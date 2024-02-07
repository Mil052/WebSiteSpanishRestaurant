export type CarouselItemData = {
    description?: {
        restaurant: string,
        title: string,
        subtitle: string },
    image?: {
        src: string,
        alt: string }    
}

export const carouselData: CarouselItemData[] = [
    {   
        description: {
            restaurant: 'Restaurant LA FABRICA DEL GUSTO',
            title: 'is your place for meeting with friends, in the center of Wrocław...',
            subtitle: 'We invite you for meetings over wine, paella and other Spanish dishes...'},
        image: {
            src: '/carousel-assets/restaurant-outside.jpg',
            alt: 'restaurant outside'}
    },
    {
        description: {
            restaurant: 'Restaurant LA FABRICA DEL GUSTO',
            title: 'Traditional Spanish cuisine, a glass of red wine, music playing in the background, flamenco, rumba, ...',
            subtitle: 'We invite all fans of Spanish atmosphere and culture to spend some time in our restaurant...'},
        image: {
            src: '/carousel-assets/restaurant-table.jpg',
            alt: 'restaurant table'}
    },
    {
        description: {
            restaurant: 'Restaurant LA FABRICA DEL GUSTO',
            title: 'Invite your family and friends for an evening meeting in our Spanish-inspired restaurant',
            subtitle: 'Discover the finest Spanish dishes from across the peninsula. Brimming with the extraordinary tastes and flavours Spain has to offer...'},
        image: {
            src: '/carousel-assets/wine.jpg',
            alt: 'bottle of wine'}
    }
];
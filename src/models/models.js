export const IStateContext = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: false,
    type: '',
    capacity: 0,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
};

export const RoomObject = {
    name: '',
    slug: '',
    images: [],
    price: 0,
};

export const RoomsObject = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: false,
    type: '',
    capacity: 0,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
    getRoom: (slug) => {},
    handleChange: (event) => {},
    handleChecked: (event) => {},
};

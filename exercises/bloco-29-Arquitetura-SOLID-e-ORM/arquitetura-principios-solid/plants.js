let defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
];

let createdPlants = 0;

const initPlant = ({ id, breed, needsSun, origin, specialCare, size }) => {
  const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
  const newPlant = {
    id: Number(id),
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const savePlants = () => {
  const plants = JSON.stringify(defaultPlants);
  localStorage.setItem("plants", plants);
};

const getPlants = () => {
  const plants = defaultPlants;
  return plants;
};

const getPlantById = (id) => {
  return defaultPlants.find((plant) => plant.id === Number(id));
};

const removePlantById = (id) => {
  const newPlants = defaultPlants.filter((plant) => plant.id !== Number(id));
  defaultPlants = newPlants;
  return defaultPlants;
};

const getPlantsThatNeedsSunWithId = (id) => {
  return defaultPlants.find((plant) => plant.id === Number(id) && plant.needsSun);
};

const editPlant = (plantId, newPlant) => {
  const newList = defaultPlants.map((plant) => {
    if (plant.id === Number(plantId)) {
      return newPlant;
    }
    return plant;
  });
  defaultPlants = newList;
  return defaultPlants;
};

const createNewPlant = (plant) => {
  const mappedPlant = initPlant({ ...plant });
  defaultPlants.push(mappedPlant);
  createdPlants++;
  return defaultPlants;
};

module.exports = {
  getPlants,
  getPlantById,
  removePlantById,
  editPlant,
  createNewPlant,
  getPlantsThatNeedsSunWithId,
};